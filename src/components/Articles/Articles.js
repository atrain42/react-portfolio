import { useParams } from "react-router-dom";

import classes from "./SingleArticle.module.css";
import { motion } from "framer-motion";

const Articles = ({ data }) => {
  const { title } = useParams();
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
    >
      <section className={classes.articles}>
        {data
          .filter((card) => card.title === title)
          .map((card, index) => (
            <div className={classes.singleArticle} key={index}>
              <h1>{card.title}</h1>
              <p id="writingInfo">{card.description}</p>
              <p id="writingInfo">{card.contentone}</p>
              <p id="writingInfo">{card.contenttwo}</p>
              <p id="writingInfo">{card.contentthree}</p>
              {card.image ? (
                <img src={card.image} alt="rendering" />
              ) : (
                <div></div>
              )}
              <p id="writingInfo">{card.contentfour}</p>
              {card.imagetwo ? (
                <img src={card.imagetwo} alt="code" />
              ) : (
                <div></div>
              )}
              <p id="writingInfo">{card.conclusion}</p>
            </div>
          ))}
      </section>
    </motion.div>
  );
};

export default Articles;
