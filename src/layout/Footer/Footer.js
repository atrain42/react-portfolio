import { useRef } from "react";
import { useInView } from "framer-motion";

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
      <a href="mailto:maxheimer4211@gmail.com">contact me</a>
      <div className={classes.copyright}>
        <div
          className={classes.copyLine}
          style={{
            transform: isInView ? "none" : "translateX(-70px)",
            opacity: isInView ? 1 : 0,
            transition: "all 0.9s cubic-bezier(0.17, 0.55, 0.55, 1) 0.75s",
          }}
        ></div>
        <h1>Created by: Austin Maxheimer | React</h1>
        <div
          className={classes.copyLine}
          style={{
            transform: isInView ? "none" : "translateX(70px)",
            opacity: isInView ? 1 : 0,
            transition: "all 0.9s cubic-bezier(0.17, 0.55, 0.55, 1) 0.75s",
          }}
        ></div>
      </div>
    </section>
  );
};

export default Footer;
