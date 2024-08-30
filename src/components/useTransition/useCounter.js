import { useDebugValue, useState } from "react";

export default function () {
  const [counter, setCounter] = useState(0);

  const increment = () => setCounter((v) => v + 1);

  const decrement = () => setCounter((v) => v - 1);

  useDebugValue("use counter hook 123123123");

  return {
    counter,
    increment,
    decrement,
  };
}
