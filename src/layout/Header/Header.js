import { useRef } from "react";
import { useInView } from "framer-motion";
import ButtonLink from "../../components/ButtonLink/ButtonLink";
import classes from "./Header.module.css";

const Header = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  return (
    <header className={classes.header} ref={ref}>
      <div className={classes.headerText}>
        <h3
          style={{
            transform: isInView ? "none" : "translateX(40px)",
            opacity: isInView ? 1 : 0,
            transition: "all 0.9s cubic-bezier(0.17, 0.55, 0.55, 1)",
          }}
        >
          Hi, my name is
        </h3>
        <h1
          style={{
            transform: isInView ? "none" : "translateX(40px)",
            opacity: isInView ? 1 : 0,
            transition: "all 0.9s cubic-bezier(0.17, 0.55, 0.55, 1) 0.25s",
          }}
        >
          Austin Maxheimer
        </h1>
        <h2
          style={{
            transform: isInView ? "none" : "translateX(40px)",
            opacity: isInView ? 1 : 0,
            transition: "all 0.9s cubic-bezier(0.17, 0.55, 0.55, 1) 0.5s",
          }}
        >
          I drive innovation on the web.
        </h2>
        <p
          style={{
            opacity: isInView ? 1 : 0,
            transition: "all 0.9s cubic-bezier(0.17, 0.55, 0.55, 1) 0.75s",
          }}
        >
          I'm a software developer primarily focused on the frontend. I
          speciailze in CSS and JavaScript, and am currently advancing my React
          skills.
        </p>
        <ButtonLink
          source="https://www.pixelinvite.com/"
          title="View my recent project"
        />
      </div>
    </header>
  );
};

export default Header;
