import "./App.css";
import Navbar from "./Components/layout/Navbar";
import Footer from "./Components/layout/Footer";
import Home from "./routes/Home/Home";
import Collection from "./routes/Collection/Collection";
import Contact from "./routes/Contact/Contact";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

function App() {
  return (
    <Router>
      <div className="App">
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/Collection" element={<Collection />} />
          <Route path="/Contact" element={<Contact />} />
        </Routes>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
