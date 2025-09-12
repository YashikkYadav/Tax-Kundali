import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Home0 from "./components/Home0";
import Contact from "./components/contact";
import "./App.css";

function App() {
  return (
    <Router>
      <Header />
      <Routes>
        <Route path="/" element={<Home0 />} />
        <Route path='/contact' element={<Contact />} /> 
        {/* Add more routes later if needed */}
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;
