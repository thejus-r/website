import { cva, VariantProps } from "class-variance-authority";
import React from "react";
import { twMerge } from "tailwind-merge";

const paragraphVariants = cva(["text-pretty"], {
  variants: {
    intent: {
      primary: "text-primary/80",
      secondary: "text-secondary/80",
      invertedPrimary: "text-i-primary",
      invertedSecondary: "text-i-primary/25",
    },
    type: {
      mono: "font-mono",
      default: "font-text",
    },
    size: {
      large: "text-lg/relaxed",
      default: "text-base/relaxed",
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
