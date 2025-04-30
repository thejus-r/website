import { cva, VariantProps } from "class-variance-authority";
import { twMerge } from "tailwind-merge";

const buttonVariants = cva(["relative", "px-4", "w-full", "md:w-fit"], {
  variants: {
    intent: {
      default: ["bg-neutral-300", "text-white/0"],
    },
    size: {
      regular: ["h-14", "md:h-12", "min-w-32", "md:w-fit"],
    },
  },
  defaultVariants: {
    intent: "default",
    size: "regular",
  },
});

interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants> {}

const Button = ({
  children,
  intent,
  size,
  className,
  ...restProps
}: ButtonProps) => {
  return (
    <button
      className={twMerge(buttonVariants({ intent, size }), className)}
      {...restProps}
    >
      {children}
      <div className="absolute transition-transform text-neutral-50 flex items-center justify-center inset-0 hover:bg-neutral-800 focus:translate-0 hover:-translate-0.5 -translate-1 bg-neutral-950">
        {children}
      </div>
    </button>
  );
};

export default Button;
