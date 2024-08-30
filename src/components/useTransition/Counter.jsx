const Counter = ({ counter, incrementHandler, decrementHandler }) => (
  <>
    <div>{counter}</div>
    <div>
      <button onClick={incrementHandler}>increase</button>
      <button onClick={decrementHandler}>decrease</button>
    </div>
  </>
);

export default Counter;
