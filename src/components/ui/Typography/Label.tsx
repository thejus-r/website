import React from "react";
import { cva, VariantProps } from "class-variance-authority";
import { twMerge } from "tailwind-merge";

const labelVariants = cva(["block"], {
  variants: {
    intent: {
      primary: "text-primary",
      secondary: "text-secondary/80",
      invertedPrimary: "text-i-primary",
      invertedSecondary: "text-i-primary/50",
    },
    weight: {
      semibold: ["font-semibold"],
      normal: ["font-normal"],
    },
    type: {
      sans: "font-sans",
      mono: "font-mono",
    },
    size: {
      large: ["md:text-lg", "text-base"],
      default: ["text-sm/relaxed", "md:text-base/relaxed"],
      small: ["md:text-sm", "text-xs"],
    },
  },
  defaultVariants: {
    intent: "primary",
    weight: "normal",
    type: "mono",
    size: "default",
  },
});

interface LabelProps
  extends React.HTMLAttributes<HTMLSpanElement>,
    VariantProps<typeof labelVariants> {}

const Label = ({
  intent,
  type,
  weight,
  size,
  className,
  ...restProps
}: LabelProps) => {
  return (
    <span
      className={twMerge(
        labelVariants({ intent, type, weight, size }),
        className
      )}
      {...restProps}
    />
  );
};

export { Label };
