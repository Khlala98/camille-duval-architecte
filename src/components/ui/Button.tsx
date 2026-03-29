import { forwardRef } from "react";
import Link from "next/link";

type Variant = "primary" | "outline" | "ghost";

interface ButtonBaseProps {
  children: React.ReactNode;
  variant?: Variant;
  className?: string;
  isLoading?: boolean;
}

interface ButtonAsButton extends ButtonBaseProps {
  href?: undefined;
  external?: undefined;
  onClick?: () => void;
  type?: "button" | "submit";
}

interface ButtonAsLink extends ButtonBaseProps {
  href: string;
  external?: boolean;
  onClick?: undefined;
  type?: undefined;
}

export type ButtonProps = ButtonAsButton | ButtonAsLink;

const variants: Record<Variant, string> = {
  primary: "bg-gold text-dark hover:bg-gold-dark",
  outline: "border border-gold text-gold hover:bg-gold hover:text-dark",
  ghost: "text-gold hover:text-gold-dark",
};

function Spinner() {
  return (
    <svg
      className="animate-spin -ml-1 mr-2 h-4 w-4"
      viewBox="0 0 24 24"
      fill="none"
      aria-hidden="true"
    >
      <circle
        cx="12"
        cy="12"
        r="10"
        stroke="currentColor"
        strokeWidth="3"
        className="opacity-25"
      />
      <path
        d="M4 12a8 8 0 018-8"
        stroke="currentColor"
        strokeWidth="3"
        strokeLinecap="round"
        className="opacity-75"
      />
    </svg>
  );
}

export const Button = forwardRef<
  HTMLButtonElement | HTMLAnchorElement,
  ButtonProps
>(function Button(
  {
    children,
    href,
    variant = "primary",
    className = "",
    isLoading = false,
    ...rest
  },
  ref
) {
  const classes = `inline-flex items-center justify-center rounded-full px-8 py-3.5 text-sm font-medium tracking-wide transition-colors duration-500 ${variants[variant]} ${isLoading ? "opacity-70 pointer-events-none" : ""} ${className}`;

  if (href) {
    const { external } = rest as ButtonAsLink;
    if (external) {
      return (
        <a
          ref={ref as React.Ref<HTMLAnchorElement>}
          href={href}
          target="_blank"
          rel="noopener noreferrer"
          className={classes}
        >
          {isLoading && <Spinner />}
          {children}
        </a>
      );
    }
    return (
      <Link
        href={href}
        ref={ref as React.Ref<HTMLAnchorElement>}
        className={classes}
      >
        {isLoading && <Spinner />}
        {children}
      </Link>
    );
  }

  const { onClick, type = "button" } = rest as ButtonAsButton;
  return (
    <button
      ref={ref as React.Ref<HTMLButtonElement>}
      type={type}
      onClick={onClick}
      disabled={isLoading}
      className={classes}
    >
      {isLoading && <Spinner />}
      {children}
    </button>
  );
});
