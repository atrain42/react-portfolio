import {
  BrowserRouter as Router,
  Route,
  Routes,
  useLocation,
} from "react-router-dom";
import { useState, useEffect } from "react";

import { HomePage, WritingPage, Shelf } from "./pages";

import SocialLinks from "./components/SocialLinks/SocialLinks";
import FixedEmail from "./components/FixedEmail/FixedEmail";
import Articles from "./components/Articles/Articles";

import { AnimatePresence } from "framer-motion";

import renderingImg from "./images/rendering.webp";
import codingImg from "./images/coding.webp";

function ScrollToTop() {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return null;
}

function App() {
  // const [loading, setLoading] = useState(true);
  // const spinner = document.getElementById("spinner");
  // if (spinner) {
  //   setTimeout(() => {
  //     spinner.style.display = "none";
  //     setLoading(false);
  //   }, 4000);
  // }
  const writings = [
    {
      title: "Interview Experience",
      image: renderingImg,
      imagetwo: codingImg,
      description:
        "The process of switching careers into software development is not an easy road. It has been a very long, difficult grind and it is important to stay disciplined throughout the process. As I am trying to make the switch into frontend development, there are a few things I've noticed about software job postings and the interview process.",
      contentone:
        "One of the most important things I have realized recently is to do research on the company before sending in an application. You may think it's a good idea to blindly apply to a ton of jobs, but I don't think it's wise to send your information out so easily. There are scammers who create false job postings and act like they're hiring for software development positions. They then have access to the information on your resume like your phone number and email address. You will then begin to get a ton of spam in your inbox, and a lot of scam calls. I personally have seen a scam that actually sets up a microsoft teams interview. The scammers then act like you are participating in a technical interview and have you share your screen to solve problems. Sharing your screen may allow them to gain access to personal information that is stored on your computer.",
      contenttwo:
        "I have had a few interviews at this stage in my job search, and there a few trends that these software interviews tend to follow. The first is that you will speak to an HR representative before as the first round of interviews. During this initial conversation, they tell you about the company and expectations for the position you applied to. The only questions that I have recieved from the HR reps, is 'tell me a little about yourself' and 'what type of company culture are you looking for in your next position'. This stage is actually pretty easy, and there are not much, if any, behavioral questions.",
      contentthree:
        "The technical interviews are the most challenging part of the interview experience. It typically starts with general questions about the web development process. During one interview for an angular developer, I was giving an image of a web page and was asked how I would split the page up into different components. Another question I receieved was to explain the difference between server-side and client-side rendering; below you can see a type illustrating some key differences.",
      contentfour:
        "For another interview question, I was given two arrays of numbers and I had to write a function that found where the arrays intersect (where index of array1 = index of array2). I chose to solve this by using nest loops. In another interview, I received a very similar question. I was given the following array: const arr = ['boot', 'bootstrap', 'bootlace'] and I had to write a function that output the common characters of each index.",
      conclusion:
        "I think the best way to prepare for interviews is just to find practice problems to complete. I have yet to receive an interview question regarding HTML and CSS, so I recommend focussing your time and energy on JavaScript. A really good resource that I have been using to practice is called Frontend Expert on algoexpert.io. It has a lot of good practice problems to solve.",
    },
    {
      title: "Coding Journey",
      description:
        "It is very important to make sure you are learning the right way, when teaching yourself software development. There are a lot of different courses and material out there, so it is important to be able to filter out the bad material and only consume the good. There are a few things I would like to share that I learned in my journey.  ",
      contentone:
        "I think the most important concepts to learn first is HTML and CSS. This is the perfect introduction to code, and are fundamental building blocks to every web application. These two technologies are really easy to get started with, and allow you to get good visual feedback early. There are plenty of good HTML and CSS courses, and I think the best ones have projects that you build with an instructor. There is no better way to learn than doing, so it is important to always be creating projects. I took an HTML and CSS course on Udemy, that had a lot of cool projects I built with the instructor. Also while building the course projects, I was always playing around on the side and building personal projects; this is very important!",
      contenttwo:
        "Once you are comfortable with HTML and CSS, I recommend learning JavaScript. At first, the best way to learn JavaScript is through following tutorials or building projects with a course instructor. A lot of people will say to learn the theory first, but I found this to be kind of confusing at first. I just kept building different projects by following course instructors and YouTube tutorials. Even if I really didn't understand the concepts, I just kept building random things; it's all about repitition. It's a good idea to watch a tutorial, and then go off on your own and try to build that same project.",
      contentthree:
        "After you have a lot of JavaScript projects, something will to click. You will suddenly know how to write JavaScript and you will realize that all JavaScript is, is objects. At this point, I then recommend going back and diving into the theory of JavaScript. Look at concepts like the call stack, event loop, hoisting, and dig deep into understanding what exactly the DOM is. After you have a ton of projects under your belt and you see how different things are done, once you learn the theory, you begin to understand why things were done a certain way.",
      contentfour:
        "After you have a really solid understanding of JavaScript, I recommend learning a JavaScript framework. Frameworks like React, Angular and Vue are probably the most popular that I've seen. Recently, I've seen a lot of job postings that are looking for React developers. I personally learned React, and love how easy it is to make very cool projects and have dynamic content rendering on screen. P.S. React is technically a library, a lot of developers get salty if you called it a framework.",
      conclusion:
        "I recommend first learning HTML and CSS. Learn how to write clean HTML code, then style that HTML using CSS. After you're comfortable with that, start building JavaScript projects. Keep practicing JavaScript until you're comfortable enough to pick up a framework like React or Angular.",
    },
    {
      title: "Utilizing whitespace",
      description:
        "There are a lot of different things that go into creating the perfect UI. When I am creating a website, I like to think about how I can make things very simple, but still have character. I tend to prefer websites that don't have too much content on the screen, and utilize whitespace in their designs.",
      contentone:
        "Utilizing whitespace is very important when creating a website. There are a couple different categories of whitespace, and I talk about them in the following site you can visit:",
      link: "https://whitespace-article.netlify.app/",
    },
  ];

  return (
    <Router>
      <SocialLinks />
      <ScrollToTop />
      <AnimatePresence exitBeforeEnter>
        <Routes>
          <Route path="/" element={<HomePage data={writings} />} />
          <Route path="/writing" element={<WritingPage data={writings} />} />
          <Route
            path="/article/:title"
            element={<Articles data={writings} />}
          />
          <Route path="/shelf" element={<Shelf />} />
        </Routes>
      </AnimatePresence>
      <FixedEmail />
    </Router>
  );
}

export default App;
