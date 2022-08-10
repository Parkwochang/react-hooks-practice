import React, { useEffect, useRef } from "react";

export default function UseRefDom() {
  const inputRef = useRef();

  useEffect(() => {
    // console.log(inputRef.current);
    inputRef.current.focus();
  }, []);

  return (
    <div>
      <input ref={inputRef} type="text" placeholder="username" />
      <button
        onClick={() => {
          alert(`환영합니다 ${inputRef.current.value}`);
          inputRef.current.value = "";
          inputRef.current.focus();
        }}
      >
        로그인
      </button>
    </div>
  );
}
