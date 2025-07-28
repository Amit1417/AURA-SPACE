import { useState } from "react";
import { Eye, EyeOff, Mail, Lock, Zap, Shield, Cpu, Radio, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Link } from "react-router-dom";
import DataStream from "@/components/effects/DataStream";

export default function Login() {
  const [showPassword, setShowPassword] = useState(false);
  const [loginData, setLoginData] = useState({
    email: "",
    password: "",
    rememberMe: false
  });
  const [isLoading, setIsLoading] = useState(false);

  const handleLogin = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);
    
    // Simulate neural processing
    setTimeout(() => {
      setIsLoading(false);
      console.log("Neural link established:", loginData);
    }, 2000);
  };

  return (
    <div className="pt-16 min-h-screen bg-gradient-to-br from-dark via-background to-dark relative overflow-hidden flex items-center justify-center">
      {/* Background Effects */}
      <DataStream className="z-0" intensity={15} />
      
      {/* Floating UI Elements */}
      <div className="absolute top-20 right-10 text-neon font-mono text-sm opacity-60 animate-pulse">
        <div>NEURAL_AUTH: STANDBY</div>
        <div>QUANTUM_GATE: READY</div>
        <div>MATRIX_STATUS: ONLINE</div>
      </div>
      
      <div className="absolute bottom-20 left-10 text-neon-pink font-mono text-sm opacity-60 animate-pulse" style={{ animationDelay: '1s' }}>
        <div>SECURITY_LEVEL: MAXIMUM</div>
        <div>ENCRYPTION: QUANTUM</div>
        <div>FIREWALL: ACTIVE</div>
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-md mx-auto">
          {/* Header */}
          <div className="text-center mb-8">
            <div className="flex items-center justify-center space-x-4 mb-6">
              <div className="h-px bg-gradient-to-r from-transparent via-neon to-transparent w-20" />
              <span className="font-mono text-sm text-neon tracking-widest">NEURAL ACCESS</span>
              <div className="h-px bg-gradient-to-r from-neon to-neon-pink w-20" />
            </div>
            
            <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-4 font-cyber tracking-wider">
              Neural <span className="gradient-text">Link</span>
            </h1>
            
            <p className="text-muted-foreground font-cyber">
              Establish quantum connection to the <span className="text-neon">LuxoDrive XR</span> matrix
            </p>
          </div>

          {/* Login Card */}
          <Card className="glass-card border-neon/30 holographic relative overflow-hidden">
            <div className="absolute inset-0 bg-gradient-to-br from-neon/5 to-neon-pink/5 animate-hologram" />
            
            <CardHeader className="relative z-10">
              <CardTitle className="text-center font-cyber tracking-wider flex items-center justify-center">
                <Cpu className="h-6 w-6 mr-3 text-neon animate-spin-slow" />
                Quantum Authentication
                <Shield className="h-6 w-6 ml-3 text-neon-pink animate-pulse" />
              </CardTitle>
            </CardHeader>
            
            <CardContent className="space-y-6 relative z-10">
              <form onSubmit={handleLogin} className="space-y-6">
                {/* Email Input */}
                <div className="space-y-2">
                  <label className="text-foreground font-cyber flex items-center">
                    <Mail className="h-4 w-4 mr-2 text-neon" />
                    Neural Email ID
                  </label>
                  <Input
                    type="email"
                    placeholder="Enter your quantum email"
                    value={loginData.email}
                    onChange={(e) => setLoginData({...loginData, email: e.target.value})}
                    className="border-neon/30 bg-dark/50 backdrop-blur-xl font-cyber"
                    required
                  />
                </div>

                {/* Password Input */}
                <div className="space-y-2">
                  <label className="text-foreground font-cyber flex items-center">
                    <Lock className="h-4 w-4 mr-2 text-neon-pink" />
                    Neural Password
                  </label>
                  <div className="relative">
                    <Input
                      type={showPassword ? "text" : "password"}
                      placeholder="Enter your quantum password"
                      value={loginData.password}
                      onChange={(e) => setLoginData({...loginData, password: e.target.value})}
                      className="border-neon-pink/30 bg-dark/50 backdrop-blur-xl font-cyber pr-10"
                      required
                    />
                    <button
                      type="button"
                      onClick={() => setShowPassword(!showPassword)}
                      className="absolute right-3 top-1/2 transform -translate-y-1/2 text-neon-pink hover:text-neon-pink/80"
                    >
                      {showPassword ? <EyeOff className="h-5 w-5" /> : <Eye className="h-5 w-5" />}
                    </button>
                  </div>
                </div>

                {/* Remember Me */}
                <div className="flex items-center space-x-2">
                  <input
                    type="checkbox"
                    id="remember"
                    checked={loginData.rememberMe}
                    onChange={(e) => setLoginData({...loginData, rememberMe: e.target.checked})}
                    className="w-4 h-4 text-neon bg-dark border-neon/30 rounded focus:ring-neon focus:ring-2"
                  />
                  <label htmlFor="remember" className="text-sm text-muted-foreground font-cyber">
                    Maintain neural connection
                  </label>
                </div>

                {/* Submit Button */}
                <Button 
                  type="submit"
                  className="w-full bg-gradient-to-r from-neon to-neon-pink hover:from-neon-pink hover:to-neon text-neon-foreground font-cyber tracking-widest py-6 relative overflow-hidden group"
                  disabled={isLoading}
                >
                  {isLoading ? (
                    <>
                      <Cpu className="h-5 w-5 mr-2 animate-spin" />
                      ESTABLISHING NEURAL LINK...
                    </>
                  ) : (
                    <>
                      <Zap className="h-5 w-5 mr-2" />
                      INITIATE NEURAL LINK
                      <ArrowRight className="h-5 w-5 ml-2 group-hover:translate-x-1 transition-transform" />
                    </>
                  )}
                  <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent skew-x-12 -translate-x-full group-hover:translate-x-full transition-transform duration-1000" />
                </Button>
              </form>

              {/* Additional Options */}
              <div className="space-y-4">
                <div className="text-center">
                  <Link 
                    to="/forgot-password" 
                    className="text-sm text-neon hover:text-neon/80 transition-colors font-cyber"
                  >
                    Neural pattern recovery protocol
                  </Link>
                </div>

                <div className="relative">
                  <div className="absolute inset-0 flex items-center">
                    <div className="w-full border-t border-neon/20" />
                  </div>
                  <div className="relative flex justify-center text-sm">
                    <span className="px-4 bg-card text-muted-foreground font-mono">OR</span>
                  </div>
                </div>

                {/* Social Login Alternatives */}
                <div className="space-y-3">
                  <Button 
                    variant="outline" 
                    className="w-full border-neon/30 text-neon hover:bg-neon hover:text-neon-foreground font-cyber holo-btn"
                  >
                    <Radio className="h-4 w-4 mr-2" />
                    Biometric Neural Scan
                  </Button>
                  
                  <Button 
                    variant="outline" 
                    className="w-full border-neon-pink/30 text-neon-pink hover:bg-neon-pink hover:text-neon-foreground font-cyber holo-btn"
                  >
                    <Shield className="h-4 w-4 mr-2" />
                    Quantum OTP Access
                  </Button>
                </div>
              </div>

              {/* Register Link */}
              <div className="text-center pt-6 border-t border-neon/20">
                <p className="text-muted-foreground font-cyber mb-3">
                  New to the neural matrix?
                </p>
                <Button 
                  variant="outline" 
                  className="border-neon-pink text-neon-pink hover:bg-neon-pink hover:text-neon-foreground font-cyber tracking-wide"
                  asChild
                >
                  <Link to="/register">
                    <Cpu className="h-4 w-4 mr-2" />
                    CREATE NEURAL IDENTITY
                  </Link>
                </Button>
              </div>
            </CardContent>
          </Card>

          {/* Security Notice */}
          <div className="mt-8 text-center">
            <div className="glass-card p-4 rounded-lg holographic">
              <div className="flex items-center justify-center space-x-2 text-sm text-muted-foreground font-mono">
                <Shield className="h-4 w-4 text-neon animate-pulse" />
                <span>Secured by quantum encryption protocols</span>
                <Shield className="h-4 w-4 text-neon-pink animate-pulse" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
