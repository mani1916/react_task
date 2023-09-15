// import logo from './logo.svg';
import "./App.css";
import Color from "./components/Color";
import AddColour from "./components/AddColour";
import Toogle from "./components/Toogle";
import { useState } from "react";

function App() {
  const [color, setColor] = useState("Empty-value");
  // console.log(color)
  const [toogle, setToggle] = useState(true);
  // console.log(toogle)
  return (
    <div className="appp">
      <Color colorvalue={color} toogle={toogle} />
      {/* <p>{color}</p> */}
      <AddColour
        color={color}
        // handlecolor={handlecolor}
        setColor={setColor}
      />
      <Toogle toogle={toogle} setToggle={setToggle} />
    </div>
  );
}

export default App;
