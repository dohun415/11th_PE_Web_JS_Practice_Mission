import { createFileRoute } from "@tanstack/react-router";
import { SearchPage } from "../pages/movies/search-page";

// "/search" 경로 → 영화 검색 화면
export const Route = createFileRoute("/search")({
  component: SearchPage,
});
