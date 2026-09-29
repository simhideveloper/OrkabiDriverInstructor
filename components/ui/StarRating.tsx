import { Star } from "lucide-react";

export function StarRating({
  rating = 5,
  className = "",
}: {
  rating?: number;
  className?: string;
}) {
  return (
    <div
      className={`flex items-center gap-1 ${className}`}
      role="img"
      aria-label={`דירוג ${rating} מתוך 5 כוכבים`}
    >
      {Array.from({ length: 5 }).map((_, i) => (
        <Star
          key={i}
          size={16}
          strokeWidth={1.5}
          className={i < rating ? "fill-lime-700 text-lime-700" : "fill-transparent text-hairline"}
        />
      ))}
    </div>
  );
}
