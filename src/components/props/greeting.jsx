import { ThemeContext } from "../useContext";
import { useContext } from "react";

function Greeting() {
  const { theme } = useContext(ThemeContext);

  return (
    <div
      style={{
        padding: 20,
        borderRadius: 10,
        backgroundColor: theme === "light" ? "#eee" : "#333",
        color: theme === "dark" ? "#eee" : "#333",
      }}
    >
      <h1>Hello world!</h1>
    </div>
  );
}

export default Greeting;
