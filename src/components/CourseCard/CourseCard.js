import React, { useState } from "react";

import classes from "./CourseCard.module.css";
// import ButtonLink from "../../components/ButtonLink/ButtonLink";

import SingleProject from "./SingleProject.js";

const projects = [
  {
    title: "Forkify",
    info: "This site allows you to search food key words and it displays a list of results.",
    technologies: "CSS | JavaScript | MVC ",
    id: 1,
    destination: "https://austin-max-forkify.netlify.app/",
  },
  {
    title: "Mapty",
    info: "This site allows you to track different types of workouts you have done in your city.",
    technologies: "CSS | JavaScript | API  ",
    id: 2,
    destination: "https://javascriptcourse-mapty.netlify.app/",
  },
  {
    title: "Food Order App",
    info: "A template for a restuarant's website. You can add and remove different menu items to the shopping cart.",
    technologies: "CSS | React | Hooks  ",
    id: 3,
    destination: "https://react-food-order-amax.netlify.app/",
  },
  {
    title: "Cocktail Search",
    info: "An app that fectches different cocktail recipes and displays and reads key strokes in a search bar.",
    technologies: "React | Netlify",
    id: 4,
    destination: "https://cocktails-react-amax.netlify.app/",
  },
  {
    title: "Expense App",
    info: "This is a very basic application that allows you to add different expenses and sort them by the year they were purchased.",
    technologies: "React | JavaScript",
    id: 5,
    destination: "https://expenses-react-austin.netlify.app/",
  },
  {
    title: "Mortgage Calculator",
    info: "A mortgage calculator that allows you to get a rough estimate on the monthly payments of your desired home",
    technologies: "HTML| JavaScript ",
    id: 6,
    destination: "https://mortgage-cost-calculator.herokuapp.com/",
  },
];

const CourseCard = () => {
  const trimmedProjects = projects.slice(0, 3);
  const [projectItems, setProjectItems] = useState(trimmedProjects);

  const showAllHandler = () => {
    setProjectItems(projects);
  };
  return (
    <React.Fragment>
      <div className={classes.courseCard}>
        {projectItems.map((project) => (
          <SingleProject key={project.id} {...project} />
        ))}
      </div>
      <div className={classes.btnContainer}>
        <button onClick={showAllHandler}>show more</button>
      </div>
    </React.Fragment>
  );
};

export default CourseCard;
