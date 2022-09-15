import "./Shelf.css";

import Discipline from "../layout/Shelf/Discipline";
import SecondaryNav from "../components/Navbar/SecondaryNav";
import Footer from "../layout/Footer/Footer";
import { motion } from "framer-motion";

const Shelf = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
    >
      <section className="shelf">
        <SecondaryNav />

        <Discipline />
        <Footer />
      </section>
    </motion.div>
  );
};

export default Shelf;
