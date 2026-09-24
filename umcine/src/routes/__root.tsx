import { Outlet, createRootRoute } from "@tanstack/react-router";
import { Header } from "../components/layout/header";

// 모든 화면에 공통으로 적용되는 최상위 레이아웃
// Outlet 자리에 현재 URL과 일치하는 route의 화면이 표시된다.
export const Route = createRootRoute({
  component: () => (
    <div className="app-container">
      <Header />
      <Outlet />
    </div>
  ),
});
