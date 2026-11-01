import type {
  AnchorHTMLAttributes,
  ButtonHTMLAttributes,
  ReactNode,
} from "react";
import { cn } from "@/lib/cn";
import type { IconComponent } from "@/types";

export type ButtonVariant = "primary" | "secondary" | "ghost";
export type ButtonSize = "sm" | "md" | "lg";

const base =
  "inline-flex items-center justify-center gap-2 rounded-full font-semibold whitespace-nowrap transition-all duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary-500 focus-visible:ring-offset-2 focus-visible:ring-offset-background disabled:pointer-events-none disabled:opacity-50";

const variants: Record<ButtonVariant, string> = {
  primary:
    "bg-linear-to-r from-primary-600 to-accent-700 text-white shadow-lg shadow-primary-600/25 hover:-translate-y-0.5 hover:shadow-xl hover:shadow-primary-600/30",
  secondary:
    "border border-border bg-surface-elevated text-foreground hover:border-brand hover:text-brand",
  ghost: "text-muted hover:bg-surface hover:text-brand",
};

const sizes: Record<ButtonSize, string> = {
  sm: "h-11 px-4 text-sm",
  md: "h-11 px-5 text-sm",
  lg: "h-12 px-6 text-base",
};

interface CommonProps {
  variant?: ButtonVariant;
  size?: ButtonSize;
  icon?: IconComponent;
  iconPosition?: "start" | "end";
  children: ReactNode;
  className?: string;
}

type AsLink = CommonProps &
  Omit<AnchorHTMLAttributes<HTMLAnchorElement>, keyof CommonProps> & {
    href: string;
    external?: boolean;
  };

type AsButton = CommonProps &
  Omit<ButtonHTMLAttributes<HTMLButtonElement>, keyof CommonProps> & {
    href?: undefined;
  };

export type ButtonProps = AsLink | AsButton;

export function Button(props: ButtonProps) {
  const {
    variant = "primary",
    size = "md",
    icon: Icon,
    iconPosition = "start",
    children,
    className,
  } = props;

  const classes = cn(base, variants[variant], sizes[size], className);
  const content = (
    <>
      {Icon && iconPosition === "start" && <Icon aria-hidden size={18} />}
      {children}
      {Icon && iconPosition === "end" && <Icon aria-hidden size={18} />}
    </>
  );

  if (props.href !== undefined) {
    const {
      variant: _v,
      size: _s,
      icon: _i,
      iconPosition: _p,
      external,
      className: _c,
      children: _ch,
      ...rest
    } = props;
    const externalProps = external
      ? { target: "_blank", rel: "noopener noreferrer" }
      : {};
    return (
      <a className={classes} {...externalProps} {...rest}>
        {content}
      </a>
    );
  }

  const {
    variant: _v,
    size: _s,
    icon: _i,
    iconPosition: _p,
    className: _c,
    children: _ch,
    type = "button",
    ...rest
  } = props;
  return (
    <button type={type} className={classes} {...rest}>
      {content}
    </button>
  );
}
