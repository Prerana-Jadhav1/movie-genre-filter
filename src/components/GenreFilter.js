import React from "react";

function GenreFilter({ genres, selectedGenre, onSelectGenre }) {
  const handleClick = (genre) => {
    console.log(`Filtering by ${genre}`);
    onSelectGenre(genre);
  };

  return (
    <div className="genre-filter">
      <h2>Filter by Genre</h2>
      <div className="genre-buttons">
        {genres.map((genre) => (
          <button
            key={genre}
            className={`genre-btn${selectedGenre === genre ? " active" : ""}`}
            onClick={() => handleClick(genre)}
          >
            {genre}
          </button>
        ))}
      </div>
    </div>
  );
}

export default GenreFilter;
