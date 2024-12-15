import HeroSection from "../../components/cart/HeroSection";
// import SlideImageComponent from "../../components/cart/SlideImageComponent";
// import image from "D:/course-website/course/src/assets/logo/spring.png";
import image from "D:/course-website/course/src/assets/logo/meta.png";
import { motion } from "framer-motion";
// import { motion } from "motion/react";

export default function Homepage() {
  return (
    <>
      <div className="flex justify-around ">
        <div className="mt-20">
          <HeroSection className="" />
        </div>
        <div className="mt-0">
          <motion.h1
            className="font-bold text-4xl py-2 text-[#FFB600]"
            variants={screenLeft}
            initial="hidden"
            animate="visible"
          >
            <img src={image} alt="" className="w-[400px] relative   " />
          </motion.h1>
        </div>
      </div>
      <div className="w-300px mt-0 relative  bg-[#0E302F]  text-[#0E302F] ">space</div>

      {/* <SlideImageComponent /> */}
    </>
  );
}
