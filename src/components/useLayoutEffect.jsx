import { useLayoutEffect, useRef, useState } from "react";

function UseLayoutEffect() {
  const [count, setCount] = useState(1);

  //fluxo: Renderiza > pinta a tela > useEffect Roda
  //   useEffect(() => {
  //     console.log(count);
  //   }, [count]);

  const [show, setShow] = useState(false);

  const popup = useRef();
  const button = useRef();
  // fluxo: Renderiza > useLayoutEffect Roda > pinta a tela
  useLayoutEffect(() => {
    if (!popup.current || !button.current) return;

    const { bottom } = button.current.getBoundingClientRect(); //permite eu ter acesso ao bottom do elemento

    popup.current.style.top = `${bottom + 750}px`;
  }, [show]);
  return (
    <>
      <h1>UselayoutEffect</h1>
      <h2>{count}</h2>
      <button onClick={() => setCount((prev) => prev + 1)}>Increment</button>

      <button ref={button} onClick={() => setShow((prev) => !prev)}>
        Toggle Modal
      </button>

      {show && (
        <div
          style={{
            position: "absolute",
            backgroundColor: "black",
            color: "white",
          }}
          ref={popup}
        >
          Hello from modal!
        </div>
      )}
    </>
  );
}

export default UseLayoutEffect;
