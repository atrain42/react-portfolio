import "./Discipline.css";

const Discipline = () => {
  return (
    <section className="discipline">
      <h1 id="d-title">/ Against the odds</h1>
      <div className="history-bin">
        <div className="history">
          <h1>In 2019</h1>
          <span>
            <h2>Issue:</h2>
            <p> I was unhealthy and needed to improve my physical condition.</p>
          </span>
          <span>
            <h2>Solution:</h2>
            <p>
              I developed a workout routine and diet, and have maintained this
              schedule for the past 3 years.
            </p>
          </span>
          <span>
            <h2>Result:</h2>
            <p>I am now healthy and in good physical condition.</p>
          </span>
        </div>

        <div className="history">
          <h1>In 2020</h1>
          <span>
            <h2>Issue:</h2>
            <p>
              I wanted to program robots but didn't have enough experience to
              get hired.
            </p>
          </span>
          <span>
            <h2>Solution:</h2>
            <p>
              I networked and got a hold of the 3D simulation software that
              FANUC uses to write robot programs. I downloaded the software on
              my computer, and began learning my way around it. I also took
              courses offered by FANUC to get a hands on experience with
              programming robots.
            </p>
          </span>
          <span>
            <h2>Result:</h2>
            <p>
              I got hired by Global Automation Technologies to program FANUC
              robots 4 months later.
            </p>
          </span>
        </div>

        <div className="history">
          <h1>In 2021</h1>
          <span>
            <h2>Issue:</h2>
            <p>
              {" "}
              I was intrigued by web development but didn't where to start or
              how to learn it.
            </p>
          </span>
          <span>
            <h2>Solution:</h2>
            <p>
              I began taking different bootcamp courses to get an understanding
              of the basics. While taking these courses, I was creating side
              projects to apply what I was learning. I began to really progress
              and dive into more complex technologies like React and Node.js.
            </p>
          </span>
          <span>
            <h2>Result:</h2>
            <p>
              I have created and deployed many different applications using
              different frontend technologies like JavaScript and React. I have
              also used Node.js and Express to create more complex applications.
            </p>
          </span>
        </div>
      </div>
    </section>
  );
};

export default Discipline;
