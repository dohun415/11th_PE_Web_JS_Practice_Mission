export const Header = () => {
  return (
    <header className="header-topbar">
      <div className="header-inner">
        <div className="nav-left">
          <strong className="logo">UMCine</strong>
          <nav className="nav-links">
            <button type="button">영화</button>
            <button type="button">검색</button>
            <button type="button">내 정보</button>
          </nav>
        </div>
        <div className="nav-right">
          <button type="button" className="login-btn">로그인</button>
        </div>
      </div>
    </header>
  );
};