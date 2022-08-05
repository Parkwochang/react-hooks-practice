import { useEffect, useState } from "react";

export default function UseEffect() {
  const [count, setCount] = useState(0);

  const handleClick = () => {
    setCount(count + 1);
  };

  //렌더링 될 때마다 매번 실행
  useEffect(() => {});

  return (
    <div>
      <span>count: {count}</span>
      <button style={{ marginLeft: "15px" }} onClick={handleClick}>
        Plus
      </button>
    </div>
  );
}
