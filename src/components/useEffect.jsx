import { useEffect, useState } from "react";
import Timer from "./TImer";

export default function UseEffect() {
  const [showTimer, setShowTimer] = useState(false);

  return (
    <div>
      {showTimer && <Timer />}
      <button onClick={() => setShowTimer(!showTimer)}>Toggle Timer</button>
    </div>
  );
}
