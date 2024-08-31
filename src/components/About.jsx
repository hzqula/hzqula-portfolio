import React, { useState, useEffect } from "react";
import logo from "../assets/logo.svg";
import { PiHandTap } from "react-icons/pi";
import { motion } from "framer-motion";
import AnimasiNgetik from "../animations/AnimasiNgetik";

const About = ({ id }) => {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const updateScreenWidth = () => {
      setIsMobile(window.innerWidth <= 768);
    };
    updateScreenWidth();
    window.addEventListener("resize", updateScreenWidth);
    return () => {
      window.removeEventListener("resize", updateScreenWidth);
    };
  }, []);

  const ngambang = {
    y: [0, 2, 0],
    transition: {
      duration: 0.5,
      ease: "easeInOut",
      repeat: Infinity,
    },
  };

  const [currentDialog, setCurrentDialog] = useState(0);

  const dialog = [
    'In 2022. <span class="font-semibold">Alhamdulillah</span>, officially a student of <span class="font-semibold">Informatics Engineering</span> at <span class="font-semibold">UIN Suska Riau</span> admitted through the SBMPTN pathway, and proud to be part of the <span class="font-semibold">Pemuda Hijrah TIF A 2022</span>. Also a student who was confused about choosing between focusing on graphic design or programming. And finally decided to focus on both.',
    'I often play <span class="font-semibold">rubiks</span> and <span class="font-semibold">chess</span>, even though I know it\'s a waste of time. Btw my username in chess.com is <span class="font-semibold">FaruqHZ</span>.',
    "I am a 4th semester student and so far have learned Java OOP programming, Data Structures and recently learned Web Programming, Mobile Programming, and Database Systems.",
    "As an Informatics Engineering student with a strong interest in design and programming, I am dedicated to integrating these skills to create innovative and visually appealing application interfaces. Currently, I am focusing on front-end development, particularly using technologies such as ReactJS and TailwindCSS. I am committed to continuously learning new technologies to bring my ideas to life, with imagination as the only limit in my creative process.",
  ];

  const handleNextDialog = () => {
    let nextDialog = Math.floor(Math.random() * dialog.length);
    while (nextDialog === currentDialog) {
      nextDialog = Math.floor(Math.random() * dialog.length);
    }
    setCurrentDialog(nextDialog);
  };

  return (
    <>
      <section
        id={id}
        className="flex items-center flex-col lg:justify-center lg:w-full h-dvh lg:h-[calc(100vh_-_5rem)] mx-auto bg-primary gap-16 lg:gap-0 snap-start lg:snap-end snap-always"
      >
        <div className="flex flex-col items-center justify-center w-full h-full">
          <div className="flex flex-col items-center justify-center gap-4">
            <motion.h1
              transition={{ type: "spring", delay: 0.3 }}
              initial={{ opacity: 0, x: 32 }}
              whileInView={{ opacity: 1, x: 0 }}
              className="text-4xl font-bold text-ownWhite lg:text-6xl font-text "
            >
              About Me
            </motion.h1>
            <div className="flex items-center justify-center w-full h-3 gap-4 mb-20">
              <motion.span
                transition={{ type: "spring", delay: 0.5 }}
                initial={{ opacity: 0, x: -32 }}
                whileInView={{ opacity: 1, x: 0 }}
                className="inline-block w-4/5 h-full bg-secondary"
              ></motion.span>
              <motion.span
                transition={{ type: "spring", delay: 0.7 }}
                initial={{ opacity: 0, x: 32 }}
                whileInView={{ opacity: 1, x: 0 }}
                className="inline-block w-1/5 h-full bg-ownWhite"
              ></motion.span>
            </div>
          </div>
          <div className="flex flex-col items-center w-full gap-12 lg:w-4/5 lg:flex-row">
            <div className="flex flex-col items-center justify-center gap-2">
              <motion.div
                transition={{ type: "spring", delay: 0.9 }}
                initial={{ opacity: 0, x: 32 }}
                whileInView={{ opacity: 1, x: 0 }}
                className="flex items-center justify-center w-24 h-24 border-2 rounded-full border-ownWhite"
              >
                <img src={logo} alt="logo" className="w-12 h-12" />
              </motion.div>
              <motion.h2
                transition={{ type: "spring", delay: 1.3 }}
                initial={{ opacity: 0, x: -32 }}
                whileInView={{ opacity: 1, x: 0 }}
                className="font-bold text-ownWhite font-code"
              >
                Me
              </motion.h2>
            </div>
            <motion.div
              transition={{ type: "spring", delay: 1.1 }}
              initial={{ opacity: 0, x: 16 }}
              whileInView={{ opacity: 1, x: 0 }}
              className="relative z-10 flex items-center justify-start w-[90%] min-h-48 lg:min-h-48 lg:px-16 px-8 py-8 lg:w-4/5 font-text text-secondary sm:text-sm text-xs lg:text-base bg-ownWhite lg:leading-normal leading-6
          "
            >
              <motion.div
                transition={{ type: "spring", delay: 1.7 }}
                initial={{ opacity: 0, x: -32 }}
                whileInView={{ opacity: 1, x: 0 }}
                className="absolute z-0 w-full h-full border border-ownWhite -right-4 -bottom-4"
              ></motion.div>
              <AnimasiNgetik text={dialog[currentDialog]} speed={6} />
              <span className="inline-block absolute right-1/2 translate-x-1/2 -top-7 lg:-left-8 lg:top-[40%] lg:-translate-y-1/2 w-0 h-0 border-l-[16px] border-t-[0] border-r-[16px] border-b-[32px] lg:border-l-[0] lg:border-t-[16px] lg:border-r-[32px] lg:border-b-[16px] border-r-transparent border-b-ownWhite border-t-transparent border-l-transparent lg:border-t-transparent lg:border-r-ownWhite lg:border-l-transparent lg:border-b-transparent"></span>
              <button
                className="absolute flex items-center justify-center gap-2 right-8 bottom-4"
                onClick={handleNextDialog}
              >
                <span className="text-xs font-bold font-code text-primary">
                  Next...
                </span>
                <motion.span animate={ngambang}>
                  <PiHandTap />
                </motion.span>
              </button>
            </motion.div>
          </div>
        </div>
      </section>
    </>
  );
};

export default About;

{
  /* <motion.div
              transition={{ type: "spring", delay: 1.1 }}
              initial={{ opacity: 0, x: -32 }}
              whileInView={{ opacity: 1, x: 0 }}
              className="relative z-10 flex items-center justify-start w-[90%] min-h-48 lg:min-h-48 lg:px-16 px-8 py-8 lg:w-4/5 font-text text-secondary sm:text-sm text-xs lg:text-base bg-ownWhite lg:leading-normal leading-6
          "
            ></motion.div> */
}
