import { useCallback, useState } from "react";
import HelloWorld from "./HelloWorld";
import Counter from "./Counter";

export default function UseCallBackExample() {
  const [counter, setCounter] = useState(0);

  const helloWorldHandler = () => {
    console.log("hello world");
  };

  //   const helloWorldHandler = useCallback(() => {
  //     console.log("hello world");
  //   }, []);

  return (
    <>
      <Counter counter={counter} counterHandler={setCounter} />
      <HelloWorld helloWorldHandler={helloWorldHandler} />
    </>
  );
}
