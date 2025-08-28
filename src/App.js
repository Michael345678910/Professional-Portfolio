// CRA default logo import (unused in this layout, but harmless to keep)
import logo from './logo.svg';
// Global styles
import './App.css';
// Bootstrap base CSS
import 'bootstrap/dist/css/bootstrap.min.css';

// Page sections (your components)
import { NavBar } from "./components/NavBar";
import { Banner } from "./components/Banner";
import { Skills } from "./components/Skills";
import { Projects } from "./components/Projects";
import { Contact } from "./components/Contact";
import { Footer } from "./components/Footer";

function App() {
  return (
    // Wrap the whole site for consistent background and font
    <div className="App">
      {/* Top navigation */}
      <NavBar />
      {/* Hero section with typewriter and illustration */}
      <Banner />
      {/* Skills matrix with progress, certs, and chips */}
      <Skills />
      {/* Showcase projects in tabs */}
      <Projects />
      {/* Contact form and illustration */}
      <Contact />
      {/* Footer with social links */}
      <Footer />
    </div>
  );
}

export default App;