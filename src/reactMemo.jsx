import React from "react";
import { useCallback } from "react";
import { useState } from "react";
import Child from "./Child";

export default function ReactMemo() {
  const [parentAge, setParentAge] = useState(0);

  const incrementParentAge = () => {
    setParentAge(parentAge + 1);
  };

  console.log("부모 컴포넌트가 렌더링");

  const tellMe = useCallback(() => {
    console.log("길동아 사랑해");
  }, []); // react.memo로 조정해줘도 함수는 리렌더링시 메모리 재할당 되므로 방지해준다

  return (
    <div style={{ border: "2px solid navy", padding: "10px" }}>
      <h1>👨👩 부모</h1>
      <p>age: {parentAge}</p>
      <button onClick={incrementParentAge} style={{ marginTop: "10px" }}>
        부모 나이 증가
      </button>
      <Child name={"홍길동"} tellMe={tellMe} />
    </div>
  );
}
