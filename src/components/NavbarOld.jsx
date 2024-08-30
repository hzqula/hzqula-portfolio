import React, { useState } from "react";
import { BiX } from "react-icons/bi";
import { FaFacebookF, FaInstagram, FaGithub } from "react-icons/fa";
import { MdOutlineMenu } from "react-icons/md";
import { motion } from "framer-motion";

const Navbar = ({ activeSection }) => {
  const [menu, setMenu] = useState(false);

  const handleMenu = () => {
    setMenu(!menu);
  };

  const menuVariants = {
    open: {
      opacity: 1,
      y: 0,
      transition: {
        type: "spring",
        stiffness: 300,
        damping: 30,
      },
    },
    closed: {
      opacity: 0,
      y: "-100%",
      transition: {
        type: "spring",
        stiffness: 300,
        damping: 30,
      },
    },
  };

  const itemVariants = {
    open: (index) => ({
      opacity: 1,
      x: 0,
      transition: {
        delay: index * 0.2,
        type: "spring",
        stiffness: 300,
        damping: 30,
      },
    }),
    closed: {
      opacity: 0,
      x: -50,
      transition: {
        type: "spring",
        stiffness: 300,
        damping: 30,
      },
    },
  };

  return (
    <>
      <button
        onClick={handleMenu}
        className="fixed z-50 p-4 rounded-full top-6 md:hidden right-8 bg-ownWhite"
      >
        {menu ? (
          <BiX size={48} color="#333333" />
        ) : (
          <MdOutlineMenu size={48} color="#333333" />
        )}
      </button>
      <header
        className={`${
          menu
            ? "fixed flex flex-col items-center justify-center top-0 z-[40] w-full h-screen border-b bg-primary border-ownWhite"
            : "hidden"
        } top-0 z-[40] items-center justify-center w-full h-20 border-b md:flex md:fixed bg-primary border-ownWhite`}
        variants={menuVariants}
        initial="closed"
        animate={menu ? "open" : "closed"}
      >
        <nav className="flex flex-col items-center justify-center w-full h-screen gap-8 px-16 py-12 md:py-0 md:px-0 md:justify-around md:h-auto md:w-4/5 md:flex-row">
          {/* CTA */}
          <ul
            className="flex flex-col justify-center h-full gap-8 text-2xl font-bold md:h-0 md:text-base md:flex-row md:font-semibold md:items-center text-ownWhite font-code"
            variants={menuVariants}
            initial="closed"
            animate={menu ? "open" : "closed"}
          >
            <li variants={itemVariants} custom={0}>
              <a
                href="#about"
                className={`${
                  activeSection === "about" ? "border-b-2 border-ownWhite" : ""
                } py-2`}
              >
                About
              </a>
            </li>
            <li variants={itemVariants} custom={0.2}>
              <a
                href="#works"
                className={`${
                  activeSection === "works" ? "border-b-2 border-ownWhite" : ""
                } py-2`}
              >
                Works
              </a>
            </li>
            <li variants={itemVariants} custom={0.2}>
              <a
                href="#contact"
                className={`${
                  activeSection === "contact"
                    ? "border-b-2 border-ownWhite"
                    : ""
                } py-2`}
              >
                Contact
              </a>
            </li>
          </ul>

          {/* Social Media */}
          <ul
            className="flex items-center self-end justify-start gap-8 text-3xl md:text-2xl text-ownWhite"
            variants={menuVariants}
            initial="closed"
            animate={menu ? "open" : "closed"}
          >
            <li variants={itemVariants} custom={0.4}>
              <a href="#">
                <FaFacebookF />
              </a>
            </li>
            <li variants={itemVariants} custom={0.6}>
              <a href="#">
                <FaInstagram />
              </a>
            </li>
            <li variants={itemVariants} custom={0.8}>
              <a href="#">
                <FaGithub />
              </a>
            </li>
          </ul>
        </nav>
      </header>
    </>
  );
};

export default Navbar;
