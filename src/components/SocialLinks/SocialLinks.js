import { useRef } from "react";
import { useInView } from "framer-motion";
import classes from "./SocialLinks.module.css";

import github from "../../images/github.svg";
import resume from "../../images/resume.svg";
import linkedin from "../../images/linkedin.svg";
import codewars from "../../images/codewars.svg";

const SocialLinks = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  return (
    <div
      className={classes.socialLinks}
      ref={ref}
      style={{
        transform: isInView ? "none" : "translateY(-75px)",
        opacity: isInView ? 1 : 0,
        transition: "all 0.9s cubic-bezier(0.17, 0.55, 0.55, 1)",
      }}
    >
      <a href="https://www.codewars.com/users/atrain42">
        <img src={codewars} alt="codewars" className={classes.github} />
      </a>
      <a href="https://github.com/atrain42">
        <img src={github} alt="github" className={classes.github} />
      </a>
      <a href="https://drive.google.com/file/d/1oy8PQTzikQGsmccPiPpcJpgXSm9RyMyz/view?usp=sharing">
        <img src={resume} alt="resume" className={classes.github} />
      </a>
      <a href="https://www.linkedin.com/in/austin-maxheimer-2ba1341b1/">
        <img src={linkedin} alt="linkedin" className={classes.github} />
      </a>
      <div className={classes.line}></div>
    </div>
  );
};

export default SocialLinks;
