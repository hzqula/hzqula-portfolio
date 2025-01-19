import React from "react";
import BtnPrimary from "./BtnPrimary";
import { motion } from "framer-motion";

const Contact = ({ id }) => {
  return (
    <section
      id={id}
      className="flex items-center relative flex-col lg:justify-center lg:w-full h-full lg:h-[calc(100vh_-_5rem)] mx-auto bg-primary gap-16 lg:gap-0 snap-end snap-always"
    >
      <div className="flex flex-col items-center justify-center w-full h-full">
        <div className="flex flex-col items-center justify-center gap-4">
          <motion.h1
            transition={{ type: "spring", delay: 0.3 }}
            initial={{ opacity: 0, x: 32 }}
            whileInView={{ opacity: 1, x: 0 }}
            className="text-4xl font-bold text-ownWhite lg:text-6xl font-text"
          >
            Contact Me
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
        <div className="flex flex-col items-center justify-center w-full gap-12 lg:w-4/5">
          <div>
            <motion.h2
              transition={{ type: "spring", delay: 0.9 }}
              initial={{ opacity: 0, x: -32 }}
              whileInView={{ opacity: 1, x: 0 }}
              className="text-sm font-normal md:text-2xl text-ownWhite font-text"
            >
              Please, feel free to contact me - even if it's just a “Hi!”
            </motion.h2>
            <motion.h3
              transition={{ type: "spring", delay: 1.1 }}
              initial={{ opacity: 0, x: 32 }}
              whileInView={{ opacity: 1, x: 0 }}
              className="text-xs font-semibold md:text-xl text-ownWhite font-text"
            >
              hzqoola@gmail.com
            </motion.h3>
          </div>
          <motion.div
            transition={{ type: "spring", delay: 1.3 }}
            initial={{ opacity: 0, x: 32 }}
            whileInView={{ opacity: 1, x: 0 }}
          >
            <BtnPrimary
              path="mailto:hzqoola@gmail.com?subject=Say Hello&body=Hello Bro, "
              type="second"
              content="Get in Touch"
            />
          </motion.div>
        </div>
        <h2 className="absolute text-xs md:text-sm text-ownWhite font-code right-12 bottom-8">
          Muhammad Faruq HZ &#169; 2025
        </h2>
      </div>
    </section>
  );
};

export default Contact;
