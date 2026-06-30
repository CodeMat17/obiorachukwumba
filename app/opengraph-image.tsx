import { ImageResponse } from "next/og";
import { readFile } from "node:fs/promises";
import { join } from "node:path";

export const alt =
  "Obiora Chukwumba, PhD — Media Scholar · Journalist · Film Policy Expert";

export const size = { width: 1200, height: 630 };

export const contentType = "image/png";

export default async function Image() {
  const photoData = await readFile(
    join(process.cwd(), "public", "hero-img.jpg")
  );
  const photoSrc = `data:image/jpeg;base64,${photoData.toString("base64")}`;

  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          background: "#0c1220",
          position: "relative",
          overflow: "hidden",
        }}
      >
        {/* Subtle gradient overlay left-to-right */}
        <div
          style={{
            position: "absolute",
            inset: 0,
            background:
              "linear-gradient(to right, #0c1220 45%, transparent 100%)",
            zIndex: 1,
          }}
        />

        {/* Hero photo — right side */}
        <img
          src={photoSrc}
          style={{
            position: "absolute",
            right: 0,
            top: 0,
            height: "100%",
            width: "55%",
            objectFit: "cover",
            objectPosition: "center top",
          }}
        />

        {/* Text content — left side */}
        <div
          style={{
            position: "relative",
            zIndex: 2,
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            padding: "60px 64px",
            width: "580px",
          }}
        >
          <div
            style={{
              fontSize: 14,
              letterSpacing: "0.18em",
              textTransform: "uppercase",
              color: "#c9a96e",
              marginBottom: 24,
              fontFamily: "serif",
            }}
          >
            Media Scholar &amp; Journalist
          </div>

          <div
            style={{
              fontSize: 56,
              fontWeight: 800,
              color: "#f5f0e8",
              lineHeight: 1.1,
              marginBottom: 20,
            }}
          >
            Obiora Chukwumba, PhD
          </div>

          <div
            style={{
              fontSize: 22,
              color: "#a8b4c4",
              lineHeight: 1.5,
            }}
          >
            Film Policy Expert · Co-Founder, HumAngle Media · Lecturer,
            Veritas University Abuja
          </div>
        </div>
      </div>
    ),
    { ...size }
  );
}
