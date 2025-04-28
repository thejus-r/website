import { cva, type VariantProps } from "class-variance-authority";
import { twMerge } from "tailwind-merge";

const sectionWrapperVariants = cva(
  [
    "w-fit flex-1 mx-auto md:max-w-2xl lg:max-w-4xl xl:max-w-6xl 2xl:max-w-[1440px]",
  ],
  {
    variants: {
      noPadding: {
        true: ["p-0"],
        false: ["p-5", "md:p-8", "lg:p-10"],
      },
      noBorder: {
        true: ["border-x-0"],
        false: ["border-x", "border-x-neutral-200"],
      },
    },
    defaultVariants: {
      noPadding: false,
      noBorder: false,
    },
  },
);

interface SectionWrapperProps
  extends VariantProps<typeof sectionWrapperVariants>,
    React.HTMLAttributes<HTMLDivElement> {}

const SectionWrapper = ({
  children,
  noBorder,
  noPadding,
  className,
  ...restProps
}: SectionWrapperProps) => {
  return (
    <section
      {...restProps}
      className="border-b border-b-neutral-200 w-full flex"
    >
      <div
        className={twMerge(
          sectionWrapperVariants({ noBorder, noPadding }),
          className,
        )}
      >
        {children}
      </div>
    </section>
  );
};

export default SectionWrapper;
