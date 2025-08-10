import { Routes, Route } from "react-router-dom";
import Navbar from "./components/hero/Navbar";
import Hero from "./components/hero/Hero";
import Dashboard from "./components/pages/Dashboard";
import History from "./components/pages/History";
import PageNotFound from "./components/pages/PageNotFound";

function App() {
  return (
    <div className="min-h-screen bg-gray-50">
      <Navbar />
      <Routes>
        <Route path="/" element={<Hero />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/history" element={<History />} />
        <Route path="*" element={<PageNotFound />} />
      </Routes>
    </div>
  );
}

export default App;
