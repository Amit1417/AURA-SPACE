import { useState } from "react";
import { Eye, EyeOff, Mail, Lock, User, Phone, Shield, Zap, Cpu, Radio, ArrowRight, CheckCircle } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Link } from "react-router-dom";
import DataStream from "@/components/effects/DataStream";

export default function Register() {
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  const [currentStep, setCurrentStep] = useState(1);
  const [registerData, setRegisterData] = useState({
    // Step 1 - Basic Info
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    
    // Step 2 - Security
    password: "",
    confirmPassword: "",
    
    // Step 3 - Preferences
    userType: "renter", // renter or owner
    city: "",
    agreeTerms: false,
    agreeMarketing: false
  });
  const [isLoading, setIsLoading] = useState(false);

  const handleNext = () => {
    if (currentStep < 3) setCurrentStep(currentStep + 1);
  };

  const handlePrev = () => {
    if (currentStep > 1) setCurrentStep(currentStep - 1);
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);
    
    // Simulate neural creation process
    setTimeout(() => {
      setIsLoading(false);
      console.log("Neural identity created:", registerData);
    }, 3000);
  };

  const renderStep = () => {
    switch (currentStep) {
      case 1:
        return (
          <div className="space-y-6">
            <div className="text-center mb-6">
              <h3 className="text-xl font-bold text-foreground font-cyber mb-2">Neural Identity Matrix</h3>
              <p className="text-sm text-muted-foreground font-cyber">Create your quantum persona</p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="space-y-2">
                <label className="text-foreground font-cyber flex items-center">
                  <User className="h-4 w-4 mr-2 text-neon" />
                  First Name
                </label>
                <Input
                  placeholder="Enter first name"
                  value={registerData.firstName}
                  onChange={(e) => setRegisterData({...registerData, firstName: e.target.value})}
                  className="border-neon/30 bg-dark/50 backdrop-blur-xl font-cyber"
                  required
                />
              </div>
              
              <div className="space-y-2">
                <label className="text-foreground font-cyber">Last Name</label>
                <Input
                  placeholder="Enter last name"
                  value={registerData.lastName}
                  onChange={(e) => setRegisterData({...registerData, lastName: e.target.value})}
                  className="border-neon/30 bg-dark/50 backdrop-blur-xl font-cyber"
                  required
                />
              </div>
            </div>

            <div className="space-y-2">
              <label className="text-foreground font-cyber flex items-center">
                <Mail className="h-4 w-4 mr-2 text-neon-pink" />
                Neural Email ID
              </label>
              <Input
                type="email"
                placeholder="Enter your quantum email"
                value={registerData.email}
                onChange={(e) => setRegisterData({...registerData, email: e.target.value})}
                className="border-neon-pink/30 bg-dark/50 backdrop-blur-xl font-cyber"
                required
              />
            </div>

            <div className="space-y-2">
              <label className="text-foreground font-cyber flex items-center">
                <Phone className="h-4 w-4 mr-2 text-neon" />
                Neural Phone Link
              </label>
              <Input
                type="tel"
                placeholder="Enter your mobile number"
                value={registerData.phone}
                onChange={(e) => setRegisterData({...registerData, phone: e.target.value})}
                className="border-neon/30 bg-dark/50 backdrop-blur-xl font-cyber"
                required
              />
            </div>
          </div>
        );
      
      case 2:
        return (
          <div className="space-y-6">
            <div className="text-center mb-6">
              <h3 className="text-xl font-bold text-foreground font-cyber mb-2">Quantum Security Protocols</h3>
              <p className="text-sm text-muted-foreground font-cyber">Establish neural encryption</p>
            </div>

            <div className="space-y-2">
              <label className="text-foreground font-cyber flex items-center">
                <Lock className="h-4 w-4 mr-2 text-neon" />
                Neural Password
              </label>
              <div className="relative">
                <Input
                  type={showPassword ? "text" : "password"}
                  placeholder="Create quantum password"
                  value={registerData.password}
                  onChange={(e) => setRegisterData({...registerData, password: e.target.value})}
                  className="border-neon/30 bg-dark/50 backdrop-blur-xl font-cyber pr-10"
                  required
                />
                <button
                  type="button"
                  onClick={() => setShowPassword(!showPassword)}
                  className="absolute right-3 top-1/2 transform -translate-y-1/2 text-neon hover:text-neon/80"
                >
                  {showPassword ? <EyeOff className="h-5 w-5" /> : <Eye className="h-5 w-5" />}
                </button>
              </div>
            </div>

            <div className="space-y-2">
              <label className="text-foreground font-cyber flex items-center">
                <Lock className="h-4 w-4 mr-2 text-neon-pink" />
                Confirm Password
              </label>
              <div className="relative">
                <Input
                  type={showConfirmPassword ? "text" : "password"}
                  placeholder="Confirm quantum password"
                  value={registerData.confirmPassword}
                  onChange={(e) => setRegisterData({...registerData, confirmPassword: e.target.value})}
                  className="border-neon-pink/30 bg-dark/50 backdrop-blur-xl font-cyber pr-10"
                  required
                />
                <button
                  type="button"
                  onClick={() => setShowConfirmPassword(!showConfirmPassword)}
                  className="absolute right-3 top-1/2 transform -translate-y-1/2 text-neon-pink hover:text-neon-pink/80"
                >
                  {showConfirmPassword ? <EyeOff className="h-5 w-5" /> : <Eye className="h-5 w-5" />}
                </button>
              </div>
            </div>

            {/* Password Strength Indicator */}
            <div className="space-y-2">
              <div className="text-xs text-muted-foreground font-mono">
                Password Quantum Strength:
              </div>
              <div className="space-y-1">
                {[
                  { label: "Minimum 8 characters", check: registerData.password.length >= 8 },
                  { label: "Contains uppercase letter", check: /[A-Z]/.test(registerData.password) },
                  { label: "Contains lowercase letter", check: /[a-z]/.test(registerData.password) },
                  { label: "Contains number", check: /\d/.test(registerData.password) },
                  { label: "Contains special character", check: /[!@#$%^&*(),.?\":{}|<>]/.test(registerData.password) }
                ].map((req, index) => (
                  <div key={index} className="flex items-center space-x-2 text-xs">
                    <div className={`w-2 h-2 rounded-full ${req.check ? 'bg-neon' : 'bg-gray-500'}`} />
                    <span className={`font-mono ${req.check ? 'text-neon' : 'text-muted-foreground'}`}>
                      {req.label}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        );
      
      case 3:
        return (
          <div className="space-y-6">
            <div className="text-center mb-6">
              <h3 className="text-xl font-bold text-foreground font-cyber mb-2">Neural Preferences</h3>
              <p className="text-sm text-muted-foreground font-cyber">Configure your matrix experience</p>
            </div>

            <div className="space-y-2">
              <label className="text-foreground font-cyber">User Type</label>
              <div className="grid grid-cols-2 gap-4">
                <button
                  type="button"
                  onClick={() => setRegisterData({...registerData, userType: "renter"})}
                  className={`p-4 rounded-lg border-2 transition-all font-cyber ${
                    registerData.userType === "renter" 
                      ? 'border-neon bg-neon/20 text-neon' 
                      : 'border-gray-500 text-muted-foreground hover:border-neon/50'
                  }`}
                >
                  <User className="h-6 w-6 mx-auto mb-2" />
                  Vehicle Renter
                </button>
                <button
                  type="button"
                  onClick={() => setRegisterData({...registerData, userType: "owner"})}
                  className={`p-4 rounded-lg border-2 transition-all font-cyber ${
                    registerData.userType === "owner" 
                      ? 'border-neon-pink bg-neon-pink/20 text-neon-pink' 
                      : 'border-gray-500 text-muted-foreground hover:border-neon-pink/50'
                  }`}
                >
                  <Shield className="h-6 w-6 mx-auto mb-2" />
                  Vehicle Owner
                </button>
              </div>
            </div>

            <div className="space-y-2">
              <label className="text-foreground font-cyber">Primary City</label>
              <select 
                className="w-full p-3 border border-neon/30 bg-dark/50 backdrop-blur-xl rounded-md font-cyber text-foreground"
                value={registerData.city}
                onChange={(e) => setRegisterData({...registerData, city: e.target.value})}
                required
              >
                <option value="select-hub">Select your neural hub</option>
                <option value="mumbai">Neo Mumbai</option>
                <option value="delhi">Digital Delhi</option>
                <option value="bangalore">Cyber Bangalore</option>
                <option value="pune">Quantum Pune</option>
                <option value="hyderabad">Matrix Hyderabad</option>
              </select>
            </div>

            <div className="space-y-4">
              <div className="flex items-center space-x-3">
                <input
                  type="checkbox"
                  id="terms"
                  checked={registerData.agreeTerms}
                  onChange={(e) => setRegisterData({...registerData, agreeTerms: e.target.checked})}
                  className="w-4 h-4 text-neon bg-dark border-neon/30 rounded focus:ring-neon focus:ring-2"
                  required
                />
                <label htmlFor="terms" className="text-sm text-foreground font-cyber">
                  I agree to the{" "}
                  <Link to="/terms" className="text-neon hover:text-neon/80 underline">
                    Neural Terms of Service
                  </Link>{" "}
                  and{" "}
                  <Link to="/privacy" className="text-neon-pink hover:text-neon-pink/80 underline">
                    Quantum Privacy Policy
                  </Link>
                </label>
              </div>
              
              <div className="flex items-center space-x-3">
                <input
                  type="checkbox"
                  id="marketing"
                  checked={registerData.agreeMarketing}
                  onChange={(e) => setRegisterData({...registerData, agreeMarketing: e.target.checked})}
                  className="w-4 h-4 text-neon-pink bg-dark border-neon-pink/30 rounded focus:ring-neon-pink focus:ring-2"
                />
                <label htmlFor="marketing" className="text-sm text-muted-foreground font-cyber">
                  Send me neural updates and quantum promotions
                </label>
              </div>
            </div>
          </div>
        );
    }
  };

  return (
    <div className="pt-16 min-h-screen bg-gradient-to-br from-dark via-background to-dark relative overflow-hidden flex items-center justify-center py-8">
      {/* Background Effects */}
      <DataStream className="z-0" intensity={12} />
      
      {/* Floating UI Elements */}
      <div className="absolute top-20 right-10 text-neon font-mono text-sm opacity-60 animate-pulse">
        <div>NEURAL_CREATION: ACTIVE</div>
        <div>QUANTUM_FORGE: READY</div>
        <div>IDENTITY_MATRIX: ONLINE</div>
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-lg mx-auto">
          {/* Header */}
          <div className="text-center mb-8">
            <div className="flex items-center justify-center space-x-4 mb-6">
              <div className="h-px bg-gradient-to-r from-transparent via-neon-pink to-transparent w-20" />
              <span className="font-mono text-sm text-neon-pink tracking-widest">NEURAL GENESIS</span>
              <div className="h-px bg-gradient-to-r from-neon-pink to-neon w-20" />
            </div>
            
            <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-4 font-cyber tracking-wider">
              Access <span className="gradient-text">XR</span>
            </h1>
            
            <p className="text-muted-foreground font-cyber">
              Create your quantum identity in the <span className="text-neon">LuxoDrive neural matrix</span>
            </p>
          </div>

          {/* Progress Steps */}
          <div className="flex items-center justify-center space-x-4 mb-8">
            {[1, 2, 3].map((step) => (
              <div key={step} className="flex items-center space-x-2">
                <div className={`w-10 h-10 rounded-full border-2 flex items-center justify-center font-bold font-mono ${
                  currentStep === step ? 'border-neon bg-neon text-neon-foreground animate-pulse' :
                  currentStep > step ? 'border-neon-pink bg-neon-pink text-neon-foreground' :
                  'border-gray-500 text-gray-500'
                }`}>
                  {currentStep > step ? '✓' : step}
                </div>
                {step < 3 && (
                  <div className={`h-px w-8 ${
                    currentStep > step ? 'bg-neon-pink' : 'bg-gray-500'
                  }`} />
                )}
              </div>
            ))}
          </div>

          {/* Registration Card */}
          <Card className="glass-card border-neon/30 holographic relative overflow-hidden">
            <div className="absolute inset-0 bg-gradient-to-br from-neon/5 to-neon-pink/5 animate-hologram" />
            
            <CardHeader className="relative z-10">
              <CardTitle className="text-center font-cyber tracking-wider flex items-center justify-center">
                <Cpu className="h-6 w-6 mr-3 text-neon animate-spin-slow" />
                Step {currentStep} of 3
                <Shield className="h-6 w-6 ml-3 text-neon-pink animate-pulse" />
              </CardTitle>
            </CardHeader>
            
            <CardContent className="relative z-10">
              <form onSubmit={currentStep === 3 ? handleSubmit : (e) => e.preventDefault()}>
                {renderStep()}

                {/* Navigation */}
                <div className="flex items-center justify-between mt-8 pt-6 border-t border-neon/20">
                  <Button
                    type="button"
                    variant="outline"
                    onClick={handlePrev}
                    disabled={currentStep === 1}
                    className="border-neon-pink text-neon-pink hover:bg-neon-pink hover:text-neon-foreground font-cyber"
                  >
                    Previous Matrix
                  </Button>

                  {currentStep < 3 ? (
                    <Button
                      type="button"
                      onClick={handleNext}
                      className="bg-gradient-to-r from-neon to-neon-pink hover:from-neon-pink hover:to-neon text-neon-foreground font-cyber"
                    >
                      Next Protocol
                      <ArrowRight className="h-4 w-4 ml-2" />
                    </Button>
                  ) : (
                    <Button 
                      type="submit"
                      className="bg-gradient-to-r from-neon to-neon-pink hover:from-neon-pink hover:to-neon text-neon-foreground font-cyber tracking-widest relative overflow-hidden group"
                      disabled={isLoading || !registerData.agreeTerms}
                    >
                      {isLoading ? (
                        <>
                          <Cpu className="h-5 w-5 mr-2 animate-spin" />
                          CREATING NEURAL IDENTITY...
                        </>
                      ) : (
                        <>
                          <Zap className="h-5 w-5 mr-2" />
                          CREATE NEURAL IDENTITY
                        </>
                      )}
                      <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent skew-x-12 -translate-x-full group-hover:translate-x-full transition-transform duration-1000" />
                    </Button>
                  )}
                </div>
              </form>

              {/* Login Link */}
              {currentStep === 1 && (
                <div className="text-center pt-6 border-t border-neon/20 mt-6">
                  <p className="text-muted-foreground font-cyber mb-3">
                    Already connected to the matrix?
                  </p>
                  <Button 
                    variant="outline" 
                    className="border-neon text-neon hover:bg-neon hover:text-neon-foreground font-cyber tracking-wide"
                    asChild
                  >
                    <Link to="/login">
                      <Radio className="h-4 w-4 mr-2" />
                      ESTABLISH NEURAL LINK
                    </Link>
                  </Button>
                </div>
              )}
            </CardContent>
          </Card>

          {/* Security Notice */}
          <div className="mt-8 text-center">
            <div className="glass-card p-4 rounded-lg holographic">
              <div className="flex items-center justify-center space-x-2 text-sm text-muted-foreground font-mono">
                <Shield className="h-4 w-4 text-neon animate-pulse" />
                <span>Neural identity secured by quantum encryption</span>
                <Shield className="h-4 w-4 text-neon-pink animate-pulse" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
