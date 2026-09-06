# Movie Genre Filter

A React app that displays a list of movies in a table and allows filtering them by genre using clickable genre buttons.

## Features

- Displays a table of movies with columns for **Title**, **Genre**, and **Year**.
- Genre filter buttons generated dynamically from a genres array.
- Clicking a genre button filters the movie table and logs the selected genre to the console.
- Clicking an already-selected genre button toggles the filter off and shows all movies again.
- Styled UI with hover effects, active button highlighting, and fade-in animations.

## Components

- **App** — Root component. Holds `selectedGenre` state and passes `movies`/`genres` data down as props.
- **MovieList** — Renders a table of movies by mapping over the `movies` prop.
- **GenreFilter** — Renders genre filter buttons by mapping over the `genres` prop; logs the selected genre on click.

## Project Structure

```
Project 1. movie-genre-filter/
├── src/
│   ├── components/
│   │   ├── App.js
│   │   ├── MovieList.js
│   │   ├── GenreFilter.js
│   │   └── data.js
│   ├── styles/
│   │   └── App.css
│   ├── index.js
│   └── index.html
├── webpack.config.js
├── .babelrc
└── package.json
```

## Getting Started

### Install dependencies

```bash
npm install
```

### Run the development server

```bash
npm start
```

App will open at `http://localhost:8080`.

### Build for production

```bash
npm run build
```

## Tech Stack

- React 16
- Webpack 4
- Babel
