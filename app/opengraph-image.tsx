// app/opengraph-image.tsx
import { ImageResponse } from "next/og";

export const runtime = "nodejs";
export const alt = "Pierre Souza - Desenvolvedor Full Stack";
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
          fontSize: 60,
          background:
            "linear-gradient(to bottom right, #667eea 0%, #764ba2 100%)",
          width: "100%",
          height: "100%",
          display: "flex",
          textAlign: "center",
          alignItems: "center",
          justifyContent: "center",
          color: "white",
          fontWeight: "bold",
          flexDirection: "column",
          gap: 20,
        }}
      >
        <div style={{ fontSize: 80 }}>📱💻</div>
        <div>Pierre Souza</div>
        <div style={{ fontSize: 40 }}>Desenvolvedor Full Stack</div>
      </div>
    ),
    { ...size },
  );
}
