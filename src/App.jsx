import React, { useState, useEffect } from 'react';

import CardSlot from './components/CardSlot';
import AgentIDCard from './components/AgentIDCard';
import ServiceAddressCard from './components/ServiceAddressCard';
import AccessKeyCard from './components/AccessKeyCard';
import PublicKeyCard from './components/PublicKeyCard';
import CertificateCard from './components/CertificateCard';
import TrustRecordCard from './components/TrustRecordCard';
import SocialStrip from './components/SocialStrip';

export default function App() {
  const [time, setTime] = useState(() => formatTime());
  useEffect(() => {
    const id = setInterval(() => setTime(formatTime()), 1000 * 30);
    return () => clearInterval(id);
  }, []);

  return (
    <div className="page">
      <div className="topbar">
        <div><span className="dot"></span> HIMADRI / PORTFOLIO · 2026</div>
        <div>{time} · IST</div>
      </div>

      {/* HERO */}
      <section className="hero" data-screen-label="01 Hero">
        <div className="eyebrow">— GenAI · Full-stack · Adaptive</div>
        <h1>himadri<span className="accent">.</span></h1>
        <div className="tagline">"Adapt Anything!!"</div>
        <div className="role">GenAI Developer · Hover any card →</div>

        <div className="hero-meta">
          <div className="pill">Available for work</div>
          <div>v.2026.05</div>
          <div>build: orion</div>
        </div>
      </section>

      {/* CREDENTIALS GRID */}
      <h2 className="section-label" data-screen-label="02 Credentials">Credentials · Hover to inspect</h2>
      <div className="grid">
        <AgentIDCard />
        <ServiceAddressCard />

        <AccessKeyCard />
        <PublicKeyCard />

        <CertificateCard />
        <TrustRecordCard />
      </div>

      {/* SOCIAL TAGS */}
      <h2 className="section-label" data-screen-label="03 Channels">Channels · Hover a tag</h2>
      <SocialStrip />

      <div className="footer">
        <div>© himadri · 2026</div>
        <div>← keep hovering</div>
      </div>
    </div>
  );
}

function formatTime() {
  const d = new Date();
  const hh = String(d.getHours()).padStart(2, "0");
  const mm = String(d.getMinutes()).padStart(2, "0");
  return `${hh}:${mm}`;
}
