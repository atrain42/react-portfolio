import { useRef } from "react";
import { useInView } from "framer-motion";

import classes from "./SingleProject.module.css";

const SingleProject = ({ title, info, technologies, destination }) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  return (
    <div
      className={classes.singleProject}
      ref={ref}
      style={{
        transform: isInView ? "none" : "translateY(-20px)",
        opacity: isInView ? 1 : 0,
        transition: "all 0.9s cubic-bezier(0.17, 0.55, 0.55, 1)",
      }}
    >
      <h1>{title}</h1>
      <p>{info}</p>
      <h5>{technologies}</h5>
      <a href={destination}>visit &rarr;</a>
    </div>
  );
};

export default SingleProject;
