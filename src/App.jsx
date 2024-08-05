import {useState, useEffect} from "react";
import "./App.css";

import MovieDisplay from "./Components/Movies";
import Form from "./Form";

export default function App() {
  //variable with your apiKey
  const apiKey = "140035a2";

  //State to hold movie data
  const [movie, setMovie] = useState(null);

  //Function to getMovies
  const getMovie = async (searchTerm) => {
    // make fetch request and store response
    const response = await fetch(
      `http://www.omdbapi.com/?apikey=${apiKey}&t=${searchTerm}`
    );
    // Parse JSON response into a javascript object
    const data = await response.json();
    //set the Movie state to the movie
    setMovie(data);
  };

  useEffect(() => {
    getMovie("Clueless");
  }, []);


  return (
    <div className="App">
      <Form moviesearch={getMovie} />
      <MovieDisplay movie={movie} />
    </div>
  );
}


