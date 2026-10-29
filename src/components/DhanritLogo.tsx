import React from "react";

interface DhanritLogoProps {
  className?: string;
  iconOnly?: boolean;
  size?: "sm" | "md" | "lg";
}

export const DhanritLogo: React.FC<DhanritLogoProps> = ({
  className = "",
  iconOnly = false,
  size = "md",
}) => {
  const iconSizes = {
    sm: "w-6 h-6",
    md: "w-7 h-7",
    lg: "w-9 h-9",
  };

  const textSizes = {
    sm: "text-base tracking-tight",
    md: "text-lg tracking-tight",
    lg: "text-xl tracking-tight",
  };

  return (
    <div className={`inline-flex items-center gap-2.5 ${className}`}>
      {/* Exact Dhanrit SVG mark geometry preserved */}
      <svg
        className={`${iconSizes[size]} shrink-0`}
        viewBox="0 0 36 36"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        aria-hidden="true"
      >
        <rect width="36" height="36" rx="8" fill="#0B1528" />
        <line
          x1="12"
          y1="8"
          x2="12"
          y2="28"
          stroke="#FFFFFF"
          strokeWidth="2.4"
          strokeLinecap="round"
        />
        <path
          d="M12 9.5H19C23.6944 9.5 27.5 13.3056 27.5 18C27.5 22.6944 23.6944 26.5 19 26.5H12"
          stroke="#FFFFFF"
          strokeWidth="2.4"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <circle cx="19" cy="18" r="3.2" fill="#C85A32" />
      </svg>

      {!iconOnly && (
        <span
          className={`font-semibold text-[#0B1528] ${textSizes[size]} select-none font-sans`}
        >
          Dhanrit
        </span>
      )}
    </div>
  );
};
