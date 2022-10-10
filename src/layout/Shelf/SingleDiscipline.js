import "./SingleDiscipline.css";

export default function SingleDiscipline({ year, issue, solution, result }) {
  return (
    <div className="history">
      <h1>{year}</h1>
      <div className="history-break"></div>
      <span>
        <h2>Issue:</h2>
        <p>{issue}</p>
      </span>
      <span>
        <h2>Solution:</h2>
        <p>{solution}</p>
      </span>
      <span>
        <h2>Result:</h2>
        <p>{result}</p>
      </span>
    </div>
  );
}
