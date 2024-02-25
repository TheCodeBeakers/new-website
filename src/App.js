import "./StyleSheets/Root.css";
import NavBar from "./Components/Navbar";
import { BrowserRouter, Routes, Route} from "react-router-dom";
import Homepage from "./Pages/Homepage";
import Abouts from "./Pages/Abouts";
import Resources from "./Pages/Resources";
import Footer from "./Components/Footer";

function App() {
  return (
    <>
      <BrowserRouter>
        <NavBar />
        <Routes>
          <Route element={<Homepage />} path="/" />
          <Route element={<Abouts />} path="/about" />
          <Route element={<Resources/>} path="/resources"/>
        </Routes>
      </BrowserRouter>
      <Footer />
    </>
  );
}

export default App;
