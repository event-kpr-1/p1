import React, { createContext, useState, useContext } from "react";

// Step 1: Create a Context
const ThemeContext = createContext();

function App() {
  const [theme, setTheme] = useState("light");

  // Step 2: Provide the Context
  return (
    <ThemeContext.Provider value={{ theme, setTheme }}>
      <div className={theme}>
        <h1>useContext Example</h1>
        <ThemeToggler />
      </div>
    </ThemeContext.Provider>
  );
}

function ThemeToggler() {
  // Step 3: Consume the Context
  const { theme, setTheme } = useContext(ThemeContext);

  const toggleTheme = () => {
    setTheme((prevTheme) => (prevTheme === "light" ? "dark" : "light"));
  };

  return (
    <div>
      <p>Current Theme: {theme}</p>
      <button onClick={toggleTheme}>Toggle Theme</button>
    </div>
  );
}

export default App;
