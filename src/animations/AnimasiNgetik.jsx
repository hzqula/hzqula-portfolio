import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";

const AnimasiNgetik = ({ text, speed = 50 }) => {
  const [displayText, setDisplayText] = useState("");
  const [index, setIndex] = useState(0);

  useEffect(() => {
    setDisplayText("");
    setIndex(0);
  }, [text]);

  useEffect(() => {
    if (index < text.length) {
      const timeout = setTimeout(() => {
        setDisplayText((prev) => prev + text[index]);
        setIndex((prev) => prev + 1);
      }, speed);

      return () => clearTimeout(timeout);
    }
  }, [index, speed, text]);

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1 }}
      dangerouslySetInnerHTML={{ __html: displayText }}
      className="text-xs leading-5 text-justify md:leading-normal md:text-base"
    />
  );
};

export default AnimasiNgetik;
