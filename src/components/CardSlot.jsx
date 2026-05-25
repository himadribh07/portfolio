
export default function CardSlot({ children, expand = "right", rot = 0, className = "" }) {
  return (
    <div
      className={`card-slot expand-${expand} ${className}`}
      style={{ "--rot": `${rot}deg` }}
    >
      {children}
    </div>
  );
}