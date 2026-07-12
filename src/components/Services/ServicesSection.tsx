import { servicesData } from "@/data/services";
import { C } from "@/data/theme";
import { Reveal } from "@/components/Reveal";

export function ServicesSection() {
  return (
    <section
      id="services"
      style={{ borderTop: "1px solid var(--line-1)", background: "rgba(15,11,6,.5)" }}
    >
      <div style={{ maxWidth: "1120px", margin: "0 auto", padding: "96px 20px" }}>
        <Reveal>
          <div className="font-mono" style={{ display: "flex", alignItems: "center", gap: "10px", fontSize: "13px", color: "var(--c1)", marginBottom: "8px" }}>
            <span style={{ color: "var(--tx-faint)" }}>┌─[</span>
            <span>services</span>
            <span style={{ color: "var(--tx-faint)" }}>]</span>
            <span style={{ flex: 1, height: "1px", background: "var(--line-2)" }}></span>
            <span style={{ color: "var(--tx-faint)" }}>what I build</span>
          </div>
          <h2 className="font-display" style={{ margin: "0 0 2px", fontSize: "clamp(26px,3.6vw,38px)", fontWeight: 700, letterSpacing: "-.02em", color: "var(--tx-bright)" }}>
            What I can build for you
          </h2>
          <p style={{ margin: "8px 0 0", color: "var(--tx-body)", fontSize: "14px" }}>
            Practical systems delivered as working software — not wireframes.
          </p>
        </Reveal>

        <div style={{ marginTop: "28px", display: "grid", gap: "14px", gridTemplateColumns: "repeat(auto-fill,minmax(260px,1fr))" }}>
          {servicesData.map((s, index) => (
            <Reveal key={s.id} delay={index * 60}>
              <div className="card card-hover" style={{ padding: "22px 24px", height: "100%" }}>
                <div className="font-mono" style={{ color: "var(--c1)", fontSize: "13.5px", fontWeight: 700, marginBottom: "8px" }}>
                  <span style={{ color: "var(--tx-dim)" }}>$ </span>{s.name}
                </div>
                <p style={{ margin: "0 0 12px", color: "var(--tx-body)", fontSize: "13.5px", lineHeight: 1.6 }}>
                  {s.description}
                </p>
                <div style={{ display: "flex", flexWrap: "wrap", gap: "5px" }}>
                  {s.examples.map((ex) => (
                    <span
                      key={ex}
                      className="font-mono"
                      style={{
                        border: "1px solid var(--line-3)",
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
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
