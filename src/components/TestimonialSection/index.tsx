import { inter } from "@/styles/fonts";
import SectionWrapper from "../SectionWrapper";
import Testimonial from "@/types/testimonial";
import testimonials from "@/content/testimonials";

const TestimonialSection = () => {
  return (
    <SectionWrapper>
      <section>
        <div className="flex flex-col gap-1">
          <h3 className="font-bold text-xl">Kind words, Only ...</h3>
          <p className={`text-base ${inter.className} text-neutral-500`}>
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
      <p>{content}</p>
      <div className="flex gap-4 items-end">
        <div className="h-16 w-12 bg-neutral-100" />
        <div>
          <p className="text-sm font-semibold">{name}</p>
          <p className="text-sm text-neutral-500">{designation}</p>
        </div>
      </div>
    </div>
  );
};

export default TestimonialSection;
