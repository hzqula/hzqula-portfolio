import React from "react";

const BtnSecondary = ({ children, flex, ...props }) => {
  return (
    <button
      {...props}
      className={`font-bold border-primary border-[3px] lg:text-base text-primary font-code relative transition-all duration-[400ms]
      after:contents-[''] after:w-0 after:h-full after:z-[-1] hover:text-ownWhite after:inline-block after:absolute after:bottom-0 after:left-0 after:bg-primary after:transition-all after:duration-[400ms] ${flex}
      hover:after:w-full hover:transition-all hover:duration-[400ms]`}
    >
      {children}
    </button>
  );
};

export default BtnSecondary;
