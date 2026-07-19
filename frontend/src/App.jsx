import Home from "./landing/home/Home";
import { Routes, Route } from "react-router-dom";
import Signup from "./landing/signup/Signup";
import AboutPage from "./landing/about/AboutPage";
import PricingPage from "./landing/pricing/PricingPage";
import ProductPage from "./landing/product/ProductPage";
import Support from "./landing/support/Support";
import Navbar from "./landing/Navbar";
import Footer from "./landing/Footer";
import NotFound from "./NotFound";
function App() {
  return (
    <>
    <Navbar/>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/about" element={<AboutPage />} />
        <Route path="/pricing" element={<PricingPage />} />
        <Route path="/product" element={<ProductPage />} />
        <Route path="/support" element={<Support />} />
        <Route path="*" element={<NotFound />} />
       
      </Routes>
    <Footer/>
    </>
  );
}

export default App;
