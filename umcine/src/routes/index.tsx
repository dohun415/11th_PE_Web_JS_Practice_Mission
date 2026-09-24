import { createFileRoute } from "@tanstack/react-router";
import { MovieListPage } from "../pages/movies/movie-list-page";

// "/" 경로 → 영화 목록 화면
export const Route = createFileRoute("/")({
  component: MovieListPage,
});
