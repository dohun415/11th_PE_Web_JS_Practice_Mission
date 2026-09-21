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