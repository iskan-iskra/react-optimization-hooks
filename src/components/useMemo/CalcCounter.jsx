import { memo, useMemo, useState } from "react";
import { useEffect } from "react";

function CalcCounterCore({ number }) {
  const resultNumber = useMemo(() => {
    console.log("просчет результата");
    return number * 10;
  }, [number]);

  return (
    <>
      <div>calc result: {resultNumber}</div>
    </>
  );
}

const CalcCounter = CalcCounterCore;
export default CalcCounter;
