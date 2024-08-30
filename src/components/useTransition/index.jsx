import { useDebugValue, useState, useTransition } from "react";
import Counter from "./Counter";
import useCounter from "./useCounter";

const defaultList = Array.from(
  { length: 2000 },
  (_, index) => `imem -${index + 1}`
);

export default function UseTransitionExample() {
  const [search, setSearch] = useState("");

  const [filteredList, setFilteredList] = useState(defaultList);

  //   const [isLoading, startTransition] = useTransition();

  const searchHandler = (e) => {
    const newVal = e.target.value;
    setSearch(newVal);

    setFilteredList(
      defaultList.filter((el) =>
        el.toLocaleLowerCase().includes(newVal.toLocaleLowerCase())
      )
    );

    // startTransition(() => {
    //   setFilteredList(
    //     defaultList.filter((el) =>
    //       el.toLocaleLowerCase().includes(newVal.toLocaleLowerCase())
    //     )
    //   );
    // });
  };

  const { counter, decrement, increment } = useCounter();

  return (
    <>
      <Counter
        counter={counter}
        decrementHandler={decrement}
        incrementHandler={increment}
      />
      <hr />
      <div>
        <input type="text" value={search} onChange={searchHandler} />

        {/* {isLoading && <div>...loading</div>}
        {!isLoading && (
          <ul>
            {filteredList.map((item) => (
              <li key={item}>{item}</li>
            ))}
          </ul>
        )} */}

        <ul>
          {filteredList.map((item) => (
            <li key={item}>{item}</li>
          ))}
        </ul>
      </div>
    </>
  );
}
