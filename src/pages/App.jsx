import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./Home/Home"
import About from "./About/About";

export default function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home/>} />
        <Route path="/About" element={<About/>}/>
      </Routes>
    </Router>
  )
}