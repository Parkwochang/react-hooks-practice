import React, { useContext } from "react";
import { ThemeContext } from "./ThemeContext";

export default function Header() {
  const { isDark } = useContext(ThemeContext);

  return (
    <header
      className="header"
      style={{
        backgroundColor: isDark ? "black" : "lightgray",
        color: isDark ? "white" : "black",
      }}
    >
      <h1>Welcome 홍길동!</h1>
    </header>
  );
}
