import "./index.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Home from "./pages/Home";
import Blog from "./pages/Blog";
import Vyvoj from "./pages/Vyvoj";
import ONas from "./pages/ONas";
import Github from "./pages/Github";
import Cookies from "./pages/Cookies";
import Podminky from "./pages/Podminky";
import OchranaUdaju from "./pages/OchranaUdaju";
import Navbar from "./Components/Navbar";
import Footer from "./Components/Footer";

function App() {
  return (
    <Router>
      <div className="relative min-h-screen flex flex-col">
        <div className="absolute top-0 left-0 w-full z-50">
          <Navbar />
        </div>
        <main className="flex-grow">
          <Routes>
            {/* Home / Landing page */}
            <Route path="/" element={<Home />} />
            <Route
              path="/blog"
              element={
                <div className="page-transition">
                  <Blog />
                </div>
              }
            />
            <Route
              path="/vyvoj"
              element={
                <div className="page-transition">
                  <Vyvoj />
                </div>
              }
            />
            <Route
              path="/onas"
              element={
                <div className="page-transition">
                  <ONas />
                </div>
              }
            />
            <Route
              path="/github"
              element={
                <div className="page-transition">
                  <Github />
                </div>
              }
            />
            <Route
              path="/cookies"
              element={
                <div className="page-transition">
                  <Cookies />
                </div>
              }
            />
            <Route
              path="/podminky"
              element={
                <div className="page-transition">
                  <Podminky />
                </div>
              }
            />
            <Route
              path="/ochrana-udaju"
              element={
                <div className="page-transition">
                  <OchranaUdaju />
                </div>
              }
            />
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
