import cn from "@/lib/utils/cn";
import clsx from "clsx";
import Link, { LinkProps } from "next/link";
import { ButtonHTMLAttributes } from "react";

interface ButtonProps {
  variant: "primary" | "secondary" | "tertiary";
  children: React.ReactNode;
  href?: string;
  className?: string;
}

type LinkButtonProps = ButtonProps & LinkProps;
type RegularButtonProps = ButtonProps & ButtonHTMLAttributes<HTMLButtonElement>;

export default function Button(props: LinkButtonProps | RegularButtonProps) {
  const { variant, href, children, className, ...rest } = props;

  const variantClasses = clsx([
    "bg-primary cursor-pointer rounded-xl border-2 border-transparent p-4 align-middle text-base leading-none font-semibold tracking-normal text-white transition-all duration-300 md:px-6 md:text-2xl",
    variant === "primary" && "bg-primary hover:bg-navy-blue",
    variant === "secondary" &&
      "hover:bg-navy-blue border-primary text-primary hover:border-navy-blue bg-transparent hover:text-white",
    variant === "tertiary" && "hover:bg-secondary hover:text-primary"
  ]);

  if (href) {
    const { href: _, ...linkProps } = rest as LinkProps;
    return (
      <Link
        className={cn(variantClasses, className)}
        href={href}
        {...linkProps}
      >
        {children}
      </Link>
    );
  }

  return (
    <button
      className={cn(variantClasses, className)}
      type='button'
      {...(rest as ButtonHTMLAttributes<HTMLButtonElement>)}
    >
      {children}
    </button>
  );
}
