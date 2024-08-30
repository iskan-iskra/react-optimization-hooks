import MemoExample from "./components/memo";
import UseCallBackExample from "./components/useCallback";
import UseMemoExample from "./components/useMemo";
import UseRefExample from "./components/useRef";
import UseSyncExternalStoreExample from "./components/useSyncExternalStore";
import UseTransitionExample from "./components/useTransition";

function App() {
  return (
    <>
      <h2>useCallback example</h2>
      <UseCallBackExample label={"world"} />
      <hr />
      <h2>UseSyncExternalStore example</h2>
      <UseSyncExternalStoreExample />
      <h2>memo example</h2>
      <MemoExample />
      <hr />
      <h2>useRef example</h2>
      <UseRefExample />
      <hr />
      <h2>useMemo example</h2>
      <UseMemoExample />
      <h2>useTransition example</h2>
      <UseTransitionExample />
    </>
  );
}

export default App;
