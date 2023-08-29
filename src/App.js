import { useState } from "react";
import MainContainer from "./components/MainContainer/MainContainer";
import NavBar from "./components/NavBar/NavBar";
import "./globalStyles.css"


function App() {

  const [isActive, setIsActive] = useState(false);
  return (
    <div className={`app ${isActive ? "active" : ""}`}>

      <NavBar isActive={isActive} setIsActive={setIsActive} />
      <MainContainer active={isActive} />


    </div>
  )

}

export default App;
