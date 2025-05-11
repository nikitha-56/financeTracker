import React, { useState } from "react";
import { Link } from "react-router-dom";
import '../App.css'; 
import HeroSection from "./HeroSection"; 

function Home() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <div className="home-container">
      <nav className="home-nav">
      </nav>
      <HeroSection />
    </div>
  );
}


export default Home;
