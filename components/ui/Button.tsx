import { ReactNode } from "react";

type Variant = "primary" | "outline" | "whatsapp" | "ghost";
type Size = "sm" | "md" | "lg";

const base =
  "inline-flex items-center justify-center gap-2 rounded-xl font-heading font-semibold transition-all duration-200 cursor-pointer focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-ink";

const variants: Record<Variant, string> = {
  primary:
    "bg-amber-700 text-white shadow-sm hover:bg-amber-600 hover:shadow-md active:scale-[0.98]",
  outline:
    "border-2 border-ink text-ink bg-transparent hover:bg-ink hover:text-white active:scale-[0.98]",
  whatsapp:
    "bg-whatsapp text-white shadow-sm hover:bg-whatsapp-hover hover:shadow-md active:scale-[0.98]",
  ghost: "text-ink hover:bg-ink/5",
};

const sizes: Record<Size, string> = {
  sm: "px-4 py-2 text-sm",
  md: "px-5 py-3 text-base",
  lg: "px-7 py-4 text-lg",
};

interface CommonProps {
  variant?: Variant;
  size?: Size;
  icon?: ReactNode;
  className?: string;
  children: ReactNode;
}

type ButtonProps =
  | (CommonProps & {
      href: string;
      target?: string;
      rel?: string;
      onClick?: undefined;
      type?: undefined;
    })
  | (CommonProps & {
      href?: undefined;
      onClick?: () => void;
      type?: "button" | "submit";
    });

export function Button(props: ButtonProps) {
  const { variant = "primary", size = "md", icon, className = "", children } = props;
  const classes = `${base} ${variants[variant]} ${sizes[size]} ${className}`;

  if (props.href) {
    return (
      <a href={props.href} target={props.target} rel={props.rel} className={classes}>
        {icon}
        {children}
      </a>
    );
  }

  return (
    <button type={props.type ?? "button"} onClick={props.onClick} className={classes}>
      {icon}
      {children}
    </button>
  );
}
