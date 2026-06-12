import { ImageResponse } from "next/og";
import { siteConfig } from "@/lib/seo/site";

export const dynamic = "force-static";
export const runtime = "nodejs";
export const alt = siteConfig.title;
export const size = {
  width: 1200,
  height: 630,
};

export const contentType = "image/png";

export default async function Image() {
  return new ImageResponse(
    (
      <div
        style={{
          fontSize: 48,
          background:
            "linear-gradient(135deg, #667eea 0%, #764ba2 50%, #1e1b4b 100%)",
          width: "100%",
          height: "100%",
          display: "flex",
          textAlign: "center",
          alignItems: "center",
          justifyContent: "center",
          color: "white",
          fontWeight: "bold",
          flexDirection: "column",
          gap: 24,
          padding: 64,
        }}
      >
        <div style={{ fontSize: 72, fontWeight: 800 }}>{siteConfig.name}</div>
        <div style={{ fontSize: 36, fontWeight: 500, opacity: 0.95 }}>
          {siteConfig.jobTitle}
        </div>
        <div
          style={{
            fontSize: 24,
            fontWeight: 400,
            opacity: 0.85,
            maxWidth: 900,
            lineHeight: 1.4,
          }}
        >
          Freelance · Sites institucionais · Landing pages · Next.js & React
        </div>
      </div>
    ),
    { ...size },
  );
}
