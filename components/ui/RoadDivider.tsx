/**
 * Signature element: a short dashed rule styled after a road lane-marking.
 * Used under eyebrows / above section headings. Keep it restrained — this is
 * the one recurring motif that ties the page back to "driving", so it should
 * not be scattered everywhere.
 */
export function RoadDivider({
  align = "start",
  className = "",
}: {
  align?: "start" | "center";
  className?: string;
}) {
  return (
    <div
      className={`flex items-center gap-2 ${align === "center" ? "justify-center" : "justify-start"} ${className}`}
      aria-hidden="true"
    >
      <span className="h-1 w-6 rounded-full bg-amber-500" />
      <span className="h-1 w-6 rounded-full bg-amber-500" />
      <span className="h-1 w-3 rounded-full bg-amber-500/50" />
    </div>
  );
}
