import { useRef } from "react";
import { useInView } from "framer-motion";

import classes from "./FixedEmail.module.css";

const FixedEmail = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  return (
    <div
      className={classes.fixedEmail}
      ref={ref}
      style={{
        transform: isInView ? "none" : "translateY(-75px)",
        opacity: isInView ? 1 : 0,
        transition: "all 0.9s cubic-bezier(0.17, 0.55, 0.55, 1)",
      }}
    >
      <a href="mailto:maxheimer4211@gmail.com">
        <h1>m</h1>
        <h1>a</h1>
        <h1>x</h1>
        <h1>h</h1>
        <h1>e</h1>
        <h1>i</h1>
        <h1>m</h1>
        <h1>e</h1>
        <h1>r</h1>
        <h1>4</h1>
        <h1>2</h1>
        <h1>1</h1>
        <h1>1</h1>
        <h1>@</h1>
        <h1>g</h1>
        <h1>m</h1>
        <h1>a</h1>
        <h1>i</h1>
        <h1>l</h1>
        <h1>.</h1>
        <h1>c</h1>
        <h1>o</h1>
        <h1>m</h1>
      </a>
      <div className={classes.line}></div>
    </div>
  );
};

export default FixedEmail;
