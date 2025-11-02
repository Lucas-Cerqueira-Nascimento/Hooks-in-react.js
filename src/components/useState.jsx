import { useState } from "react";
function UseState() {
  // const [count, setCount] = useState(0);
  const [state, setState] = useState({ count: 0, theme: "black" });

  const incrementCount = () => {
    setState((prevState) => ({
      ...prevState,
      count: prevState.count + 1,
      theme: "blue",
    }));
  };
  return (
    <div>
      <h1>UseState</h1>
      <p>{state.count}</p>
      <button onClick={incrementCount}>Click</button>
    </div>
  );
}
export default UseState;
