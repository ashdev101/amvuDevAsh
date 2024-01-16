import { BrowserRouter, Route, Routes } from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./pages/home";
import Footer from "./components/Footer";
import About from "./pages/about";
import JoinUs from "./pages/joinus";
function App() {



  return (
    <>
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/join-us" element={<JoinUs />} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </>
  )
}

export default App
