import React, { useState } from "react";

import MoviesList from "./components/MoviesList";
import "./App.css";

function App() {
  const [movies, setMovies] = useState([]);
  const [isLoading, setLoading] = useState(false);
  const [error,setError] = useState(null)
  async function fetchMovieHandler() {
    setLoading(true);
    setError(null)
    try {
      const response = await fetch("https://swapi.dev/api/film/");

      if(!response.ok){
        throw new Error('something went wrong')
      }
      const data = await response.json();

      const transformMovies = data.results.map((movie) => {
        return {
          id: movie.episode_id,
          title: movie.title,
          openingText: movie.opening_crawl,
          releaseDate: movie.release_date,
        };
      });

      setMovies(transformMovies);
    } catch (error) {
      console.log(error.message)
      setError(error.message)
    }

    setLoading(false);
  }

  const clickHandler = ()=>{

  setError(null)
  }

  return (
    <React.Fragment>
      <section>
        <button onClick={fetchMovieHandler}>Fetch Movies</button>
      </section>
      <section>
        {!isLoading && <MoviesList movies={movies} />}
        {isLoading && <p>Loading...</p>}
        {!isLoading && error&&<div>
          <p>{error} <h2>...retrying</h2></p>
          <button onClick={clickHandler}>Stop retrying</button>
          </div>}
       
        
       
      </section>
    </React.Fragment>
  );
}

export default App;
