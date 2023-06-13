import React from "react";
import NextLink from "next/link";
import { cva, VariantProps } from "class-variance-authority";

import { buttonStyles as linkStyles } from "../Button/Button";

type LinkProps = {
  [key: string]: any;
  href: string;
};

interface Props extends LinkProps, VariantProps<typeof linkStyles> {}

export default function Link({
  children,
  className,
  disabled,
  fluid,
  href,
  icon,
  intent,
  ...rest
}: Props) {
  return (
    <NextLink
      href={href}
      {...rest}
      className={linkStyles({ intent, icon, disabled, fluid, className })}
    >
      {children}
    </NextLink>
  );
}
