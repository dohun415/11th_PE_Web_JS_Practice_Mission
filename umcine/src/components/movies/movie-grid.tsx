import type { Movie } from "../../types/movie";
import { MovieCard } from "./movie-card";

interface MovieGridProps {
  // 부모 컴포넌트가 관리하는 영화 데이터 배열
  movies: Movie[];
  // 카드에서 발생한 북마크 이벤트를 부모에게 전달하기 위한 함수
  onToggleBookmark: (id: number) => void;
}

// 전달받은 영화 배열을 여러 개의 MovieCard로 변환하는 목록 컴포넌트
export const MovieGrid = ({ movies, onToggleBookmark }: MovieGridProps) => {
  return (
    <div className="div-movie-grid">
      {movies.map((movie) => (
        // 각 영화 데이터마다 카드를 만들고, key로 각 항목을 구분한다.
        <MovieCard
          key={movie.id}
          movie={movie}
          onToggleBookmark={onToggleBookmark}
        />
      ))}
    </div>
  );
};