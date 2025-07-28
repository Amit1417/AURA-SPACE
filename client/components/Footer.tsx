import { Link } from "react-router-dom";
import { Zap, Phone, Mail, MessageCircle, MapPin, Clock, Shield, Cpu, Radio, Wifi } from "lucide-react";
import { Button } from "./ui/button";

export default function Footer() {
  return (
    <footer className="bg-dark border-t border-neon/20 relative overflow-hidden">
      {/* Data Stream Background */}
      <div className="absolute inset-0 opacity-10">
        <div className="cyber-grid h-full w-full" />
      </div>

      {/* Emergency Neural Helpline Banner */}
      <div className="bg-gradient-to-r from-neon/20 via-neon-pink/20 to-neon/20 border-b border-neon/30 relative">
        <div className="absolute inset-0 holographic" />
        <div className="container mx-auto px-4 py-4 relative z-10">
          <div className="flex flex-col md:flex-row items-center justify-center space-y-3 md:space-y-0 md:space-x-8 text-center">
            <div className="flex items-center space-x-3 text-neon">
              <div className="relative">
                <Phone className="h-6 w-6 animate-pulse" />
                <div className="absolute inset-0 animate-ping">
                  <Phone className="h-6 w-6 opacity-30" />
                </div>
              </div>
              <span className="font-cyber font-bold tracking-wide">24/7 NEURAL EMERGENCY:</span>
              <a href="tel:+911800123456" className="font-bold hover:text-neon/80 transition-colors font-mono text-lg">
                +91 1800-XR-HELP
              </a>
            </div>
            <div className="flex items-center space-x-3 text-neon-pink">
              <Radio className="h-5 w-5 animate-spin-slow" />
              <span className="font-cyber">Emergency Matrix:</span>
              <a href="mailto:emergency@luxodrive.xr" className="font-bold hover:text-neon-pink/80 transition-colors font-mono">
                emergency@luxodrive.xr
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Main Footer Content */}
      <div className="container mx-auto px-4 py-16 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12">
          {/* Brand Section */}
          <div className="space-y-6">
            <Link to="/" className="flex items-center space-x-3 group">
              <div className="relative p-3 rounded-lg bg-neon/20 group-hover:bg-neon/30 transition-all duration-300 neon-glow">
                <Zap className="h-7 w-7 text-neon animate-pulse" />
                <div className="absolute inset-0 rounded-lg bg-neon/10 animate-ping" />
              </div>
              <div className="flex flex-col">
                <span className="text-2xl font-bold gradient-text font-cyber tracking-wider">LuxoDrive</span>
                <span className="text-sm text-neon/70 font-mono tracking-widest">XR</span>
              </div>
            </Link>
            
            <p className="text-muted-foreground font-cyber leading-relaxed">
              The neural-enhanced platform for luxury vehicle rentals. 
              Experience reality-transcendent mobility with quantum-grade security.
            </p>
            
            <div className="space-y-3">
              <Button 
                variant="outline" 
                size="sm" 
                className="border-neon text-neon hover:bg-neon hover:text-neon-foreground holo-btn font-cyber tracking-wide w-full"
              >
                <MessageCircle className="h-4 w-4 mr-2 animate-pulse" />
                Neural Chat Interface
              </Button>
              
              <div className="text-xs font-mono text-neon/60 text-center">
                STATUS: ONLINE • LATENCY: &lt;1ms
              </div>
            </div>
          </div>

          {/* Navigation Matrix */}
          <div className="space-y-6">
            <h3 className="text-lg font-bold text-foreground font-cyber tracking-wide flex items-center">
              <Cpu className="h-5 w-5 mr-2 text-neon animate-spin-slow" />
              NAVIGATION MATRIX
            </h3>
            <div className="space-y-3">
              <Link to="/cars" className="block text-muted-foreground hover:text-neon transition-all duration-300 font-cyber hover:glow relative group">
                <span className="relative z-10">XR Fleet Access</span>
                <div className="absolute inset-0 bg-neon/10 scale-0 group-hover:scale-100 transition-transform duration-300 rounded" />
              </Link>
              <Link to="/list-car" className="block text-muted-foreground hover:text-neon-pink transition-all duration-300 font-cyber hover:glow relative group">
                <span className="relative z-10">Vehicle Upload Protocol</span>
                <div className="absolute inset-0 bg-neon-pink/10 scale-0 group-hover:scale-100 transition-transform duration-300 rounded" />
              </Link>
              <Link to="/how-it-works" className="block text-muted-foreground hover:text-neon transition-all duration-300 font-cyber hover:glow relative group">
                <span className="relative z-10">Neural Interface Guide</span>
                <div className="absolute inset-0 bg-neon/10 scale-0 group-hover:scale-100 transition-transform duration-300 rounded" />
              </Link>
              <Link to="/pricing" className="block text-muted-foreground hover:text-neon-pink transition-all duration-300 font-cyber hover:glow relative group">
                <span className="relative z-10">Quantum Pricing</span>
                <div className="absolute inset-0 bg-neon-pink/10 scale-0 group-hover:scale-100 transition-transform duration-300 rounded" />
              </Link>
            </div>
          </div>

          {/* Support Protocols */}
          <div className="space-y-6">
            <h3 className="text-lg font-bold text-foreground font-cyber tracking-wide flex items-center">
              <Shield className="h-5 w-5 mr-2 text-neon-pink animate-pulse" />
              SUPPORT PROTOCOLS
            </h3>
            <div className="space-y-3">
              <Link to="/help" className="block text-muted-foreground hover:text-neon transition-all duration-300 font-cyber hover:glow relative group">
                <span className="relative z-10">Neural Help Center</span>
                <div className="absolute inset-0 bg-neon/10 scale-0 group-hover:scale-100 transition-transform duration-300 rounded" />
              </Link>
              <Link to="/contact" className="block text-muted-foreground hover:text-neon-pink transition-all duration-300 font-cyber hover:glow relative group">
                <span className="relative z-10">Matrix Communication</span>
                <div className="absolute inset-0 bg-neon-pink/10 scale-0 group-hover:scale-100 transition-transform duration-300 rounded" />
              </Link>
              <Link to="/report" className="block text-muted-foreground hover:text-neon transition-all duration-300 font-cyber hover:glow relative group">
                <span className="relative z-10">Anomaly Report</span>
                <div className="absolute inset-0 bg-neon/10 scale-0 group-hover:scale-100 transition-transform duration-300 rounded" />
              </Link>
              <Link to="/safety" className="block text-muted-foreground hover:text-neon-pink transition-all duration-300 font-cyber hover:glow relative group">
                <span className="relative z-10">Safety Protocols</span>
                <div className="absolute inset-0 bg-neon-pink/10 scale-0 group-hover:scale-100 transition-transform duration-300 rounded" />
              </Link>
            </div>
          </div>

          {/* Neural Network Info */}
          <div className="space-y-6">
            <h3 className="text-lg font-bold text-foreground font-cyber tracking-wide flex items-center">
              <Wifi className="h-5 w-5 mr-2 text-neon animate-ping" />
              NEURAL NETWORK
            </h3>
            <div className="space-y-4">
              <div className="glass-card p-4 rounded-lg holographic">
                <div className="flex items-center space-x-3 text-muted-foreground mb-2">
                  <MapPin className="h-4 w-4 text-neon flex-shrink-0" />
                  <span className="font-cyber text-sm">Neo Mumbai Quantum Hub</span>
                </div>
                <div className="flex items-center space-x-3 text-muted-foreground mb-2">
                  <Phone className="h-4 w-4 text-neon-pink flex-shrink-0" />
                  <a href="tel:+919876543210" className="hover:text-neon-pink transition-colors font-mono text-sm">
                    +91 98765-XR-210
                  </a>
                </div>
                <div className="flex items-center space-x-3 text-muted-foreground mb-2">
                  <Mail className="h-4 w-4 text-neon flex-shrink-0" />
                  <a href="mailto:neural@luxodrive.xr" className="hover:text-neon transition-colors font-mono text-sm">
                    neural@luxodrive.xr
                  </a>
                </div>
                <div className="flex items-center space-x-3 text-muted-foreground">
                  <Clock className="h-4 w-4 text-neon-pink flex-shrink-0 animate-pulse" />
                  <span className="font-cyber text-sm">24/7 Quantum Support</span>
                </div>
              </div>
              
              {/* Network Status */}
              <div className="space-y-2">
                <div className="flex justify-between items-center text-xs font-mono">
                  <span className="text-muted-foreground">Network Status:</span>
                  <span className="text-neon">ONLINE</span>
                </div>
                <div className="flex justify-between items-center text-xs font-mono">
                  <span className="text-muted-foreground">Quantum Cores:</span>
                  <span className="text-neon-pink">4/4 Active</span>
                </div>
                <div className="flex justify-between items-center text-xs font-mono">
                  <span className="text-muted-foreground">Reality Index:</span>
                  <span className="text-neon">99.84%</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Enhanced Bottom Bar */}
        <div className="mt-16 pt-8 border-t border-neon/20">
          <div className="flex flex-col md:flex-row items-center justify-between space-y-6 md:space-y-0">
            <div className="flex flex-wrap items-center space-x-8 text-sm text-muted-foreground">
              <Link to="/privacy" className="hover:text-neon transition-colors font-cyber hover:glow">
                Privacy Matrix
              </Link>
              <Link to="/terms" className="hover:text-neon-pink transition-colors font-cyber hover:glow">
                Neural Terms
              </Link>
              <Link to="/cookies" className="hover:text-neon transition-colors font-cyber hover:glow">
                Data Cookies
              </Link>
            </div>
            
            <div className="flex items-center space-x-4">
              <div className="text-sm text-muted-foreground font-cyber">
                © 2024 LuxoDrive XR. All quantum rights reserved.
              </div>
              <div className="flex items-center space-x-2 text-xs font-mono text-neon/60">
                <div className="w-2 h-2 bg-neon rounded-full animate-pulse" />
                <span>NEURAL LINK ACTIVE</span>
              </div>
            </div>
          </div>
          
          {/* Powered by indicator */}
          <div className="mt-6 text-center">
            <div className="inline-flex items-center space-x-2 text-xs font-mono text-muted-foreground/60">
              <Cpu className="h-3 w-3 animate-spin-slow" />
              <span>Powered by Quantum Neural Networks</span>
              <Cpu className="h-3 w-3 animate-spin-slow" />
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
