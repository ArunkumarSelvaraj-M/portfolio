import { BrowserRouter as Router, Route, Routes, Navigate } from "react-router-dom";
import Home from "./Pages/Home/Home";
import Network from "./Pages/Blogs/Network/Network";
import Kubernetes from "./Pages/Blogs/Kubernetes/Kubernetes";
import "./App.css";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/network" element={<Network />} />
        <Route path="/kubernetes" element={<Kubernetes />} />
        {/* Redirect all unknown routes to Home */}
        <Route path="*" element={<Navigate to="/" replace />} />
      </Routes>
    </Router>
  );
}

export default App;
