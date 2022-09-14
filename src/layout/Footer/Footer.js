import { useRef } from "react";
import { useInView } from "framer-motion";
import github from "../../images/github.svg";
import resume from "../../images/resume.svg";
import linkedin from "../../images/linkedin.svg";
import codewars from "../../images/codewars.svg";
import twitter from "../../images/twitter.svg";

import classes from "./Footer.module.css";

const Footer = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  return (
    <section className={classes.footer} ref={ref} id="contact">
      <h1
        style={{
          transform: isInView ? "none" : "translateY(70px)",
          opacity: isInView ? 1 : 0,
          transition: "all 0.9s cubic-bezier(0.17, 0.55, 0.55, 1) ",
        }}
      >
        Reach out
      </h1>
      <p
        style={{
          opacity: isInView ? 1 : 0,
          transition: "all 0.9s cubic-bezier(0.17, 0.55, 0.55, 1) 0.5s",
        }}
      >
        Feel free to reach out and contact me. I am always open to hearing about
        new job opportunities. Let's collaborate and build something cool.
      </p>
      <a href="mailto:maxheimer4211@gmail.com" className={classes.contactBtn}>
        contact me
      </a>
      <div className={classes.copyright}>
        <div className={classes.footerLinks}>
          <a href="https://github.com/atrain42">
            <img src={github} alt="github" className={classes.dot} />
          </a>
          <a href="https://drive.google.com/file/d/1oy8PQTzikQGsmccPiPpcJpgXSm9RyMyz/view?usp=sharing">
            <img src={resume} alt="resume" className={classes.mid} />
          </a>
          <a href="https://www.linkedin.com/in/austin-maxheimer-2ba1341b1/">
            <img src={linkedin} alt="linkedin" className={classes.github} />
          </a>
          <a href="https://www.codewars.com/users/atrain42">
            <img src={codewars} alt="codewars" className={classes.farright} />
          </a>
          <a href="https://twitter.com/_PixelPrism">
            <img src={twitter} alt="twitter" className={classes.farright} />
          </a>
        </div>
        <h1>Created by: Austin Maxheimer | React</h1>
      </div>
    </section>
  );
};

export default Footer;
