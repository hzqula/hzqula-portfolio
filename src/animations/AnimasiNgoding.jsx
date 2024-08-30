import React, { useState, useEffect, useRef } from "react";

const AnimasiNgoding = () => {
  const [lines, setLines] = useState([]);
  const isFirstRunRef = useRef(true);

  const codeString = `console.log("Hello, World!");
const frontEnd = false;
const UIUXDesigner = false;
const greeting = () => {
  if (!frontEnd && !UIUXDesigner) {
    return "Hi, I'm Front-end Dev and UI/UX Designer";
  }
}`;

  useEffect(() => {
    const animateText = async () => {
      const codeLines = codeString.split("\n");

      if (isFirstRunRef.current) {
        await new Promise((resolve) => setTimeout(resolve, 3000));
        isFirstRunRef.current = false;
      }

      // Animasi mengetik
      for (let lineIndex = 0; lineIndex < codeLines.length; lineIndex++) {
        const line = codeLines[lineIndex];
        for (let charIndex = 0; charIndex <= line.length; charIndex++) {
          setLines((prevLines) => {
            const newLines = [...prevLines];
            newLines[lineIndex] = line.slice(0, charIndex);
            return newLines;
          });
          await new Promise((resolve) => setTimeout(resolve, 50));
        }
        await new Promise((resolve) => setTimeout(resolve, 0));
      }

      await new Promise((resolve) => setTimeout(resolve, 3000));

      // Animasi menghapus
      for (let lineIndex = codeLines.length - 1; lineIndex >= 0; lineIndex--) {
        const line = codeLines[lineIndex];
        for (let charIndex = line.length; charIndex >= 0; charIndex--) {
          setLines((prevLines) => {
            const newLines = [...prevLines];
            newLines[lineIndex] = line.slice(0, charIndex);
            return newLines;
          });
          await new Promise((resolve) => setTimeout(resolve, 0));
        }
      }

      await new Promise((resolve) => setTimeout(resolve, 1000));

      animateText();
    };

    animateText();
  }, []);

  return (
    <svg viewBox="0 3 20 14" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path
        d="M2 13H18V5H2V13ZM11 14V15H15V16H5V15H9V14H1L1 4H19L19 14H11 15z"
        className="fill-primary"
      />
      <g>
        {lines.map((line, index) => (
          <text
            key={index}
            x="3"
            y={6 + index * 0.7}
            fontSize=".4"
            className="font-bold whitespace-pre fill-primary font-code"
          >
            {line}
          </text>
        ))}
      </g>
    </svg>
  );
};

export default AnimasiNgoding;
