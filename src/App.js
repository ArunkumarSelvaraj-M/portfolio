// import Nav from "./Components/Nav/Nav";
import Home from "./Pages/Home/Home";
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Network from './Pages/Blogs/Network/Network';
import './App.css';

function App() {
  return (
    <>
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/network" element={<Network />} />
      </Routes>
    </Router>
    </>
  );
}

export default App;
