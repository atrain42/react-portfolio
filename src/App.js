import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

import HomePage from "./pages/HomePage";
import WritingPage from "./pages/WritingPage";
import ScrollToTop from "./components/ScrollToTop";
import SocialLinks from "./components/SocialLinks/SocialLinks";
import FixedEmail from "./components/FixedEmail/FixedEmail";
import Articles from "./components/Articles/Articles";

import { AnimatePresence } from "framer-motion";

import Navbar from "./components/Navbar/Navbar";

function App() {
  const writings = [
    {
      title: "Interview Experience",
      description:
        "Certainty determine at of arranging perceived situation or. Or wholly pretty county in oppose. Favour met itself wanted settle put garrettwenty. In astonished apartments resolution so an it. Unsatiable on by contrasted to reasonable companions an.",
    },
    {
      title: "Coding Journey",
      description:
        "Certainty determine at of arranging perceived situation or. Or wholly pretty county in oppose. Favour met itself wanted settle put garrettwenty. In astonished apartments resolution so an it. Unsatiable on by contrasted to reasonable companions an.",
    },
    {
      title: "Hellooooooo",
      description:
        "Certainty determine at of arranging perceived situation or. Or wholly pretty county in oppose. Favour met itself wanted settle put garrettwenty. In astonished apartments resolution so an it. Unsatiable on by contrasted to reasonable companions an.",
    },
    {
      title: "Hellooooooo",
      description:
        "Certainty determine at of arranging perceived situation or. Or wholly pretty county in oppose. Favour met itself wanted settle put garrettwenty. In astonished apartments resolution so an it. Unsatiable on by contrasted to reasonable companions an.",
    },
    {
      title: "Hellooooooo",
      description:
        "Certainty determine at of arranging perceived situation or. Or wholly pretty county in oppose. Favour met itself wanted settle put garrettwenty. In astonished apartments resolution so an it. Unsatiable on by contrasted to reasonable companions an.",
    },
  ];

  return (
    <Router>
      <SocialLinks />
      <Navbar />
      <ScrollToTop />
      <AnimatePresence exitBeforeEnter>
        <Routes>
          <Route path="/" element={<HomePage data={writings} />} />
          <Route path="/writing" element={<WritingPage />} />
          <Route
            path="/article/:title"
            element={<Articles data={writings} />}
          />
        </Routes>
      </AnimatePresence>
      <FixedEmail />
    </Router>
  );
}

export default App;
