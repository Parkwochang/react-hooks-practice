import React from "react";
import UseStateHooks from "./components/useState";
import UseEffect from "./components/useEffect";
import UseRef from "./components/useRef";
import UseRefDom from "./components/useRef_Dom";
import UseContext from "./components/useContext";
import UseMemo from "./components/useMemo";
import UseCallbcak from "./components/useCallback";

function App() {
  return (
    <div>
      <UseStateHooks />
      <br />
      <UseEffect />
      <br />
      <UseRef />
      <br />
      <UseRefDom />
      <br />
      <UseContext />
      <br />
      <UseMemo />
      <br />
      <UseCallbcak />
    </div>
  );
}

export default App;
