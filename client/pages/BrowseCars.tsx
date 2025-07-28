import { useState } from "react";
import { Search, MapPin, Calendar, Car, Star, Filter, SlidersHorizontal, Zap, Cpu, Shield, Eye, Radio, Radar } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Card, CardContent } from "@/components/ui/card";
import { Link } from "react-router-dom";
import DataStream from "@/components/effects/DataStream";

const carFleet = [
  {
    id: 1,
    name: "Tesla Model S Plaid",
    model: "XR-7 Quantum Series",
    image: "/placeholder.svg",
    price: 8500,
    rating: 4.9,
    reviews: 247,
    location: "Neo Mumbai",
    features: ["Neural Drive", "Electric", "5 Seats", "AI Assistant", "Autopilot"],
    owner: "Cyber Elite",
    tech: "Quantum Battery",
    available: true,
    fuelType: "Electric",
    transmission: "Neural",
    seats: 5
  },
  {
    id: 2,
    name: "BMW i8 Roadster",
    model: "Nexus Edition Pro",
    image: "/placeholder.svg",
    price: 6200,
    rating: 4.8,
    reviews: 189,
    location: "Digital Delhi",
    features: ["Hybrid Neural", "V6 Plasma", "2 Seats", "HUD Display", "Sport Mode"],
    owner: "Tech Virtuoso",
    tech: "Fusion Engine",
    available: true,
    fuelType: "Hybrid",
    transmission: "Automatic",
    seats: 2
  },
  {
    id: 3,
    name: "Lamborghini Aventador",
    model: "Matrix Pro Ultimate",
    image: "/placeholder.svg",
    price: 12800,
    rating: 4.9,
    reviews: 156,
    location: "Cyber Bangalore",
    features: ["V12 Quantum", "Carbon Fiber", "2 Seats", "Stealth Mode", "Racing Pack"],
    owner: "Elite Protocol",
    tech: "Anti-Gravity Sys",
    available: true,
    fuelType: "Petrol",
    transmission: "Manual",
    seats: 2
  },
  {
    id: 4,
    name: "Mercedes EQS",
    model: "Neural Luxury",
    image: "/placeholder.svg",
    price: 7500,
    rating: 4.7,
    reviews: 203,
    location: "Quantum Pune",
    features: ["Electric", "Luxury Interior", "5 Seats", "Massage Seats", "MBUX AI"],
    owner: "Luxury Matrix",
    tech: "Neural Comfort",
    available: false,
    fuelType: "Electric",
    transmission: "Automatic",
    seats: 5
  },
  {
    id: 5,
    name: "Audi R8 V10",
    model: "Cyber Sport",
    image: "/placeholder.svg",
    price: 11200,
    rating: 4.8,
    reviews: 178,
    location: "Matrix Hyderabad",
    features: ["V10 Engine", "Quattro AWD", "2 Seats", "Virtual Cockpit", "Launch Control"],
    owner: "Speed Nexus",
    tech: "Turbo Matrix",
    available: true,
    fuelType: "Petrol",
    transmission: "Automatic",
    seats: 2
  },
  {
    id: 6,
    name: "Porsche Taycan",
    model: "Electric Matrix",
    image: "/placeholder.svg",
    price: 9800,
    rating: 4.9,
    reviews: 234,
    location: "Neo Mumbai",
    features: ["Electric", "800V Fast Charge", "4 Seats", "Sport Chrono", "Porsche Connect"],
    owner: "Electric Elite",
    tech: "Lightning Core",
    available: true,
    fuelType: "Electric",
    transmission: "Automatic",
    seats: 4
  }
];

export default function BrowseCars() {
  const [filters, setFilters] = useState({
    search: "",
    location: "",
    priceRange: "",
    fuelType: "",
    transmission: "",
    seats: "",
    availability: "all"
  });

  const [sortBy, setSortBy] = useState("price");

  const filteredCars = carFleet.filter(car => {
    if (filters.search && !car.name.toLowerCase().includes(filters.search.toLowerCase())) return false;
    if (filters.location && filters.location !== "all-hubs" && car.location !== filters.location) return false;
    if (filters.fuelType && filters.fuelType !== "all-types" && car.fuelType !== filters.fuelType) return false;
    if (filters.transmission && filters.transmission !== "all-modes" && car.transmission !== filters.transmission) return false;
    if (filters.seats && filters.seats !== "any-seats" && car.seats.toString() !== filters.seats) return false;
    if (filters.availability === "available" && !car.available) return false;
    return true;
  });

  return (
    <div className="pt-16 min-h-screen bg-gradient-to-br from-dark via-background to-dark relative overflow-hidden">
      {/* Background Effects */}
      <DataStream className="z-0" intensity={10} />
      
      {/* Hero Header */}
      <section className="py-16 bg-gradient-to-r from-dark/90 to-background/90 relative">
        <div className="absolute inset-0 cyber-grid opacity-20" />
        
        <div className="container mx-auto px-4 relative z-10">
          <div className="text-center mb-12">
            <div className="flex items-center justify-center space-x-4 mb-6">
              <div className="h-px bg-gradient-to-r from-transparent via-neon to-transparent w-32" />
              <span className="font-mono text-sm text-neon tracking-widest">XR FLEET MATRIX</span>
              <div className="h-px bg-gradient-to-r from-neon to-neon-pink w-32" />
            </div>
            
            <h1 className="text-5xl md:text-7xl font-bold text-foreground mb-6 font-cyber tracking-wider">
              Browse <span className="gradient-text">XR Fleet</span>
            </h1>
            
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto font-cyber">
              Access our neural-enhanced luxury vehicle matrix. 
              <span className="text-neon"> Quantum-verified</span> cars ready for reality transcendence.
            </p>
            
            {/* Status Indicators */}
            <div className="flex justify-center space-x-8 mt-8 text-sm font-mono">
              <div className="flex items-center space-x-2">
                <div className="w-2 h-2 bg-neon rounded-full animate-pulse" />
                <span className="text-neon">{carFleet.filter(c => c.available).length} Vehicles Online</span>
              </div>
              <div className="flex items-center space-x-2">
                <div className="w-2 h-2 bg-neon-pink rounded-full animate-pulse" />
                <span className="text-neon-pink">{carFleet.length} Total Matrix Fleet</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Filters & Search */}
      <section className="py-8 bg-dark/50 backdrop-blur-xl border-y border-neon/20">
        <div className="container mx-auto px-4">
          <div className="glass-card p-6 rounded-2xl holographic">
            <div className="flex items-center justify-center mb-6">
              <Radar className="h-5 w-5 text-neon mr-3 animate-spin-slow" />
              <span className="font-mono text-neon tracking-widest">NEURAL FILTER PROTOCOL</span>
              <Radar className="h-5 w-5 text-neon ml-3 animate-spin-slow" />
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-4 lg:grid-cols-7 gap-4 mb-6">
              <div className="md:col-span-2">
                <Input
                  placeholder="Search vehicles..."
                  value={filters.search}
                  onChange={(e) => setFilters({...filters, search: e.target.value})}
                  className="border-neon/30 bg-dark/50 backdrop-blur-xl font-cyber"
                />
              </div>
              
              <Select value={filters.location} onValueChange={(value) => setFilters({...filters, location: value})}>
                <SelectTrigger className="border-neon/30 bg-dark/50 backdrop-blur-xl font-cyber">
                  <SelectValue placeholder="Location" />
                </SelectTrigger>
                <SelectContent className="glass-card border-neon/30">
                  <SelectItem value="all-hubs">All Hubs</SelectItem>
                  <SelectItem value="Neo Mumbai">Neo Mumbai</SelectItem>
                  <SelectItem value="Digital Delhi">Digital Delhi</SelectItem>
                  <SelectItem value="Cyber Bangalore">Cyber Bangalore</SelectItem>
                  <SelectItem value="Quantum Pune">Quantum Pune</SelectItem>
                  <SelectItem value="Matrix Hyderabad">Matrix Hyderabad</SelectItem>
                </SelectContent>
              </Select>
              
              <Select value={filters.fuelType} onValueChange={(value) => setFilters({...filters, fuelType: value})}>
                <SelectTrigger className="border-neon/30 bg-dark/50 backdrop-blur-xl font-cyber">
                  <SelectValue placeholder="Power Type" />
                </SelectTrigger>
                <SelectContent className="glass-card border-neon/30">
                  <SelectItem value="all-types">All Types</SelectItem>
                  <SelectItem value="Electric">Electric</SelectItem>
                  <SelectItem value="Petrol">Petrol</SelectItem>
                  <SelectItem value="Hybrid">Hybrid</SelectItem>
                </SelectContent>
              </Select>
              
              <Select value={filters.transmission} onValueChange={(value) => setFilters({...filters, transmission: value})}>
                <SelectTrigger className="border-neon/30 bg-dark/50 backdrop-blur-xl font-cyber">
                  <SelectValue placeholder="Drive Mode" />
                </SelectTrigger>
                <SelectContent className="glass-card border-neon/30">
                  <SelectItem value="all-modes">All Modes</SelectItem>
                  <SelectItem value="Automatic">Automatic</SelectItem>
                  <SelectItem value="Manual">Manual</SelectItem>
                  <SelectItem value="Neural">Neural</SelectItem>
                </SelectContent>
              </Select>
              
              <Select value={filters.seats} onValueChange={(value) => setFilters({...filters, seats: value})}>
                <SelectTrigger className="border-neon/30 bg-dark/50 backdrop-blur-xl font-cyber">
                  <SelectValue placeholder="Seats" />
                </SelectTrigger>
                <SelectContent className="glass-card border-neon/30">
                  <SelectItem value="any-seats">Any</SelectItem>
                  <SelectItem value="2">2 Seats</SelectItem>
                  <SelectItem value="4">4 Seats</SelectItem>
                  <SelectItem value="5">5+ Seats</SelectItem>
                </SelectContent>
              </Select>
              
              <Select value={sortBy} onValueChange={setSortBy}>
                <SelectTrigger className="border-neon-pink/30 bg-dark/50 backdrop-blur-xl font-cyber">
                  <SelectValue placeholder="Sort By" />
                </SelectTrigger>
                <SelectContent className="glass-card border-neon-pink/30">
                  <SelectItem value="price">Price</SelectItem>
                  <SelectItem value="rating">Rating</SelectItem>
                  <SelectItem value="name">Name</SelectItem>
                </SelectContent>
              </Select>
            </div>
            
            <div className="flex items-center justify-between">
              <div className="text-sm font-mono text-muted-foreground">
                Found <span className="text-neon font-bold">{filteredCars.length}</span> vehicles in matrix
              </div>
              <Button 
                onClick={() => setFilters({search: "", location: "", priceRange: "", fuelType: "", transmission: "", seats: "", availability: "all"})}
                variant="outline"
                size="sm"
                className="border-neon-pink text-neon-pink hover:bg-neon-pink hover:text-neon-foreground font-cyber"
              >
                <Filter className="h-4 w-4 mr-2" />
                Reset Matrix
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Car Grid */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredCars.map((car) => (
              <Card key={car.id} className="glass-card border-neon/30 hover:border-neon transition-all duration-500 group overflow-hidden relative holographic">
                {/* Availability Badge */}
                {!car.available && (
                  <div className="absolute top-4 left-4 z-20 bg-red-500/80 backdrop-blur-sm rounded-full px-3 py-1 text-white text-sm font-mono">
                    Neural Offline
                  </div>
                )}
                
                <div className="relative overflow-hidden">
                  <img 
                    src={car.image} 
                    alt={car.name}
                    className={`w-full h-56 object-cover transition-all duration-700 ${car.available ? 'group-hover:scale-110' : 'grayscale opacity-60'}`}
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-dark/80 via-transparent to-transparent" />
                  
                  {/* Owner Badge */}
                  <div className="absolute top-4 right-4 glass-card rounded-full px-3 py-1 text-neon text-sm font-mono">
                    {car.owner}
                  </div>
                  
                  {/* Tech Badge */}
                  <div className="absolute bottom-4 right-4 glass-card rounded-full px-3 py-1 text-neon-pink text-sm font-mono">
                    {car.tech}
                  </div>
                  
                  {/* Car Info Overlay */}
                  <div className="absolute bottom-4 left-4 text-white">
                    <div className="text-lg font-bold font-cyber">{car.name}</div>
                    <div className="text-sm text-neon font-mono">{car.model}</div>
                  </div>
                  
                  {/* Hover Overlay */}
                  <div className="absolute inset-0 bg-neon/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                    <Eye className="h-8 w-8 text-white animate-pulse" />
                  </div>
                </div>
                
                <CardContent className="p-6 relative">
                  {/* Rating & Location */}
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

                  {/* Features */}
                  <div className="flex flex-wrap gap-2 mb-4">
                    {car.features.slice(0, 4).map((feature, index) => (
                      <span 
                        key={index}
                        className="px-2 py-1 bg-neon/20 text-neon text-xs rounded-full font-mono border border-neon/30"
                      >
                        {feature}
                      </span>
                    ))}
                    {car.features.length > 4 && (
                      <span className="px-2 py-1 bg-neon-pink/20 text-neon-pink text-xs rounded-full font-mono border border-neon-pink/30">
                        +{car.features.length - 4} more
                      </span>
                    )}
                  </div>
                  
                  {/* Vehicle Stats */}
                  <div className="grid grid-cols-3 gap-2 mb-4 text-xs font-mono">
                    <div className="text-center p-2 bg-dark/50 rounded border border-neon/20">
                      <div className="text-neon">{car.fuelType}</div>
                      <div className="text-muted-foreground">Power</div>
                    </div>
                    <div className="text-center p-2 bg-dark/50 rounded border border-neon/20">
                      <div className="text-neon-pink">{car.transmission}</div>
                      <div className="text-muted-foreground">Drive</div>
                    </div>
                    <div className="text-center p-2 bg-dark/50 rounded border border-neon/20">
                      <div className="text-neon">{car.seats}</div>
                      <div className="text-muted-foreground">Seats</div>
                    </div>
                  </div>

                  {/* Price & Action */}
                  <div className="flex items-center justify-between">
                    <div>
                      <span className="text-2xl font-bold text-foreground font-cyber">₹{car.price}</span>
                      <span className="text-muted-foreground text-sm font-mono">/neural-day</span>
                    </div>
                    <Button 
                      className={`font-cyber tracking-wide ${
                        car.available 
                          ? 'bg-gradient-to-r from-neon to-neon-pink hover:from-neon-pink hover:to-neon text-neon-foreground' 
                          : 'bg-gray-500 cursor-not-allowed text-gray-300'
                      }`}
                      disabled={!car.available}
                      asChild={car.available}
                    >
                      {car.available ? (
                        <Link to={`/car/${car.id}`}>
                          <Zap className="h-4 w-4 mr-2" />
                          NEURAL LINK
                        </Link>
                      ) : (
                        <span>
                          <Radio className="h-4 w-4 mr-2" />
                          OFFLINE
                        </span>
                      )}
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
          
          {filteredCars.length === 0 && (
            <div className="text-center py-16">
              <div className="glass-card p-12 rounded-2xl max-w-md mx-auto holographic">
                <Cpu className="h-16 w-16 text-neon mx-auto mb-4 animate-spin-slow" />
                <h3 className="text-2xl font-bold text-foreground mb-2 font-cyber">No Vehicles Found</h3>
                <p className="text-muted-foreground font-cyber">
                  Neural matrix search returned empty. Try adjusting your filters.
                </p>
              </div>
            </div>
          )}
        </div>
      </section>
    </div>
  );
}
