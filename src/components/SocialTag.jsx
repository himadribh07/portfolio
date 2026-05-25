
export default function SocialTag({ name, handle, url, cta, rot = 0 }) {
  return (
    <div className="tag-card" style={{ "--rot": `${rot}deg` }}>
      <div className="tag-face">
        <div className="tag-paper">
          <div className="grommet-sm"></div>
          <div className="tname">{name}</div>
          <div className="thandle">{handle}</div>
          <div className="turl">{url}</div>
        </div>
      </div>
      <div className="tag-panel">
        <div className="tag-panel-body">
          <div className="tpb-top">{name}</div>
          <div className="tpb-main">{cta}</div>
          <div className="tpb-cta">Open link</div>
        </div>
      </div>
    </div>
  );
}

