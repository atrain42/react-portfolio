import React from "react";
import { useRef } from "react";
import { useInView } from "framer-motion";
import { Link } from "react-router-dom";
import classes from "./SingleArticle.module.css";

import ReadMore from "../ReadMore/ReadMore";

const SingleArticle = ({ data }) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });
  const slicedData = data.slice(0, 2);
  return (
    <section
      ref={ref}
      style={{
        opacity: isInView ? 1 : 0,
        transition: "all 2s cubic-bezier(0.17, 0.55, 0.55, 1)",
      }}
    >
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
    </section>
  );
};

export default SingleArticle;
