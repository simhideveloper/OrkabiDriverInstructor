/**
 * A small reproduction of Israel's standard triangular student-driver ("ל")
 * road sign — white triangle, blue border, black letter. This is a generic
 * Israeli Ministry of Transport traffic sign (not a trademark), used here as
 * a recognizable, personal brand motif next to the site name in the nav.
 * Purely decorative — keep this to a single placement on the page.
 */
export function LearnerSign({
  size = 28,
  className = "",
}: {
  size?: number;
  className?: string;
}) {
  return (
    <svg
      viewBox="0 0 40 40"
      width={size}
      height={size}
      className={className}
      aria-hidden="true"
    >
      <polygon
        points="20,5 37,33 3,33"
        fill="#FFFFFF"
        stroke="#0F2C79"
        strokeWidth="3.5"
        strokeLinejoin="round"
      />
      <text
        x="20"
        y="27.5"
        textAnchor="middle"
        fontSize="16"
        fontWeight="700"
        fill="#000000"
      >
        ל
      </text>
    </svg>
  );
}
