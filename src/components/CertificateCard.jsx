import CardSlot from './CardSlot';

export default function CertificateCard() {
  return (
    <CardSlot expand="right" rot={-1.2}>
      <div className="card-face">
        <div className="paper cert">
          <div className="plabel">Developer Certificate</div>
          <div className="plabel serif-label" style={{ marginTop: 18 }}>this certifies that</div>
          <div className="pname" style={{ marginTop: 6 }}>himadri</div>
          <div className="plabel" style={{ marginTop: 10 }}>HAS SHIPPED THE FOLLOWING SYSTEMS</div>
          <div className="stamp">SHIPPED</div>
        </div>
      </div>

      <div className="card-panel">
        <div className="panel">
          <div className="panel-eyebrow">Projects — Selected Work</div>
          <h3>Things I've built.</h3>
          <div className="proj-list">
            <div className="proj">
              <div className="pt">TechHorizon</div>
              <div className="pd">LLM-powered tech trend generator. Aggregates signals across sources and turns them into briefings.</div>
            </div>
            <div className="proj">
              <div className="pt">Signal AI Podcast</div>
              <div className="pd">AI-generated daily news podcast — pipeline ingests headlines, scripts an episode, synthesizes a host voice.</div>
            </div>
          </div>
          <div className="corner">PRJ · 03</div>
        </div>
      </div>
    </CardSlot>
  );
}
