import type { MouseEvent } from "react";
import type { Movie } from "../../types/movie";

interface MovieCardProps {
  // 현재 카드가 화면에 표시할 영화 한 개의 데이터
  movie: Movie;
  // 북마크 클릭을 부모 컴포넌트에 알리는 콜백 함수
  onToggleBookmark: (id: number) => void;
}

// 포스터, 제목, 개봉일, 북마크 버튼을 보여주는 재사용 가능한 영화 카드
export const MovieCard = ({ movie, onToggleBookmark }: MovieCardProps) => {
  // 클릭 이벤트가 다른 요소로 퍼지는 것을 막고 부모의 상태 변경 함수를 호출한다.
  const handleBookmarkClick = (e: MouseEvent<HTMLButtonElement>) => {
    e.stopPropagation();
    onToggleBookmark(movie.id);
  };

  return (
    <article className="article-movie-card">
      <div className="div-poster">
        {/* 영화 포스터와 포스터 위 북마크 버튼 */}
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
          {/* 북마크 상태에 따라 채워진 아이콘과 외곽선 아이콘을 조건부로 보여준다. */}
          <img
            src={movie.isBookmarked ? "/icons/bookmark.svg" : "/icons/bookmark-outline.svg"}
            alt=""
            aria-hidden="true"
          />
        </button>
      </div>

      {/* 영화 제목과 개봉일을 표시하는 기본 정보 영역 */}
      <div className="div-movie-title">
        <strong title={movie.title}>{movie.title}</strong>
      </div>

      <div className="div-movie-meta">
        <span>{movie.releaseDate}</span>
      </div>
    </article>
  );
};