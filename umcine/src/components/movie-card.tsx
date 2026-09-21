import type { MouseEvent } from "react";
import type { Movie } from "../types/movie";

interface MovieCardProps {
  movie: Movie;
  onToggleBookmark: (id: number) => void;
}

export const MovieCard = ({ movie, onToggleBookmark }: MovieCardProps) => {
  const handleBookmarkClick = (e: MouseEvent<HTMLButtonElement>) => {
    e.stopPropagation();
    onToggleBookmark(movie.id);
  };

  return (
    <article className="article-movie-card">
      <div className="div-poster">
        <img
          src={movie.posterPath}
          alt={movie.title}
          className="poster-image"
          loading="lazy"
        />

        <button
          type="button"
          className="bookmark-btn"
          onClick={handleBookmarkClick}
          aria-label={movie.isBookmarked ? "북마크 취소" : "북마크 추가"}
        >
          {movie.isBookmarked ? (
            <svg viewBox="0 0 24 24" width="20" height="20" fill="#2563EB">
              <path d="M19 21l-7-5-7 5V5a2 2 0 0 1 2-2h10a2 2 0 0 1 2 2z" />
            </svg>
          ) : (
            <svg
              viewBox="0 0 24 24"
              width="20"
              height="20"
              fill="none"
              stroke="#FFFFFF"
              strokeWidth="2"
            >
              <path d="M19 21l-7-5-7 5V5a2 2 0 0 1 2-2h10a2 2 0 0 1 2 2z" />
            </svg>
          )}
        </button>
      </div>

      <div className="div-movie-title">
        <strong title={movie.title}>{movie.title}</strong>
      </div>

      <div className="div-movie-meta">
        <span>{movie.releaseDate}</span>
      </div>
    </article>
  );
};