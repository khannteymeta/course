import { motion } from "framer-motion";

const slideInFromLeft = {
  hidden: { opacity: 0, x: -100 },
  visible: { opacity: 1, x: 0, transition: { duration: 0.5 } },
};

export default function ProjectPage() {
  return (
    <>
      <div>
        <motion.h1
          className="font-bold  flex justify-center align-top text-4xl  text-[#FFB600]  "
          variants={screenLeft}
          initial="hidden"
          animate="visible"
        >
          {/* <img
            src={}
            alt=""
            className="w-[150px] relative  transform scale-75 rounded-full    "
          /> */}
        </motion.h1>

        <motion.h1
          variants={slideInFromLeft}
          initial="hidden"
          animate="visible"
        >
          <h1 className="text-2xl text-center mt-0 text-[#0E302F]  font-thin">
            Projects
          </h1>
        </motion.h1>
      </div>
    </>
  );
}
