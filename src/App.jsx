import React, { useEffect, useRef, useState } from "react";
import Hero from "./components/Hero";
import About from "./components/About";
import Works from "./components/Works";
import Contact from "./components/Contact";
import Navbar from "./components/Navbar";

const App = () => {
  const containerRef = useRef(null);
  const [activeSection, setActiveSection] = useState("hero");

  useEffect(() => {
    const container = containerRef.current;
    const sections = container.querySelectorAll(".snap-always");
    let isScrolling = false;
    let currentSectionIndex = 0;

    const options = {
      threshold: 0.2,
    };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          const id = entry.target.id;
          window.history.pushState(null, null, `#${id}`);
          currentSectionIndex = Array.from(sections).indexOf(entry.target);
          setActiveSection(id);

          // Add overscroll-behavior to body when Contact is active
          if (id === "contact") {
            document.body.style.overscrollBehaviorY = "none";
          } else {
            document.body.style.overscrollBehaviorY = "auto"; // Reset it when not on Contact
          }
        }
      });
    }, options);

    sections.forEach((section) => {
      observer.observe(section);
    });

    const handleScroll = (event) => {
      event.preventDefault();
      if (isScrolling) return;

      isScrolling = true;
      const direction = event.deltaY > 0 ? 1 : -1;
      const nextIndex = Math.max(
        0,
        Math.min(currentSectionIndex + direction, sections.length - 1)
      );

      if (nextIndex !== currentSectionIndex) {
        sections[nextIndex].scrollIntoView({ behavior: "smooth" });
        currentSectionIndex = nextIndex;
      }

      setTimeout(() => {
        isScrolling = false;
      }, 2000);
    };

    container.addEventListener("wheel", handleScroll, { passive: false });

    return () => {
      container.removeEventListener("wheel", handleScroll);
      observer.disconnect();
      // Reset overscroll-behavior on cleanup
      document.body.style.overscrollBehaviorY = "auto";
    };
  }, []);

  return (
    <>
      <Navbar
        activeSection={activeSection}
        scrollToSection={(sectionId) => {
          const section = document.getElementById(sectionId);
          if (section) {
            section.scrollIntoView({ behavior: "smooth" });
          }
        }}
      />
      <div
        ref={containerRef}
        className="w-screen overflow-y-scroll h-svh no-scrollbar snap-y scroll-smooth snap-mandatory"
      >
        <Hero id="hero" className="snap-always" />
        <About id="about" className="snap-always" />
        <Works id="works" className="snap-always" />
        <Contact id="contact" className="snap-always" />
      </div>
    </>
  );
};

export default App;
