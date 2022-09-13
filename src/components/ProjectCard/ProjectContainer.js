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
          title="Spotify API Application"
          info="I created this site in an online course. It utilizes the spotify API to fetch and display your listening trends."
          classStyle="middleText"
          id="project-link-middle"
          destination="https://spotify-info-viewer.herokuapp.com/"
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
