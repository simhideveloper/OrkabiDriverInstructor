import { ReactNode } from "react";
import { RoadDivider } from "./RoadDivider";

export function SectionHeading({
  eyebrow,
  title,
  subtitle,
  align = "start",
  className = "",
}: {
  eyebrow?: string;
  title: ReactNode;
  subtitle?: ReactNode;
  align?: "start" | "center";
  className?: string;
}) {
  const alignClass = align === "center" ? "text-center items-center" : "text-start items-start";
  return (
    <div className={`flex flex-col gap-4 ${alignClass} ${className}`}>
      {eyebrow ? (
        <span className="text-sm font-bold tracking-wide text-blue-700">{eyebrow}</span>
      ) : null}
      <RoadDivider align={align} />
      <h2 className="text-3xl font-bold leading-tight text-ink md:text-4xl">{title}</h2>
      {subtitle ? (
        <p className="max-w-2xl text-base leading-relaxed text-slate md:text-lg">{subtitle}</p>
      ) : null}
    </div>
  );
}
