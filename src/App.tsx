//import { motion, useScroll } from "framer-motion";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Footer from "./components/Footer";
import Navbar from "./components/Navbar";
import Home from "./pages/home";
function App() {
  // const { scrollYProgress } = useScroll(); // progressbar


  return (
    <>
      <BrowserRouter>
        {/* Progressbar */}
        {/*   <motion.div
          className="progress-bar"
          style={{ scaleX: scrollYProgress }}
        /> */}
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </>
  )
}

export default App
