import CardSlot from './CardSlot';

export default function PublicKeyCard() {
  return (
    <CardSlot expand="left" rot={-1.5}>
      <div className="card-face">
        <div className="paper tag">
          <span className="grommet"></span>
          <div className="plabel">Public Key</div>
          <div className="row">
            <div className="k">Algorithm</div>
            <div className="v">ed25519</div>
          </div>
          <div className="row" style={{ marginTop: 10 }}>
            <div className="k">Key ID</div>
            <div className="v">7F3X9K2L</div>
          </div>
          <div style={{ position: "absolute", bottom: 16, left: 56, right: 24, fontFamily: "var(--mono)", fontSize: 10, color: "var(--paper-ink-dim)", letterSpacing: "0.06em", lineHeight: 1.5 }}>
            a8f1 3c9d 2e7b 5a04<br/>
            8d1e 4f66 0b2a c3d7
          </div>
        </div>
      </div>

      <div className="card-panel">
        <div className="panel">
          <div className="panel-eyebrow">Education — Credentials</div>
          <h3>Where it was learned.</h3>
          <div className="timeline">
            <div className="ti">
              <div className="yr">2024 — 26</div>
              <div className="body">
                <div className="ti-t">M.Tech, Computer Science & Engineering</div>
                <div className="ti-s">NIT Patna · CGPA 8.81</div>
              </div>
            </div>
            <div className="ti">
              <div className="yr">2018 — 22</div>
              <div className="body">
                <div className="ti-t">B.Tech, Electronics & Communication Engineering</div>
                <div className="ti-s">Narula Institute of Technology, Kolkata · CGPA 9.05</div>
              </div>
            </div>
            <div className="ti">
              <div className="yr">2022</div>
              <div className="body">
                <div className="ti-t">Microsoft AZ-900 — Azure Fundamentals</div>
                <div className="ti-s">Certified · Cloud concepts, Azure services</div>
              </div>
            </div>
          </div>
          <div className="corner">EDU · 04</div>
        </div>
      </div>
    </CardSlot>
  );
}