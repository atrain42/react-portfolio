import { useParams } from "react-router-dom";

import classes from "./SingleArticle.module.css";

const Articles = ({ data }) => {
  const { title } = useParams();
  return (
    <section className={classes.articles}>
      {data
        .filter((card) => card.title === title)
        .map((card, index) => (
          <div className={classes.singleArticle} key={index}>
            <h1>{card.title}</h1>
            <p>{card.description}</p>
          </div>
        ))}
    </section>
  );
};

export default Articles;
