import { useEffect, useRef } from "react";

export default function SimpleRefExample() {
  const inputRef = useRef(null);
  const focusHandler = () => {
    inputRef.current.focus();
  };

  useEffect(() => {
    console.log("render simple useRef example");
  });

  return (
    <div>
      <input
        ref={inputRef}
        className="use-ref-input"
        type="text"
        placeholder="search"
      />
      <button onClick={focusHandler}>focus</button>
    </div>
  );
}
