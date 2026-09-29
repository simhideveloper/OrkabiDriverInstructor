import { ReactNode } from "react";

export function Badge({
  children,
  icon,
  className = "",
}: {
  children: ReactNode;
  icon?: ReactNode;
  className?: string;
}) {
  return (
    <span
      className={`inline-flex items-center gap-1.5 rounded-full border border-hairline bg-white px-3 py-1.5 text-sm font-medium text-ink ${className}`}
    >
      {icon}
      {children}
    </span>
  );
}
