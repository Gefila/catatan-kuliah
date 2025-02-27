import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import { Button } from "./components/ui/button";

function App() {
	const [count, setCount] = useState(0);

	return (
    <>
      <h1 class="text-1xl font-bold underline">Hello world!</h1>
      <Button variant="default" onClick={() => setCount(count + 1)}>
        {count}
      </Button>
    </>
  )
}

export default App;
