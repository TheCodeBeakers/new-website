// import '../StyleSheets/app.css';
import "./StyleSheets/Root.css";
import NavBar from "./Components/Navbar";
import Carousel from "./Components/Carousel";
import About from "./Components/About";
import Quote from "./Components/Quote";
import Final from "./Components/Final";
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import Homepage from "./Pages/Homepage";
import Abouts from "./Pages/Abouts";

function App() {
  return (
    <>
      <BrowserRouter>
        <NavBar />
        <Routes>
          <Route element={<Homepage />} path="/" />
          <Route element={<Abouts />} path="/about" />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
