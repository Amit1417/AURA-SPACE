import { Car, Shield, Zap, Users, CheckCircle, ArrowRight, Cpu, Radio, Eye, Clock } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Link } from "react-router-dom";
import DataStream from "@/components/effects/DataStream";

const steps = [
  {
    id: 1,
    title: "Neural Registration",
    description: "Create your quantum identity in our neural matrix system",
    icon: Users,
    details: [
      "Secure biometric verification",
      "Neural pattern matching",
      "Quantum identity creation",
      "Matrix access granted"
    ],
    color: "neon"
  },
  {
    id: 2,
    title: "XR Fleet Discovery",
    description: "Browse our quantum-enhanced luxury vehicle matrix",
    icon: Car,
    details: [
      "Real-time availability matrix",
      "AI-powered recommendations",
      "3D vehicle visualization",
      "Neural compatibility check"
    ],
    color: "neon-pink"
  },
  {
    id: 3,
    title: "Quantum Booking",
    description: "Instant neural link establishment with vehicle owners",
    icon: Zap,
    details: [
      "Instant confirmation protocol",
      "Quantum payment processing",
      "Neural handshake verification",
      "Reality synchronization"
    ],
    color: "neon"
  },
  {
    id: 4,
    title: "Matrix Experience",
    description: "Transcend reality with our luxury mobility experience",
    icon: Shield,
    details: [
      "24/7 quantum support",
      "Neural emergency protocols",
      "Real-time fleet monitoring",
      "Experience optimization"
    ],
    color: "neon-pink"
  }
];

const features = [
  {
    icon: Shield,
    title: "Quantum Security",
    description: "Military-grade encryption with neural verification protocols"
  },
  {
    icon: Zap,
    title: "Instant Processing",
    description: "Lightning-fast booking with quantum confirmation systems"
  },
  {
    icon: Clock,
    title: "24/7 Neural Support",
    description: "Round-the-clock AI assistance with human backup protocols"
  },
  {
    icon: Eye,
    title: "Reality Monitoring",
    description: "Advanced tracking and safety monitoring throughout journey"
  }
];

export default function HowItWorks() {
  return (
    <div className="pt-16 min-h-screen bg-gradient-to-br from-dark via-background to-dark relative overflow-hidden">
      {/* Background Effects */}
      <DataStream className="z-0" intensity={12} />
      
      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-r from-dark/90 to-background/90 relative">
        <div className="absolute inset-0 cyber-grid opacity-20" />
        
        <div className="container mx-auto px-4 relative z-10">
          <div className="text-center mb-16">
            <div className="flex items-center justify-center space-x-4 mb-6">
              <div className="h-px bg-gradient-to-r from-transparent via-neon to-transparent w-32" />
              <span className="font-mono text-sm text-neon tracking-widest">NEURAL PROTOCOL GUIDE</span>
              <div className="h-px bg-gradient-to-r from-neon to-neon-pink w-32" />
            </div>
            
            <h1 className="text-5xl md:text-7xl font-bold text-foreground mb-6 font-cyber tracking-wider">
              XR <span className="gradient-text">Experience</span>
            </h1>
            
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto font-cyber">
              Discover how our <span className="text-neon">neural interface</span> revolutionizes luxury mobility.
              <br />Experience the future of <span className="text-neon-pink">quantum transportation</span>.
            </p>
          </div>
          
          {/* Quick Stats */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 max-w-4xl mx-auto">
            <div className="glass-card p-6 rounded-lg text-center holographic">
              <div className="text-3xl font-bold text-neon font-mono">99.9%</div>
              <div className="text-sm text-muted-foreground font-cyber">Neural Uptime</div>
            </div>
            <div className="glass-card p-6 rounded-lg text-center holographic">
              <div className="text-3xl font-bold text-neon-pink font-mono">&lt;3min</div>
              <div className="text-sm text-muted-foreground font-cyber">Booking Time</div>
            </div>
            <div className="glass-card p-6 rounded-lg text-center holographic">
              <div className="text-3xl font-bold text-neon font-mono">24/7</div>
              <div className="text-sm text-muted-foreground font-cyber">Quantum Support</div>
            </div>
            <div className="glass-card p-6 rounded-lg text-center holographic">
              <div className="text-3xl font-bold text-neon-pink font-mono">∞</div>
              <div className="text-sm text-muted-foreground font-cyber">Reality Index</div>
            </div>
          </div>
        </div>
      </section>

      {/* How It Works Steps */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-foreground mb-4 font-cyber tracking-wider">
              Neural <span className="gradient-text">Protocol Steps</span>
            </h2>
            <p className="text-xl text-muted-foreground font-cyber">
              Four quantum steps to transcend your mobility experience
            </p>
          </div>

          <div className="space-y-16">
            {steps.map((step, index) => (
              <div key={step.id} className={`flex flex-col ${index % 2 === 0 ? 'lg:flex-row' : 'lg:flex-row-reverse'} items-center gap-12`}>
                {/* Step Visual */}
                <div className="flex-1">
                  <div className="glass-card p-8 rounded-2xl holographic relative overflow-hidden">
                    <div className="absolute inset-0 bg-gradient-to-br from-transparent via-neon/5 to-neon-pink/5" />
                    <div className="relative z-10 text-center">
                      <div className={`inline-flex p-6 rounded-full bg-${step.color}/20 mb-6 relative`}>
                        <step.icon className={`h-16 w-16 text-${step.color} animate-pulse`} />
                        <div className={`absolute inset-0 rounded-full bg-${step.color}/10 animate-ping`} />
                      </div>
                      <div className={`text-6xl font-bold text-${step.color} font-mono mb-4`}>
                        {step.id.toString().padStart(2, '0')}
                      </div>
                    </div>
                  </div>
                </div>

                {/* Step Content */}
                <div className="flex-1">
                  <div className="space-y-6">
                    <div>
                      <h3 className="text-3xl font-bold text-foreground mb-3 font-cyber tracking-wide">
                        {step.title}
                      </h3>
                      <p className="text-lg text-muted-foreground font-cyber">
                        {step.description}
                      </p>
                    </div>

                    <div className="space-y-3">
                      {step.details.map((detail, detailIndex) => (
                        <div key={detailIndex} className="flex items-center space-x-3">
                          <CheckCircle className={`h-5 w-5 text-${step.color} flex-shrink-0`} />
                          <span className="text-foreground font-cyber">{detail}</span>
                        </div>
                      ))}
                    </div>

                    {index < steps.length - 1 && (
                      <div className="flex items-center space-x-2 text-muted-foreground">
                        <span className="font-mono text-sm">NEXT PROTOCOL</span>
                        <ArrowRight className={`h-5 w-5 text-${step.color} animate-pulse`} />
                      </div>
                    )}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Features Grid */}
      <section className="py-20 bg-gradient-to-b from-background to-dark relative">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <div className="flex items-center justify-center space-x-4 mb-6">
              <div className="h-px bg-gradient-to-r from-transparent via-neon-pink to-transparent w-32" />
              <span className="font-mono text-sm text-neon-pink tracking-widest">SYSTEM FEATURES</span>
              <div className="h-px bg-gradient-to-r from-neon-pink to-neon w-32" />
            </div>
            
            <h2 className="text-4xl font-bold text-foreground mb-4 font-cyber tracking-wider">
              Neural <span className="gradient-text">Capabilities</span>
            </h2>
            <p className="text-xl text-muted-foreground font-cyber">
              Advanced quantum features that power our XR experience
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {features.map((feature, index) => (
              <Card key={index} className="glass-card border-neon/30 hover:border-neon transition-all duration-500 group holographic">
                <CardContent className="p-8">
                  <div className="flex items-start space-x-4">
                    <div className="p-3 rounded-lg bg-neon/20 group-hover:bg-neon/30 transition-colors">
                      <feature.icon className="h-6 w-6 text-neon" />
                    </div>
                    <div>
                      <h3 className="text-xl font-bold text-foreground mb-2 font-cyber">{feature.title}</h3>
                      <p className="text-muted-foreground font-cyber">{feature.description}</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* For Vehicle Owners */}
      <section className="py-20 bg-gradient-to-r from-neon/10 via-dark to-neon-pink/10 relative">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <div className="glass-card p-12 rounded-2xl holographic">
              <Cpu className="h-16 w-16 text-neon mx-auto mb-6 animate-spin-slow" />
              <h2 className="text-4xl font-bold text-foreground mb-6 font-cyber tracking-wider">
                For <span className="gradient-text">Vehicle Owners</span>
              </h2>
              <p className="text-xl text-muted-foreground mb-8 font-cyber">
                Transform your vehicle into a quantum asset. Earn neural credits while maintaining full control.
              </p>
              
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
                <div className="text-center">
                  <div className="text-3xl font-bold text-neon font-mono mb-2">₹50K+</div>
                  <div className="text-sm text-muted-foreground font-cyber">Monthly Earnings</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-neon-pink font-mono mb-2">24/7</div>
                  <div className="text-sm text-muted-foreground font-cyber">Vehicle Protection</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-neon font-mono mb-2">0%</div>
                  <div className="text-sm text-muted-foreground font-cyber">Hidden Charges</div>
                </div>
              </div>
              
              <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                <Button 
                  size="lg"
                  className="bg-gradient-to-r from-neon to-neon-pink hover:from-neon-pink hover:to-neon text-neon-foreground font-cyber tracking-widest"
                  asChild
                >
                  <Link to="/list-car">
                    <Radio className="h-5 w-5 mr-2" />
                    JOIN NEURAL NETWORK
                  </Link>
                </Button>
                <Button 
                  size="lg"
                  variant="outline"
                  className="border-neon text-neon hover:bg-neon hover:text-neon-foreground font-cyber tracking-widest holo-btn"
                  asChild
                >
                  <Link to="/support">
                    LEARN MORE
                  </Link>
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20">
        <div className="container mx-auto px-4 text-center">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-4xl font-bold text-foreground mb-6 font-cyber tracking-wider">
              Ready to <span className="gradient-text">Experience XR</span>?
            </h2>
            <p className="text-xl text-muted-foreground mb-8 font-cyber">
              Join thousands of users already connected to our neural mobility matrix
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-6">
              <Button 
                size="lg"
                className="bg-gradient-to-r from-neon to-neon-pink hover:from-neon-pink hover:to-neon text-neon-foreground px-8 neon-glow font-cyber tracking-widest"
                asChild
              >
                <Link to="/cars">
                  <Eye className="h-5 w-5 mr-2" />
                  EXPLORE XR FLEET
                  <ArrowRight className="h-5 w-5 ml-2" />
                </Link>
              </Button>
              <Button 
                size="lg"
                variant="outline"
                className="border-neon-pink text-neon-pink hover:bg-neon-pink hover:text-neon-foreground px-8 font-cyber tracking-widest holo-btn"
                asChild
              >
                <Link to="/register">
                  <Cpu className="h-5 w-5 mr-2" />
                  CREATE NEURAL ID
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
