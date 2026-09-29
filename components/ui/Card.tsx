import { CSSProperties, ReactNode, forwardRef } from "react";

export const Card = forwardRef<
  HTMLDivElement,
  { children: ReactNode; className?: string; style?: CSSProperties }
>(function Card({ children, className = "", style }, ref) {
  return (
    <div
      ref={ref}
      style={style}
      className={`rounded-2xl border border-hairline bg-white p-6 shadow-sm transition-all duration-200 hover:shadow-md motion-safe:hover:-translate-y-0.5 ${className}`}
    >
      {children}
    </div>
  );
});
