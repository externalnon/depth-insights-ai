import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { MessageSquare, Database, BarChart3, Waves, ChevronRight } from "lucide-react";
import { Link } from "react-router-dom";
import { ThemeToggle } from "@/components/theme-toggle";
import heroImage from "@/assets/hero-ocean.jpg";
import argoImage from "@/assets/argo-float.jpg";

const Home = () => {
  return (
    <div className="min-h-screen bg-background">
      {/* Navigation */}
      <nav className="border-b bg-card/50 backdrop-blur-sm sticky top-0 z-50">
        <div className="container mx-auto px-6 py-4">
          <div className="flex items-center justify-between">
          <div className="flex items-center space-x-2">
            <Waves className="h-8 w-8 text-primary" />
            <h1 className="text-2xl font-bold text-primary">WaveTalk</h1>
          </div>
          <div className="flex items-center space-x-4">
            <ThemeToggle />
            <Button variant="outline" asChild>
              <Link to="/signin">Sign In</Link>
            </Button>
            <Button asChild>
              <Link to="/signup">Get Started</Link>
            </Button>
          </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="relative min-h-[80vh] flex items-center justify-center overflow-hidden">
        <div 
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{ backgroundImage: `url(${heroImage})` }}
        >
          <div className="absolute inset-0 bg-primary/20"></div>
        </div>
        <div className="relative z-10 text-center text-white px-6 max-w-4xl">
          <h2 className="text-5xl md:text-7xl font-bold mb-6">
            Unlock Ocean
            <span className="block text-accent">Intelligence</span>
          </h2>
          <p className="text-xl md:text-2xl mb-8 text-white/90 max-w-2xl mx-auto">
            AI-powered conversations with ARGO oceanographic data. 
            Explore marine insights through natural language.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="text-lg px-8 py-4" asChild>
              <Link to="/signup">
                Start Exploring <ChevronRight className="ml-2 h-5 w-5" />
              </Link>
            </Button>
            <Button size="lg" variant="outline" className="text-lg px-8 py-4 border-white text-white hover:bg-white hover:text-primary" asChild>
              <Link to="#features">Learn More</Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section id="features" className="py-20 bg-muted/30">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h3 className="text-4xl font-bold text-foreground mb-4">
              Intelligent Oceanographic Analysis
            </h3>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              WaveTalk transforms complex ARGO data into accessible insights through conversational AI
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8 mb-16">
            <Card className="border-0 shadow-ocean hover:shadow-float transition-all duration-300">
              <CardContent className="p-8 text-center">
                <MessageSquare className="h-12 w-12 text-accent mx-auto mb-4" />
                <h4 className="text-xl font-semibold mb-3">Natural Conversations</h4>
                <p className="text-muted-foreground">
                  Ask questions about ocean data in plain English and receive detailed scientific insights
                </p>
              </CardContent>
            </Card>
            
            <Card className="border-0 shadow-ocean hover:shadow-float transition-all duration-300">
              <CardContent className="p-8 text-center">
                <Database className="h-12 w-12 text-accent mx-auto mb-4" />
                <h4 className="text-xl font-semibold mb-3">ARGO Data Access</h4>
                <p className="text-muted-foreground">
                  Direct integration with global ARGO float network providing real-time oceanographic data
                </p>
              </CardContent>
            </Card>
            
            <Card className="border-0 shadow-ocean hover:shadow-float transition-all duration-300">
              <CardContent className="p-8 text-center">
                <BarChart3 className="h-12 w-12 text-accent mx-auto mb-4" />
                <h4 className="text-xl font-semibold mb-3">Visual Analytics</h4>
                <p className="text-muted-foreground">
                  Generate charts, maps, and visualizations from ocean data through simple requests
                </p>
              </CardContent>
            </Card>
          </div>

          {/* ARGO Section */}
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <img 
                src={argoImage} 
                alt="ARGO oceanographic float collecting ocean data"
                className="rounded-lg shadow-ocean w-full"
              />
            </div>
            <div>
              <h4 className="text-3xl font-bold text-foreground mb-6">
                Powered by ARGO Global Network
              </h4>
              <p className="text-lg text-muted-foreground mb-6">
                Access data from over 4,000 autonomous floats worldwide, measuring temperature, 
                salinity, and pressure from the ocean surface to 2,000 meters depth.
              </p>
              <ul className="space-y-3 text-muted-foreground">
                <li className="flex items-center">
                  <ChevronRight className="h-5 w-5 text-accent mr-2" />
                  Real-time ocean temperature profiles
                </li>
                <li className="flex items-center">
                  <ChevronRight className="h-5 w-5 text-accent mr-2" />
                  Salinity measurements across depths
                </li>
                <li className="flex items-center">
                  <ChevronRight className="h-5 w-5 text-accent mr-2" />
                  Global ocean circulation patterns
                </li>
                <li className="flex items-center">
                  <ChevronRight className="h-5 w-5 text-accent mr-2" />
                  Climate change indicators
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-ocean text-white">
        <div className="container mx-auto px-6 text-center">
          <h3 className="text-4xl font-bold mb-6">
            Ready to Dive Deep?
          </h3>
          <p className="text-xl mb-8 text-white/90 max-w-2xl mx-auto">
            Join researchers, scientists, and ocean enthusiasts exploring marine data through AI
          </p>
          <Button size="lg" variant="secondary" className="text-lg px-8 py-4" asChild>
            <Link to="/signup">
              Start Your Ocean Journey <Waves className="ml-2 h-5 w-5" />
            </Link>
          </Button>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-primary text-primary-foreground py-12">
        <div className="container mx-auto px-6">
          <div className="flex items-center justify-center space-x-2 mb-6">
            <Waves className="h-6 w-6" />
            <span className="text-lg font-semibold">WaveTalk</span>
          </div>
          <p className="text-center text-primary-foreground/80">
            AI-Powered Oceanographic Insights • Built for Marine Science
          </p>
        </div>
      </footer>
    </div>
  );
};

export default Home;