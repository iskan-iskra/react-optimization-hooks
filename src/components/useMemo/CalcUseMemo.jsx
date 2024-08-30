import { useState } from "react";
import CalcCounter from "./CalcCounter";
import Counter from "./Counter";

export default function CalcUseMemo() {
  const [counter, setCounter] = useState(0);
  const [counter2, setCounter2] = useState(0);

  return (
    <>
      <CalcCounter number={counter} />
      <Counter counter={counter} counterHandler={setCounter} />
      <Counter counter={counter2} counterHandler={setCounter2} />
    </>
  );
}
