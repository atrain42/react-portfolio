import React from "react";
import { Link } from "react-scroll";

const NavLinks = ({ setOpen }) => {
  return (
    <ul>
      <li>
        <Link
          to="about"
          spy={true}
          smooth={true}
          offset={50}
          duration={500}
          onClick={() => setOpen(false)}
        >
          About
        </Link>
      </li>
      <li>
        <Link
          to="projects"
          spy={true}
          smooth={true}
          offset={50}
          duration={500}
          onClick={() => setOpen(false)}
        >
          Projects
        </Link>
      </li>
      <li>
        <Link
          to="writing"
          spy={true}
          smooth={true}
          offset={0}
          duration={500}
          onClick={() => setOpen(false)}
        >
          Writing
        </Link>
      </li>
      <li>
        <Link
          to="contact"
          spy={true}
          smooth={true}
          offset={0}
          duration={500}
          onClick={() => setOpen(false)}
        >
          Contact
        </Link>
      </li>
    </ul>
  );
};

export default NavLinks;
