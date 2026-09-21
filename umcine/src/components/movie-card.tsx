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
          <img
            src={movie.isBookmarked ? "/icons/bookmark.svg" : "/icons/bookmark-outline.svg"}
            alt=""
            aria-hidden="true"
          />
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