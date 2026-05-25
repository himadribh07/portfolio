import CardSlot from './CardSlot';

export default function TrustRecordCard() {
  return (
    <CardSlot expand="left" rot={1.4}>
      <div className="card-face">
        <div className="paper tag">
          <span className="grommet"></span>
          <div className="plabel">Trust Record</div>
          <div className="pname" style={{ fontSize: 26, marginTop: 6 }}>himadri</div>
          <div className="pmono" style={{ marginTop: 4, color: "var(--paper-ink-dim)" }}>ml.engineer</div>
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
                <div className="ti-t">Software Developer Intern · Bosch Global Software Technologies</div>
                <div className="ti-s">Multimodal RAG pipeline, Qdrant vector search, Qwen2.5 via Ollama</div>
              </div>
            </div>
            <div className="ti">
              <div className="yr">2022 — 23</div>
              <div className="body">
                <div className="ti-t">Software Developer · Persistent Systems</div>
                <div className="ti-s">React.js modules, Core Web Vitals, cross-functional delivery</div>
              </div>
            </div>
            <div className="ti">
              <div className="yr">2022</div>
              <div className="body">
                <div className="ti-t">Software Developer Intern · Persistent Systems</div>
                <div className="ti-s">15+ legacy modules modernized, Agile/Scrum, build optimizations</div>
              </div>
            </div>
          </div>
          <div className="corner">EXP · 05</div>
        </div>
      </div>
    </CardSlot>
  );
}