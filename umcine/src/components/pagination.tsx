export const Pagination = () => {
  return (
    <div className="pagination">
      <button type="button" disabled>&lt;</button>
      <button type="button" className="active">1</button>
      <button type="button">2</button>
      <button type="button">&gt;</button>
    </div>
  );
};