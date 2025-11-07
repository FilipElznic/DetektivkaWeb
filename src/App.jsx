import "./index.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Home from "./pages/Home";
import Blog from "./pages/Blog";
import Vyvoj from "./pages/Vyvoj";
import ONas from "./pages/ONas";
import Github from "./pages/Github";

function App() {
  return (
    <Router>
      <Routes>
        {/* Home / Landing page */}
        <Route path="/" element={<Home />} />
        <Route path="/blog" element={<Blog />} />
        <Route path="/vyvoj" element={<Vyvoj />} />
        <Route path="/onas" element={<ONas />} />
        <Route path="/github" element={<Github />} />
      </Routes>
    </Router>
  );
}

export default App;
