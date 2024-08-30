import { useState } from "react";
import Counter from "./Counter";

export default function MemoExample() {
  const [counter, setCounter] = useState(0);
  const [counter2, setCounter2] = useState(0);

  return (
    <>
      <Counter
        title={"counter 1"}
        counter={counter}
        counterHandler={setCounter}
      />
      <Counter
        title={"counter 2"}
        counter={counter2}
        counterHandler={setCounter2}
      />
    </>
  );
}
