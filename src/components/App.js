import React, { useState } from "react";
import MovieList from "./MovieList";
import GenreFilter from "./GenreFilter";
import { movies, genres } from "./data";

function App() {
  const [selectedGenre, setSelectedGenre] = useState(null);

  const handleSelectGenre = (genre) => {
    setSelectedGenre((prev) => (prev === genre ? null : genre));
  };

  const filteredMovies = selectedGenre
    ? movies.filter((movie) => movie.genre === selectedGenre)
    : movies;

  return (
    <div className="app">
      <h1>Top 15 Movies of All Time</h1>
      <GenreFilter
        genres={genres}
        selectedGenre={selectedGenre}
        onSelectGenre={handleSelectGenre}
      />
      <MovieList movies={filteredMovies} />
    </div>
  );
}

export default App;
