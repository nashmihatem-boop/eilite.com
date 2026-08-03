import { ImageResponse } from "next/og";

export const runtime = "edge";
export const alt = "Eilite — Premium Leads & Live Warm Transfers";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default async function Image() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          backgroundColor: "#14161f",
          backgroundImage: "radial-gradient(circle at 75% 30%, rgba(240,168,44,0.35), transparent 60%)",
        }}
      >
        <div style={{ display: "flex", alignItems: "center", gap: 16 }}>
          <div
            style={{
              width: 56,
              height: 56,
              borderRadius: 14,
              background: "#f0a82c",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              fontSize: 32,
              fontWeight: 700,
              color: "#14161f",
            }}
          >
            E
          </div>
          <div style={{ fontSize: 48, fontWeight: 700, color: "#ffffff" }}>Eilite</div>
        </div>
        <div style={{ marginTop: 32, fontSize: 56, fontWeight: 700, color: "#ffffff", textAlign: "center", maxWidth: 900 }}>
          Premium Leads, Delivered Live.
        </div>
        <div style={{ marginTop: 16, fontSize: 28, color: "#f0a82c", fontWeight: 600 }}>
          Built to Convert, Built to Scale.
        </div>
      </div>
    ),
    { ...size }
  );
}
