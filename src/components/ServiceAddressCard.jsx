import CardSlot from './CardSlot';

export default function ServiceAddressCard() {
  return (
    <CardSlot expand="left" rot={2.5}>
      <div className="card-face">
        <div className="paper">
          <div className="plabel">Service Address</div>
          <div className="row">
            <div className="k">Endpoint</div>
            <div className="v">himadri.agent</div>
          </div>
          <div className="row" style={{ marginTop: 10 }}>
            <div className="k">URI</div>
            <div className="v">github.com/himadribh07</div>
          </div>
          <div className="row" style={{ marginTop: 10 }}>
            <div className="k">Channel ID</div>
            <div className="v">ch_7F3X9K2L</div>
          </div>
        </div>
      </div>

      <div className="card-panel">
        <div className="panel">
          <div className="panel-eyebrow">Contact — Reach Me</div>
          <h3>Open to roles & collaborations.</h3>
          <div className="contact-rows">
            <div className="cr"><span className="k">Email</span><span className="v">work.himadribhattacharya@gmail.com</span></div>
            <div className="cr"><span className="k">Phone</span><span className="v">+91 95236-85965</span></div>
            <div className="cr"><span className="k">GitHub</span><span className="v">github.com/himadribh07</span></div>
            <div className="cr"><span className="k">LinkedIn</span><span className="v">linkedin.com/in/himadribhattacharya3</span></div>
          </div>
          <div className="corner">CH · 07</div>
        </div>
      </div>
    </CardSlot>
  );
}