import { motion } from "framer-motion";
import project from "/project.svg";

const slideInFromLeft = {
  hidden: { opacity: 0, x: -100 },
  visible: { opacity: 1, x: 0, transition: { duration: 0.5 } },
};

const slideInFromRight = {
  hidden: { opacity: 0, x: 100 },
  visible: { opacity: 1, x: 0, transition: { duration: 0.5 } },
};

export default function ProjectPage() {
  return (
    <>
      <div>
        {/* <motion.h1
          className="font-bold  flex justify-center align-top text-4xl  text-[#FFB600]  "
          variants={screenLeft}
          initial="hidden"
          animate="visible"
        ></motion.h1> */}

        <motion.h1
          variants={slideInFromLeft}
          initial="hidden"
          animate="visible"
        >
          <h1 className="text-2xl text-center mt-0 text-[#0E302F]  font-thin">
            E-MENU
          </h1>
        </motion.h1>
        <div className="flex justify-center">
          <h2 className="text-sm text-center w-[300px]  mt-4">
            I just create E-MENU on figma screen and build it by using React
            Library.
          </h2>
        </div>
        <div className="flex justify-center mt-32">
          <img
            src={project}
            alt=""
            className="w-[150px] relative transform scale-150  "
          />
        </div>

        <motion.h1
          variants={slideInFromRight}
          initial="hidden"
          animate="visible"
        >
          <h1 className="text-2xl text-center mt-32 text-[#0E302F]  font-thin">
            Trov-Ka Service Listing
          </h1>
        </motion.h1>
        <div className="flex justify-center">
          <h2 className="text-sm text-center w-[300px]  mt-4">
            I just create E-MENU on figma screen and build it by using React
            Library.
          </h2>
        </div>
      </div>
    </>
  );
}
