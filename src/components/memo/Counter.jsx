import { memo, useEffect } from "react";

const CounterCore = ({ counter, counterHandler, title }) => {
  useEffect(() => {
    console.log(`counter rendered ${title}`);
  });

  return (
    <>
      <div>{title}</div>
      <div>{counter}</div>
      <div>
        <button onClick={() => counterHandler((v) => v + 1)}>increase</button>
        <button onClick={() => counterHandler((v) => v - 1)}>decrease</button>
      </div>
    </>
  );
};

const Counter = memo(CounterCore);

export default Counter;
