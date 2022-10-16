import "./index.css";
import { AnimatePresence, motion } from "framer-motion";

const banner = {
  hidden: { opacity: 0, y: -400 },
  visible: {
    y: 0,
    opacity: 1,
    transition: {
      duration: 2,
      ease: [0.6, 0.01, -0.05, 0.95],
    },
  },
};

export default function Banner() {
  return (
    <AnimatePresence>
      <div className="banner flex text-white justify-center flex-col xl:ml-96 lg:ml-72 md:ml-48 sm:ml-32 ml-4 overflow-clip">
        <BannerTop title={"Thejus Rajendran"} />
        <BannerMiddle title={"user experience"} />
        <BannerBottom title={"designer"} />
      </div>
    </AnimatePresence>
  );
}

const BannerTop = ({ title }) => (
  <motion.div
    className="text- sm:text-lg md:text-xl lg:text-2xl xl:text-3xl overflow-hidden"
    variants={banner}
    initial="hidden"
    animate="visible"
  >
    {title}
  </motion.div>
);

const BannerMiddle = ({ title }) => (
  <motion.div
    className="text-4xl sm:text-5xl md:text-7xl lg:text-8xl xl:text-9xl font-thin"
    variants={banner}
    initial="hidden"
    animate="visible"
  >
    {title}
  </motion.div>
);

const BannerBottom = ({ title }) => (
  <motion.div
    className="text-2xl sm:text-3xl md:text-5xl lg:text-6xl xl:text-7xl font-bold"
    variants={banner}
    initial="hidden"
    animate="visible"
  >
    {title}
  </motion.div>
);

{
  /* <div className="banner flex text-white justify-center flex-col xl:ml-96 lg:ml-72 md:ml-48 sm:ml-32 ml-4">
<div className="text- sm:text-lg md:text-xl lg:text-2xl xl:text-3xl">
  Thejus Rajendran
</div>
<motion.div
  className="text-4xl sm:text-5xl md:text-7xl lg:text-8xl xl:text-9xl font-thin"
  animate={{ y: 0 }}
>
  {word.map((letter, index) => {
    return <motion.span key={index}>{letter}</motion.span>;
  })}
</motion.div>
<div className="text-2xl sm:text-3xl md:text-5xl lg:text-6xl xl:text-7xl font-bold">
  designer
</div>
</div> */
}
