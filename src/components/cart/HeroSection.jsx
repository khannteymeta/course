import { useState, useEffect } from "react";
import { ReactTyped } from "react-typed";
import { useTranslation } from "react-i18next";
import Skeleton, { SkeletonTheme } from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";
import { motion } from "framer-motion";

const HeroSection = () => {
  const { t } = useTranslation();
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 700); // Simulate loading for 1 second
    return () => clearTimeout(timer);
  }, []);

  // Animation variants
  const slideInFromLeft = {
    hidden: { opacity: 0, x: -100 },
    visible: { opacity: 1, x: 0, transition: { duration: 0.5 } },
  };

  return (
    <SkeletonTheme color="#e0e0e0" highlightColor="#f5f5f5">
      <div className="text-left px-4 md:px-0">
        <div className="max-w-[510px] w-full mx-auto">
          {loading ? (
            <>
              <div className="font-bold text-4xl text-[#FFB600]">
                <Skeleton height={40} width={300} borderRadius={20} />
              </div>
              <div className="mt-4">
                <Skeleton count={2} borderRadius={20} />
              </div>
            </>
          ) : (
            <>
              <div className="text-4xl  font-bold text-[#0E302F] max-[400px]:text-2xl">
                Hello, I am
              </div>

              <motion.h1
                className="font-bold text-4xl py-2 text-[#FFB600] max-[400px]:text-2xl"
                variants={slideInFromLeft}
                initial="hidden"
                animate="visible"
              >
                <ReactTyped
                  strings={[t("Khann Teymeta")]}
                  typeSpeed={100}
                  loop
                  className="text-4xl max-[800px]:text-3xl max-[400px]:text-2xl"
                />
              </motion.h1>

              <motion.div
                className="mt-4 max-[400px]:mt-2"
                variants={slideInFromLeft}
                initial="hidden"
                animate="visible"
              >
                <p className="text-[16px] sm:text-[18px] md:text-[20px] lg:text-[22px] leading-relaxed">
                  {t(
                    "Ambitious third-year Software Development student at Norton University, with a strong foundation in UX/UI and Programming language."
                  )}
                </p>
              </motion.div>
            </>
          )}
        </div>
      </div>
    </SkeletonTheme>
  );
};

export default HeroSection;
