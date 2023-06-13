import React from "react";
import { cva, VariantProps } from "class-variance-authority";

const textStyles = cva("font-sans", {
  variants: {
    inline: {
      true: "inline",
    },
    italic: {
      true: "italic",
    },
    size: {
      "200": "text-xs",
      "300": "text-sm",
      "400": "text-base",
      "500": "text-lg",
      "600": "text-xl",
      "700": "text-2xl"
    },
    weight: {
      normal: "font-normal",
      medium: "font-medium",
      bold: "font-bold",
    },
    underline: {
      true: "underline",
    },
    uppercase: {
      true: "uppercase"
    }
  },
  defaultVariants: {
    size: "400",
    weight: "normal"
  }
});

type TextProps = {
  [key: string]: any;
  className?: string;
  children?: React.ReactNode;
};

interface Props extends TextProps, VariantProps<typeof textStyles> {}

export default function Text({
  className,
  children,
  inline,
  italic,
  size,
  underline,
  uppercase,
  weight,
  ...rest
}: Props) {
  return (
    <p
      className={textStyles({ inline, italic, size, underline, uppercase, weight, className })}
      {...rest}
    >
      {children}
    </p>
  );
}
