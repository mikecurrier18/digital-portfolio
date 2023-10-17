import About from "./components/About";
import Home from "./components/Home";
import Navbar from "./components/Navbar";
import Skills from "./components/Skills";
import Work from "./components/Work";
import Contact from "./components/Contact";
import Capstone from "./components/Capstone";
import { Routes, Route } from "react-router-dom";

function App() {
  return (
    <div>
      <Routes>
      <Route path="/capstone" element={<Capstone/>}>

      </Route>
    </Routes>
      <Navbar />
      <Home />
      <About />
      <Skills />
      <Work />
      <Contact />

      
    </div>
  );
}

export default App;
