import ProjectCard from "./ProjectCard";
import ProjectText from "./ProjectText";

import classes from "../../layout/Projects/Projects.module.css";

const ProjectContainer = () => {
  return (
    <div className="project-overhang">
      <div className={classes.projectContainer}>
        <ProjectCard class="project-one" />
        <ProjectText
          head="Project Spotlight"
          title="Pixel Invite Application"
          info="An app that makes it easier for woman to invite people to their baby shower."
          classStyle="projectText"
        />
      </div>
      <div className={classes.projectContainer}>
        <ProjectCard class="project-two" />
        <ProjectText
          head="Project Spotlight"
          title="Websume Application"
          info="An app that makes it easier for woman to invite people to their baby shower."
          classStyle="middleText"
        />
      </div>
      <div className={classes.projectContainer}>
        <ProjectCard class="project-three" />
        <ProjectText
          head="Project Spotlight"
          title="My Old Portfolio"
          info="An app that makes it easier for woman to invite people to their baby shower."
          classStyle="projectText"
        />
      </div>
    </div>
  );
};

export default ProjectContainer;
