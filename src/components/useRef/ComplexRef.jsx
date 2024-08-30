import { useEffect, useRef } from "react";
import AppInput from "./AppInput";

export default function ComplexRefExample() {
  const AppInputRef = useRef(null);
  const focusHandler = () => {
    AppInputRef.current.AppInputFocus();
    console.log(AppInputRef.current.testMem);
  };

  useEffect(() => {
    console.log("render simple useRef example");
  });

  return (
    <div>
      <AppInput ref={AppInputRef} placeholder="search" />
      <button onClick={focusHandler}>focus</button>
    </div>
  );
}
