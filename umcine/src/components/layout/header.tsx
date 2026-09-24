import { Link } from "@tanstack/react-router";

// 로고와 주요 메뉴, 검색 및 로그인 버튼을 담당하는 공통 상단 헤더
export const Header = () => {
  return (
    <header className="header-topbar">
      <div className="header-inner">
        <div className="nav-left">
          {/* 서비스 로고와 주요 메뉴 */}
          <img src="/icons/movie.svg" alt="movie logo" />
          <strong className="logo">UMCine</strong>
          <nav className="nav-links">
            <Link to="/">영화</Link>
            <Link to="/search">검색</Link>
            <button type="button">내 정보</button>
          </nav>
        </div>
        <div className="nav-right">
          {/* 아이콘만 사용하는 버튼은 aria-label로 기능을 설명한다. */}
          <Link to="/search" className="search-btn" aria-label="검색">
            <img src="/icons/search.svg" alt="" aria-hidden="true" />
          </Link>
          <button type="button" className="login-btn">로그인</button>
        </div>
      </div>
    </header>
  );
};