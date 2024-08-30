const Counter = ({ counter, counterHandler }) => (
  <>
    <div>{counter}</div>
    <div>
      <button onClick={() => counterHandler((v) => v + 1)}>increase</button>
      <button onClick={() => counterHandler((v) => v - 1)}>decrease</button>
    </div>
  </>
);

export default Counter;
