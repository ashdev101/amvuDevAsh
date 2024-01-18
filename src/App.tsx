import { BrowserRouter, Route, Routes } from "react-router-dom";
import Footer from "./components/Footer";
import Navbar from "./components/Navbar";
import About from "./pages/about";
import CampusAmbassador from "./pages/campus-ambassador";
import Home from "./pages/home";
import ServicesPage from "./pages/services";
function App() {



  return (
    <>
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/join-us" element={<CampusAmbassador />} />
          <Route path="/services" element={<ServicesPage />} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </>
  )
}

export default App
