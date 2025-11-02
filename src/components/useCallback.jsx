import { useCallback, useState } from "react";
import List from "./props/list";

function UseCallback() {
  const [text, setText] = useState("");
  const [resourceType, setResourceType] = useState("posts");

  //impede que o js ou react recriem funções desnecessariamente a cada renderização.
  const getItens = useCallback(async () => {
    console.log("getItens is being called!");
    const res = await fetch(
      `https://jsonplaceholder.typicode.com/${resourceType}?_limit=5`
    );
    const data = await res.json();

    return data;
  }, [resourceType]); //espera o 'resourceType' alterar, para executar a função

  return (
    <div>
      <h1>UseCallback</h1>
      <input
        type="text"
        value={text}
        onChange={(e) => setText(e.target.value)}
      />

      <button onClick={() => setResourceType("posts")}>Posts</button>
      <button onClick={() => setResourceType("comments")}>Comments</button>
      <button onClick={() => setResourceType("Todos")}>Todos</button>

      <List getItens={getItens} />
    </div>
  );
}

export default UseCallback;
