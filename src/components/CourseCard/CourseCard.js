import React, { useState, useEffect } from "react";

import classes from "./CourseCard.module.css";
// import ButtonLink from "../../components/ButtonLink/ButtonLink";

import SingleProject from "./SingleProject.js";

const projects = [
  {
    title: "Pixel Prism",
    info: "This is my freelance site that I created with React. Animations were added using the Framer motion extension.",
    technologies: "React | JavaScript ",
    id: 1,
    destination: "https://www.pixelprism.dev/",
  },
  {
    title: "Food Order",
    info: "A template for a restuarant's website. You can add and remove different menu items to the shopping cart. *Available only on desktop*",
    technologies: "CSS | React | Hooks  ",
    id: 2,
    destination: "https://react-food-order-amax.netlify.app/",
  },
  {
    title: "Cocktail Search",
    info: "An app that fectches different cocktail recipes and displays and reads key strokes in a search bar.",
    technologies: "React | Netlify",
    id: 3,
    destination: "https://cocktails-react-amax.netlify.app/",
  },
  {
    title: "Mapty",
    info: "This site allows you to track different types of workouts you have done in your city. *Available only on desktop*",
    technologies: "CSS | JavaScript | API  ",
    id: 4,
    destination: "https://javascriptcourse-mapty.netlify.app/",
  },
  {
    title: "Matching Game",
    info: "A matching game created using React. Click the cards and see how many tries it takes you.",
    technologies: "React",
    id: 5,
    destination: "https://matching-game-app.netlify.app/",
  },
  {
    title: "Forkify",
    info: "This site allows you to search food key words and it displays a list of results. *Available only on desktop*",
    technologies: "CSS | JavaScript | MVC ",
    id: 6,
    destination: "https://austin-max-forkify.netlify.app/",
  },
];

const CourseCard = () => {
  const [isDesktop, setDesktop] = useState(window.innerWidth > 1025);
  let trimmedProjects = projects.slice(0, 3);
  let mobileTrim = projects.slice(0, 2);
  const [projectItems, setProjectItems] = useState(trimmedProjects);
  const [projectMobile, setProjectMobile] = useState(mobileTrim);
  const [changeButton, setChangeButton] = useState(false);

  const updateMedia = () => {
    setDesktop(window.innerWidth > 1025);
  };

  useEffect(() => {
    window.addEventListener("resize", updateMedia);
    return () => window.removeEventListener("resize", updateMedia);
  });

  const showAllHandler = () => {
    setProjectItems(projects);
    setProjectMobile(projects);
    setChangeButton(true);
  };

  const showLessHandler = () => {
    setProjectItems(trimmedProjects);
    setProjectMobile(mobileTrim);
    setChangeButton(false);
  };

  const buttonText = () => {
    if (!changeButton) {
      return <button onClick={showAllHandler}>show more</button>;
    } else {
      return <button onClick={showLessHandler}>show less</button>;
    }
  };

  return (
    <React.Fragment>
      <div className={classes.courseCard}>
        {isDesktop
          ? projectItems.map((project) => (
              <SingleProject key={project.id} {...project} />
            ))
          : projectMobile.map((project) => (
              <SingleProject key={project.id} {...project} />
            ))}
      </div>
      <div className={classes.btnContainer}>{buttonText()}</div>
    </React.Fragment>
  );
};

export default CourseCard;
