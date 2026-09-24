import { useState } from "react";
import { movies as initialMovies } from "../../data/movies";
import type { Movie } from "../../types/movie";
import { MovieGrid } from "../../components/movies/movie-grid";
import { Pagination } from "../../components/movies/pagination";

// 영화 목록 화면 ("/" 경로)
// 공통 헤더는 routes/__root.tsx 레이아웃에서 표시한다.
export const MovieListPage = () => {
  // 영화 목록 전체와 각 영화의 북마크 상태를 페이지 컴포넌트에서 관리한다.
  // movieList는 현재 상태, setMovieList는 상태를 변경하는 함수이다.
  const [movieList, setMovieList] = useState<Movie[]>(initialMovies);

  // MovieCard에서 영화 id를 전달받아 해당 영화의 북마크 상태만 변경한다.
  const handleToggleBookmark = (targetId: number) => {
    // map으로 새 배열을 만들면 React가 상태 변경을 감지하고 화면을 다시 그린다.
    setMovieList((prevList) =>
      prevList.map((movie) =>
        // id가 일치하는 영화만 기존 객체를 복사한 뒤 북마크 값을 반전한다.
        movie.id === targetId
          ? { ...movie, isBookmarked: !movie.isBookmarked }
          : movie
      )
    );
  };

  return (
    <main className="main-container">
      <h2>영화 목록</h2>

      {/* 부모가 가진 영화 목록과 이벤트 함수를 자식 컴포넌트에 props로 전달한다. */}
      <MovieGrid
        movies={movieList}
        onToggleBookmark={handleToggleBookmark}
      />

      {/* 현재는 페이지 번호를 보여주는 UI만 있고 실제 페이지 변경 기능은 없다. */}
      <Pagination />

      {/* 외부 영화 데이터 출처를 표시하는 안내 영역 */}
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
  );
};
