import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Waves, Eye, EyeOff, Check } from "lucide-react";
import { Link } from "react-router-dom";

const SignUp = () => {
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [name, setName] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // TODO: Implement Supabase authentication
    console.log("Sign up attempt:", { email, password, name });
  };

  const passwordMatch = password === confirmPassword && password.length > 0;
  const passwordStrength = password.length >= 8;

  return (
    <div className="min-h-screen bg-gradient-depth flex items-center justify-center p-6">
      <div className="w-full max-w-md">
        {/* Logo */}
        <div className="flex items-center justify-center space-x-2 mb-8">
          <Waves className="h-8 w-8 text-white" />
          <span className="text-2xl font-bold text-white">WaveTalk</span>
        </div>

        <Card className="shadow-ocean border-0">
          <CardHeader className="text-center pb-4">
            <CardTitle className="text-2xl font-bold">Join WaveTalk</CardTitle>
            <p className="text-muted-foreground">
              Start exploring oceanographic data with AI
            </p>
          </CardHeader>
          <CardContent>
            <form onSubmit={handleSubmit} className="space-y-4">
              <div className="space-y-2">
                <Label htmlFor="name">Full Name</Label>
                <Input
                  id="name"
                  type="text"
                  placeholder="Dr. Ocean Explorer"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  required
                  className="bg-background"
                />
              </div>

              <div className="space-y-2">
                <Label htmlFor="email">Email</Label>
                <Input
                  id="email"
                  type="email"
                  placeholder="your.email@example.com"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  required
                  className="bg-background"
                />
              </div>
              
              <div className="space-y-2">
                <Label htmlFor="password">Password</Label>
                <div className="relative">
                  <Input
                    id="password"
                    type={showPassword ? "text" : "password"}
                    placeholder="Create a secure password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    required
                    className="bg-background pr-10"
                  />
                  <Button
                    type="button"
                    variant="ghost"
                    size="sm"
                    className="absolute right-0 top-0 h-full px-3 py-2 hover:bg-transparent"
                    onClick={() => setShowPassword(!showPassword)}
                  >
                    {showPassword ? (
                      <EyeOff className="h-4 w-4 text-muted-foreground" />
                    ) : (
                      <Eye className="h-4 w-4 text-muted-foreground" />
                    )}
                  </Button>
                </div>
                <div className="flex items-center text-sm">
                  <Check className={`h-4 w-4 mr-2 ${passwordStrength ? 'text-green-600' : 'text-muted-foreground'}`} />
                  <span className={passwordStrength ? 'text-green-600' : 'text-muted-foreground'}>
                    At least 8 characters
                  </span>
                </div>
              </div>

              <div className="space-y-2">
                <Label htmlFor="confirmPassword">Confirm Password</Label>
                <div className="relative">
                  <Input
                    id="confirmPassword"
                    type={showConfirmPassword ? "text" : "password"}
                    placeholder="Confirm your password"
                    value={confirmPassword}
                    onChange={(e) => setConfirmPassword(e.target.value)}
                    required
                    className="bg-background pr-10"
                  />
                  <Button
                    type="button"
                    variant="ghost"
                    size="sm"
                    className="absolute right-0 top-0 h-full px-3 py-2 hover:bg-transparent"
                    onClick={() => setShowConfirmPassword(!showConfirmPassword)}
                  >
                    {showConfirmPassword ? (
                      <EyeOff className="h-4 w-4 text-muted-foreground" />
                    ) : (
                      <Eye className="h-4 w-4 text-muted-foreground" />
                    )}
                  </Button>
                </div>
                {confirmPassword.length > 0 && (
                  <div className="flex items-center text-sm">
                    <Check className={`h-4 w-4 mr-2 ${passwordMatch ? 'text-green-600' : 'text-muted-foreground'}`} />
                    <span className={passwordMatch ? 'text-green-600' : 'text-muted-foreground'}>
                      Passwords match
                    </span>
                  </div>
                )}
              </div>

              <Button 
                type="submit" 
                className="w-full"
                disabled={!passwordStrength || !passwordMatch || !email || !name}
              >
                Create Account
              </Button>
            </form>

            <div className="mt-6 text-center text-sm text-muted-foreground">
              Already have an account?{" "}
              <Link to="/signin" className="text-primary hover:underline font-medium">
                Sign in here
              </Link>
            </div>

            <div className="mt-4 text-center">
              <Link 
                to="/" 
                className="text-sm text-muted-foreground hover:text-primary transition-colors"
              >
                ← Back to Home
              </Link>
            </div>
          </CardContent>
        </Card>

        <div className="mt-8 text-center text-sm text-white/80">
          <p>Connect to Supabase to enable authentication</p>
        </div>
      </div>
    </div>
  );
};

export default SignUp;