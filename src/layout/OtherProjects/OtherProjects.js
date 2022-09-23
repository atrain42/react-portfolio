import CourseCard from "../../components/CourseCard/CourseCard";

import classes from "./OtherProjects.module.css";

const OtherProjects = () => {
  return (
    <section className={classes.otherSection}>
      <h1 className={classes.projectTitle}>Other Projects</h1>
      <h6>
        See some of the projects I've built in bootcamps and smaller projects
        I've built on my own.
      </h6>
      <CourseCard />
    </section>
  );
};

export default OtherProjects;
