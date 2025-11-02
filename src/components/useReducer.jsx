import { useReducer, useState } from "react";

const reducer = (state, action) => {
  switch (action.type) {
    // case "increment":
    //   return {
    //     counter: state.counter + 1,
    //   };
    // case "descrement":
    //   return {
    //     ...state,
    //     counter: state.counter - 1,
    //   };
    case "add-task":
      return {
        ...state,
        tasks: [...state.tasks, { name: action.payload, isCompleted: false }],
      };

    case "toggle-task":
      return {
        ...state,
        tasks: state.tasks.map((item, index) =>
          index === action.payload
            ? { ...item, isCompleted: !item.isCompleted }
            : item
        ),
      };
    default:
      return state;
  }
};
function UseReducer() {
  const [state, dispatch] = useReducer(reducer, { counter: 0, tasks: [] });
  const [inputValue, setInputValue] = useState("");

  return (
    <div>
      <h1>UseReducer</h1>
      {/* <p>{state.counter}</p>
       <button onClick={() => dispatch({ type: "increment" })}>increment</button> 
      <button onClick={() => dispatch({ type: "descrement" })}>
        Descrement
        </button> */}
      <input
        type="text"
        value={inputValue}
        onChange={(e) => setInputValue(e.target.value)}
      />
      <button
        onClick={() => {
          //Type: nome da etiqueta, payload: valor
          dispatch({ type: "add-task", payload: inputValue });
          setInputValue("");
        }}
      >
        Adicionar
      </button>

      {state.tasks.map((task, index) => (
        <p
          onClick={() => dispatch({ type: "toggle-task", payload: index })}
          style={{ textDecoration: task.isCompleted ? "line-through" : "none" }}
        >
          {task.name}
        </p>
      ))}
    </div>
  );
}

export default UseReducer;
