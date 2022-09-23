import { useRef } from "react";
import { useInView } from "framer-motion";
import SingleLink from "./SingleLink";
import classes from "./SocialLinks.module.css";

import github from "../../images/github.svg";
import resume from "../../images/resume.svg";
import linkedin from "../../images/linkedin.svg";
import codewars from "../../images/codewars.svg";
import twitter from "../../images/twitter.svg";

const socials = [
  {
    image: github,
    path: "https://github.com/atrain42",
  },
  {
    image: resume,
    path: "https://drive.google.com/file/d/1oy8PQTzikQGsmccPiPpcJpgXSm9RyMyz/view?usp=sharing",
  },
  {
    image: linkedin,
    path: "https://www.linkedin.com/in/austin-maxheimer-2ba1341b1/",
  },
  {
    image: codewars,
    path: "https://www.codewars.com/users/atrain42",
  },
  {
    image: twitter,
    path: "https://twitter.com/_PixelPrism",
  },
];

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
      {socials.map((link, i) => (
        <SingleLink key={i} {...link} />
      ))}
      <div className={classes.line}></div>
    </div>
  );
};

export default SocialLinks;
