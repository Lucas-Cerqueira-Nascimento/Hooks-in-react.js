import { useMemo, useState } from "react";

function UseMemo() {
  const [number, setNumber] = useState(1);
  const [text, setText] = useState("");

  const doubleNumber = useMemo(() => {
    return slowFunction(number);
  }, [number]);
  return (
    <>
      <h1>UseMemo</h1>
      <p>{number}</p>
      <input
        type="numver"
        value={number}
        onChange={(e) => setNumber(e.target.value)}
        placeholder="Number"
      />{" "}
      <br />
      <input
        type="text"
        value={text}
        onChange={(e) => setText(e.target.value)}
        placeholder="Text"
      />
      <p>text: {text}</p>
    </>
  );
}

const slowFunction = (num) => {
  console.log("Slow function is being called!");
  for (let i = 0; i <= 10000; i++) {}
  return num * 2;
};

export default UseMemo;
