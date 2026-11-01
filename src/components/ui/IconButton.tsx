import type { AnchorHTMLAttributes, ButtonHTMLAttributes } from "react";
import { cn } from "@/lib/cn";
import type { IconComponent } from "@/types";

const classes =
  "inline-flex size-11 shrink-0 items-center justify-center rounded-full border border-border bg-surface-elevated text-muted transition-colors duration-200 hover:border-brand hover:text-brand focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary-500 focus-visible:ring-offset-2 focus-visible:ring-offset-background";

interface CommonProps {
  icon: IconComponent;
  label: string;
  className?: string;
}

type IconLinkProps = CommonProps &
  Omit<AnchorHTMLAttributes<HTMLAnchorElement>, keyof CommonProps> & {
    href: string;
    external?: boolean;
  };

type IconActionProps = CommonProps &
  Omit<ButtonHTMLAttributes<HTMLButtonElement>, keyof CommonProps> & {
    href?: undefined;
  };

export type IconButtonProps = IconLinkProps | IconActionProps;

export function IconButton(props: IconButtonProps) {
  const { icon: Icon, label, className } = props;
  const icon = <Icon aria-hidden size={20} />;

  if (props.href !== undefined) {
    const { icon: _i, label: _l, className: _c, external, ...rest } = props;
    const externalProps = external
      ? { target: "_blank", rel: "noopener noreferrer" }
      : {};
    return (
      <a
        aria-label={label}
        title={label}
        className={cn(classes, className)}
        {...externalProps}
        {...rest}
      >
        {icon}
      </a>
    );
  }

  const { icon: _i, label: _l, className: _c, type = "button", ...rest } = props;
  return (
    <button
      type={type}
      aria-label={label}
      title={label}
      className={cn(classes, className)}
      {...rest}
    >
      {icon}
    </button>
  );
}
