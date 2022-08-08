import { useEffect, useState } from "react";

export default function UseEffect() {
  const [count, setCount] = useState(0);
  const [name, setName] = useState("");

  const handleClick = () => {
    setCount(count + 1);
  };

  const handleInputChange = (e) => {
    setName(e.target.value);
  };

  //mount + item 변경될 때만 실행.
  useEffect(() => {
    console.log("count 변화");
  }, [count]);
  //dependency array

  return (
    <div>
      <span>count: {count}</span>
      <button style={{ marginLeft: "15px" }} onClick={handleClick}>
        Plus
      </button>
      <input type="text" value={name} onChange={handleInputChange} />
      <span>name: {name}</span>
    </div>
  );
}
