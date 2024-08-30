import React from "react";
import { FaArrowRightLong } from "react-icons/fa6";

const BtnPrimary = ({ content, path = "#", flex, type = "first" }) => {
  return type === "first" ? (
    <a
      href={path}
      target="_blank"
      className={`font-bold inline-flex items-center gap-4 lg:text-2xl text-primary border-none py-4 px-0 mx-[0.1rem] font-code relative
      after:content-[''] after:w-0 after:h-[3px] after:inline-block after:absolute after:bottom-0 after:left-0 after:bg-primary after:transition-all after:duration-[400ms] ${flex}
      hover:after:w-full hover:transition-all hover:duration-[400ms]`}
    >
      {content}
      <FaArrowRightLong />
    </a>
  ) : (
    <a
      href={path}
      target="_blank"
      className={`font-bold inline-flex items-center gap-4 lg:text-2xl text-ownWhite border-none py-4 px-0 mx-[0.1rem] font-code relative
      after:content-[''] after:w-0 after:h-[3px] after:inline-block after:absolute after:bottom-0 after:left-0 after:bg-ownWhite after:transition-all after:duration-[400ms] ${flex}
      hover:after:w-full hover:transition-all hover:duration-[400ms]`}
    >
      {content}
      <FaArrowRightLong />
    </a>
  );
};

export default BtnPrimary;
