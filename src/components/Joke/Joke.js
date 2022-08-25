// import React, { useState, useEffect } from "react";
// import classes from "./Joke.module.css";

// const Joke = () => {
// const [joke, setJoke] = useState("");

// useEffect(() => {
//   let url = "https://daddyjokes.p.rapidapi.com/random";
//   const fetchJokes = async () => {
//     try {
//       const response = await fetch(url, {
//         method: "GET",
//         headers: {
//           "X-RapidAPI-Key":
//             "2d092c2cf8msh88e6ef382473520p13b291jsnf915fd1d7e9e",
//           "X-RapidAPI-Host": "daddyjokes.p.rapidapi.com",
//         },
//       });
//       const data = await response.json();
//       setJoke(data);
//     } catch (e) {
//       console.log(e);
//     }
//   };
//   fetchJokes();
// }, []);

// console.log(joke);

//   return (
//     <section className={classes.jokeSection}>
//       <div className={classes.jokeText}>
//         <h1 className={classes.jokeTitle}>Have a laugh</h1>
//         <h6>Click the button to generate a random dad joke!</h6>
//         <button>Get joke</button>
//       </div>
//       <p></p>
//     </section>
//   );
// };

// export default Joke;
