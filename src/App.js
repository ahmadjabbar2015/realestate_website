import logo from "./logo.svg";
import "./App.css";
import "./StyleDark.css";

// import "./components/navbar/Navbar";
import Navbar from "./components/navbar/Navbar";
// import HeroArea from "./components/heroArea/HeroArea";
// import SearchBar from "./components/searchBar/SearchBar";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Login from "./pages/Login";
import Home from "./pages/Home";
import SingleProperty from "./pages/SingleProperty";
import { Fragment } from "react";
import { library } from "@fortawesome/fontawesome-svg-core";
import { fab } from "@fortawesome/free-brands-svg-icons";
import {
  faBed,
  faBath,
  faMap,
  faMapLocationDot,
  faMapMarker,
  faRuler,
  faRulerCombined,
} from "@fortawesome/free-solid-svg-icons";

library.add(
  fab,
  faBed,
  faBath,
  faMap,
  faMapLocationDot,
  faMapMarker,
  faRulerCombined
);

function App() {
  const title = "App Component Test";

  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/property/:id" element={<SingleProperty />} />
        <Route path="/login" element={<Login />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
