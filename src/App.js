// import Filter from "./filer/Filter";
import Navigation from "./navigation/Navigation";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Contact from "./pages/Contact";
import Product from "./pages/Product";
import PhoneDescription from "./pages/PhoneDescription";
import SamsungPhoto from "./pages/SamsungPhoto";

function App() {
  return (
    <BrowserRouter>
      <Navigation />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/product" element={<Product />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/phone/:model" element={<PhoneDescription />} />
        <Route path="/phone/:redSamsung" element={<SamsungPhoto />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
