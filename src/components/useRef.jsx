import { useEffect, useRef, useState } from "react";

function UseRef() {
  const [name, setName] = useState("");

  //   const renders = useRef(0);
  //   useEffect(() => {
  //     renders.current = renders.current + 1;

  //     // console.log(name);
  //     // console.log(renders.current);
  //   });

  // const inputRef = useRef();
  // console.log(inputRef.current); HTMl <input type="text" value="lucas">
  // const focusInput = () => {
  //   inputRef.current.focus();
  // };

  const previousName = useRef();

  useEffect(() => {
    previousName.current = name;
  }, [name]);
  return (
    <div>
      <h1>UseRef</h1>
      <input
        type="text"
        value={name}
        // ref={inputRef}
        onChange={(e) => setName(e.target.value)}
      />
      <p>Hello! My name is {name}</p>
      <p>And my name was {previousName.current}</p>
      {/* <button onClick={() => focusInput()}>Focus Input</button> */}
      {/* <p>Renders: {renders.current}</p> */}
    </div>
  );
}

export default UseRef;
