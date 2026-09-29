import { ReactNode } from "react";

/**
 * Wrap any digit-string (phone numbers, prices, times) in this so it renders
 * left-to-right and doesn't get visually reversed inside the RTL page flow.
 */
export function Ltr({
  children,
  className = "",
}: {
  children: ReactNode;
  className?: string;
}) {
  return (
    <span dir="ltr" className={`inline-block ${className}`}>
      {children}
    </span>
  );
}
