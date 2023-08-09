import { useState } from "react";

const CountComponets = () => {
  const [count, setCount] = useState(0);

  const PlusClickEvent = () => {
    setCount(count + 1);
  };

  const MinusClickEvent = () => {
    setCount(count - 1);
  };

  return (
    <>
      <h1>카운트하기</h1>
      <button onClick={PlusClickEvent}>+</button>
      <div>{count}</div>
      <button onClick={MinusClickEvent}>-</button>
    </>
  );
};

export default CountComponets;
