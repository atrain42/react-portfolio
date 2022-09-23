import React from "react";
import { Link } from "react-router-dom";
import { useRef } from "react";
import { useInView } from "framer-motion";
import classes from "./About.module.css";

import img from "../../images/austin.jpg";
import quill from "../../images/quill.svg";

const About = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  return (
    <section className={classes.aboutOverhang} id="about">
      <div className="writingHeadingContainer" ref={ref}>
        <img
          src={quill}
          alt="quill"
          id="pacman"
          style={{
            transform: isInView ? "none" : "translateX(-70px)",
            opacity: isInView ? 1 : 0,
            transition: "all 0.9s linear 0.75s",
          }}
        />
        <div
          className="linebreak"
          style={{
            transform: isInView ? "none" : "translateX(-70px)",
            opacity: isInView ? 1 : 0,
            transition: "all 0.9s cubic-bezier(0.17, 0.55, 0.55, 1) 0.5s",
          }}
        ></div>
        <h1
          className="writing-title"
          style={{
            transform: isInView ? "none" : "translateX(-70px)",
            opacity: isInView ? 1 : 0,
            transition: "all 0.9s cubic-bezier(0.17, 0.55, 0.55, 1)",
          }}
        >
          About
        </h1>
      </div>
      <div className={classes.aboutSection}>
        <div className={classes.aboutSectionText}>
          <h1 className="section-title">Hi there 👋</h1>
          <p>
            I am a self-taught, frontend developer who learned to code while
            working a full time job as a robotics engineer. I specialize in{" "}
            <span>CSS</span>, <span>JavaScript</span>, and <span>React</span>. I
            am always working on new projects and researching new topics.
            <br />
            <br />
            As mentioned above, before software development I was working as a
            robotic process engineer where I was programming robots to paint
            cars. I made the switch to software development because I have
            always enjoyed artwork and technology and I find that frontend
            development is the perfect way to combine both.
            <br />
            <br />
            What makes me a good software engineer is my attention to detail. I
            emphasize the small details when creating projects because I believe
            it greatly improves the user experience.
          </p>
          <div>
            <h2>Here are some technologies I use to build projects:</h2>
            <ul>
              <li>&#8226; CSS</li>
              <li>&#8226; React | Redux</li>
              <li>&#8226; JavaScript (ES6)</li>
              <li>&#8226; Handlebars</li>
              <li>&#8226; Express</li>
              <li>&#8226; Sass</li>
            </ul>
          </div>
        </div>
        <div className={classes.subbed}>
          <img src={img} alt="coder" />
          <Link to="/shelf">Learn more</Link>
        </div>
      </div>
    </section>
  );
};

export default About;
