import { useRef } from "react";
import { useInView } from "framer-motion";
import classes from "./Header.module.css";

const Header = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  return (
    <header className={classes.header} ref={ref}>
      <div className={classes.headerText}>
        <h3
          style={{
            transform: isInView ? "none" : "translateY(40px)",
            opacity: isInView ? 1 : 0,
            transition: "all 0.9s cubic-bezier(0.17, 0.55, 0.55, 1) 0.1",
          }}
        >
          Hi, my name is
        </h3>
        <h1
          style={{
            transform: isInView ? "none" : "translateY(40px)",
            opacity: isInView ? 1 : 0,
            transition: "all 0.9s cubic-bezier(0.17, 0.55, 0.55, 1) 0.25s",
          }}
        >
          Austin Maxheimer
        </h1>
        <h2
          style={{
            transform: isInView ? "none" : "translateY(40px)",
            opacity: isInView ? 1 : 0,
            transition: "all 0.9s cubic-bezier(0.17, 0.55, 0.55, 1) 0.50s",
          }}
        >
          I drive innovation on the web.
        </h2>
        <p
          style={{
            transform: isInView ? "none" : "translateY(40px)",
            opacity: isInView ? 1 : 0,
            transition: "all 0.9s cubic-bezier(0.17, 0.55, 0.55, 1) 0.75s",
          }}
        >
          I am a self-taught frontend developer. My current tech stack includes
          HTML, CSS, JavaScript, and React. I solve complex problems with simple
          solutions.
        </p>
        <a href="https://drive.google.com/file/d/1T52N6mSN8BTdDPdwzXqPBBXULNM8kG5S/view?usp=sharing">
          Go to resume
        </a>
      </div>
    </header>
  );
};

export default Header;
