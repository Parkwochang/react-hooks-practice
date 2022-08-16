import React from "react";
import UseEffect from "./components/useEffect";
import UseRef from "./components/useRef";
import UseRefDom from "./components/useRef_Dom";
import UseContext from "./components/useContext";
import UseMemo from "./components/useMemo";
import UseCallbcak from "./components/useCallback";
import UseReducer from "./useReducer";

function App() {
  return (
    <div style={{ margin: "30px" }}>
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
      <br />
      <UseReducer />
    </div>
  );
}

export default App;
