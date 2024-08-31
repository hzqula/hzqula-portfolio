import React, { useState, useRef, useEffect } from "react";
import { motion } from "framer-motion";
import portofolio6 from "../assets/portofolio-6a.png";
import portofolio2 from "../assets/portofolio-2a.png";
import portofolio3 from "../assets/portofolio-3a.png";
import portofolio1 from "../assets/portofolio-1a.png";
import portofolio5 from "../assets/portofolio-5a.png";
import Showcase from "./Showcase";

import { SiTailwindcss, SiMariadb } from "react-icons/si";
import { FaPhp, FaJava } from "react-icons/fa6";
import { RiArrowRightFill, RiArrowLeftFill } from "react-icons/ri";
import { DiNginx } from "react-icons/di";
import {
  IoLogoFigma,
  IoLogoJavascript,
  IoLogoCss3,
  IoLogoHtml5,
  IoLogoReact,
} from "react-icons/io5";
import IconText from "./IconText";

const Works = ({ id }) => {
  const [width, setWidth] = useState(0);
  const [currentIndex, setCurrentIndex] = useState(0);
  const carousel = useRef();

  useEffect(() => {
    setWidth(carousel.current.scrollWidth - carousel.current.offsetWidth);
  }, []);

  const slideLeft = () => {
    setCurrentIndex((prevIndex) => Math.max(prevIndex - 1, 0));
  };

  const slideRight = () => {
    setCurrentIndex((prevIndex) =>
      Math.min(prevIndex + 1, portofolios.length - 1)
    );
  };

  const handleDragEnd = (event, info) => {
    const swipeThreshold = 50;
    if (info.offset.x < -swipeThreshold) {
      slideRight();
    } else if (info.offset.x > swipeThreshold) {
      slideLeft();
    }
  };

  const portofolios = [
    {
      title: "'Ilm",
      imgPath: portofolio3,
      imgAlt: "portofolio-3",
      content: `UI/UX Mobile App design competition project with the theme “Enhancing The Intellectuality of Future Developers To Envolyein The Highly Era” in order to celebrate the 16th anniversary of UIR Informatics Engineering. Featured by <span class="font-semibold">Gilang Ramadhan Indra</span>, <span class="font-semibold">M. Nabil Dawami</span>.`,
      icons: (
        <>
          <IoLogoFigma />
        </>
      ),
      path: "https://www.figma.com/design/6tnktii2OWSbpUujky1LPT/'Ilm?node-id=0-1&t=cjol8CgSVbbAqsZ2-1",
      btnContent: "See on Figma",
    },
    {
      title: "INKPTATIF",
      imgPath: portofolio5,
      imgAlt: "portofolio-5",
      content: `Web Programming Final Exam project - INKPTATIF is an application to facilitate the input of "Kerja Praktek” and "Tugas Akhir" grades for students in the Informatics Engineering Department. Featured by <span class="font-semibold">Ahmad Kurniawan</span>, <span class="font-semibold">Aufa Hajati</span>, <span class="font-semibold">Hafidz Alhadid Rahman</span>, <span class="font-semibold">Muhammad Aditya Rinaldi</span>.`,
      icons: (
        <>
          <SiTailwindcss />
          <IoLogoReact />
          <IconText content="ReCharts" />
          <FaPhp />
          <DiNginx />
          <SiMariadb />
        </>
      ),
      path: "https://github.com/hzqula/inkptatif-new",
      btnContent: "See on Github",
    },
    {
      title: "Scratch Library",
      imgPath: portofolio1,
      imgAlt: "portofolio-1",
      content: `Advanced Programming Final Exam project - which applies graph concepts. Featured by <span class="font-semibold">M. Nabil Dawami</span>, <span class="font-semibold">M. Rafly Wirayudha</span>, <span class="font-semibold">Surya Hidayatullah F</span>.`,
      icons: (
        <>
          <IoLogoCss3 />
          <FaJava />
          <IconText content="JavaFX" />
        </>
      ),
      path: "https://github.com/hzqula/scratch-library",
      btnContent: "See on Github",
    },
    {
      title: "CollegeTIF",
      imgPath: portofolio2,
      imgAlt: "portofolio-2",
      content: `Front-end WebDev Competition Infinity 2.0 of Gunadarma University's Project. Featured by <span class="font-semibold">Hafidz Alhadid Rahman</span>, <span class="font-semibold">Gilang Ramadhan Indra</span>.`,
      icons: (
        <>
          <IoLogoHtml5 />
          <IoLogoCss3 />
          <SiTailwindcss />
          <IoLogoJavascript />
        </>
      ),
      btnContent: "No Preview",
    },
    {
      title: "Wedding Invitation",
      imgPath: portofolio6,
      imgAlt: "portofolio-6",
      content: `Simple digital wedding invitation website that features audio. This website offers a streamlined and elegant way to invite guests to your special day, with the added touch of an audio element to enhance the experience.`,
      icons: (
        <>
          <SiTailwindcss />
          <IoLogoReact />
        </>
      ),
      path: "https://github.com/hzqula/wedding-invitation",
      btnContent: "See on Github",
    },
    // {
    //   title: "Simple Calculator",
    //   imgPath: portofolio4,
    //   imgAlt: "portofolio-4",
    //   content: `Simple JavaScript project - which computes using the .eval() method`,
    //   icons: (
    //     <>
    //       <IoLogoHtml5 />
    //       <IoLogoCss3 />
    //       <IoLogoJavascript />
    //     </>
    //   ),
    //   btnContent: "See on Github",
    // },
  ];

  return (
    <section
      id={id}
      className="flex flex-col items-center h-full lg:h-[calc(100vh_-_5rem)] justify-center w-screen lg:snap-end mx-auto bg-ownWhite snap-start snap-always"
    >
      <div className="relative flex flex-col items-center justify-center w-full h-full">
        <div className="flex flex-col items-center justify-center gap-4 mt-8 mb-2 lg:mt-0 lg:mb-8">
          <motion.h1
            transition={{ type: "spring", delay: 0.3 }}
            initial={{ opacity: 0, x: 32 }}
            whileInView={{ opacity: 1, x: 0 }}
            className="text-4xl font-extrabold lg:text-6xl font-text text-primary"
          >
            My Work
          </motion.h1>
          <div className="flex items-center justify-center w-full h-3 gap-4">
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
        </div>
        <motion.div ref={carousel} className="w-full overflow-hidden">
          <motion.div
            drag="x"
            dragConstraints={{ right: 0, left: -width }}
            onDragEnd={handleDragEnd}
            animate={{ x: -currentIndex * carousel.current?.offsetWidth || 0 }}
            transition={{ type: "spring", stiffness: 300, damping: 30 }}
            className="flex"
          >
            {portofolios.map((portofolio) => (
              <motion.div
                className="flex items-center justify-center min-w-full p-0 lg:p-8"
                key={portofolio.title}
              >
                <Showcase
                  title={portofolio.title}
                  imgPath={portofolio.imgPath}
                  imgAlt={portofolio.imgAlt}
                  content={portofolio.content}
                  icons={portofolio.icons}
                  btnContent={portofolio.btnContent}
                  path={portofolio.path}
                />
              </motion.div>
            ))}
          </motion.div>
        </motion.div>
        <div className="flex justify-center mt-4 space-x-2">
          {portofolios.map((_, index) => (
            <motion.div
              key={index}
              className={`w-3 h-3 rounded-full ${
                currentIndex === index ? "bg-primary" : "bg-secondary"
              }`}
              initial={{ scale: 1 }}
              animate={{ scale: currentIndex === index ? 1.2 : 1 }}
              transition={{ duration: 0.3 }}
            />
          ))}
        </div>
        {currentIndex > 0 && (
          <motion.button
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -20 }}
            transition={{ duration: 0.3 }}
            onClick={slideLeft}
            className="absolute flex items-center justify-center border-4 w-12 h-12 rounded-full bg-secondary border-primary left-12 top-auto bottom-8 md:bottom-28 lg:top-[calc(50%_+_2rem)]"
          >
            <RiArrowLeftFill className="w-8 h-8 fill-primary" />
          </motion.button>
        )}
        {currentIndex < portofolios.length - 1 && (
          <motion.button
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: 20 }}
            transition={{ duration: 0.3 }}
            onClick={slideRight}
            className="absolute flex items-center justify-center border-4 w-12 h-12 rounded-full bg-secondary border-primary right-12 top-auto bottom-8 md:bottom-28 lg:top-[calc(50%_+_2rem)]"
          >
            <RiArrowRightFill className="w-8 h-8 fill-primary" />
          </motion.button>
        )}
      </div>
    </section>
  );
};

export default Works;
