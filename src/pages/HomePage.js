import React from "react";

import Header from "../layout/Header/Header";
import About from "../layout/About/About";
import Projects from "../layout/Projects/Projects";
import OtherProjects from "../layout/OtherProjects/OtherProjects";
import Writing from "../layout/Writing/Writing";
import Footer from "../layout/Footer/Footer";

import { motion } from "framer-motion";

const HomePage = ({ data }) => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
    >
      <Header />
      <About />
      <Projects />
      <OtherProjects />
      <Writing data={data} />
      <Footer />
    </motion.div>
  );
};

export default HomePage;
