import { BrowserRouter, Route, Routes } from "react-router-dom";
import Footer from "./components/Footer";
import Navbar from "./components/Navbar";
import About from "./pages/about";
import CampusAmbassador from "./pages/campus-ambassador";
import Home from "./pages/home";
import ServicesPage from "./pages/services";
import { useEffect, useState } from "react";
import PrivacyPolicy from "./pages/privacy-policy";
import TermsAndCondition from "./pages/terms-and-condition";
import GrievanceRedressalPolicy from "./pages/grievance-redressal-policy";
import RefundPolicy from "./pages/refund-policy";
import Carrers from "./pages/Carrers";
import Contact from "./pages/Contact";
import Dashboard from "./pages/Dashbord";
import Donation from "./pages/Donation";
import Login from "./pages/loginWithPassword";
import Register from "./pages/register";
import Survey from "./pages/Survey";

function App() {
  const [scrollPercentage, setScrollPercentage] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const scrollHeight = document.documentElement.scrollHeight - window.innerHeight;
      const currentPosition = window.scrollY;
      const percentage = (currentPosition / scrollHeight) * 100;
      setScrollPercentage(percentage);
    }
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, [])

  return (
    <>
      <BrowserRouter>
        <div className="progress-bar" style={{ width: `${scrollPercentage}%` }} />
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/campus-ambassador" element={<CampusAmbassador />} />
          <Route path="/join-us" element={<Carrers />} />
          <Route path="/contact-us" element={<Contact />} />
          <Route path="/services" element={<ServicesPage />} />
          <Route path="/privacy-policy" element={<PrivacyPolicy />} />
          <Route path="/terms-and-conditions" element={<TermsAndCondition />} />
          <Route path="/grievance-redressal-policy" element={<GrievanceRedressalPolicy />} />
          <Route path="/refund-policy" element={<RefundPolicy />} />
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/donate-us" element={<Donation />} />
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<Register />} />
          <Route path="/survey" element={<Survey />} />
        </Routes>
        <Footer />

      </BrowserRouter>
    </>
  )
}

export default App
