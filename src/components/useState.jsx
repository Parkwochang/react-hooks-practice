import React, { useState } from "react";

const heavyWork = () => {
  console.log("엄청 무거운 작업!!");
  return [];
};

export default function UseStateHooks() {
  const [names, setNames] = useState(heavyWork);
  const [input, setInput] = useState("");

  const handleInputChange = (e) => {
    setInput(e.target.value);
  };

  const handleClick = (e) => {
    e.preventDefault();
    setNames([input, ...names]);
    setInput("");
  };

  return (
    <div>
      <form>
        <input type="text" value={input} onChange={handleInputChange} />
        <button onClick={handleClick}>Upload</button>
        {names.map((name, idx) => (
          <p key={idx}>{name}</p>
        ))}
      </form>
    </div>
  );
}
