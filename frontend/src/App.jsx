import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Home from "./pages/Home";
import Contact from "./components/contact";
import About from "./pages/About";
import Services from "./pages/Services";
import Blog from "./pages/Blog";
import BlogDetails from "./pages/BlogDetails";
import FloatingIcon from "./components/ui/floatingIcon";
import "./App.css";

function App() {
  return (
    <Router>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path='/contact' element={<Contact />} /> 
        <Route path='/about' element={<About/>}/>
        <Route path="/services" element={<Services/>}/>
        <Route path="/blog" element={<Blog/>}/>
        <Route path="/blog/:id" element={<BlogDetails/>}/>
        {/* Add more routes later if needed */}
      </Routes>
      <Footer />
      <FloatingIcon/>
    </Router>
  );
}

export default App;