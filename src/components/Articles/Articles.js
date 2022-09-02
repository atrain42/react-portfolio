import { useParams } from "react-router-dom";
import SecondaryNav from "../../components/Navbar/SecondaryNav";

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
      <SecondaryNav />
      <section className={classes.articles}>
        {data
          .filter((card) => card.title === title)
          .map((card, index) => (
            <div className={classes.singleArticle} key={index}>
              <h1>{card.title}</h1>
              <p id="writingInfo">{card.description}</p>
              <p id="writingInfo">{card.contentone}</p>
              {card.contenttwo ? (
                <p id="writingInfo">{card.contenttwo}</p>
              ) : (
                <div></div>
              )}
              {card.contentthree ? (
                <p id="writingInfo">{card.contentthree}</p>
              ) : (
                <div></div>
              )}
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
              {card.conclusion ? (
                <p id="writingInfo">{card.conclusion}</p>
              ) : (
                <div></div>
              )}
              {card.link ? <a href={card.link}>{card.title}</a> : <div></div>}
            </div>
          ))}
      </section>
    </motion.div>
  );
};

export default Articles;
