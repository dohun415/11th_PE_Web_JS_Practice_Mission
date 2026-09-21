function Header() {
  return <>Header</>;
}

function MovieList() {
  return (
//React의 JSX 문법에서는 컴포넌트가 반드시 하나의 부모 요소(Single Root Element)만 반환해야 합니다.
//이렇게 감싸줘야한다.
    <> 
    <MovieCard />
    <MovieCard />
    </>
  );
}

function MovieTitle() {
  return <h2>오디세이</h2>;
}

function MovieCard() {
  return (
    <article>
      <MovieTitle />
      <p>2026.08.05</p>
    </article>
  );
}

export default function App() {
  return (
    <main>
      <Header />
      <MovieList />
    </main>
  );
}