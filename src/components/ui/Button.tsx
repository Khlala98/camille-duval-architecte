import Link from "next/link";

type Variant = "primary" | "outline" | "ghost";

interface ButtonProps {
  children: React.ReactNode;
  href?: string;
  variant?: Variant;
  className?: string;
  onClick?: () => void;
  type?: "button" | "submit";
  external?: boolean;
}

const variants: Record<Variant, string> = {
  primary: "bg-gold text-dark hover:bg-gold-dark",
  outline: "border border-gold text-gold hover:bg-gold hover:text-dark",
  ghost: "text-gold hover:text-gold-dark",
};

export function Button({
  children,
  href,
  variant = "primary",
  className = "",
  onClick,
  type = "button",
  external = false,
}: ButtonProps) {
  const classes = `inline-flex items-center justify-center rounded-full px-6 py-3 text-sm font-medium tracking-wide transition-colors duration-300 ${variants[variant]} ${className}`;

  if (href) {
    if (external) {
      return (
        <a href={href} target="_blank" rel="noopener noreferrer" className={classes}>
          {children}
        </a>
      );
    }
    return (
      <Link href={href} className={classes}>
        {children}
      </Link>
    );
  }

  return (
    <button type={type} onClick={onClick} className={classes}>
      {children}
    </button>
  );
}
