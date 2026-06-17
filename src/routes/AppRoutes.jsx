import { Routes, Route } from "react-router-dom";

import Home from "../pages/Home";
import Blog from "../pages/Blog";
import Tools from "../pages/Tools";
import About from "../pages/About";
import Services from "../pages/Services";
import BlogDetail from "../pages/BlogDetail";
import ToolDetail from "../pages/ToolDetail";

const AppRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/blog" element={<Blog />} />
      <Route path="/blog/:slug" element={<BlogDetail />} />
      <Route path="/tools" element={<Tools />} />
      <Route path="/tools/:slug" element={<ToolDetail />} />
      <Route path="/services" element={<Services />} />
      <Route path="/about" element={<About />} />
    </Routes>
  );
};

export default AppRoutes;
