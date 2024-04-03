import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./Home/Home"
import Aduan from "./Aduan/Aduan";
import About from "./TentangKami/About";
import Berita from "./Berita/Berita";
import Kontak from "./Kontak/Kontak";

export default function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home/>} />
        <Route path="/Aduan" element={<Aduan/>}/>
        <Route path="/TentangKami" element={<About/>}/>
        <Route path="/Berita" element={<Berita/>}/>
        <Route path="/Kontak" element={<Kontak/>}/>
      </Routes>
    </Router>
  )
}