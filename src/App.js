// import '../StyleSheets/app.css';
import './StyleSheets/Root.css';
import NavBar from './Components/Navbar';
import Carousel from './Components/Carousel';
import About from './Components/About';
import Quote from './Components/Quote';
import Final from './Components/Final';

function App() {
  return (
    <>
      <NavBar />
      <Carousel />
      <About />
      <Quote />
      <Final />
    </>
  );
}

export default App;