import './App.css'
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import Home from "./pages/Home";
import About from "./pages/About";
import Contact from "./pages/Contact"; // ✅ Capital C fix
import Socail from "./pages/Socail"; 
import Lead from "./pages/lead"; 
import Dynamic from "./pages/Dynamic"; 
import Multi from "./pages/Multi"; 
import Ansa from "./pages/Ansa"; 



import { useState } from "react";
import { 
  ArrowDownLeftIcon, 
  ChevronDownIcon, 
  Bars3Icon, 
  XMarkIcon 
} from '@heroicons/react/24/outline';

export default function App() {
  const [open, setOpen] = useState(false);


  return (
    <BrowserRouter>
      {/* Navbar */}
      <nav className="flex items-center justify-between bg-[#010101] text-white lg:mx-40 py-5 px-4 border border-[#141414] rounded-full">
        
        {/* Logo */}
        <div>
          <img src="/bitzsol.JPG" alt="Bitzsol Logo" className="h-7 w-20" />
        </div>

        {/* Desktop Menu */}
        <div className="hidden lg:flex justify-center gap-3.5 text-[15px]">
          <Link to="/" onClick>Why Us</Link>
          <Link to="/about" onClick>Mission</Link>
          <Link to="/contact" onClick>Work</Link>
          <Link to="/socail" onClick>Services</Link>
          <Link to="/dynamic" onClick className="flex items-center gap-1">
            <span>Pages</span>
            <ChevronDownIcon className="h-4 w-4 text-white" />
          </Link>
        </div>

        {/* Desktop CTA */}
           <div className="hidden lg:flex items-center gap-2">
          <a 
            href="https://wa.me/923245032005" 
            target="_blank" 
            rel="noopener noreferrer" 
            className="flex items-center gap-2"
          >
            <span>Let's Talks</span>
            <ArrowDownLeftIcon className="h-4 w-4 rotate-180" />
          </a>
        </div>

        {/* Mobile Hamburger */}
        <div className="lg:hidden flex justify-end">
          <button onClick={() => setOpen(!open)}>
            {open ? (
              <XMarkIcon className="h-6 w-6" />
            ) : (
              <Bars3Icon className="h-6 w-6" />
            )}
          </button>
        </div>
      </nav>

      {/* Mobile Sidebar */}
      {open && (
        <div className="fixed top-0 left-0 w-full h-full bg-[#010101] text-white flex flex-col gap-6 p-6 z-50">
          <Link to="/" onClick={() => setOpen(false)}>Why Us</Link>
          <Link to="/about" onClick={() => setOpen(false)}>Mission</Link>
          <Link to="/Contact" onClick={() => setOpen(false)}>Work</Link>
          <Link to="/contact" onClick={() => setOpen(false)}>Services</Link>
          <Link to="/contact" onClick={() => setOpen(false)} className="flex items-center gap-1 pl-5">
            <span>Pages</span>
            <ChevronDownIcon className="h-4 w-4 text-white" />
          </Link>
           <a 
            href="https://wa.me/923245032005" 
            target="_blank" 
            rel="noopener noreferrer" 
            onClick={() => setOpen(false)} 
            className="flex items-center gap-2 mt-4 pl-5"
          >
            <span>Let's Talks</span>
            <ArrowDownLeftIcon className="h-3 w-3 rotate-180" />
          </a>
        </div>
        
      )}

      {/* Routes */}
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/socail" element={<Socail/>} />
        <Route path="/lead" element={<Lead/>} />
        <Route path="/dynamic" element={<Dynamic/>} />
        <Route path="/multi" element={<Multi/>} />
          <Route path="/ansa" element={<Ansa/>} />

      </Routes>
    </BrowserRouter>
  );
}
