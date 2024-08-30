import React from "react";
import BtnPrimary from "./BtnPrimary";
import { motion } from "framer-motion";

const iconVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: (i) => ({
    opacity: 1,
    y: 0,
    transition: {
      delay: i * 0.2 + 1.1,
      type: "spring",
      stiffness: 100,
    },
  }),
};

const Showcase = ({
  title,
  imgPath,
  path,
  imgAlt,
  content,
  btnContent,
  icons,
}) => {
  return (
    <div className="flex flex-col flex-shrink-0 w-4/5 m-auto my-4 md:flex-row">
      <div className="flex items-center justify-center w-full mb-8 lg:mb-0 md:gap-0 md:justify-start md:w-1/2">
        <div className="w-[90%] h-fit relative">
          <motion.div
            transition={{ type: "spring", delay: 0.3 }}
            initial={{ opacity: 0, x: -32 }}
            whileInView={{ opacity: 1, x: 0 }}
            className="absolute z-0 w-full h-full bg-secondary -right-4 -bottom-4"
          ></motion.div>
          <motion.img
            transition={{ type: "spring", delay: 0.5 }}
            initial={{ opacity: 0, x: 32 }}
            whileInView={{ opacity: 1, x: 0 }}
            src={imgPath}
            alt={imgAlt}
            className="relative z-10 w-full h-full border-4 border-dashed border-primary"
          />
        </div>
      </div>
      <div className="flex flex-col items-start justify-between w-full md:w-1/2">
        <motion.h1
          transition={{ type: "spring", delay: 0.3 }}
          initial={{ opacity: 0, x: 32 }}
          whileInView={{ opacity: 1, x: 0 }}
          className="text-primary lg:text-4xl text-3xl font-text font-bold ml-[-0.2rem]"
        >
          {title}
        </motion.h1>
        <div className="flex items-center justify-center w-1/4 h-2 gap-2 my-2">
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
            className="inline-block w-1/5 h-full bg-primary"
          ></motion.span>
        </div>
        <motion.p
          transition={{ type: "spring", delay: 0.9 }}
          initial={{ opacity: 0, x: 32 }}
          whileInView={{ opacity: 1, x: 0 }}
          className="text-xs text-justify lg:text-base font-text text-secondary"
          dangerouslySetInnerHTML={{ __html: content }}
        />
        <motion.div
          className="flex w-full gap-4 mt-4 text-4xl font-semibold lg:text-5xl"
          initial="hidden"
          whileInView="visible"
        >
          {React.Children.map(icons.props.children, (icon, index) => (
            <motion.div key={index} custom={index} variants={iconVariants}>
              {icon}
            </motion.div>
          ))}
        </motion.div>
        <BtnPrimary path={path} content={btnContent} flex="self-end" />
      </div>
    </div>
  );
};

export default Showcase;
