import Greeting from "./components/props/greeting";
import Message from "./components/props/message";
import UseCallback from "./components/useCallback";
import ThemeContextProvider from "./components/useContext";
import UseEffect from "./components/useEffect";
import UseLayoutEffect from "./components/useLayoutEffect";
import UseMemo from "./components/useMemo";
import UseReducer from "./components/useReducer";
import UseRef from "./components/useRef";
import UseState from "./components/useState";

function App() {
  return (
    <>
      <div>
        <UseState />
        <UseEffect />
        <UseRef />
        <UseReducer />
        <UseMemo />
        <UseCallback />
        <UseLayoutEffect />
      </div>

      <div>
        <ThemeContextProvider>
          <Message />
          <Greeting />
        </ThemeContextProvider>
      </div>
    </>
  );
}

export default App;
