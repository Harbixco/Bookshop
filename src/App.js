import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { Routes, Route } from "react-router-dom";
import Home from "./Online-BookShop/Home";
import Ourservices from "./Online-BookShop/Ourservices";
import ContactUs from "./Online-BookShop/ContactUs";
import RegSign from "./Online-BookShop/RegSign";
import Error from "./Online-BookShop/Error";
import Header from "./Online-BookShop/Header";
import AboutUs from "./Online-BookShop/AboutUs";


function App() {
  return (
    <div className="App">
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/Ourservices" element={<Ourservices />} />
        <Route path="/AboutUs" element={<AboutUs />} />
        <Route path="/ContactUs" element={<ContactUs />} />
        <Route path="/RegSign" element={<RegSign />} />
        <Route path="*" element={<Error />} />
      </Routes>
    </div>
  );
}

export default App; 
