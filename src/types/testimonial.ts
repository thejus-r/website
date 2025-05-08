import { StaticImageData } from "next/image";

type Testimonial = {
  name: string;
  designation: string;
  content: string;
  profileImage: StaticImageData;
};

export default Testimonial;
