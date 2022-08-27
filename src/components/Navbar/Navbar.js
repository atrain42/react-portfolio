import React, { useState, useEffect } from "react";
import { Link } from "react-scroll";
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
        <Link to="about" spy={true} smooth={true} offset={50} duration={500}>
          <button>About</button>
        </Link>
        <Link to="projects" spy={true} smooth={true} offset={50} duration={500}>
          <button>Projects</button>
        </Link>
        <Link to="writing" spy={true} smooth={true} offset={0} duration={500}>
          <button>Writing</button>
        </Link>
        <Link to="contact" spy={true} smooth={true} offset={0} duration={500}>
          <button>Contact</button>
        </Link>
      </div>
    </div>
  );
};

export default Navbar;
