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
            <div className="cr">
              <span className="k">Email</span>
              <a className="v link" href="mailto:work.himadribhattacharya@gmail.com">work.himadribhattacharya@gmail.com</a>
            </div>
            <div className="cr">
              <span className="k">Phone</span>
              <a className="v link" href="tel:+919523685965">+91 9523685965</a>
            </div>
            <div className="cr">
              <span className="k">GitHub</span>
              <a className="v link" href="https://github.com/himadribh07" target="_blank" rel="noreferrer">github.com/himadribh07</a>
            </div>
            <div className="cr">
              <span className="k">LinkedIn</span>
              <a className="v link" href="https://linkedin.com/in/himadribhattacharya3" target="_blank" rel="noreferrer">linkedin.com/in/himadribhattacharya3</a>
            </div>
            <div className="cr">
              <span className="k">Kaggle</span>
              <a className="v link" href="https://kaggle.com/himadri07" target="_blank" rel="noreferrer">kaggle.com/himadri07</a>
            </div>
          </div>
          <div className="corner">CH · 07</div>
        </div>
      </div>
    </CardSlot>
  );
}