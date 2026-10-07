import { useState } from "react";
import Home from "./pages/Home";

function App() {
  const [darkMode, setDarkMode] = useState(false);

  function toggleDarkMode() {
    setDarkMode((current) => !current);
  }

  return (
    <div className={darkMode ? "app dark-mode" : "app"}>
      <Home
        darkMode={darkMode}
        onToggleDarkMode={toggleDarkMode}
      />
    </div>
  );
}

export default App;