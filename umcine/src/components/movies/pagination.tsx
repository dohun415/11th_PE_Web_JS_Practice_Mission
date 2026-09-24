// 페이지 이동 UI를 담당하는 컴포넌트이다.
// 버튼 모양은 있지만 현재 페이지 상태나 클릭 이벤트는 연결되지 않았다.
export const Pagination = () => {
  return (
    <div className="pagination">
      <button type="button" disabled aria-label="이전 페이지">
        <img src="/icons/chevron-left.svg" alt="" aria-hidden="true" />
      </button>
      <button type="button" className="active">1</button>
      <button type="button">2</button>
      <button type="button" aria-label="다음 페이지">
        <img src="/icons/chevron-right.svg" alt="" aria-hidden="true" />
      </button>
    </div>
  );
};