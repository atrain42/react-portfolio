import { useRef } from "react";
import { useInView } from "framer-motion";

import classes from "./SingleProject.module.css";

const SingleProject = ({ title, info, technologies }) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });
  return (
    <div
      className={classes.singleProject}
      ref={ref}
      style={{
        opacity: isInView ? 1 : 0,
        transition: "all 0.9s cubic-bezier(0.17, 0.55, 0.55, 1)",
      }}
    >
      <h1>{title}</h1>
      <p>{info}</p>
      <p>{technologies}</p>
    </div>
  );
};

export default SingleProject;
