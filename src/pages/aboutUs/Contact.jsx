import { ContactComponent } from "../../components/ContactComponent";
import { motion } from "framer-motion";
import image from "D:/course-website/course/src/assets/logo/meta.png";
import page from "D:/course-website/course/src/assets/logo/page.png";

const slideInFromLeft = {
  hidden: { opacity: 0, x: -100 },
  visible: { opacity: 1, x: 0, transition: { duration: 0.5 } },
};

const slideInFromRight = {
  hidden: { opacity: 0, x: 100 },
  visible: { opacity: 1, x: 0, transition: { duration: 0.5 } },
};

export default function Contact() {
  return (
    <>
      <div className="">
        <motion.h1
          className="font-bold  flex justify-center align-top text-4xl  text-[#FFB600]  "
          variants={screenLeft}
          initial="hidden"
          animate="visible"
        >
          <img
            src={image}
            alt=""
            className="w-[150px] relative  transform scale-75 rounded-full    "
          />
        </motion.h1>
        <motion.h1
          variants={slideInFromLeft}
          initial="hidden"
          animate="visible"
        >
          <h1 className="text-2xl text-center mt-0 text-[#0E302F]  font-thin">
            About Me
          </h1>
        </motion.h1>

        <div className="flex justify-center">
          <h2 className="text-sm text-center w-[300px]  mt-4">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Minima
            sapiente, adipisci eum quibusdam necessitatibus ullam in quae odit
            laudantium ipsum corporis perferendis numquam provident, quam ut ad
            alias. Nostrum, magni!{" "}
          </h2>
        </div>

        <motion.h1
          variants={slideInFromRight}
          initial="hidden"
          animate="visible"
        >
          <h1 className="text-2xl text-center mt-9 text-[#0E302F]  font-thin">
            Content Creator
          </h1>
        </motion.h1>

        <div className="flex justify-center  mt-5">
          <a href="https://www.facebook.com/profile.php?id=61559632608002">
            <img
              src={page}
              alt=""
              className="w-[150px] relative  rounded-xl border-4  "
            />
          </a>
        </div>

        <div className="flex justify-center">
          <h2 className="text-sm text-center w-[300px]  mt-4">
            I`m currently start with it because I want to explore and make
            confidance infront of Camera and Ordience. Here is my new page
          </h2>
        </div>

        <motion.h1
          variants={slideInFromLeft}
          initial="hidden"
          animate="visible"
        >
          <h1 className="text-2xl text-center mt-5 text-[#0E302F]  font-thin">
            Education
          </h1>
        </motion.h1>
        <div></div>

        <ContactComponent />
      </div>
    </>
  );
}
