import React from "react";
import { cva, VariantProps } from "class-variance-authority";

const headingStyles = cva("font-sans font-bold uppercase tracking-[1px]", {
  variants: {
    level: {
      h1: "text-4xl",
      h2: "text-[2rem]",
      h3: "text-[1.75rem]",
      h4: "text-2xl",
      h5: "text-xl",
      h6: "text-base",
      large: "1.75rem",
      small: "text-sm"
    },
  },
  defaultVariants: {
    level: "h2"
  }
});

type HeadingProps = {
  [key: string]: any;
  as?: "h1" | "h2" | "h3" | "h4" | "h5" | "h6";
  children?: React.ReactNode;
  className?: string;
};

interface Props extends HeadingProps, VariantProps<typeof headingStyles> {}

export default function Heading({
  as = "h2",
  children,
  className,
  level,
  ...rest
}: Props) {
  switch (as) {
    case "h2":
      return <h2 className={headingStyles({level, className})} {...rest}>{children}</h2>;
    case "h3":
      return <h3 className={headingStyles({level, className})} {...rest}>{children}</h3>;
    case "h4":
      return <h4 className={headingStyles({level, className})} {...rest}>{children}</h4>;
    case "h5":
      return <h5 className={headingStyles({level, className})} {...rest}>{children}</h5>;
    case "h6":
      return <h6 className={headingStyles({level, className})} {...rest}>{children}</h6>;
    default:
      return <h2 className={headingStyles({level, className})} {...rest}>{children}</h2>;
  }
}
