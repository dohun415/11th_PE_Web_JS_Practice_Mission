import { useParams } from "@tanstack/react-router";

// 영화 상세 화면
// URL의 movieId를 읽어 오며, 상세 내용은 이후 주차 미션에서 구현한다.
export const MovieDetailPage = () => {
  const { movieId } = useParams({ from: "/movies/$movieId" });

  return (
    <main className="main-container">
      <h2>영화 상세 (id: {movieId})</h2>
    </main>
  );
};
