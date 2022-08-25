import React from "react";

import { Link } from "react-router-dom";
import classes from "./SingleArticle.module.css";

import ReadMore from "../ReadMore/ReadMore";

const SingleArticle = ({ data }) => {
  const slicedData = data.slice(0, 2);
  return (
    <React.Fragment>
      {slicedData.map((card, index) => (
        <div className={classes.singleArticle} key={index}>
          <h1>{card.title}</h1>
          <p>{card.description}</p>
          <Link to={`/article/${card.title}`}>
            <ReadMore />
          </Link>
        </div>
      ))}
    </React.Fragment>
  );
};

export default SingleArticle;
