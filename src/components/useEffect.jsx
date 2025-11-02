import { useEffect, useState } from "react";

function UseEffect() {
  const [resourceType, setResourceType] = useState("posts");
  const [items, setItems] = useState([]);
  //   const [count, setCount] = useState(0);

  const changeType = (type) => {
    setResourceType(type);
  };

  useEffect(() => {
    // setCount((prev) => prev + 1);
    async function fetchResourceTypes() {
      const res = await fetch(
        `https://jsonplaceholder.typicode.com/${resourceType}?_limit=10`
      );
      const data = await res.json();
      setItems(data);
      console.log(data);
    }
    fetchResourceTypes();
    // console.log(items);
  }, [resourceType]);

  //   useEffect(() => {
  //     const interval = setInterval(() => {
  //       setCount((c) => c + 1);
  //       console.log("Rodando...");
  //     }, 3000);

  //     return () => {
  //       clearInterval(interval); // Executa quando o componente sai da tela
  //       console.log("Parou de rodar!");
  //     };
  //   }, []);
  return (
    // style={{ display: "flex", alignItems: "center" }} Style
    <div>
      <h1>UseEffect</h1>
      <p>{resourceType}</p>
      {/* <p>{count}</p> */}
      <button onClick={() => changeType("posts")}>Posts</button>
      <button onClick={() => changeType("comments")}>Comments</button>
      <button onClick={() => changeType("todos")}>Todos</button>
      {items.map((items) => items.id)}
    </div>
  );
}
export default UseEffect;
