// Old Colony Wiring — Lightning Bolt Brand Mark
// The signature graphic element — appears in section headers, dividers, and accents

interface BrandMarkProps {
  size?: number;
  className?: string;
  color?: string;
}

// Lightning bolt in a hexagonal/plug shape — the OCW signature mark
export function LightningMark({ size = 32, className = "", color = "#F5A623" }: BrandMarkProps) {
  return (
    <svg width={size} height={size} viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg" className={className}>
      <polygon points="20,2 38,11 38,29 20,38 2,29 2,11" fill={color} opacity="0.15" />
      <polygon points="20,4 36,12.5 36,27.5 20,36 4,27.5 4,12.5" stroke={color} strokeWidth="1.5" fill="none" />
      <path d="M23 6L14 22H20L17 34L26 18H20L23 6Z" fill={color} />
    </svg>
  );
}

// Section divider lightning accent
export function LightningDivider({ className = "" }: { className?: string }) {
  return (
    <div className={`flex items-center gap-3 ${className}`}>
      <div className="h-px bg-amber flex-1 max-w-12" />
      <LightningMark size={20} color="#F5A623" />
      <div className="h-px bg-amber flex-1 max-w-12" />
    </div>
  );
}

// Inline lightning accent for headings
export function LightningAccent({ className = "" }: { className?: string }) {
  return (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className={`inline-block ${className}`}>
      <path d="M13 2L4.5 13.5H11L9 22L19.5 10.5H13L13 2Z" fill="#F5A623" />
    </svg>
  );
}
