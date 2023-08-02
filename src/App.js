import Layout from "./components/Layout/Layout";
import MainContainer from "./components/MainContainer/MainContainer";
import NavBar from "./components/NavBar/NavBar";
import "./globalStyles.css"


function App() {
  return (
    <Layout>
      <NavBar />
      <MainContainer />
    </Layout>
  )

}

export default App;
