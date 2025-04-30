import React from "react";
import { cva, VariantProps } from "class-variance-authority";
import { twMerge } from "tailwind-merge";

const displayVariants = cva([""], {
  variants: {
    intent: {
      primary: ["text-primary"],
      secondary: "text-secondary/85",
      inverted: "text-i-primary/85",
    },

    size: {
      h1: ["text-3xl/snug", "xl:text-5xl/snug", "font-bold"],
      h2: ["text-2xl/snug", "xl:text-3xl/snug", "font-bold"],
    },
  },
  defaultVariants: {
    intent: "primary",
  },
});

// <h1 className="text-3xl xl:text-5xl/snug font-bold"></h1>

// Heading variants from H1 -> H6
interface DisplayProps
  extends React.HTMLAttributes<HTMLHeadingElement>,
    Omit<VariantProps<typeof displayVariants>, "size"> {}

const Display = ({ intent, className, ...restProps }: DisplayProps) => {
  return (
    <h1
      className={twMerge(displayVariants({ intent, size: "h1" }), className)}
      {...restProps}
    />
  );
};

const DisplaySmall = ({ intent, className, ...restProps }: DisplayProps) => {
  return (
    <h2
      className={twMerge(displayVariants({ intent, size: "h2" }), className)}
      {...restProps}
    />
  );
};

export { Display, DisplaySmall };
