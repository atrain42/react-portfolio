import Shelf from "../layout/Shelf/Shelf";

import classes from "./WritingPage.module.css";
import { motion } from "framer-motion";

const WritingPage = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
    >
      <section className={classes.writingPage}>
        <h1 className="section-title">/ Shelf</h1>
        <Shelf />
      </section>
    </motion.div>
  );
};

export default WritingPage;
