import logo from "./logo.svg";
import "./App.css";
// import "./components/navbar/Navbar";
import Navbar from "./components/navbar/Navbar";
// import HeroArea from "./components/heroArea/HeroArea";
// import SearchBar from "./components/searchBar/SearchBar";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Login from "./pages/Login";
import Home from "./pages/Home";
import { Fragment } from "react";

function App() {
  const title = "App Component Test";

  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
