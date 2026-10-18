import { ImageResponse } from "next/og";

export const alt = "Omar Ashraf, AI & Automation Engineer";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default function Image() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          padding: 64,
          background: "#0c0c0b",
          color: "#edebe4",
          fontFamily: "sans-serif",
        }}
      >
        <div style={{ display: "flex", justifyContent: "space-between", fontSize: 24, color: "#8b887f" }}>
          <span>(AI &amp; Automation Engineer)</span>
          <span style={{ color: "#ff5b2e" }}>● Open to freelance work</span>
        </div>
        <div style={{ display: "flex", flexDirection: "column", fontSize: 190, fontWeight: 700, lineHeight: 0.85, letterSpacing: -12 }}>
          <span>Omar</span>
          <span style={{ display: "flex" }}>
            Ashraf<span style={{ color: "#ff5b2e", fontSize: 110 }}>*</span>
          </span>
        </div>
        <div style={{ display: "flex", fontSize: 34, letterSpacing: -1 }}>
          AI systems that do real work, with a human in control.
        </div>
      </div>
    ),
    size,
  );
}
