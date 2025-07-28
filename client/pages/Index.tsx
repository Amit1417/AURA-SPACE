import { useState } from "react";
import { Search, MapPin, Calendar, Users, Car, Star, ArrowRight, Shield, Clock, Zap, Cpu, Eye, Radar } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Card, CardContent } from "@/components/ui/card";
import { Link } from "react-router-dom";
import HeroScene from "@/components/3d/HeroScene";
import MatrixRain from "@/components/effects/MatrixRain";
import DataStream from "@/components/effects/DataStream";

const featuredCars = [
  {
    id: 1,
    name: "Tesla Model S Plaid",
    model: "XR-7 Series",
    image: "/placeholder.svg",
    price: 8500,
    rating: 4.9,
    reviews: 247,
    location: "Neo Mumbai",
    features: ["Neural Drive", "Electric", "5 Seats", "AI Assistant"],
    owner: "Cyber Elite",
    tech: "Quantum Battery"
  },
  {
    id: 2,
    name: "BMW i8 Roadster",
    model: "Nexus Edition",
    image: "/placeholder.svg",
    price: 6200,
    rating: 4.8,
    reviews: 189,
    location: "Digital Delhi",
    features: ["Hybrid Neural", "V6 Plasma", "2 Seats", "HUD Display"],
    owner: "Tech Virtuoso",
    tech: "Fusion Engine"
  },
  {
    id: 3,
    name: "Lamborghini Aventador",
    model: "Matrix Pro",
    image: "/placeholder.svg",
    price: 12800,
    rating: 4.9,
    reviews: 156,
    location: "Cyber Bangalore",
    features: ["V12 Quantum", "Carbon Fiber", "2 Seats", "Stealth Mode"],
    owner: "Elite Protocol",
    tech: "Anti-Gravity Sys"
  }
];

export default function Index() {
  const [searchData, setSearchData] = useState({
    city: "",
    pickupDate: "",
    returnDate: "",
    carType: ""
  });

  const handleSearch = () => {
    console.log("Neural search initiated:", searchData);
  };

  return (
    <div className="pt-16 relative overflow-hidden">
      {/* Background Effects */}
      <MatrixRain />
      <DataStream className="z-10" intensity={15} />
      
      {/* Hero Section */}
      <section className="relative min-h-screen bg-gradient-to-br from-dark via-dark/95 to-dark flex items-center justify-center overflow-hidden cyber-grid">
        {/* 3D Scene Background */}
        <HeroScene className="z-20 opacity-60" />
        
        {/* Floating UI Elements */}
        <div className="absolute top-20 right-10 text-neon font-mono text-sm opacity-60 animate-pulse">
          <div>NEURAL_NETWORK: ACTIVE</div>
          <div>QUANTUM_STATE: STABLE</div>
          <div>XR_MATRIX: ONLINE</div>
        </div>
        
        <div className="absolute bottom-20 left-10 text-neon-pink font-mono text-sm opacity-60 animate-pulse" style={{ animationDelay: '1s' }}>
          <div>FLUX_CAPACITOR: 88.7%</div>
          <div>NEURAL_CORES: 4/4</div>
          <div>REALITY_INDEX: 9.84</div>
        </div>

        <div className="container mx-auto px-4 text-center relative z-30">
          <div className="max-w-4xl mx-auto space-y-8">
            {/* Cyberpunk UI Header */}
            <div className="flex items-center justify-center space-x-4 mb-8">
              <div className="h-px bg-gradient-to-r from-transparent via-neon to-transparent w-20" />
              <span className="font-mono text-sm text-neon tracking-widest">LUXURY • REDEFINED • XR</span>
              <div className="h-px bg-gradient-to-r from-neon via-neon-pink to-transparent w-20" />
            </div>

            {/* Main Heading */}
            <div className="space-y-6">
              <div className="relative">
                <h1 className="text-6xl md:text-8xl font-bold text-dark-foreground leading-tight font-cyber tracking-wider">
                  LUXO
                  <span className="gradient-text animate-glow block">DRIVE</span>
                  <span className="text-4xl md:text-6xl text-neon-pink font-mono tracking-[0.3em]">XR</span>
                </h1>
                <div className="absolute -top-4 -right-4 text-neon opacity-30">
                  <Cpu className="h-8 w-8 animate-spin-slow" />
                </div>
              </div>
              
              <div className="glass-card p-6 rounded-lg max-w-2xl mx-auto holographic">
                <p className="text-xl md:text-2xl text-muted-foreground font-cyber">
                  <span className="text-neon">Neural Interface</span> enabled luxury rentals.
                  <br />
                  Experience the <span className="text-neon-pink">future</span> of mobility.
                </p>
              </div>
            </div>

            {/* Enhanced Search Widget */}
            <div className="glass-card p-8 rounded-2xl max-w-5xl mx-auto holographic border-2 border-neon/30 relative overflow-hidden">
              <div className="absolute inset-0 bg-gradient-to-r from-neon/5 to-neon-pink/5 animate-hologram" />
              
              <div className="relative z-10">
                <div className="flex items-center justify-center mb-6">
                  <Radar className="h-6 w-6 text-neon mr-3 animate-spin-slow" />
                  <span className="font-mono text-neon tracking-widest">NEURAL SEARCH PROTOCOL</span>
                  <Radar className="h-6 w-6 text-neon ml-3 animate-spin-slow" />
                </div>
                
                <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-8">
                  <div className="space-y-3">
                    <label className="text-sm font-medium text-foreground flex items-center space-x-2 font-cyber">
                      <MapPin className="h-4 w-4 text-neon animate-pulse" />
                      <span>Neural Hub</span>
                    </label>
                    <Select value={searchData.city} onValueChange={(value) => setSearchData({...searchData, city: value})}>
                      <SelectTrigger className="border-neon/30 bg-dark/50 backdrop-blur-xl font-cyber hover:border-neon transition-all duration-300">
                        <SelectValue placeholder="Select quantum city" />
                      </SelectTrigger>
                      <SelectContent className="glass-card border-neon/30">
                        <SelectItem value="mumbai">Neo Mumbai</SelectItem>
                        <SelectItem value="delhi">Digital Delhi</SelectItem>
                        <SelectItem value="bangalore">Cyber Bangalore</SelectItem>
                        <SelectItem value="pune">Quantum Pune</SelectItem>
                        <SelectItem value="hyderabad">Matrix Hyderabad</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>

                  <div className="space-y-3">
                    <label className="text-sm font-medium text-foreground flex items-center space-x-2 font-cyber">
                      <Calendar className="h-4 w-4 text-neon-pink animate-pulse" />
                      <span>Initialize Date</span>
                    </label>
                    <Input 
                      type="date"
                      className="border-neon/30 bg-dark/50 backdrop-blur-xl font-cyber hover:border-neon-pink transition-all duration-300"
                      value={searchData.pickupDate}
                      onChange={(e) => setSearchData({...searchData, pickupDate: e.target.value})}
                    />
                  </div>

                  <div className="space-y-3">
                    <label className="text-sm font-medium text-foreground flex items-center space-x-2 font-cyber">
                      <Calendar className="h-4 w-4 text-neon animate-pulse" />
                      <span>Terminate Date</span>
                    </label>
                    <Input 
                      type="date"
                      className="border-neon/30 bg-dark/50 backdrop-blur-xl font-cyber hover:border-neon transition-all duration-300"
                      value={searchData.returnDate}
                      onChange={(e) => setSearchData({...searchData, returnDate: e.target.value})}
                    />
                  </div>

                  <div className="space-y-3">
                    <label className="text-sm font-medium text-foreground flex items-center space-x-2 font-cyber">
                      <Zap className="h-4 w-4 text-neon-pink animate-pulse" />
                      <span>Vehicle Class</span>
                    </label>
                    <Select value={searchData.carType} onValueChange={(value) => setSearchData({...searchData, carType: value})}>
                      <SelectTrigger className="border-neon/30 bg-dark/50 backdrop-blur-xl font-cyber hover:border-neon-pink transition-all duration-300">
                        <SelectValue placeholder="Any protocol" />
                      </SelectTrigger>
                      <SelectContent className="glass-card border-neon/30">
                        <SelectItem value="sedan">Quantum Sedan</SelectItem>
                        <SelectItem value="suv">Neural SUV</SelectItem>
                        <SelectItem value="sports">Cyber Sports</SelectItem>
                        <SelectItem value="luxury">Elite Matrix</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                </div>

                <Button 
                  onClick={handleSearch}
                  className="w-full bg-gradient-to-r from-neon to-neon-pink hover:from-neon-pink hover:to-neon text-neon-foreground text-lg py-6 neon-glow font-cyber tracking-widest relative overflow-hidden group"
                  asChild
                >
                  <Link to="/cars">
                    <Eye className="h-5 w-5 mr-3 animate-pulse" />
                    <span className="relative z-10">INITIATE NEURAL SEARCH</span>
                    <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent skew-x-12 -translate-x-full group-hover:translate-x-full transition-transform duration-1000" />
                  </Link>
                </Button>
              </div>
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row items-center justify-center gap-6">
              <Button 
                size="lg" 
                className="bg-gradient-to-r from-neon to-neon-pink hover:from-neon-pink hover:to-neon text-neon-foreground px-8 neon-glow font-cyber tracking-widest relative overflow-hidden group"
                asChild
              >
                <Link to="/cars">
                  <Radar className="h-5 w-5 mr-2 animate-spin-slow" />
                  <span className="relative z-10">EXPLORE FLEET</span>
                  <ArrowRight className="h-5 w-5 ml-2 group-hover:translate-x-1 transition-transform" />
                </Link>
              </Button>
              <Button 
                size="lg" 
                variant="outline" 
                className="border-2 border-neon text-neon hover:bg-neon hover:text-neon-foreground px-8 font-cyber tracking-widest holo-btn"
                asChild
              >
                <Link to="/list-car">
                  <Cpu className="h-5 w-5 mr-2" />
                  UPLOAD VEHICLE
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Enhanced Features Section */}
      <section className="py-20 bg-gradient-to-b from-dark to-background relative">
        <DataStream className="absolute inset-0" intensity={8} />
        
        <div className="container mx-auto px-4 relative z-10">
          <div className="text-center mb-16">
            <div className="flex items-center justify-center space-x-4 mb-6">
              <div className="h-px bg-gradient-to-r from-transparent via-neon to-transparent w-32" />
              <span className="font-mono text-sm text-neon tracking-widest">SYSTEM PROTOCOLS</span>
              <div className="h-px bg-gradient-to-r from-neon to-neon-pink w-32" />
            </div>
            <h2 className="text-5xl font-bold text-foreground mb-6 font-cyber tracking-wider">
              Why Choose <span className="gradient-text">LuxoDrive XR</span>?
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto font-cyber">
              Neural-enhanced luxury mobility with quantum-grade security protocols
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <Card className="glass-card border-neon/30 hover:border-neon transition-all duration-500 group relative overflow-hidden holographic">
              <CardContent className="p-8 text-center relative z-10">
                <div className="inline-flex p-4 rounded-full bg-neon/20 mb-6 group-hover:animate-float relative">
                  <Shield className="h-8 w-8 text-neon" />
                  <div className="absolute inset-0 rounded-full bg-neon/10 animate-ping" />
                </div>
                <h3 className="text-xl font-semibold text-foreground mb-3 font-cyber tracking-wide">Quantum Security</h3>
                <p className="text-muted-foreground font-cyber">
                  Military-grade encryption with neural verification protocols and quantum-entangled identity matrices.
                </p>
                <div className="mt-4 text-xs font-mono text-neon opacity-60">
                  SECURITY_LEVEL: MAXIMUM
                </div>
              </CardContent>
            </Card>

            <Card className="glass-card border-neon-pink/30 hover:border-neon-pink transition-all duration-500 group relative overflow-hidden holographic">
              <CardContent className="p-8 text-center relative z-10">
                <div className="inline-flex p-4 rounded-full bg-neon-pink/20 mb-6 group-hover:animate-float relative">
                  <Clock className="h-8 w-8 text-neon-pink" />
                  <div className="absolute inset-0 rounded-full bg-neon-pink/10 animate-ping" />
                </div>
                <h3 className="text-xl font-semibold text-foreground mb-3 font-cyber tracking-wide">Neural Support</h3>
                <p className="text-muted-foreground font-cyber">
                  24/7 AI-assisted support with instant neural link connection and quantum troubleshooting.
                </p>
                <div className="mt-4 text-xs font-mono text-neon-pink opacity-60">
                  RESPONSE_TIME: &lt; 0.001s
                </div>
              </CardContent>
            </Card>

            <Card className="glass-card border-neon/30 hover:border-neon transition-all duration-500 group relative overflow-hidden holographic">
              <CardContent className="p-8 text-center relative z-10">
                <div className="inline-flex p-4 rounded-full bg-neon/20 mb-6 group-hover:animate-float relative">
                  <Zap className="h-8 w-8 text-neon animate-pulse" />
                  <div className="absolute inset-0 rounded-full bg-neon/10 animate-ping" />
                </div>
                <h3 className="text-xl font-semibold text-foreground mb-3 font-cyber tracking-wide">Instant Matrix</h3>
                <p className="text-muted-foreground font-cyber">
                  Quantum booking protocols with instant reality confirmation and flux capacitor integration.
                </p>
                <div className="mt-4 text-xs font-mono text-neon opacity-60">
                  QUANTUM_STATE: STABLE
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Enhanced Featured Cars Section */}
      <section className="py-20 bg-gradient-to-b from-background to-dark relative">
        <div className="container mx-auto px-4 relative z-10">
          <div className="text-center mb-16">
            <div className="flex items-center justify-center space-x-4 mb-6">
              <div className="h-px bg-gradient-to-r from-transparent via-neon-pink to-transparent w-32" />
              <span className="font-mono text-sm text-neon-pink tracking-widest">ELITE MATRIX</span>
              <div className="h-px bg-gradient-to-r from-neon-pink to-neon w-32" />
            </div>
            <h2 className="text-5xl font-bold text-foreground mb-6 font-cyber tracking-wider">
              Featured <span className="gradient-text">XR Vehicles</span>
            </h2>
            <p className="text-xl text-muted-foreground font-cyber">
              Neural-enhanced luxury vehicles with quantum capabilities
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {featuredCars.map((car) => (
              <Card key={car.id} className="glass-card border-neon/30 hover:border-neon transition-all duration-500 group overflow-hidden relative holographic">
                <div className="relative overflow-hidden">
                  <img 
                    src={car.image} 
                    alt={car.name}
                    className="w-full h-56 object-cover group-hover:scale-110 transition-transform duration-700"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-dark/80 via-transparent to-transparent" />
                  <div className="absolute top-4 right-4 glass-card rounded-full px-3 py-1 text-neon text-sm font-mono">
                    {car.owner}
                  </div>
                  <div className="absolute top-4 left-4 glass-card rounded-full px-3 py-1 text-neon-pink text-sm font-mono">
                    {car.tech}
                  </div>
                  <div className="absolute bottom-4 left-4 text-white font-cyber">
                    <div className="text-lg font-bold">{car.name}</div>
                    <div className="text-sm text-neon">{car.model}</div>
                  </div>
                </div>
                
                <CardContent className="p-6 relative">
                  <div className="flex items-center justify-between mb-4">
                    <div className="flex items-center space-x-1 text-yellow-400">
                      <Star className="h-4 w-4 fill-current" />
                      <span className="text-sm font-medium font-cyber">{car.rating}</span>
                      <span className="text-xs text-muted-foreground">({car.reviews})</span>
                    </div>
                    <div className="flex items-center text-muted-foreground text-sm font-mono">
                      <MapPin className="h-4 w-4 mr-1 text-neon" />
                      {car.location}
                    </div>
                  </div>

                  <div className="flex flex-wrap gap-2 mb-4">
                    {car.features.map((feature, index) => (
                      <span 
                        key={index}
                        className="px-2 py-1 bg-neon/20 text-neon text-xs rounded-full font-mono border border-neon/30"
                      >
                        {feature}
                      </span>
                    ))}
                  </div>

                  <div className="flex items-center justify-between">
                    <div>
                      <span className="text-2xl font-bold text-foreground font-cyber">₹{car.price}</span>
                      <span className="text-muted-foreground text-sm font-mono">/quantum-day</span>
                    </div>
                    <Button 
                      className="bg-gradient-to-r from-neon to-neon-pink hover:from-neon-pink hover:to-neon text-neon-foreground font-cyber tracking-wide"
                      asChild
                    >
                      <Link to={`/car/${car.id}`}>
                        NEURAL LINK
                      </Link>
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>

          <div className="text-center mt-12">
            <Button 
              size="lg"
              variant="outline"
              className="border-2 border-neon text-neon hover:bg-neon hover:text-neon-foreground font-cyber tracking-widest holo-btn"
              asChild
            >
              <Link to="/cars">
                <Radar className="h-5 w-5 mr-2 animate-spin-slow" />
                ACCESS FULL MATRIX
                <ArrowRight className="h-5 w-5 ml-2" />
              </Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Enhanced CTA Section */}
      <section className="py-20 bg-gradient-to-r from-neon/10 via-dark to-neon-pink/10 relative overflow-hidden">
        <DataStream className="absolute inset-0" intensity={25} />
        
        <div className="container mx-auto px-4 text-center relative z-10">
          <div className="max-w-4xl mx-auto space-y-8">
            <div className="glass-card p-8 rounded-2xl holographic">
              <h2 className="text-5xl font-bold text-foreground mb-6 font-cyber tracking-wider">
                Ready to <span className="gradient-text">Enter the Matrix</span>?
              </h2>
              <p className="text-xl text-muted-foreground mb-8 font-cyber">
                Join the neural network of elite drivers experiencing luxury beyond reality.
              </p>
              <div className="flex flex-col sm:flex-row items-center justify-center gap-6">
                <Button 
                  size="lg"
                  className="bg-gradient-to-r from-neon to-neon-pink hover:from-neon-pink hover:to-neon text-neon-foreground px-8 neon-glow font-cyber tracking-widest relative overflow-hidden group"
                  asChild
                >
                  <Link to="/register">
                    <Cpu className="h-5 w-5 mr-2 animate-pulse" />
                    <span className="relative z-10">ACTIVATE NEURAL LINK</span>
                    <ArrowRight className="h-5 w-5 ml-2 group-hover:translate-x-1 transition-transform" />
                  </Link>
                </Button>
                <Button 
                  size="lg"
                  variant="outline"
                  className="border-2 border-neon-pink text-neon-pink hover:bg-neon-pink hover:text-neon-foreground px-8 font-cyber tracking-widest holo-btn"
                  asChild
                >
                  <Link to="/list-car">
                    <Shield className="h-5 w-5 mr-2" />
                    UPLOAD TO MATRIX
                  </Link>
                </Button>
              </div>
            </div>
            
            <div className="grid grid-cols-3 gap-4 text-center font-mono text-sm opacity-60">
              <div>
                <div className="text-neon font-bold">1,247</div>
                <div>Neural Links Active</div>
              </div>
              <div>
                <div className="text-neon-pink font-bold">99.97%</div>
                <div>Quantum Uptime</div>
              </div>
              <div>
                <div className="text-neon font-bold">∞</div>
                <div>Reality Index</div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
