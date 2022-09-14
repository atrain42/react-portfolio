import "./Shelf.css";
import Work from "../layout/Shelf/Work";
import Discipline from "../layout/Shelf/Discipline";
import SecondaryNav from "../components/Navbar/SecondaryNav";
import Footer from "../layout/Footer/Footer";

const Shelf = () => {
  return (
    <section className="shelf">
      <SecondaryNav />
      <Work />
      <Discipline />
      <Footer />
    </section>
  );
};

export default Shelf;
