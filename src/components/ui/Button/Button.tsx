import React from "react";
import { cva, VariantProps } from "class-variance-authority";

const buttonStyles = cva(
  "inline-flex justify-center items-center transition-colors ease-in-out duration-2000 font-sans font-bold text-sm uppercase tracking-[.075em]",
  {
    variants: {
      disabled: {
        true: "bg-neutral-600 text-neutral-400 cursor-default",
      },
      fluid: {
        true: "w-full",
      },
      icon: {
        true: "bg-transparent w-11 h-11",
        false: "px-[2em] py-[1em]"
      },
      intent: {
        primary: "bg-black text-white",
        primaryAlt: "bg-white text-black",
        secondary:
          "bg-transparent text-black border border-black hover:bg-black hover:text-white",
        secondaryAlt:
          "bg-transparent text-white border border-white hover:bg-white hover:text-black",
      },
    },
    defaultVariants: {
      intent: "primary",
      icon: false
    },
  }
);

type ButtonProps = {
  [key: string]: any;
  children?: React.ReactNode;
  className?: string;
  onClick?: (e: React.MouseEvent) => void;
};

interface Props extends ButtonProps, VariantProps<typeof buttonStyles> {}

export default function Button({
  children,
  className,
  disabled,
  fluid,
  intent,
  icon,
  onClick,
  ...rest
}: Props) {
  return (
    <button
      onClick={onClick}
      {...rest}
      className={buttonStyles({ intent, icon, disabled, fluid, className })}
    >
      {children}
    </button>
  );
}
