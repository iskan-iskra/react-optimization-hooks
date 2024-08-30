import { memo, useEffect } from "react";

const HelloWorld = memo(({ helloWorldHandler }) => {
  useEffect(() => {
    console.log("rerender component hello world");
  });
  return (
    <>
      <button onClick={helloWorldHandler}>hello wolrd</button>
    </>
  );
});

export default HelloWorld;
