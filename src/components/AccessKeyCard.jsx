import CardSlot from './CardSlot';

export default function AccessKeyCard() {
  const skills = [
    { name: "GenAI", hot: true },
    { name: "AI/ML", hot: true },
    { name: "ReactJS" },
    { name: "Node.js" },
    { name: "Express" },
    { name: "MongoDB" },
    { name: "PowerBI" },
    { name: "JavaScript" },
    { name: "HTML" },
    { name: "CSS" },
  ];
  return (
    <CardSlot expand="right" rot={1.8}>
      <div className="card-face">
        <div className="metal">
          <span className="corner-hole"></span>
          <div className="label">ACCESS KEY</div>
          <div className="chip"></div>
          <div style={{ position: "absolute", left: 90, bottom: 56 }}>
            <div className="name" style={{ fontSize: 22, marginTop: 0 }}>HIMADRI</div>
            <div className="sub" style={{ fontSize: 11 }}>genai.developer</div>
          </div>
          <div className="footrow">
            <span>KEY-3F2A-LV01</span>
            <span>SEC · L4</span>
          </div>
        </div>
      </div>

      <div className="card-panel">
        <div className="panel">
          <div className="panel-eyebrow">Skills — Stack</div>
          <h3>What I reach for.</h3>
          <div className="chips">
            {skills.map((s) => (
              <span key={s.name} className={`chip-pill ${s.hot ? "hot" : ""}`}>
                {s.name}
              </span>
            ))}
          </div>
          <div className="corner">KEY · 02</div>
        </div>
      </div>
    </CardSlot>
  );
}