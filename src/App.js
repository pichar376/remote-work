import { useState } from "react";
import Layout from "./components/Layout/Layout";
import MainContainer from "./components/MainContainer/MainContainer";
import NavBar from "./components/NavBar/NavBar";
import "./globalStyles.css"


function App() {

  const [active, setActive] = useState(false);
  return (
    <div className={`App ${active ? "active" : ""}`}>

      <NavBar active={active} setActive={setActive} />
      <MainContainer active={active} />


    </div>
  )

}

export default App;
