import { useState } from "react";
import { Link } from "react-router-dom";
import { Zap, Menu, X, User, Phone, Shield, Cpu, Car } from "lucide-react";
import { Button } from "./ui/button";

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="fixed top-0 left-0 right-0 z-50 glass-card border-b border-neon/20 holographic">
      <div className="container mx-auto px-4 h-16 flex items-center justify-between">
        {/* Logo */}
        <Link to="/" className="flex items-center space-x-3 group">
          <div className="relative p-2 rounded-lg bg-neon/20 group-hover:bg-neon/30 transition-all duration-300 neon-glow group-hover:scale-110">
            <Zap className="h-6 w-6 text-neon animate-pulse" />
            <div className="absolute inset-0 rounded-lg bg-neon/10 animate-ping" />
          </div>
          <div className="flex flex-col">
            <span className="text-xl font-bold gradient-text font-cyber tracking-wider">LuxoDrive</span>
            <span className="text-xs text-neon/70 font-mono tracking-widest">XR</span>
          </div>
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center space-x-8">
          <Link 
            to="/cars" 
            className="text-foreground hover:text-neon transition-all duration-300 font-medium font-cyber tracking-wide hover:glow relative group"
          >
            <span className="relative z-10">Browse XR Fleet</span>
            <div className="absolute inset-0 bg-neon/10 scale-0 group-hover:scale-100 transition-transform duration-300 rounded" />
          </Link>
          <Link 
            to="/list-car" 
            className="text-foreground hover:text-neon transition-all duration-300 font-medium font-cyber tracking-wide hover:glow relative group"
          >
            <span className="relative z-10">List Vehicle</span>
            <div className="absolute inset-0 bg-neon-pink/10 scale-0 group-hover:scale-100 transition-transform duration-300 rounded" />
          </Link>
          <Link 
            to="/how-it-works" 
            className="text-foreground hover:text-neon transition-all duration-300 font-medium font-cyber tracking-wide hover:glow relative group"
          >
            <span className="relative z-10">XR Experience</span>
            <div className="absolute inset-0 bg-neon/10 scale-0 group-hover:scale-100 transition-transform duration-300 rounded" />
          </Link>
          <Link 
            to="/support" 
            className="text-foreground hover:text-neon transition-all duration-300 font-medium font-cyber tracking-wide hover:glow relative group flex items-center space-x-1"
          >
            <Phone className="h-4 w-4" />
            <span className="relative z-10">Neural Support</span>
            <div className="absolute inset-0 bg-neon-pink/10 scale-0 group-hover:scale-100 transition-transform duration-300 rounded" />
          </Link>
        </nav>

        {/* Desktop Auth Buttons */}
        <div className="hidden md:flex items-center space-x-4">
          <Button variant="ghost" className="holo-btn font-cyber" asChild>
            <Link to="/login">
              <User className="h-4 w-4 mr-2" />
              Neural Link
            </Link>
          </Button>
          <Button className="bg-neon hover:bg-neon/90 text-neon-foreground neon-glow font-cyber tracking-wide relative overflow-hidden group" asChild>
            <Link to="/register">
              <Shield className="h-4 w-4 mr-2" />
              <span className="relative z-10">Access XR</span>
              <div className="absolute inset-0 bg-neon-pink/20 translate-x-[-100%] group-hover:translate-x-0 transition-transform duration-500" />
            </Link>
          </Button>
        </div>

        {/* Mobile Menu Button */}
        <button
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          className="md:hidden p-2 rounded-lg hover:bg-neon/20 transition-all duration-300 neon-glow hover:scale-110"
        >
          {isMenuOpen ? (
            <X className="h-6 w-6 text-foreground animate-spin" />
          ) : (
            <Menu className="h-6 w-6 text-foreground" />
          )}
        </button>
      </div>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="md:hidden glass-card border-t border-neon/20 holographic animate-accordion-down">
          <div className="container mx-auto px-4 py-4 space-y-4">
            <Link 
              to="/cars" 
              className="block py-2 text-foreground hover:text-neon transition-all duration-300 font-medium font-cyber tracking-wide hover:glow relative group"
              onClick={() => setIsMenuOpen(false)}
            >
              <Car className="h-4 w-4 mr-2 inline" />
              Browse XR Fleet
            </Link>
            <Link 
              to="/list-car" 
              className="block py-2 text-foreground hover:text-neon transition-all duration-300 font-medium font-cyber tracking-wide hover:glow relative group"
              onClick={() => setIsMenuOpen(false)}
            >
              <Cpu className="h-4 w-4 mr-2 inline" />
              List Vehicle
            </Link>
            <Link 
              to="/how-it-works" 
              className="block py-2 text-foreground hover:text-neon transition-all duration-300 font-medium font-cyber tracking-wide hover:glow relative group"
              onClick={() => setIsMenuOpen(false)}
            >
              <Zap className="h-4 w-4 mr-2 inline" />
              XR Experience
            </Link>
            <Link 
              to="/support" 
              className="block py-2 text-foreground hover:text-neon transition-all duration-300 font-medium font-cyber tracking-wide hover:glow relative group"
              onClick={() => setIsMenuOpen(false)}
            >
              <Phone className="h-4 w-4 mr-2 inline" />
              Neural Support
            </Link>
            <div className="flex flex-col space-y-2 pt-4 border-t border-neon/20">
              <Button variant="ghost" className="holo-btn font-cyber" asChild>
                <Link to="/login" onClick={() => setIsMenuOpen(false)}>
                  <User className="h-4 w-4 mr-2" />
                  Neural Link
                </Link>
              </Button>
              <Button className="bg-neon hover:bg-neon/90 text-neon-foreground neon-glow font-cyber" asChild>
                <Link to="/register" onClick={() => setIsMenuOpen(false)}>
                  <Shield className="h-4 w-4 mr-2" />
                  Access XR
                </Link>
              </Button>
            </div>
          </div>
        </div>
      )}
    </header>
  );
}
