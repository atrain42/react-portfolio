import React, { useState, useEffect } from "react";
import { debounce } from "../../utilities/helpers";

import classes from "./Navbar.module.css";

const Navbar = () => {
  const [prevScrollPos, setPrevScrollPos] = useState(0);
  const [visible, setVisible] = useState(true);

  const handleScroll = debounce(() => {
    const currentScrollPos = window.pageYOffset;

    setVisible(
      (prevScrollPos > currentScrollPos &&
        prevScrollPos - currentScrollPos > 70) ||
        currentScrollPos < 10
    );

    setPrevScrollPos(currentScrollPos);
  }, 100);

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  }, [prevScrollPos, visible, handleScroll]);

  const navbarStyles = {
    position: "fixed",
    height: "60px",
    width: "100%",
    textAlign: "center",
    transition: "top 0.25s",
  };

  return (
    <div
      className={classes.nav}
      style={{ ...navbarStyles, top: visible ? "0" : "-60px" }}
    >
      <div className={classes.navButtons}>
        <button>About</button>
        <button>Projects</button>
        <button>Writing</button>
        <button>Contact</button>
      </div>
    </div>
  );
};

export default Navbar;
