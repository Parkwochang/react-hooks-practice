import React, { useCallback, useEffect, useState } from "react";

export default function UseCallbcak() {
  const [num, setNum] = useState(0);
  const [toggle, setToggle] = useState(true);

  const someFunction = useCallback(() => {
    console.log(`someFunc: num: ${num}`);
    return;
  }, [num]);

  useEffect(() => {
    console.log("someFunc가 변경되었습니다");
  }, [someFunction]);

  return (
    <div>
      <input
        type="number"
        value={num}
        onChange={(e) => setNum(e.target.value)}
      />
      <button onClick={() => setToggle(!toggle)}>{toggle.toString()}</button>
      <br />
      <button onClick={someFunction}>Call someFunc</button>
    </div>
  );
}
