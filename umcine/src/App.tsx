import { createContext, useContext, useState } from "react";
import { use } from "react";

type Theme = "light" | "dark";
type StudyMode = "focus" | "break";

const ThemeContext = createContext<Theme>("light");
const StudyModeContext = createContext<StudyMode>("focus");

function ThemeStatus() {
  const theme = use(ThemeContext);
  const studyMode = use(StudyModeContext);
  return <p>현재 테마: {theme}</p>;
}

export default function App() {
  const [theme, setTheme] = useState<Theme>("light");

  function handleToggleTheme() {
    setTheme((currentTheme) =>
      currentTheme === "light" ? "dark" : "light",
    );
  }

  return (
    <ThemeContext value={theme}>
      <ThemeStatus />
      <button onClick={handleToggleTheme}>
        테마 바꾸기
      </button>
    </ThemeContext>
  );
}