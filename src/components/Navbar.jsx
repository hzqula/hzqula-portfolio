import React, { useState, useEffect } from "react";
import { BiX } from "react-icons/bi";
import { FaFacebookF, FaLinkedinIn, FaGithub } from "react-icons/fa";
import { MdOutlineMenu } from "react-icons/md";
import { motion } from "framer-motion";

const Navbar = ({ activeSection, scrollToSection }) => {
  const [menu, setMenu] = useState(false);
  const [isMobile, setIsMobile] = useState(false);

  const handleMenu = () => {
    setMenu(!menu);
  };

  useEffect(() => {
    const updateScreenWidth = () => {
      setIsMobile(window.innerWidth <= 767);
    };
    updateScreenWidth();
    window.addEventListener("resize", updateScreenWidth);
    return () => {
      window.removeEventListener("resize", updateScreenWidth);
    };
  }, []);

  useEffect(() => {
    if (menu) {
      document.body.style.overscrollBehaviorY = "none";
    } else {
      document.body.style.overscrollBehaviorY = "";
    }
  }, [menu]);

  const menuVariants = {
    open: {
      clipPath: `circle(1980px at calc(100% - 40px) 40px)`,
      transition: {
        type: "spring",
        delay: 0,
        stiffness: 60,
        damping: 40,
      },
    },
    closed: {
      clipPath: "circle(38px at calc(100% - 104px) 72px)",
      transition: {
        delay: 1,
        type: "spring",
        stiffness: 320,
        damping: 40,
      },
    },
  };

  const handleLinkClick = (e, sectionId) => {
    e.preventDefault();
    scrollToSection(sectionId);
  };

  const animasiLinkCTA = (delayAwal, delayAkhir) => {
    const delayBuka = delayAwal;
    const delayTutup = delayAkhir;

    return {
      transition: { type: "spring", delay: menu ? delayBuka : delayTutup },
      initial: menu ? { opacity: 0, x: -32 } : { opacity: 1, x: 0 },
      animate: menu ? { opacity: 1, x: 0 } : { opacity: 0, x: -32 },
    };
  };

  const animasiLinkSosmed = (delayAwal, delayAkhir) => {
    const delayBuka = delayAwal;
    const delayTutup = delayAkhir;

    return {
      transition: { type: "spring", delay: menu ? delayBuka : delayTutup },
      initial: menu ? { opacity: 0, y: 32 } : { opacity: 1, y: 0 },
      animate: menu ? { opacity: 1, y: 0 } : { opacity: 0, y: 32 },
    };
  };

  return (
    <>
      <button
        onClick={handleMenu}
        className="fixed z-50 p-4 rounded-full top-8 md:hidden right-16 bg-ownWhite"
      >
        {menu ? (
          <BiX size={48} color="#333333" />
        ) : (
          <MdOutlineMenu size={48} color="#333333" />
        )}
      </button>

      {/* Mobile Navbar */}
      {isMobile && (
        <motion.nav
          className="fixed flex p-8 flex-col items-center justify-center top-0 z-[40] w-full h-dvh border-b bg-primary border-ownWhite"
          variants={menuVariants}
          initial="closed"
          animate={menu ? "open" : "closed"}
        >
          <div className="flex flex-col items-center justify-center w-full h-screen gap-8">
            <ul className="flex flex-col justify-center h-full gap-8 text-2xl font-bold">
              <motion.li {...animasiLinkCTA(0.4, 0.2)}>
                <a
                  href="#about"
                  className={`text-2xl font-bold text-white ${
                    activeSection === "about"
                      ? "border-b-2 border-ownWhite"
                      : ""
                  }`}
                  onClick={handleMenu}
                >
                  About
                </a>
              </motion.li>
              <motion.li {...animasiLinkCTA(0.6, 0.3)}>
                <a
                  href="#works"
                  className={`text-2xl font-bold text-white ${
                    activeSection === "works"
                      ? "border-b-2 border-ownWhite"
                      : ""
                  }`}
                  onClick={handleMenu}
                >
                  Works
                </a>
              </motion.li>
              <motion.li {...animasiLinkCTA(0.8, 0.4)}>
                <a
                  href="#contact"
                  className={`text-2xl font-bold text-white ${
                    activeSection === "contact"
                      ? "border-b-2 border-ownWhite"
                      : ""
                  }`}
                  onClick={handleMenu}
                >
                  Contact
                </a>
              </motion.li>
            </ul>

            <ul className="flex items-center self-end justify-start gap-8 text-3xl text-ownWhite">
              <motion.li {...animasiLinkSosmed(1, 0.6)}>
                <a target="_blank" href="https://facebook.com/hzqula">
                  <FaFacebookF className="text-3xl text-white" />
                </a>
              </motion.li>
              <motion.li {...animasiLinkSosmed(1.2, 0.7)}>
                <a
                  target="_blank"
                  href="https://linkedin.com/in/muhammad-faruq-hz"
                >
                  <FaLinkedinIn className="text-3xl text-white" />
                </a>
              </motion.li>
              <motion.li {...animasiLinkSosmed(1.4, 0.8)}>
                <a target="_blank" href="https://github.com/hzqula">
                  <FaGithub className="text-3xl text-white" />
                </a>
              </motion.li>
            </ul>
          </div>
        </motion.nav>
      )}

      {/* Desktop/Tablet Navbar */}
      {!isMobile && (
        <header className="top-0 z-[40] items-center justify-center w-full h-20 border-b md:flex md:fixed bg-primary border-ownWhite hidden">
          <nav className="flex justify-around w-4/5 h-auto">
            {/* CTA */}
            <ul
              className="flex items-center justify-center gap-8 text-base font-semibold text-ownWhite font-code"
              variants={menuVariants}
              initial="closed"
              animate={menu ? "open" : "closed"}
            >
              <li>
                <a
                  href="#about"
                  className={`${
                    activeSection === "about"
                      ? "border-b-2 border-ownWhite"
                      : ""
                  } py-2`}
                  onClick={(e) => handleLinkClick(e, "about")}
                >
                  About
                </a>
              </li>
              <li>
                <a
                  href="#works"
                  className={`${
                    activeSection === "works"
                      ? "border-b-2 border-ownWhite"
                      : ""
                  } py-2`}
                  onClick={(e) => handleLinkClick(e, "works")}
                >
                  Works
                </a>
              </li>
              <li>
                <a
                  href="#contact"
                  className={`${
                    activeSection === "contact"
                      ? "border-b-2 border-ownWhite"
                      : ""
                  } py-2`}
                  onClick={(e) => handleLinkClick(e, "contact")}
                >
                  Contact
                </a>
              </li>
            </ul>

            {/* Social Media */}
            <ul
              className="flex items-center self-end justify-start gap-8 text-2xl text-ownWhite"
              variants={menuVariants}
              initial="closed"
              animate={menu ? "open" : "closed"}
            >
              <li>
                <a target="_blank" href="https://facebook.com/hzqula">
                  <FaFacebookF />
                </a>
              </li>
              <li>
                <a
                  target="_blank"
                  href="https://linkedin.com/in/muhammad-faruq-hz"
                >
                  <FaLinkedinIn />
                </a>
              </li>
              <li>
                <a target="_blank" href="https://github.com/hzqula">
                  <FaGithub />
                </a>
              </li>
            </ul>
          </nav>
        </header>
      )}
    </>
  );
};

export default Navbar;
