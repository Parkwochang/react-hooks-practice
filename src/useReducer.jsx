import React, { useReducer, useState } from "react";

// reducer = state를 업데이트 하는 역할 (은행)
// dispatch = state 업데이트를 위한 요구
// action = 요구의 내용

const ACTION_TYPE = {
  deposit: "deposit",
  withdraw: "withdraw",
};

const reducer = (state, action) => {
  console.log("reducer가 일을 합니다", state, action);
  switch (action.type) {
    case ACTION_TYPE.deposit:
      return state + action.payload;
    case ACTION_TYPE.withdraw:
      return state - action.payload;
    default:
      return state;
  }
};

export default function UseReducer() {
  const [num, setNum] = useState(0);
  const [money, dispatch] = useReducer(reducer, 0);

  return (
    <div>
      <h2>useReducer 은행에 오신것을 환영합니다</h2>
      <p>잔고: {money}원</p>
      <input
        type="number"
        value={num}
        onChange={(e) => setNum(Number(e.target.value))}
        step="1000"
      />
      <button
        onClick={() => {
          dispatch({ type: ACTION_TYPE.deposit, payload: num });
        }}
      >
        예금
      </button>
      <button
        onClick={() => {
          dispatch({ type: ACTION_TYPE.withdraw, payload: num });
        }}
      >
        출금
      </button>
    </div>
  );
}
