import HeroSection from "../../components/cart/HeroSection";
// import SlideImageComponent from "../../components/cart/SlideImageComponent";
// import image from "D:/course-website/course/src/assets/logo/spring.png";
import image from "D:/course-website/course/src/assets/logo/meta.png";
import { motion } from "framer-motion";
// import { motion } from "motion/react";

export default function Homepage() {
  return (
    <>
      {/* Main Container */}
      <div className="flex flex-col md:flex-row justify-around items-center gap-6">
        {/* Left Section */}
        <div className="mt-10 md:mt-0 max-[400px]:mt-5 max-[320px]:mt-3 px-4">
          <HeroSection />
        </div>

        {/* Right Section */}
        <div className="mt-5 md:mt-0 px-4">
          <motion.div
            className="font-bold text-4xl py-0 text-[#FFB600]"
            variants={screenLeft}
            initial="hidden"
            animate="visible"
          >
            <img
              src={image}
              alt="Logo"
              className="w-[200px] md:w-[300px] lg:w-[400px] mx-auto"
            />
          </motion.div>
        </div>
      </div>

      {/* Background Section */}
      <div className="w-full mt-5 md:mt-10 bg-[#0E302F] text-[#0E302F] text-center py-1">
        Space
      </div>
    </>
  );
}