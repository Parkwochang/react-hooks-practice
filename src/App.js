import React from "react";
import UseStateHooks from "./components/useState";
import UseEffect from "./components/useEffect";
import UseRef from "./components/useRef";
import UseRefDom from "./components/useRef_Dom";

function App() {
  return (
    <div>
      <UseStateHooks />
      <UseEffect />
      <UseRef />
      <UseRefDom />
    </div>
  );
}

export default App;
