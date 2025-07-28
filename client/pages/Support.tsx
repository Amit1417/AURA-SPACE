import { useState } from "react";
import { MessageCircle, Phone, Mail, Search, ChevronDown, ChevronRight, Zap, Shield, Clock, Radio, Cpu, Eye, HelpCircle } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Collapsible, CollapsibleContent, CollapsibleTrigger } from "@/components/ui/collapsible";
import DataStream from "@/components/effects/DataStream";

const faqs = [
  {
    id: 1,
    question: "How does neural verification work?",
    answer: "Our quantum neural verification system uses advanced biometric scanning combined with AI pattern recognition to establish your unique neural signature. This process takes 30 seconds and creates an unhackable quantum identity.",
    category: "Neural System"
  },
  {
    id: 2,
    question: "What happens if my vehicle gets damaged?",
    answer: "Our quantum insurance protocol automatically activates. All vehicles are covered by neural-enhanced protection with instant claim processing. Damage assessment is done via AI scanning with 99.9% accuracy.",
    category: "Insurance"
  },
  {
    id: 3,
    question: "How do I access emergency support?",
    answer: "Emergency neural links are available 24/7. Use the quantum panic button in the app, call our emergency hotline, or activate voice command 'Neural Emergency' for instant connection to our support matrix.",
    category: "Emergency"
  },
  {
    id: 4,
    question: "What documents are required for vehicle listing?",
    answer: "You need RC Certificate, valid Insurance, PUC Certificate, and Aadhaar Card. Our AI automatically processes and verifies these documents using quantum scanning technology.",
    category: "Vehicle Listing"
  },
  {
    id: 5,
    question: "How does the pricing algorithm work?",
    answer: "Our neural pricing AI analyzes real-time demand, vehicle specifications, location data, and market trends to optimize pricing automatically. Owners can set base rates, and the system handles dynamic adjustments.",
    category: "Pricing"
  },
  {
    id: 6,
    question: "Is my personal data secure in the neural matrix?",
    answer: "Absolutely. We use military-grade quantum encryption with neural pattern masking. Your data exists in encrypted quantum states, making it impossible to breach using conventional methods.",
    category: "Security"
  }
];

const supportChannels = [
  {
    icon: Phone,
    title: "Neural Hotline",
    description: "24/7 quantum voice support",
    contact: "+91 1800-XR-HELP",
    color: "neon",
    available: "Always Online"
  },
  {
    icon: MessageCircle,
    title: "Neural Chat",
    description: "Instant AI-powered assistance",
    contact: "Start Chat",
    color: "neon-pink",
    available: "< 30 seconds"
  },
  {
    icon: Mail,
    title: "Quantum Mail",
    description: "Detailed support via secure channels",
    contact: "neural@luxodrive.xr",
    color: "neon",
    available: "< 2 hours"
  },
  {
    icon: Radio,
    title: "Emergency Matrix",
    description: "Critical situation protocols",
    contact: "emergency@luxodrive.xr",
    color: "neon-pink",
    available: "Instant"
  }
];

export default function Support() {
  const [searchTerm, setSearchTerm] = useState("");
  const [openFaqs, setOpenFaqs] = useState<number[]>([]);
  const [supportForm, setSupportForm] = useState({
    name: "",
    email: "",
    category: "",
    subject: "",
    message: ""
  });

  const filteredFaqs = faqs.filter(faq => 
    faq.question.toLowerCase().includes(searchTerm.toLowerCase()) ||
    faq.answer.toLowerCase().includes(searchTerm.toLowerCase()) ||
    faq.category.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const toggleFaq = (id: number) => {
    setOpenFaqs(prev => 
      prev.includes(id) 
        ? prev.filter(faqId => faqId !== id)
        : [...prev, id]
    );
  };

  return (
    <div className="pt-16 min-h-screen bg-gradient-to-br from-dark via-background to-dark relative overflow-hidden">
      {/* Background Effects */}
      <DataStream className="z-0" intensity={8} />
      
      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-r from-dark/90 to-background/90 relative">
        <div className="absolute inset-0 cyber-grid opacity-20" />
        
        <div className="container mx-auto px-4 relative z-10">
          <div className="text-center mb-16">
            <div className="flex items-center justify-center space-x-4 mb-6">
              <div className="h-px bg-gradient-to-r from-transparent via-neon-pink to-transparent w-32" />
              <span className="font-mono text-sm text-neon-pink tracking-widest">NEURAL SUPPORT MATRIX</span>
              <div className="h-px bg-gradient-to-r from-neon-pink to-neon w-32" />
            </div>
            
            <h1 className="text-5xl md:text-7xl font-bold text-foreground mb-6 font-cyber tracking-wider">
              Neural <span className="gradient-text">Support</span>
            </h1>
            
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto font-cyber">
              Access our <span className="text-neon">quantum help matrix</span>. 
              AI-powered assistance with human neural backup protocols.
            </p>
          </div>
          
          {/* Status Board */}
          <div className="glass-card p-6 rounded-2xl max-w-4xl mx-auto holographic">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 text-center">
              <div className="space-y-2">
                <div className="text-2xl font-bold text-neon font-mono">99.9%</div>
                <div className="text-sm text-muted-foreground font-cyber">System Uptime</div>
                <div className="w-2 h-2 bg-neon rounded-full mx-auto animate-pulse" />
              </div>
              <div className="space-y-2">
                <div className="text-2xl font-bold text-neon-pink font-mono">&lt;30s</div>
                <div className="text-sm text-muted-foreground font-cyber">Response Time</div>
                <div className="w-2 h-2 bg-neon-pink rounded-full mx-auto animate-pulse" />
              </div>
              <div className="space-y-2">
                <div className="text-2xl font-bold text-neon font-mono">24/7</div>
                <div className="text-sm text-muted-foreground font-cyber">Neural Availability</div>
                <div className="w-2 h-2 bg-neon rounded-full mx-auto animate-pulse" />
              </div>
              <div className="space-y-2">
                <div className="text-2xl font-bold text-neon-pink font-mono">∞</div>
                <div className="text-sm text-muted-foreground font-cyber">Support Capacity</div>
                <div className="w-2 h-2 bg-neon-pink rounded-full mx-auto animate-pulse" />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Support Channels */}
      <section className="py-16 bg-dark/50 backdrop-blur-xl border-y border-neon/20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-foreground mb-4 font-cyber tracking-wider">
              Contact <span className="gradient-text">Neural Network</span>
            </h2>
            <p className="text-muted-foreground font-cyber">
              Multiple quantum channels for instant assistance
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {supportChannels.map((channel, index) => (
              <Card key={index} className={`glass-card border-${channel.color}/30 hover:border-${channel.color} transition-all duration-500 group holographic`}>
                <CardContent className="p-6 text-center">
                  <div className={`inline-flex p-4 rounded-full bg-${channel.color}/20 mb-4 group-hover:animate-float`}>
                    <channel.icon className={`h-6 w-6 text-${channel.color}`} />
                  </div>
                  <h3 className="text-lg font-bold text-foreground mb-2 font-cyber">{channel.title}</h3>
                  <p className="text-sm text-muted-foreground mb-3 font-cyber">{channel.description}</p>
                  <div className={`text-${channel.color} font-mono text-sm mb-2`}>{channel.contact}</div>
                  <div className="text-xs text-muted-foreground font-mono">
                    ⚡ {channel.available}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-foreground mb-4 font-cyber tracking-wider">
                Quantum <span className="gradient-text">Knowledge Base</span>
              </h2>
              <p className="text-muted-foreground font-cyber">
                Find answers in our neural FAQ matrix
              </p>
            </div>

            {/* Search */}
            <div className="glass-card p-6 rounded-lg mb-8 holographic">
              <div className="relative">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-5 w-5 text-neon" />
                <Input
                  placeholder="Search neural knowledge base..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="pl-10 border-neon/30 bg-dark/50 backdrop-blur-xl font-cyber text-lg"
                />
              </div>
            </div>

            {/* FAQ List */}
            <div className="space-y-4">
              {filteredFaqs.map((faq) => (
                <div key={faq.id} className="glass-card border-neon/30 hover:border-neon transition-all duration-300 holographic">
                  <Collapsible>
                    <CollapsibleTrigger 
                      className="w-full p-6 text-left"
                      onClick={() => toggleFaq(faq.id)}
                    >
                      <div className="flex items-center justify-between">
                        <div className="flex-1">
                          <div className="flex items-center space-x-3 mb-2">
                            <span className="px-2 py-1 bg-neon/20 text-neon text-xs rounded-full font-mono border border-neon/30">
                              {faq.category}
                            </span>
                          </div>
                          <h3 className="text-lg font-bold text-foreground font-cyber">
                            {faq.question}
                          </h3>
                        </div>
                        <div className="ml-4">
                          {openFaqs.includes(faq.id) ? (
                            <ChevronDown className="h-5 w-5 text-neon" />
                          ) : (
                            <ChevronRight className="h-5 w-5 text-neon" />
                          )}
                        </div>
                      </div>
                    </CollapsibleTrigger>
                    <CollapsibleContent>
                      <div className="px-6 pb-6 pt-0">
                        <p className="text-muted-foreground font-cyber leading-relaxed">
                          {faq.answer}
                        </p>
                      </div>
                    </CollapsibleContent>
                  </Collapsible>
                </div>
              ))}
            </div>

            {filteredFaqs.length === 0 && (
              <div className="text-center py-12">
                <HelpCircle className="h-16 w-16 text-neon mx-auto mb-4 opacity-50" />
                <h3 className="text-xl font-bold text-foreground mb-2 font-cyber">No Results Found</h3>
                <p className="text-muted-foreground font-cyber">
                  Neural search returned empty. Try different keywords or contact support.
                </p>
              </div>
            )}
          </div>
        </div>
      </section>

      {/* Support Form */}
      <section className="py-16 bg-gradient-to-b from-background to-dark">
        <div className="container mx-auto px-4">
          <div className="max-w-2xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-foreground mb-4 font-cyber tracking-wider">
                Direct <span className="gradient-text">Neural Contact</span>
              </h2>
              <p className="text-muted-foreground font-cyber">
                Send a message directly to our support matrix
              </p>
            </div>

            <div className="glass-card p-8 rounded-2xl holographic">
              <form className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <label className="text-foreground font-cyber">Neural ID Name</label>
                    <Input
                      placeholder="Enter your name"
                      value={supportForm.name}
                      onChange={(e) => setSupportForm({...supportForm, name: e.target.value})}
                      className="border-neon/30 bg-dark/50 backdrop-blur-xl font-cyber"
                    />
                  </div>
                  <div className="space-y-2">
                    <label className="text-foreground font-cyber">Quantum Email</label>
                    <Input
                      type="email"
                      placeholder="Enter your email"
                      value={supportForm.email}
                      onChange={(e) => setSupportForm({...supportForm, email: e.target.value})}
                      className="border-neon/30 bg-dark/50 backdrop-blur-xl font-cyber"
                    />
                  </div>
                </div>

                <div className="space-y-2">
                  <label className="text-foreground font-cyber">Support Category</label>
                  <select 
                    className="w-full p-3 border border-neon/30 bg-dark/50 backdrop-blur-xl rounded-md font-cyber text-foreground"
                    value={supportForm.category}
                    onChange={(e) => setSupportForm({...supportForm, category: e.target.value})}
                  >
                    <option value="select-category">Select category</option>
                    <option value="neural-system">Neural System</option>
                    <option value="vehicle-booking">Vehicle Booking</option>
                    <option value="payment">Payment Issues</option>
                    <option value="technical">Technical Support</option>
                    <option value="emergency">Emergency</option>
                    <option value="other">Other</option>
                  </select>
                </div>

                <div className="space-y-2">
                  <label className="text-foreground font-cyber">Subject Protocol</label>
                  <Input
                    placeholder="Brief description of issue"
                    value={supportForm.subject}
                    onChange={(e) => setSupportForm({...supportForm, subject: e.target.value})}
                    className="border-neon/30 bg-dark/50 backdrop-blur-xl font-cyber"
                  />
                </div>

                <div className="space-y-2">
                  <label className="text-foreground font-cyber">Detailed Message</label>
                  <Textarea
                    placeholder="Describe your issue in detail..."
                    value={supportForm.message}
                    onChange={(e) => setSupportForm({...supportForm, message: e.target.value})}
                    className="border-neon/30 bg-dark/50 backdrop-blur-xl font-cyber min-h-[120px]"
                  />
                </div>

                <Button className="w-full bg-gradient-to-r from-neon to-neon-pink hover:from-neon-pink hover:to-neon text-neon-foreground font-cyber tracking-widest py-6">
                  <Cpu className="h-5 w-5 mr-2" />
                  TRANSMIT TO NEURAL MATRIX
                </Button>
              </form>
            </div>
          </div>
        </div>
      </section>

      {/* Emergency Contact */}
      <section className="py-12 bg-gradient-to-r from-red-900/20 to-red-800/20 border-y border-red-500/30">
        <div className="container mx-auto px-4 text-center">
          <div className="flex items-center justify-center space-x-4 mb-4">
            <Shield className="h-6 w-6 text-red-400 animate-pulse" />
            <span className="text-red-400 font-cyber text-lg font-bold">EMERGENCY NEURAL PROTOCOL</span>
            <Shield className="h-6 w-6 text-red-400 animate-pulse" />
          </div>
          <p className="text-red-200 font-cyber mb-4">
            For immediate assistance in critical situations
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Button className="bg-red-600 hover:bg-red-700 text-white font-cyber tracking-wide">
              <Phone className="h-4 w-4 mr-2" />
              CALL: +91 1800-XR-HELP
            </Button>
            <Button variant="outline" className="border-red-400 text-red-400 hover:bg-red-400 hover:text-white font-cyber tracking-wide">
              <Mail className="h-4 w-4 mr-2" />
              emergency@luxodrive.xr
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
}
