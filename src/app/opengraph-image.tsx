import { ImageResponse } from "next/og";

export const alt = "NetResolute - Senior ERP consultants, vetted";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default async function OpengraphImage() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          background: "linear-gradient(180deg, #F2EBDA 0%, #FAFAFA 45%)",
          padding: 72,
          fontFamily: "sans-serif",
        }}
      >
        <div style={{ display: "flex", alignItems: "center", gap: 16 }}>
          <div
            style={{
              width: 44,
              height: 44,
              borderRadius: 14,
              background: "#18181B",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            <div
              style={{
                width: 20,
                height: 20,
                borderRadius: 10,
                background: "#FAFAFA",
              }}
            />
          </div>
          <div style={{ fontSize: 34, fontWeight: 700, color: "#18181B" }}>
            NetResolute
          </div>
        </div>

        <div style={{ display: "flex", flexDirection: "column", gap: 20 }}>
          <div
            style={{
              fontSize: 78,
              fontWeight: 700,
              letterSpacing: -2,
              color: "#18181B",
              lineHeight: 1.05,
            }}
          >
            Senior ERP consultants, vetted
          </div>
          <div style={{ fontSize: 34, color: "#52525B", lineHeight: 1.3 }}>
            Workday, PeopleSoft, Lawson and UKG experts, interviewed by us
            before you meet them.
          </div>
        </div>

        <div style={{ display: "flex", gap: 14 }}>
          {["Workday", "PeopleSoft", "Lawson", "UKG", "AWS", "Java"].map(
            (tag) => (
              <div
                key={tag}
                style={{
                  fontSize: 24,
                  color: "#57523F",
                  background: "#EFE7D1",
                  borderRadius: 999,
                  padding: "10px 22px",
                }}
              >
                {tag}
              </div>
            ),
          )}
        </div>
      </div>
    ),
    { ...size },
  );
}
