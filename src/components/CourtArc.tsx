type CourtArcProps = {
  className?: string;
};

/** Decorative basketball half-court linework, used as quiet background texture. */
export function CourtArc({ className }: CourtArcProps) {
  return (
    <svg
      viewBox="0 0 600 500"
      fill="none"
      className={className}
      stroke="currentColor"
      strokeWidth="1.5"
      aria-hidden="true"
    >
      <path d="M0 500V0" />
      <circle cx="0" cy="250" r="120" />
      <circle cx="0" cy="250" r="6" fill="currentColor" stroke="none" />
      <path d="M-40 130 A250 250 0 0 1 -40 370" />
      <rect x="0" y="190" width="120" height="120" />
    </svg>
  );
}
