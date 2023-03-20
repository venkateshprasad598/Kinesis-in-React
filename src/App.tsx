import { useState } from "react";
import reactLogo from "./assets/react.svg";
import "./App.css";
import ConvertToReact from "./components/ConvertToReact";

function App() {
  const [count, setCount] = useState(0);

  return (
    <div className="App">
      <ConvertToReact />
    </div>
  );
}

export default App;
