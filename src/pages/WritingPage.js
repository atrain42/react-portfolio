import React from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";

import ReadMore from "../components/ReadMore/ReadMore";
import classes from "../components/Articles/SingleArticle.module.css";

const WritingPage = ({ data }) => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
    >
      <section className={classes.writingPage}>
        <h1 className={classes.shelfTitle}>/ Shelf</h1>
        <React.Fragment>
          {data.map((card, index) => (
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
    </motion.div>
  );
};

export default WritingPage;
