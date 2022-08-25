import { useRef } from "react";
import { useInView } from "framer-motion";

import ProjectContainer from "../../components/ProjectCard/ProjectContainer";
import classes from "./Projects.module.css";
import diamond from "../../images/diamonds.svg";

const Projects = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  return (
    <section className={classes.projectSection} ref={ref}>
      <div className="sectionHeadingContainer">
        <h1
          className="projects-title"
          style={{
            transform: isInView ? "none" : "translateX(70px)",
            opacity: isInView ? 1 : 0,
            transition: "all 0.9s cubic-bezier(0.17, 0.55, 0.55, 1)",
          }}
        >
          Featured Projects
        </h1>
        <div
          className="linebreak"
          style={{
            transform: isInView ? "none" : "translateX(70px)",
            opacity: isInView ? 1 : 0,
            transition: "all 0.9s cubic-bezier(0.17, 0.55, 0.55, 1) 0.5s",
          }}
        ></div>
        <img
          src={diamond}
          alt="diamonds"
          className="diamond"
          style={{
            transform: isInView ? "none" : "translateX(70px)",
            opacity: isInView ? 1 : 0,
            transition: "all 0.9s cubic-bezier(0.17, 0.55, 0.55, 1) 0.75s",
          }}
        />
      </div>
      <ProjectContainer />
    </section>
  );
};

export default Projects;
