import SingleDiscipline from "./SingleDiscipline";
import "./Discipline.css";

const data = [
  {
    year: "In 2019",
    issue: "I was unhealthy and needed to improve my physical condition",
    solution:
      "I developed a workout routine and diet, and have maintained this schedule for the past 3 years.",
    result: "I am now healthy and in good physical condition.",
  },
  {
    year: "In 2020",
    issue:
      "I wanted to program robots but didn't have enough experience to get hired.",
    solution:
      "I networked and got a hold of the 3D simulation software that FANUC uses to write robot programs. I downloaded the software on my computer, and began learning my way around it. I also took courses offered by FANUC to get hands on experience with programming robots.",
    result:
      "I got hired by Global Automation Technologies to program FANUC robots 4 months later.",
  },
  {
    year: "In 2021",
    issue:
      "I was intrigued by web development but didn't where to start or how to learn it.",
    solution:
      "I began taking different bootcamp courses to get an understanding of the basics. While taking these courses, I was creating side projects to apply what I was learning. I began to really progress and dive into more complex technologies like React and Node.js.",
    result:
      "I have created and deployed many different applications using different frontend technologies like JavaScript and React. I have also used Node.js and Express to create more complex applications.",
  },
];

const Discipline = () => {
  return (
    <section className="discipline">
      <h1 id="d-title">/ Against the odds</h1>
      <div className="history-bin">
        {data.map((issue, index) => (
          <SingleDiscipline key={index} {...issue} />
        ))}
      </div>
    </section>
  );
};

export default Discipline;
