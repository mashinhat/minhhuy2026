type IconProps = {
  className?: string;
};

export function BasketballIcon({ className }: IconProps) {
  return (
    <svg
      viewBox="0 0 48 48"
      fill="none"
      className={className}
      stroke="currentColor"
      strokeWidth="1.8"
      aria-hidden="true"
    >
      <circle cx="24" cy="24" r="20" />
      <path d="M24 4v40M4 24h40" />
      <path d="M9 9c6 6 9 9.5 9 15s-3 9-9 15" />
      <path d="M39 9c-6 6-9 9.5-9 15s3 9 9 15" />
    </svg>
  );
}

export function MedalIcon({ className }: IconProps) {
  return (
    <svg
      viewBox="0 0 48 48"
      fill="none"
      className={className}
      stroke="currentColor"
      strokeWidth="1.8"
      aria-hidden="true"
    >
      <circle cx="24" cy="29" r="12" />
      <path d="M17 9l7 11 7-11" />
      <path d="M24 22v14" strokeLinecap="round" />
      <path d="M19 29l3.5 3.5L29 26" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

export function PawIcon({ className }: IconProps) {
  return (
    <svg viewBox="0 0 48 48" fill="currentColor" className={className} aria-hidden="true">
      <ellipse cx="24" cy="31" rx="11" ry="9" />
      <ellipse cx="10" cy="16" rx="4.4" ry="5.6" transform="rotate(-18 10 16)" />
      <ellipse cx="20" cy="9" rx="4.4" ry="5.8" transform="rotate(-6 20 9)" />
      <ellipse cx="30" cy="9" rx="4.4" ry="5.8" transform="rotate(6 30 9)" />
      <ellipse cx="39" cy="16" rx="4.4" ry="5.6" transform="rotate(18 39 16)" />
    </svg>
  );
}

export function ArrowDownIcon({ className }: IconProps) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      className={className}
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
    >
      <path d="M12 4v16M5 13l7 7 7-7" />
    </svg>
  );
}

export function CheckIcon({ className }: IconProps) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      className={className}
      stroke="currentColor"
      strokeWidth="2.5"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
    >
      <path d="M5 13l4 4L19 7" />
    </svg>
  );
}
