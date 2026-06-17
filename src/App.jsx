import { BrowserRouter, Routes, Route } from "react-router-dom";

import Navbar from "./components/layout/Navbar";
import AppRoutes from "./routes/AppRoutes";
import Footer from "./components/layout/Footer";

function App() {
  return (
    <BrowserRouter>
      <div className="min-h-screen flex flex-col">
        <Navbar />

        <div className="pt-16 flex-1">
          <AppRoutes />
        </div>

        <Footer />
      </div>
    </BrowserRouter>
  );
}

export default App;
