    import CardSlot from './CardSlot';

    export default function AgentIDCard() {
    return (
        <CardSlot expand="right" rot={-2}>
        <div className="card-face">
            <div className="metal">
            <span className="punch" style={{ top: 14, left: 16 }}></span>
            <span className="corner-hole"></span>
            <div className="label">AGENT ID</div>
            <div className="name" style={{ marginTop: 18 }}>HIMADRI</div>
            <div className="sub">genai.developer</div>
            <div className="scanner" style={{ left: "auto", right: 30, top: 78, width: 50, height: 50, opacity: 0.5 }}></div>
            <div className="footrow">
                <span>AGT-7F3X-9K2L</span>
                <span>ISSUED 2026-05-20</span>
            </div>
            </div>
        </div>

        <div className="card-panel">
            <div className="panel">
            <div className="panel-eyebrow">About — Bio</div>
            <h3>Building things that think.</h3>
            <p>
                GenAI developer focused on shipping LLM-powered products end to end —
                from retrieval pipelines and agents to the React surface users actually touch.
                I like the unglamorous parts: evals, latency budgets, prompt drift, the boring infra.
            </p>
            <div className="corner">ID · 01</div>
            </div>
        </div>
        </CardSlot>
    );
    }