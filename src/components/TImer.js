import React, { useEffect } from "react";

const Timer = () => {
  useEffect(() => {
    const timer = setInterval(() => {
      console.log("타이머 돌아가는중 ...");
    }, 1000);
    //timer가 mount 될때
    return () => {
      clearInterval(timer);
    };
    //timer가 unmount 될 때
  }, []);

  return (
    <div>
      <span>타이머를 시작합니다. 콘솔을 보세요!</span>
    </div>
  );
};

export default Timer;
