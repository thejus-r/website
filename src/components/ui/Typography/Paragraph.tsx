import { cva, VariantProps } from "class-variance-authority";
import React from "react";
import { twMerge } from "tailwind-merge";

const paragraphVariants = cva(["text-pretty"], {
  variants: {
    intent: {
      primary: "text-primary/80",
      secondary: "text-secondary/80",
      invertedPrimary: "text-i-primary",
      invertedSecondary: "text-i-primary/50",
    },
    type: {
      special: "font-sans",
      mono: "font-mono",
      default: "font-text",
    },
    size: {
      large: ["text-base/relaxed", "md:text-lg/relaxed"],
      default: ["text-sm/relaxed", "md:text-base/relaxed"],
      small: ["text-xs/normal", "md:text-sm/normal"],
    },
  },
  defaultVariants: {
    intent: "secondary",
    type: "default",
    size: "default",
  },
});

interface ParagraphProps
  extends React.HTMLAttributes<HTMLParagraphElement>,
    VariantProps<typeof paragraphVariants> {}

const P = ({ intent, type, size, className, ...restProps }: ParagraphProps) => {
  return (
    <p
      className={twMerge(paragraphVariants({ intent, type, size }), className)}
      {...restProps}
    />
  );
};

export { P };
