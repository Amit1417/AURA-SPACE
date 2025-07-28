import { useState } from "react";
import { Upload, Camera, FileText, Shield, Zap, Cpu, Eye, CheckCircle, AlertCircle, Radio, Car } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Label } from "@/components/ui/label";
import DataStream from "@/components/effects/DataStream";

export default function ListCar() {
  const [currentStep, setCurrentStep] = useState(1);
  const [formData, setFormData] = useState({
    // Vehicle Info
    carMake: "",
    carModel: "",
    year: "",
    fuelType: "",
    transmission: "",
    seats: "",
    mileage: "",
    color: "",
    plateNumber: "",
    
    // Pricing
    pricePerDay: "",
    securityDeposit: "",
    
    // Location
    city: "",
    area: "",
    address: "",
    
    // Documents
    rcCertificate: null,
    insurance: null,
    pollution: null,
    aadhaar: null,
    photos: []
  });

  const steps = [
    { id: 1, title: "Vehicle Matrix", description: "Neural vehicle identification" },
    { id: 2, title: "Quantum Pricing", description: "Economic parameters" },
    { id: 3, title: "Location Matrix", description: "Spatial coordinates" },
    { id: 4, title: "Document Upload", description: "Security verification" },
    { id: 5, title: "Neural Review", description: "System validation" }
  ];

  const handleNext = () => {
    if (currentStep < 5) setCurrentStep(currentStep + 1);
  };

  const handlePrev = () => {
    if (currentStep > 1) setCurrentStep(currentStep - 1);
  };

  const renderStep = () => {
    switch (currentStep) {
      case 1:
        return (
          <div className="space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="space-y-2">
                <Label className="text-foreground font-cyber flex items-center">
                  <Car className="h-4 w-4 mr-2 text-neon" />
                  Vehicle Make
                </Label>
                <Select value={formData.carMake} onValueChange={(value) => setFormData({...formData, carMake: value})}>
                  <SelectTrigger className="border-neon/30 bg-dark/50 backdrop-blur-xl font-cyber">
                    <SelectValue placeholder="Select manufacturer" />
                  </SelectTrigger>
                  <SelectContent className="glass-card border-neon/30">
                    <SelectItem value="tesla">Tesla</SelectItem>
                    <SelectItem value="bmw">BMW</SelectItem>
                    <SelectItem value="mercedes">Mercedes-Benz</SelectItem>
                    <SelectItem value="audi">Audi</SelectItem>
                    <SelectItem value="lamborghini">Lamborghini</SelectItem>
                    <SelectItem value="porsche">Porsche</SelectItem>
                  </SelectContent>
                </Select>
              </div>

              <div className="space-y-2">
                <Label className="text-foreground font-cyber">Model</Label>
                <Input
                  placeholder="Enter model name"
                  value={formData.carModel}
                  onChange={(e) => setFormData({...formData, carModel: e.target.value})}
                  className="border-neon/30 bg-dark/50 backdrop-blur-xl font-cyber"
                />
              </div>

              <div className="space-y-2">
                <Label className="text-foreground font-cyber">Manufacturing Year</Label>
                <Select value={formData.year} onValueChange={(value) => setFormData({...formData, year: value})}>
                  <SelectTrigger className="border-neon/30 bg-dark/50 backdrop-blur-xl font-cyber">
                    <SelectValue placeholder="Select year" />
                  </SelectTrigger>
                  <SelectContent className="glass-card border-neon/30">
                    {Array.from({length: 10}, (_, i) => 2024 - i).map(year => (
                      <SelectItem key={year} value={year.toString()}>{year}</SelectItem>
                    ))}
                  </SelectContent>
                </Select>
              </div>

              <div className="space-y-2">
                <Label className="text-foreground font-cyber">Power Type</Label>
                <Select value={formData.fuelType} onValueChange={(value) => setFormData({...formData, fuelType: value})}>
                  <SelectTrigger className="border-neon/30 bg-dark/50 backdrop-blur-xl font-cyber">
                    <SelectValue placeholder="Select power type" />
                  </SelectTrigger>
                  <SelectContent className="glass-card border-neon/30">
                    <SelectItem value="electric">Electric</SelectItem>
                    <SelectItem value="petrol">Petrol</SelectItem>
                    <SelectItem value="diesel">Diesel</SelectItem>
                    <SelectItem value="hybrid">Hybrid</SelectItem>
                  </SelectContent>
                </Select>
              </div>

              <div className="space-y-2">
                <Label className="text-foreground font-cyber">Drive Mode</Label>
                <Select value={formData.transmission} onValueChange={(value) => setFormData({...formData, transmission: value})}>
                  <SelectTrigger className="border-neon/30 bg-dark/50 backdrop-blur-xl font-cyber">
                    <SelectValue placeholder="Select transmission" />
                  </SelectTrigger>
                  <SelectContent className="glass-card border-neon/30">
                    <SelectItem value="automatic">Automatic</SelectItem>
                    <SelectItem value="manual">Manual</SelectItem>
                    <SelectItem value="cvt">CVT</SelectItem>
                  </SelectContent>
                </Select>
              </div>

              <div className="space-y-2">
                <Label className="text-foreground font-cyber">Seating Capacity</Label>
                <Select value={formData.seats} onValueChange={(value) => setFormData({...formData, seats: value})}>
                  <SelectTrigger className="border-neon/30 bg-dark/50 backdrop-blur-xl font-cyber">
                    <SelectValue placeholder="Select seats" />
                  </SelectTrigger>
                  <SelectContent className="glass-card border-neon/30">
                    <SelectItem value="2">2 Seats</SelectItem>
                    <SelectItem value="4">4 Seats</SelectItem>
                    <SelectItem value="5">5 Seats</SelectItem>
                    <SelectItem value="7">7 Seats</SelectItem>
                  </SelectContent>
                </Select>
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="space-y-2">
                <Label className="text-foreground font-cyber">Mileage (km)</Label>
                <Input
                  type="number"
                  placeholder="Enter total mileage"
                  value={formData.mileage}
                  onChange={(e) => setFormData({...formData, mileage: e.target.value})}
                  className="border-neon/30 bg-dark/50 backdrop-blur-xl font-cyber"
                />
              </div>

              <div className="space-y-2">
                <Label className="text-foreground font-cyber">Vehicle Color</Label>
                <Input
                  placeholder="Enter color"
                  value={formData.color}
                  onChange={(e) => setFormData({...formData, color: e.target.value})}
                  className="border-neon/30 bg-dark/50 backdrop-blur-xl font-cyber"
                />
              </div>
            </div>

            <div className="space-y-2">
              <Label className="text-foreground font-cyber">Registration Number</Label>
              <Input
                placeholder="Enter plate number (e.g., MH01AB1234)"
                value={formData.plateNumber}
                onChange={(e) => setFormData({...formData, plateNumber: e.target.value})}
                className="border-neon/30 bg-dark/50 backdrop-blur-xl font-cyber"
              />
            </div>
          </div>
        );

      case 2:
        return (
          <div className="space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="space-y-2">
                <Label className="text-foreground font-cyber flex items-center">
                  <Zap className="h-4 w-4 mr-2 text-neon" />
                  Price Per Day (₹)
                </Label>
                <Input
                  type="number"
                  placeholder="Enter daily rental price"
                  value={formData.pricePerDay}
                  onChange={(e) => setFormData({...formData, pricePerDay: e.target.value})}
                  className="border-neon/30 bg-dark/50 backdrop-blur-xl font-cyber"
                />
                <p className="text-xs text-muted-foreground font-mono">
                  Recommended: ₹2,000 - ₹15,000 based on vehicle class
                </p>
              </div>

              <div className="space-y-2">
                <Label className="text-foreground font-cyber flex items-center">
                  <Shield className="h-4 w-4 mr-2 text-neon-pink" />
                  Security Deposit (₹)
                </Label>
                <Input
                  type="number"
                  placeholder="Enter security amount"
                  value={formData.securityDeposit}
                  onChange={(e) => setFormData({...formData, securityDeposit: e.target.value})}
                  className="border-neon-pink/30 bg-dark/50 backdrop-blur-xl font-cyber"
                />
                <p className="text-xs text-muted-foreground font-mono">
                  Typically 20-50% of daily price
                </p>
              </div>
            </div>

            <div className="glass-card p-6 rounded-lg holographic">
              <h3 className="text-lg font-bold text-foreground mb-4 font-cyber">Quantum Pricing Calculator</h3>
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4 text-center">
                <div className="p-3 bg-dark/50 rounded border border-neon/20">
                  <div className="text-neon font-bold font-mono">₹{formData.pricePerDay || "0"}</div>
                  <div className="text-xs text-muted-foreground">Daily Rate</div>
                </div>
                <div className="p-3 bg-dark/50 rounded border border-neon/20">
                  <div className="text-neon font-bold font-mono">₹{formData.pricePerDay ? (formData.pricePerDay * 7 * 0.9).toFixed(0) : "0"}</div>
                  <div className="text-xs text-muted-foreground">Weekly (10% off)</div>
                </div>
                <div className="p-3 bg-dark/50 rounded border border-neon/20">
                  <div className="text-neon font-bold font-mono">₹{formData.pricePerDay ? (formData.pricePerDay * 30 * 0.8).toFixed(0) : "0"}</div>
                  <div className="text-xs text-muted-foreground">Monthly (20% off)</div>
                </div>
                <div className="p-3 bg-dark/50 rounded border border-neon-pink/20">
                  <div className="text-neon-pink font-bold font-mono">₹{formData.securityDeposit || "0"}</div>
                  <div className="text-xs text-muted-foreground">Security</div>
                </div>
              </div>
            </div>
          </div>
        );

      case 3:
        return (
          <div className="space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="space-y-2">
                <Label className="text-foreground font-cyber">City</Label>
                <Select value={formData.city} onValueChange={(value) => setFormData({...formData, city: value})}>
                  <SelectTrigger className="border-neon/30 bg-dark/50 backdrop-blur-xl font-cyber">
                    <SelectValue placeholder="Select city" />
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

              <div className="space-y-2">
                <Label className="text-foreground font-cyber">Area/Locality</Label>
                <Input
                  placeholder="Enter area name"
                  value={formData.area}
                  onChange={(e) => setFormData({...formData, area: e.target.value})}
                  className="border-neon/30 bg-dark/50 backdrop-blur-xl font-cyber"
                />
              </div>
            </div>

            <div className="space-y-2">
              <Label className="text-foreground font-cyber">Complete Address</Label>
              <Textarea
                placeholder="Enter complete pickup address"
                value={formData.address}
                onChange={(e) => setFormData({...formData, address: e.target.value})}
                className="border-neon/30 bg-dark/50 backdrop-blur-xl font-cyber min-h-[100px]"
              />
            </div>

            <div className="glass-card p-6 rounded-lg holographic">
              <h3 className="text-lg font-bold text-foreground mb-4 font-cyber flex items-center">
                <Radio className="h-5 w-5 mr-2 text-neon animate-ping" />
                Location Matrix Verification
              </h3>
              <div className="space-y-3 text-sm font-mono">
                <div className="flex justify-between">
                  <span className="text-muted-foreground">GPS Coordinates:</span>
                  <span className="text-neon">Scanning...</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-muted-foreground">Area Verification:</span>
                  <span className="text-neon-pink">Pending Input</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-muted-foreground">Pickup Accessibility:</span>
                  <span className="text-neon">Auto-Detection</span>
                </div>
              </div>
            </div>
          </div>
        );

      case 4:
        return (
          <div className="space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <Card className="glass-card border-neon/30 holographic">
                <CardHeader>
                  <CardTitle className="text-foreground font-cyber flex items-center">
                    <FileText className="h-5 w-5 mr-2 text-neon" />
                    RC Certificate
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="border-2 border-dashed border-neon/30 rounded-lg p-6 text-center hover:border-neon transition-colors">
                    <Upload className="h-8 w-8 text-neon mx-auto mb-2" />
                    <p className="text-sm text-muted-foreground font-cyber">Upload RC Certificate</p>
                    <p className="text-xs text-muted-foreground font-mono">PDF, JPG, PNG (Max 5MB)</p>
                  </div>
                </CardContent>
              </Card>

              <Card className="glass-card border-neon/30 holographic">
                <CardHeader>
                  <CardTitle className="text-foreground font-cyber flex items-center">
                    <Shield className="h-5 w-5 mr-2 text-neon-pink" />
                    Insurance Papers
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="border-2 border-dashed border-neon-pink/30 rounded-lg p-6 text-center hover:border-neon-pink transition-colors">
                    <Upload className="h-8 w-8 text-neon-pink mx-auto mb-2" />
                    <p className="text-sm text-muted-foreground font-cyber">Upload Insurance</p>
                    <p className="text-xs text-muted-foreground font-mono">Valid policy required</p>
                  </div>
                </CardContent>
              </Card>

              <Card className="glass-card border-neon/30 holographic">
                <CardHeader>
                  <CardTitle className="text-foreground font-cyber flex items-center">
                    <CheckCircle className="h-5 w-5 mr-2 text-neon" />
                    PUC Certificate
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="border-2 border-dashed border-neon/30 rounded-lg p-6 text-center hover:border-neon transition-colors">
                    <Upload className="h-8 w-8 text-neon mx-auto mb-2" />
                    <p className="text-sm text-muted-foreground font-cyber">Upload PUC</p>
                    <p className="text-xs text-muted-foreground font-mono">Pollution certificate</p>
                  </div>
                </CardContent>
              </Card>

              <Card className="glass-card border-neon-pink/30 holographic">
                <CardHeader>
                  <CardTitle className="text-foreground font-cyber flex items-center">
                    <Eye className="h-5 w-5 mr-2 text-neon-pink" />
                    Aadhaar Card
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="border-2 border-dashed border-neon-pink/30 rounded-lg p-6 text-center hover:border-neon-pink transition-colors">
                    <Upload className="h-8 w-8 text-neon-pink mx-auto mb-2" />
                    <p className="text-sm text-muted-foreground font-cyber">Upload Aadhaar</p>
                    <p className="text-xs text-muted-foreground font-mono">Auto-masked for privacy</p>
                  </div>
                </CardContent>
              </Card>
            </div>

            <Card className="glass-card border-neon/30 holographic">
              <CardHeader>
                <CardTitle className="text-foreground font-cyber flex items-center">
                  <Camera className="h-5 w-5 mr-2 text-neon" />
                  Vehicle Photos
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="border-2 border-dashed border-neon/30 rounded-lg p-8 text-center hover:border-neon transition-colors">
                  <Camera className="h-12 w-12 text-neon mx-auto mb-4" />
                  <p className="text-lg text-foreground font-cyber mb-2">Upload Vehicle Images</p>
                  <p className="text-sm text-muted-foreground font-mono mb-4">
                    Add 5-10 high-quality photos (Front, Back, Interior, Dashboard, etc.)
                  </p>
                  <Button className="bg-neon hover:bg-neon/90 text-neon-foreground font-cyber">
                    <Upload className="h-4 w-4 mr-2" />
                    Select Photos
                  </Button>
                </div>
              </CardContent>
            </Card>
          </div>
        );

      case 5:
        return (
          <div className="space-y-6">
            <div className="text-center mb-8">
              <div className="glass-card p-8 rounded-2xl holographic">
                <Cpu className="h-16 w-16 text-neon mx-auto mb-4 animate-spin-slow" />
                <h2 className="text-3xl font-bold text-foreground mb-2 font-cyber">Neural Review Complete</h2>
                <p className="text-muted-foreground font-cyber">
                  Your vehicle data has been processed by our quantum verification system
                </p>
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <Card className="glass-card border-neon/30 holographic">
                <CardHeader>
                  <CardTitle className="text-foreground font-cyber">Vehicle Matrix</CardTitle>
                </CardHeader>
                <CardContent className="space-y-2 text-sm font-mono">
                  <div className="flex justify-between">
                    <span className="text-muted-foreground">Make/Model:</span>
                    <span className="text-neon">{formData.carMake} {formData.carModel}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-muted-foreground">Year:</span>
                    <span className="text-neon">{formData.year}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-muted-foreground">Power Type:</span>
                    <span className="text-neon">{formData.fuelType}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-muted-foreground">Drive Mode:</span>
                    <span className="text-neon">{formData.transmission}</span>
                  </div>
                </CardContent>
              </Card>

              <Card className="glass-card border-neon-pink/30 holographic">
                <CardHeader>
                  <CardTitle className="text-foreground font-cyber">Pricing Matrix</CardTitle>
                </CardHeader>
                <CardContent className="space-y-2 text-sm font-mono">
                  <div className="flex justify-between">
                    <span className="text-muted-foreground">Daily Rate:</span>
                    <span className="text-neon-pink">₹{formData.pricePerDay}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-muted-foreground">Security:</span>
                    <span className="text-neon-pink">₹{formData.securityDeposit}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-muted-foreground">Location:</span>
                    <span className="text-neon-pink">{formData.city}</span>
                  </div>
                </CardContent>
              </Card>
            </div>

            <div className="glass-card p-6 rounded-lg holographic">
              <h3 className="text-lg font-bold text-foreground mb-4 font-cyber flex items-center">
                <AlertCircle className="h-5 w-5 mr-2 text-neon animate-pulse" />
                Neural Verification Status
              </h3>
              <div className="space-y-3">
                <div className="flex items-center justify-between">
                  <span className="text-muted-foreground font-cyber">Document Verification</span>
                  <span className="text-yellow-400 font-mono">PENDING</span>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-muted-foreground font-cyber">Vehicle Validation</span>
                  <span className="text-yellow-400 font-mono">PENDING</span>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-muted-foreground font-cyber">Owner Verification</span>
                  <span className="text-yellow-400 font-mono">PENDING</span>
                </div>
                <div className="mt-4 p-4 bg-yellow-500/10 border border-yellow-500/30 rounded">
                  <p className="text-sm text-yellow-400 font-cyber">
                    ⚡ Estimated processing time: 24-48 hours
                  </p>
                </div>
              </div>
            </div>
          </div>
        );

      default:
        return null;
    }
  };

  return (
    <div className="pt-16 min-h-screen bg-gradient-to-br from-dark via-background to-dark relative overflow-hidden">
      {/* Background Effects */}
      <DataStream className="z-0" intensity={8} />
      
      {/* Hero Header */}
      <section className="py-16 bg-gradient-to-r from-dark/90 to-background/90 relative">
        <div className="absolute inset-0 cyber-grid opacity-20" />
        
        <div className="container mx-auto px-4 relative z-10">
          <div className="text-center mb-12">
            <div className="flex items-center justify-center space-x-4 mb-6">
              <div className="h-px bg-gradient-to-r from-transparent via-neon-pink to-transparent w-32" />
              <span className="font-mono text-sm text-neon-pink tracking-widest">VEHICLE UPLOAD PROTOCOL</span>
              <div className="h-px bg-gradient-to-r from-neon-pink to-neon w-32" />
            </div>
            
            <h1 className="text-5xl md:text-7xl font-bold text-foreground mb-6 font-cyber tracking-wider">
              List Your <span className="gradient-text">Vehicle</span>
            </h1>
            
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto font-cyber">
              Upload your vehicle to the <span className="text-neon">neural matrix</span>. 
              Earn quantum credits while your car transcends reality.
            </p>
          </div>
        </div>
      </section>

      {/* Progress Steps */}
      <section className="py-8 bg-dark/50 backdrop-blur-xl border-y border-neon/20">
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-center space-x-4 overflow-x-auto">
            {steps.map((step, index) => (
              <div key={step.id} className="flex items-center space-x-4">
                <div className={`flex flex-col items-center space-y-2 min-w-[120px] ${
                  currentStep === step.id ? 'opacity-100' : 
                  currentStep > step.id ? 'opacity-80' : 'opacity-40'
                }`}>
                  <div className={`w-12 h-12 rounded-full border-2 flex items-center justify-center font-bold ${
                    currentStep === step.id ? 'border-neon bg-neon text-neon-foreground animate-pulse' :
                    currentStep > step.id ? 'border-neon-pink bg-neon-pink text-neon-foreground' :
                    'border-gray-500 text-gray-500'
                  }`}>
                    {currentStep > step.id ? '✓' : step.id}
                  </div>
                  <div className="text-center">
                    <div className={`text-sm font-cyber ${
                      currentStep >= step.id ? 'text-foreground' : 'text-muted-foreground'
                    }`}>
                      {step.title}
                    </div>
                    <div className="text-xs text-muted-foreground font-mono">
                      {step.description}
                    </div>
                  </div>
                </div>
                {index < steps.length - 1 && (
                  <div className={`h-px w-8 ${
                    currentStep > step.id ? 'bg-neon-pink' : 'bg-gray-500'
                  }`} />
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Form Content */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="glass-card p-8 rounded-2xl holographic">
              <div className="mb-8">
                <h2 className="text-2xl font-bold text-foreground mb-2 font-cyber">
                  {steps[currentStep - 1].title}
                </h2>
                <p className="text-muted-foreground font-cyber">
                  {steps[currentStep - 1].description}
                </p>
              </div>

              {renderStep()}

              {/* Navigation */}
              <div className="flex items-center justify-between mt-8 pt-6 border-t border-neon/20">
                <Button
                  variant="outline"
                  onClick={handlePrev}
                  disabled={currentStep === 1}
                  className="border-neon-pink text-neon-pink hover:bg-neon-pink hover:text-neon-foreground font-cyber"
                >
                  Previous Matrix
                </Button>

                <div className="text-sm font-mono text-muted-foreground">
                  Step {currentStep} of {steps.length}
                </div>

                {currentStep < 5 ? (
                  <Button
                    onClick={handleNext}
                    className="bg-gradient-to-r from-neon to-neon-pink hover:from-neon-pink hover:to-neon text-neon-foreground font-cyber"
                  >
                    Next Protocol
                    <Zap className="h-4 w-4 ml-2" />
                  </Button>
                ) : (
                  <Button className="bg-gradient-to-r from-neon to-neon-pink hover:from-neon-pink hover:to-neon text-neon-foreground font-cyber">
                    <Cpu className="h-4 w-4 mr-2" />
                    Submit to Matrix
                  </Button>
                )}
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
