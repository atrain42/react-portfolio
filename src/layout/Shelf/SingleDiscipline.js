import React, { useRef } from "react";

import { useInView } from "framer-motion";

import "./SingleDiscipline.css";

export default function SingleDiscipline({ year, issue, solution, result }) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  const fade = {
    opacity: isInView ? 1 : 0,
    transition: "all 0.9s ease-in 0.9s",
  };

  return (
    <div className="history" ref={ref}>
      <h1
        style={{
          transform: isInView ? "none" : "translateX(40px)",
          opacity: isInView ? 1 : 0,
          transition: "all 0.9s ease-in",
        }}
      >
        {year}
      </h1>
      <div className="history-break"></div>
      <span style={fade}>
        <h2>Issue:</h2>
        <p>{issue}</p>
      </span>
      <span style={fade}>
        <h2>Solution:</h2>
        <p>{solution}</p>
      </span>
      <span style={fade}>
        <h2>Result:</h2>
        <p>{result}</p>
      </span>
    </div>
  );
}
