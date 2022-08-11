import React, { useState } from "react";
import Page from "./useContext/Page";
import { ThemeContext } from "./useContext/ThemeContext";

export default function UseContext() {
  const [isDark, setIsDark] = useState(false);

  return (
    <ThemeContext.Provider value={{ isDark, setIsDark }}>
      <Page />
    </ThemeContext.Provider>
  );
}
