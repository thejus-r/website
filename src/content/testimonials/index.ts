import Testimonial from "@/types/testimonial";

// images
import sajjad from "./sajjad.png";
import arul from "./arul.png";

const testimonials: Testimonial[] = [
  {
    name: "Sajjad S",
    designation: "Product Designer, Spense Money",
    content:
      "I've known Thejus for six years and have been consistently impressed by his Design skills. As a fellow Product Designer, I admire his ability to blend user-centered design with strategic thinking. Thejus has a keen eye for detail and a knack for creating intuitive interfaces that solve real user problems. Their thoughtful approach to information architecture and understanding of the product lifecycle make them a valuable asset. I highly recommend Thejus to any team seeking a talented and dedicated designer.",
    profileImage: sajjad,
  },
  {
    name: "Arul Pravahini",
    designation: "Senior UX Designer, Wipro",
    content:
      "Having worked alongside Thejus for over a year on a past project, I can confidently say it was a truly enriching experience. His ability to transfer his deep UX knowledge was remarkable; I consistently felt like I was learning and growing. What impressed me most was his dedication to iteration – he wasn't content with the first solution, always pushing to explore and uncover innovative and more effective designs and user flows.",
    profileImage: arul,
  },
];

export default testimonials;
