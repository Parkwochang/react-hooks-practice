import React, { useEffect, useRef, useState } from "react";

export default function UseRef() {
  const [count, setCount] = useState(1);
  const randerCount = useRef(1);

  useEffect(() => {
    console.log(`렌더링 수 : ${randerCount.current}`);
    randerCount.current = randerCount.current + 1;
  }, [count]);

  return (
    <div>
      <p>Count : {count}</p>
      <button onClick={() => setCount(count + 1)}>올려</button>
    </div>
  );
}
