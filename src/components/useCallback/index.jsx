import { useCallback, useState } from "react";
import HelloWorld from "./HelloWorld";
import Counter from "./Counter";

export default function UseCallBackExample({ label }) {
  const [counter, setCounter] = useState(0);

  // const helloWorldHandler = () => {
  //   console.log(`hello ${label}`);
  // };
  const helloWorldHandler = useCallback(() => {
    console.log(`hello ${label}`);
  }, [label]);

  return (
    <>
      <Counter counter={counter} counterHandler={setCounter} />
      <HelloWorld helloWorldHandler={helloWorldHandler} />
    </>
  );
}
