import Home from "./pages/Home/Home";
import About from "./pages/About/About";
import Blog from "./pages/Blog/Blog";
import Projects from "./pages/Projects/Projects";
import Header from "./components/Header/Header";
import Project from "./pages/Projects/Project";

import { Routes, Route, Link } from "react-router-dom";
import Footer from "./components/Footer/Footer";


function App() {

  return (
    <div className="App">
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="about" element={<About />} />
        <Route path="blog" element={<Blog />} />
        <Route path="projects" element={<Projects />} />
        <Route path="projects/:slug" element={<Project />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
