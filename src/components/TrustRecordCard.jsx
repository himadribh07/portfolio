import CardSlot from './CardSlot';

export default function TrustRecordCard() {
  return (
    <CardSlot expand="left" rot={1.4}>
      <div className="card-face">
        <div className="paper tag">
          <span className="grommet"></span>
          <div className="plabel">Trust Record</div>
          <div className="pname" style={{ fontSize: 26, marginTop: 6 }}>himadri</div>
          <div className="pmono" style={{ marginTop: 4, color: "var(--paper-ink-dim)" }}>genai.developer</div>
          <div style={{ position: "absolute", bottom: 18, left: 56, right: 24, display: "flex", justifyContent: "space-between", fontFamily: "var(--mono)", fontSize: 10, color: "var(--paper-ink-dim)", letterSpacing: "0.18em", textTransform: "uppercase" }}>
            <span>TRX · 005</span>
            <span>VERIFIED</span>
          </div>
        </div>
      </div>

      <div className="card-panel">
        <div className="panel">
          <div className="panel-eyebrow">Experience — Track Record</div>
          <h3>Where I've shipped.</h3>
          <div className="timeline">
            <div className="ti">
              <div className="yr">2025 — 26</div>
              <div className="body">
                <div className="ti-t">GenAI Developer · Independent</div>
                <div className="ti-s">RAG agents, evals, React frontends for AI-native products</div>
              </div>
            </div>
            <div className="ti">
              <div className="yr">2024</div>
              <div className="body">
                <div className="ti-t">ML Intern · stealth startup</div>
                <div className="ti-s">Prompt pipelines, model-eval tooling, prototype dashboards</div>
              </div>
            </div>
            <div className="ti">
              <div className="yr">2023</div>
              <div className="body">
                <div className="ti-t">Full-Stack Developer · freelance</div>
                <div className="ti-s">MERN apps, PowerBI dashboards, deployment</div>
              </div>
            </div>
          </div>
          <div className="corner">EXP · 05</div>
        </div>
      </div>
    </CardSlot>
  );
}