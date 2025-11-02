import { useState, useEffect } from "react";

function List({ getItens }) {
  const [items, setItems] = useState([]);

  useEffect(() => {
    getItens().then((result) => setItems(result));
  }, [getItens]);
  return (
    <>
      {items &&
        items.map((item) => <p key={item.id}>{item?.title || item?.name}</p>)}
    </>
  );
}

export default List;
