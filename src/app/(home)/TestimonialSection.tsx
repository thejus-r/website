import SectionWrapper from "@/components/SectionWrapper";
import Testimonial from "@/types/testimonial";
import testimonials from "@/content/testimonials";
import { H3, Label, P } from "@/components/ui/Typography";

const TestimonialSection = () => {
  return (
    <SectionWrapper>
      <section>
        <div className="flex flex-col gap-2">
          <H3>Kind words, Only ...</H3>
          <P>What others say about me</P>
        </div>
        <div className="grid grid-cols-1 mt-6 md:mt-8 md:grid-cols-2 gap-10 md:gap-4">
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
    <div className="border-0 md:border border-neutral-200 p-0 sm:p-4 md:p-5 flex flex-col justify-between gap-5">
      <P type={"special"} intent={"primary"}>
        {content}
      </P>
      <div className="flex gap-4 items-end">
        <div className="h-16 w-12 bg-neutral-100" />
        <div>
          <Label size={"default"} type={"sans"} weight={"semibold"}>
            {name}
          </Label>
          <Label size={"small"} type={"sans"} intent={"secondary"}>
            {designation}
          </Label>
        </div>
      </div>
    </div>
  );
};

export default TestimonialSection;
