import { useState } from "react";
import { movies as initialMovies } from "./data/movies";
import type { Movie } from "./types/movie";
import { Header } from "./components/header";
import { MovieGrid } from "./components/movie-grid";
import { Pagination } from "./components/pagination";
import "./App.css";

export const App = () => {
  const [movieList, setMovieList] = useState<Movie[]>(initialMovies);

  const handleToggleBookmark = (targetId: number) => {
    setMovieList((prevList) =>
      prevList.map((movie) =>
        movie.id === targetId
          ? { ...movie, isBookmarked: !movie.isBookmarked }
          : movie
      )
    );
  };

  return (
    <div className="app-container">
      <Header />
      <main className="main-container">
        <h2>영화 목록</h2>
        
        <MovieGrid
          movies={movieList}
          onToggleBookmark={handleToggleBookmark}
        />

        <Pagination />

        <footer className="footer-notice">
          <img
            src="/images/logos/tmdb-logo.svg"
            alt="TMDB"
            width="40"
            style={{ verticalAlign: "middle", marginRight: "8px" }}
          />
          This product uses the TMDB API but is not endorsed or certified by TMDB.
        </footer>
      </main>
    </div>
  );
};

export default App;