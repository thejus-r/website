import { cva, VariantProps } from "class-variance-authority";
import React from "react";
import { twMerge } from "tailwind-merge";

const headingVariants = cva(["mix-blend-plus-lighter"], {
  variants: {
    intent: {
      primary: ["text-primary/85"],
      secondary: "text-secondary/85",
      inverted: "text-i-primary/85",
    },

    size: {
      h1: ["text-2xl/tight", "md:text-3xl/tight", "font-bold"],
      h2: ["text-2xl/tight", "font-bold"],
      h3: ["text-xl/tight", "md:text-xl/tight", "font-bold"],
      h4: ["text-lg/tight", "md:text-xl/tight", "font-bold"],
      h5: ["text-lg/tight", "md:text-xl/tight", "font-bold"],
      h6: ["text-lg/tight", "md:text-xl/tight", "font-bold"],
    },
  },
  defaultVariants: {
    intent: "primary",
  },
});

// Heading variants from H1 -> H6
interface HeadingProps
  extends React.HTMLAttributes<HTMLHeadingElement>,
    Omit<VariantProps<typeof headingVariants>, "size"> {}

const H1 = ({ intent, className, ...restProps }: HeadingProps) => {
  return (
    <h1
      className={twMerge(headingVariants({ intent, size: "h1" }), className)}
      {...restProps}
    />
  );
};

const H2 = ({ intent, className, ...restProps }: HeadingProps) => {
  return (
    <h2
      className={twMerge(headingVariants({ intent, size: "h2" }), className)}
      {...restProps}
    />
  );
};

const H3 = ({ intent, className, ...restProps }: HeadingProps) => {
  return (
    <h3
      className={twMerge(headingVariants({ intent, size: "h3" }), className)}
      {...restProps}
    />
  );
};

const H4 = ({ intent, className, ...restProps }: HeadingProps) => {
  return (
    <h4
      className={twMerge(headingVariants({ intent, size: "h4" }), className)}
      {...restProps}
    />
  );
};

const H5 = ({ intent, className, ...restProps }: HeadingProps) => {
  return (
    <h5
      className={twMerge(headingVariants({ intent, size: "h5" }), className)}
      {...restProps}
    />
  );
};

const H6 = ({ intent, className, ...restProps }: HeadingProps) => {
  return (
    <h6
      className={twMerge(headingVariants({ intent, size: "h6" }), className)}
      {...restProps}
    />
  );
};

export { H1, H2, H3, H4, H5, H6 };
