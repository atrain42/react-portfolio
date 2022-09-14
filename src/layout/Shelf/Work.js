import Project from "./Project";
import dev from "../../images/dev.png";
import freelance from "../../images/freelance.png";
import invite from "../../images/invite.png";

import "./Work.css";

const Work = () => {
  return (
    <section className="quick-shelf">
      <h1>/ Quick shelf</h1>
      <div className="work">
        <Project
          src={dev}
          alt="dev"
          title="Porfolio"
          tech="React | JavaScript | CSS"
          direction="https://www.austinmaxheimer.com/"
        />
        <Project
          src={freelance}
          alt="dev"
          title="Freelance"
          tech="React | JavaScript | CSS"
          direction="https://pixel-prism.netlify.app/"
        />
        <Project
          src={invite}
          alt="dev"
          title="Pixel Invite"
          tech="React | JavaScript | CSS"
          direction="https://www.pixelinvite.com/"
        />
      </div>
    </section>
  );
};

export default Work;
