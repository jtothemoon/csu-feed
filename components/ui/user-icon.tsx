interface UserIconProps {
  size?: number;
  className?: string;
}

export function UserIcon({ size = 26, className }: UserIconProps) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 26 26"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
    >
      <circle cx="13" cy="10" r="4" className="fill-tinted-gray group-focus-within:fill-light-blue transition-colors" />
      <ellipse cx="13" cy="19.5" rx="8" ry="4.5" className="fill-tinted-gray group-focus-within:fill-light-blue transition-colors" />
      <circle cx="13" cy="13" r="12.5" className="stroke-dark-gray group-focus-within:stroke-light-blue transition-colors" fill="none" />
    </svg>
  );
}
