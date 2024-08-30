import React from "react";
import { motion } from "framer-motion";
import AnimasiNgoding from "../animations/AnimasiNgoding";
import { VscVscode } from "react-icons/vsc";
import { FaFigma } from "react-icons/fa";
import { SiChessdotcom } from "react-icons/si";
import map from "../assets/map.svg";
import BtnSecondary from "./BtnSecondary";
import { MdCatchingPokemon } from "react-icons/md";

const Hero = ({ id }) => {
  const ngambang = (duration) => ({
    y: [0, -24, 0],
    transition: {
      duration,
      ease: "easeInOut",
      repeat: Infinity,
    },
  });

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5,
      },
    },
  };

  return (
    <section className="relative w-full overflow-hidden h-dvh snap-start snap-always">
      <main
        id={id}
        className="flex flex-col items-center justify-center w-[85%] h-full mx-auto lg:w-4/5 "
      >
        <div className="flex flex-col items-center justify-center w-full lg:mt-20">
          <div className="flex flex-col items-center justify-center gap-4">
            <motion.h1
              transition={{ type: "spring", delay: 0.3 }}
              initial={{ opacity: 0, x: 32 }}
              animate={{ opacity: 1, x: 0 }}
              className="text-3xl font-extrabold sm:text-5xl lg:text-6xl font-text text-primary"
            >
              Muhammad Faruq HZ
            </motion.h1>
            <div className="flex items-center justify-center w-1/2 h-3 gap-4">
              <motion.span
                transition={{ type: "spring", delay: 0.5 }}
                initial={{ opacity: 0, x: -32 }}
                animate={{ opacity: 1, x: 0 }}
                className="inline-block w-4/5 h-full bg-secondary"
              ></motion.span>
              <motion.span
                transition={{ type: "spring", delay: 0.7 }}
                initial={{ opacity: 0, x: 32 }}
                animate={{ opacity: 1, x: 0 }}
                className="inline-block w-1/5 h-full bg-primary"
              ></motion.span>
            </div>
          </div>
        </div>
        <motion.div
          animate={ngambang(3.5)}
          className="absolute bottom-24 sm:left-auto sm:right-24 lg:bottom-48 md:bottom-36 sm:bottom-20 left-1/2 lg:left-auto md:right-32 lg:right-44"
          variants={itemVariants}
        >
          <motion.div
            transition={{ type: "spring", delay: 1.4 }}
            initial={{ opacity: 0, x: -32 }}
            animate={{ opacity: 1, x: 0 }}
          >
            <p className="text-base font-bold lg:text-2xl -rotate-[30deg] text-secondary md:text-xl font-text">
              FREE PALESTINE!!
            </p>
          </motion.div>
        </motion.div>
        <motion.div
          animate={ngambang(3)}
          className="absolute left-1/2 lg:left-48 sm:left-24 sm:bottom-44 sm:top-auto top-28 lg:top-1/2"
        >
          <motion.div
            transition={{ type: "spring", delay: 0.8 }}
            initial={{ opacity: 0, x: 32 }}
            animate={{ opacity: 1, x: 0 }}
          >
            <FaFigma className="w-6 h-6 sm:w-8 sm:h-8 lg:w-10 lg:h-10 text-secondary -rotate-12" />
          </motion.div>
        </motion.div>

        <motion.div
          animate={ngambang(4)}
          className="absolute right-24 sm:left-1/3 md:right-1/2 sm:top-auto sm:bottom-12 lg:right-36 lg:left-auto lg:top-56 top-40"
          variants={itemVariants}
        >
          <motion.div
            transition={{ type: "spring", delay: 1.4 }}
            initial={{ opacity: 0, x: 32 }}
            animate={{ opacity: 1, x: 0 }}
          >
            <SiChessdotcom className="w-6 h-6 sm:w-8 sm:h-8 lg:w-10 lg:h-10 -rotate-6 text-secondary" />
          </motion.div>
        </motion.div>

        <motion.div
          animate={ngambang(2)}
          className="absolute sm:left-10 sm:top-24 md:top-1/4 left-24 md:left-12 lg:left-32 top-32 lg:top-3/4 "
          variants={itemVariants}
        >
          <motion.div
            transition={{ type: "spring", delay: 1.2 }}
            initial={{ opacity: 0, x: 32 }}
            animate={{ opacity: 1, x: 0 }}
          >
            <VscVscode className="w-6 h-6 sm:w-8 sm:h-8 lg:w-10 lg:h-10 text-secondary rotate-6" />
          </motion.div>
        </motion.div>

        <motion.img
          transition={{ type: "spring", delay: 2.2 }}
          initial={{ opacity: 0, x: 32, rotate: -120 }}
          animate={{ opacity: 1, x: 0, rotate: -120 }}
          src={map}
          alt="tagline"
          className="-rotate-[120deg] w-40 md:w-60 lg:w-80 -right-7 md:-right-14 md:-bottom-[16.2rem] -bottom-[10.8rem] lg:-bottom-[22rem] lg:-right-[4rem] absolute"
        />
        <motion.div
          className="flex flex-col items-center justify-center w-[90%] sm:w-4/5 md:w-[60%] lg:w-1/2"
          transition={{ type: "spring", delay: 1.5 }}
          initial={{ opacity: 0, x: -32 }}
          animate={{ opacity: 1, x: 0 }}
        >
          <AnimasiNgoding />
          <motion.div
            transition={{ type: "spring", delay: 1.9 }}
            initial={{ opacity: 0, x: 32 }}
            animate={{ opacity: 1, x: 0 }}
          >
            <BtnSecondary>
              <a
                className="py-2 pl-6 pr-4 mx-[0.1rem] inline-flex items-center gap-4"
                href={"/docs/my-resume.pdf"}
                target="_blank"
                rel="noopener noreferrer"
                locale={false}
                download
              >
                Get my Resume
                <MdCatchingPokemon />
              </a>
            </BtnSecondary>
          </motion.div>
        </motion.div>
      </main>
    </section>
  );
};

export default Hero;
