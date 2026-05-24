import { ImageResponse } from "next/og";
import { SITE } from "@/lib/site";

export const runtime = "edge";
export const alt = "Location lift Bruxelles — Nono Lift";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default function OgImage() {
  return new ImageResponse(
    (
      <div
        style={{
          height: "100%",
          width: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          padding: 80,
          background: "linear-gradient(135deg, #1e40af 0%, #2563eb 50%, #3b82f6 100%)",
          color: "white",
          fontFamily: "system-ui, sans-serif",
        }}
      >
        <div style={{ fontSize: 28, opacity: 0.9, marginBottom: 16 }}>
          {SITE.name}
        </div>
        <div style={{ fontSize: 64, fontWeight: 800, lineHeight: 1.1, maxWidth: 900 }}>
          Location Lift Bruxelles
        </div>
        <div style={{ fontSize: 32, marginTop: 24, opacity: 0.95 }}>
          Monte-meuble · Lift déménagement · Devis gratuit
        </div>
        <div
          style={{
            marginTop: 48,
            display: "flex",
            alignItems: "center",
            gap: 16,
            fontSize: 36,
            fontWeight: 700,
            background: "white",
            color: "#1d4ed8",
            padding: "20px 40px",
            borderRadius: 999,
            width: "fit-content",
          }}
        >
          ☎ {SITE.phoneDisplay}
        </div>
      </div>
    ),
    { ...size }
  );
}
