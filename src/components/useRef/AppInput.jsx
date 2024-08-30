import { forwardRef, useImperativeHandle, useRef } from "react";

const AppInputCore = (props, ref) => {
  const inputRef = useRef(null);

  useImperativeHandle(
    ref,
    () => ({
      AppInputFocus: () => {
        console.log("произошла фокусировка");
        inputRef.current.focus();
      },
      testMem: "mem",
    }),
    [inputRef]
  );

  return (
    <input {...props} ref={inputRef} type="text" className="use-ref-input" />
  );
};

const AppInput = forwardRef(AppInputCore);

export default AppInput;
