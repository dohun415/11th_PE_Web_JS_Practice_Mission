import { useState } from "react";

// 1. 영화 데이터 구조 정의
interface Movie {
  id: number;
  title: string;
  releaseDate: string;
  isBookmarked: boolean;
}

// 2. 요구사항: MovieCardProps 정의
// movie 객체 전체와 북마크 토글 콜백 함수 타입을 전달받음
interface MovieCardProps {
  movie: Movie;
  onToggleBookmark: (movieId: number) => void;
}

// 3. 자식 컴포넌트: MovieCard
function MovieCard({ movie, onToggleBookmark }: MovieCardProps) {
  return (
    <article >
      <h3>{movie.title}</h3>
      <p>개봉일: {movie.releaseDate}</p>
      <button
        aria-pressed={movie.isBookmarked}
        onClick={() => onToggleBookmark(movie.id)}
      >
        {movie.isBookmarked ? "북마크 해제" : "북마크 추가"}
      </button>
    </article>
  );
}

// 초기 목업 데이터
const initialMovies: Movie[] = [
  {
    id: 1,
    title: "오디세이",
    releaseDate: "2026.08.05",
    isBookmarked: true,
  },
  {
    id: 2,
    title: "토이 스토리 5",
    releaseDate: "2026.06.17",
    isBookmarked: false,
  },
];

// 4. 부모 컴포넌트: App
export default function App() {
  const [movies, setMovies] = useState<Movie[]>(initialMovies);

  // 불변성을 지키며 특정 영화만 업데이트하는 핸들러 함수
  function handleToggleBookmark(movieId: number) {
    setMovies((currentMovies) =>
      currentMovies.map((movie) =>
        movie.id === movieId
          ? { ...movie, isBookmarked: !movie.isBookmarked } // 원본 수정 없이 새 객체 생성
          : movie
      )
    );
  }

  return (
    <main >
      <h1>영화 목록</h1>
      <section>
        {/* 부모에서 map으로 자식 컴포넌트(MovieCard) 렌더링 */}
        {movies.map((movie) => (
          <MovieCard
            key={movie.id}
            movie={movie}
            onToggleBookmark={handleToggleBookmark}
          />
        ))}
      </section>
    </main>
  );
}