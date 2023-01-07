import logo from "./logo.svg";
import "./App.css";
import "./navbar/Navbar";
import Navbar from "./navbar/Navbar";
import HeroArea from "./heroArea/HeroArea";

function App() {
  const title = "App Component Test";
  return [<Navbar />, <HeroArea />];
}

export default App;
