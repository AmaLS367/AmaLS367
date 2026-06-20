import { servicesData } from "@/data/services";
import { C } from "@/data/theme";

export function ServicesSection() {
  return (
    <section
      id="services"
      style={{ borderTop: "1px solid #1e160d", background: "rgba(15,11,6,.5)" }}
    >
      <div style={{ maxWidth: "1120px", margin: "0 auto", padding: "48px 20px" }}>
        <div style={{ display: "flex", alignItems: "center", gap: "10px", fontSize: "13px", color: "var(--c1)", marginBottom: "8px" }}>
          <span style={{ color: "#5f5240" }}>┌─[</span>
          <span>services</span>
          <span style={{ color: "#5f5240" }}>]</span>
          <span style={{ flex: 1, height: "1px", background: "#271d12" }}></span>
          <span style={{ color: "#5f5240" }}>what I build</span>
        </div>
        <h2 style={{ margin: "0 0 2px", fontSize: "clamp(23px,3.2vw,32px)", fontWeight: 800, letterSpacing: "-.02em", color: "#fff4e2" }}>
          What I can build for you
        </h2>
        <p style={{ margin: "8px 0 0", color: "#a8927a", fontSize: "14px" }}>
          Practical systems delivered as working software — not wireframes.
        </p>

        <div style={{ marginTop: "24px", display: "grid", gap: "14px", gridTemplateColumns: "repeat(auto-fill,minmax(260px,1fr))" }}>
          {servicesData.map((s) => (
            <div
              key={s.id}
              style={{
                border: "1px solid #2c2114",
                borderRadius: "10px",
                background: "linear-gradient(180deg,#120d08,#0c0905)",
                padding: "18px 20px"
              }}
            >
              <div style={{ color: "var(--c1)", fontSize: "13.5px", fontWeight: 700, marginBottom: "8px" }}>
                <span style={{ color: "#6b5b45" }}>$ </span>{s.name}
              </div>
              <p style={{ margin: "0 0 12px", color: "#a8927a", fontSize: "13px", lineHeight: 1.6 }}>
                {s.description}
              </p>
              <div style={{ display: "flex", flexWrap: "wrap", gap: "5px" }}>
                {s.examples.map((ex) => (
                  <span
                    key={ex}
                    style={{
                      border: "1px solid #2c2114",
                      background: "rgba(10,8,5,.6)",
                      padding: "2px 8px",
                      borderRadius: "4px",
                      fontSize: "11px",
                      color: C.mu
                    }}
                  >
                    {ex}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
