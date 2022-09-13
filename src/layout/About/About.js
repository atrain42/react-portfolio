import React from "react";
import classes from "./About.module.css";

import img from "../../images/tt1.svg";

const About = () => {
  return (
    <section className={classes.aboutSection} id="about">
      <div className={classes.aboutSectionText}>
        <h1 className="section-title">About Me</h1>
        <p>
          I am a self-taught, frontend developer who is highly motivated and
          always willing to learn new technologies. I specialize in{" "}
          <span>CSS</span>, <span>JavaScript</span>, and <span>React</span>. I
          am always working on new projects and researching new topics.
          <br />
          <br />
          Before software development, I was working as a robotic process
          engineer; here, I was programming robots to paint cars. I made the
          switch to software development because I have always enjoyed artwork
          and technology and I find that frontend development is the perfect way
          to combine both.
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
      <img src={img} alt="coder" />
    </section>
  );
};

export default About;
