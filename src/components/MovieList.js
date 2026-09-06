import React from "react";

function MovieList({ movies }) {
  return (
    <table className="movie-table">
      <thead>
        <tr>
          <th>Title</th>
          <th>Genre</th>
          <th>Year</th>
        </tr>
      </thead>
      <tbody>
        {movies.map((movie, index) => (
          <tr key={`${movie.title}-${index}`} className="movie-row">
            <td>{movie.title}</td>
            <td>{movie.genre}</td>
            <td>{movie.year}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
}

export default MovieList;
