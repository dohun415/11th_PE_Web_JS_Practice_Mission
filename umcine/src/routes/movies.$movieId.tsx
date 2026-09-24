import { createFileRoute } from "@tanstack/react-router";
import { MovieDetailPage } from "../pages/movies/movie-detail-page";

// "/movies/:movieId" 경로 → 영화 상세 화면
export const Route = createFileRoute("/movies/$movieId")({
  component: MovieDetailPage,
});
