import React from "react";
import UseStateHooks from "./components/useState";
import UseEffect from "./components/useEffect";
import UseRef from "./components/useRef";
import UseRefDom from "./components/useRef_Dom";
import UseContext from "./components/useContext";

function App() {
  return (
    <div>
      <UseStateHooks />
      <UseEffect />
      <UseRef />
      <UseRefDom />
      <UseContext />
    </div>
  );
}

export default App;
