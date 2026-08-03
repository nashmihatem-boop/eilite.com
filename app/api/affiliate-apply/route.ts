import { NextResponse } from "next/server";
import { sendFormNotification, fieldsToHtml } from "@/lib/email";
import { isLikelySpam } from "@/lib/spam-guard";

export async function POST(request: Request) {
  let body: Record<string, unknown>;
  try {
    body = await request.json();
  } catch {
    return NextResponse.json({ error: "Invalid request body" }, { status: 400 });
  }

  // Silently accept but drop likely-bot submissions so bots don't learn they were caught.
  if (isLikelySpam({ honeypot: body.website, elapsedMs: body.elapsedMs })) {
    return NextResponse.json({ ok: true });
  }

  const firstName = String(body.firstName ?? "").trim();
  const lastName = String(body.lastName ?? "").trim();
  const email = String(body.email ?? "").trim();
  const phone = String(body.phone ?? "").trim();
  const role = String(body.role ?? "").trim();
  const services = Array.isArray(body.services) ? body.services.join(", ") : "";
  const country = String(body.country ?? "").trim();
  const leadType = String(body.leadType ?? "").trim();

  if (!firstName || !lastName || !email || !phone) {
    return NextResponse.json({ error: "Missing required fields" }, { status: 400 });
  }

  try {
    await sendFormNotification({
      subject: `New Affiliate Application — ${firstName} ${lastName}`,
      replyTo: email,
      html: `
        <h2 style="font-family:sans-serif;">New affiliate application from eilite.com</h2>
        ${fieldsToHtml({
          "First name": firstName,
          "Last name": lastName,
          Email: email,
          Phone: phone,
          "Advertiser or publisher": role,
          Services: services,
          Country: country,
          "Lead type": leadType,
        })}
      `,
    });
  } catch (err) {
    console.error("Failed to send affiliate application notification", err);
    return NextResponse.json({ error: "Failed to submit. Please try again." }, { status: 500 });
  }

  return NextResponse.json({ ok: true });
}
