import { motion } from "framer-motion";
const slideInFromLeft = {
  hidden: { opacity: 0, x: -100 },
  visible: { opacity: 1, x: 0, transition: { duration: 0.5 } },
};

export default function ExperiencePage() {
  return (
    <>
      <div>
        <motion.h1
          variants={slideInFromLeft}
          initial="hidden"
          animate="visible"
        >
          <h1 className="text-2xl text-center mt-0 text-[#0E302F]  font-thin">
            CSTAD
          </h1>
        </motion.h1>

        <div className="flex justify-center">
          <h2 className="text-sm text-center w-[300px]  mt-4">
            I learn a lot of experience from cstad. Teaching and giving memories
            for 4-5 month. Thank you for not just teaching lessons, but for
            inspiring dreams.
          </h2>
        </div>
      </div>
    </>
  );
}
