import SectionWrapper from "@/components/SectionWrapper";
import Testimonial from "@/types/testimonial";
import testimonials from "@/content/testimonials";
import { H3 } from "@/components/ui/Typography";

const TestimonialSection = () => {
  return (
    <SectionWrapper>
      <section>
        <div className="flex flex-col gap-1">
          <H3>Kind words, Only ...</H3>
          <p className="font-text text-base text-neutral-500">
            What others say about me
          </p>
        </div>
        <div className="grid grid-cols-1 mt-10 md:grid-cols-3 gap-5">
          {testimonials.map((testimonial, index) => {
            return <TestimonialCard key={index} {...testimonial} />;
          })}
        </div>
      </section>
    </SectionWrapper>
  );
};

const TestimonialCard = (testimonial: Testimonial) => {
  const { name, designation, content } = testimonial;
  return (
    <div className="border border-neutral-200 p-6 flex flex-col gap-10">
      <p className="">{content}</p>
      <div className="flex gap-4 items-end">
        <div className="h-16 w-12 bg-neutral-100" />
        <div>
          <p className="text-base font-semibold">{name}</p>
          <p className="font-text text-xs text-neutral-500">{designation}</p>
        </div>
      </div>
    </div>
  );
};

export default TestimonialSection;
