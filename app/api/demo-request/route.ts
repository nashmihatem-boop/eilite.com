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
  const company = String(body.company ?? "").trim();
  const role = Array.isArray(body.role) ? body.role.join(", ") : "";
  const industry = Array.isArray(body.industry) ? body.industry.join(", ") : "";
  const solution = Array.isArray(body.solution) ? body.solution.join(", ") : "";
  const agreeMarketing = body.agreeMarketing === true;
  const agreeSms = body.agreeSms === true;

  if (!firstName || !lastName || !email || !phone) {
    return NextResponse.json({ error: "Missing required fields" }, { status: 400 });
  }

  if (!agreeMarketing || !agreeSms) {
    return NextResponse.json({ error: "Consent is required" }, { status: 400 });
  }

  try {
    await sendFormNotification({
      subject: `New Demo Request — ${firstName} ${lastName}`,
      replyTo: email,
      html: `
        <h2 style="font-family:sans-serif;">New demo request from eilite.com</h2>
        ${fieldsToHtml({
          "First name": firstName,
          "Last name": lastName,
          Email: email,
          Phone: phone,
          Company: company,
          "Describes them": role,
          Industry: industry,
          Solution: solution,
          "Marketing consent": agreeMarketing ? "Yes" : "No",
          "SMS/call consent": agreeSms ? "Yes" : "No",
          "Consent recorded at": new Date().toISOString(),
        })}
      `,
    });
  } catch (err) {
    console.error("Failed to send demo request notification", err);
    return NextResponse.json({ error: "Failed to submit. Please try again." }, { status: 500 });
  }

  return NextResponse.json({ ok: true });
}
