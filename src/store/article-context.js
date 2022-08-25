import React, { createContext } from "react";

const writings = [
  {
    id: 1,
    title: "Interview Experience",
    description:
      "Certainty determine at of arranging perceived situation or. Or wholly pretty county in oppose. Favour met itself wanted settle put garrettwenty. In astonished apartments resolution so an it. Unsatiable on by contrasted to reasonable companions an.",
  },
  {
    id: 2,
    title: "Coding Journey",
    description:
      "Certainty determine at of arranging perceived situation or. Or wholly pretty county in oppose. Favour met itself wanted settle put garrettwenty. In astonished apartments resolution so an it. Unsatiable on by contrasted to reasonable companions an.",
  },
  {
    id: 3,
    title: "Hellooooooo",
    description:
      "Certainty determine at of arranging perceived situation or. Or wholly pretty county in oppose. Favour met itself wanted settle put garrettwenty. In astonished apartments resolution so an it. Unsatiable on by contrasted to reasonable companions an.",
  },
  {
    id: 4,
    title: "Hellooooooo",
    description:
      "Certainty determine at of arranging perceived situation or. Or wholly pretty county in oppose. Favour met itself wanted settle put garrettwenty. In astonished apartments resolution so an it. Unsatiable on by contrasted to reasonable companions an.",
  },
  {
    id: 5,
    title: "Hellooooooo",
    description:
      "Certainty determine at of arranging perceived situation or. Or wholly pretty county in oppose. Favour met itself wanted settle put garrettwenty. In astonished apartments resolution so an it. Unsatiable on by contrasted to reasonable companions an.",
  },
];

const WritingContext = createContext({
  writings,
});

// export const WritingContextProvider = (props) => {
//   const [writing, setWriting] = useState("hello");

//   return (
//     <WritingContext.Provider value={writing}>
//       {props.children}
//     </WritingContext.Provider>
//   );
// };

export default WritingContext;
