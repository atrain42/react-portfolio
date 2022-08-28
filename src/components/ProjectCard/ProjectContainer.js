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
          info="An app that makes it easier to invite guests to your baby shower. Offers a service that deploys custom websites that act as the invitation to your shower."
          classStyle="projectText"
          id="project-link"
          destination="https://www.pixelinvite.com/"
        />
      </div>
      <div className={classes.projectContainer}>
        <ProjectCard class="project-two" />
        <ProjectText
          head="Project Spotlight"
          title="Websume Application"
          info="A website that offers a service to turn your resume into your own personal website. I think everyone should have the opportunity to have their own website."
          classStyle="middleText"
          id="project-link-middle"
          destination="http://www.websume.org/"
        />
      </div>
      <div className={classes.projectContainer}>
        <ProjectCard class="project-three" />
        <ProjectText
          head="Project Spotlight"
          title="My Old Portfolio"
          info="Take a look at my old portfolio. See how my development skills have improved. Look at the difference in initial load time and overall site performance."
          classStyle="projectText"
          id="project-link"
          destination="https://austin-maxheimer-portfolio.herokuapp.com/"
        />
      </div>
    </div>
  );
};

export default ProjectContainer;
