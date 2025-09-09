import { ArrowRight, Brain, Target, TrendingUp, Users, CheckCircle, Upload, Zap } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import { useNavigate } from 'react-router-dom';

const Landing = () => {
  const navigate = useNavigate();

  const features = [
    {
      icon: Brain,
      title: "AI-Powered Matching",
      description: "Advanced algorithms analyze your skills and match you with the most relevant internship opportunities."
    },
    {
      icon: Target,
      title: "Skill Gap Analysis",
      description: "Identify exactly what skills you need to develop for your dream internship position."
    },
    {
      icon: TrendingUp,
      title: "Personalized Roadmap",
      description: "Get a custom learning path with free courses and resources to bridge your skill gaps."
    },
    {
      icon: Zap,
      title: "Instant Recommendations",
      description: "Receive top 5 internship matches within seconds of uploading your resume."
    }
  ];

  const benefits = [
    "Perfect for Tier-2 & Tier-3 college students",
    "100% free platform with premium features",
    "Real-time skill gap analysis",
    "Curated learning resources",
    "Industry-validated recommendations"
  ];

  return (
    <div className="min-h-screen bg-background">
      {/* Navigation */}
      <nav className="border-b border-border bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
        <div className="container flex h-16 items-center justify-between">
          <div className="flex items-center gap-2">
            <Brain className="h-8 w-8 text-primary" />
            <span className="text-xl font-bold text-foreground">InternAI</span>
          </div>
          <div className="flex items-center gap-4">
            <Button 
              variant="ghost" 
              onClick={() => navigate('/login')}
              className="text-muted-foreground hover:text-foreground"
            >
              Login
            </Button>
            <Button 
              onClick={() => navigate('/register')}
              className="btn-primary-soft"
            >
              Sign Up
            </Button>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="container py-24 md:py-32">
        <div className="mx-auto max-w-4xl text-center">
          <div className="mb-6 inline-flex items-center rounded-full bg-primary-light px-4 py-2 text-sm text-primary">
            <Zap className="mr-2 h-4 w-4" />
            AI-Powered Career Acceleration
          </div>
          
          <h1 className="mb-6 text-4xl font-bold leading-tight text-foreground md:text-6xl">
            Find Your Perfect 
            <span className="bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent"> Internship</span>
          </h1>
          
          <p className="mb-8 text-xl text-muted-foreground md:text-2xl">
            Upload your resume, get AI-powered recommendations, and bridge skill gaps with personalized learning paths. 
            Built specifically for students from Tier-2 and Tier-3 colleges.
          </p>
          
          <div className="flex flex-col gap-4 sm:flex-row sm:justify-center">
            <Button 
              size="lg" 
              className="btn-hero text-lg px-8 py-4"
              onClick={() => navigate('/register')}
            >
              Get Started Free
              <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
            <Button 
              size="lg" 
              variant="outline" 
              className="text-lg px-8 py-4 border-primary/20 hover:bg-primary/5"
            >
              See How It Works
            </Button>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="container py-24 bg-muted/30">
        <div className="mx-auto max-w-6xl">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-foreground md:text-4xl mb-4">
              Intelligent Features for Smart Career Choices
            </h2>
            <p className="text-xl text-muted-foreground">
              Everything you need to find and land your ideal internship opportunity
            </p>
          </div>
          
          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
            {features.map((feature, index) => (
              <Card key={index} className="card-premium p-6 text-center">
                <div className="mb-4 inline-flex h-12 w-12 items-center justify-center rounded-lg bg-primary/10 text-primary">
                  <feature.icon className="h-6 w-6" />
                </div>
                <h3 className="mb-2 text-lg font-semibold text-foreground">{feature.title}</h3>
                <p className="text-sm text-muted-foreground">{feature.description}</p>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="container py-24">
        <div className="mx-auto max-w-4xl">
          <div className="grid gap-12 lg:grid-cols-2 lg:items-center">
            <div>
              <h2 className="text-3xl font-bold text-foreground md:text-4xl mb-6">
                Why Choose InternAI?
              </h2>
              <div className="space-y-4">
                {benefits.map((benefit, index) => (
                  <div key={index} className="flex items-center gap-3">
                    <CheckCircle className="h-5 w-5 text-accent flex-shrink-0" />
                    <span className="text-muted-foreground">{benefit}</span>
                  </div>
                ))}
              </div>
              <div className="mt-8">
                <Button 
                  size="lg" 
                  className="btn-success"
                  onClick={() => navigate('/register')}
                >
                  Start Your Journey
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Button>
              </div>
            </div>
            
            <div className="relative">
              <Card className="card-premium p-8">
                <div className="space-y-6">
                  <div className="flex items-center gap-4">
                    <div className="rounded-full bg-primary/10 p-3">
                      <Upload className="h-6 w-6 text-primary" />
                    </div>
                    <div>
                      <h4 className="font-semibold text-foreground">Upload Resume</h4>
                      <p className="text-sm text-muted-foreground">Quick PDF upload or manual entry</p>
                    </div>
                  </div>
                  
                  <div className="flex items-center gap-4">
                    <div className="rounded-full bg-primary/10 p-3">
                      <Brain className="h-6 w-6 text-primary" />
                    </div>
                    <div>
                      <h4 className="font-semibold text-foreground">AI Analysis</h4>
                      <p className="text-sm text-muted-foreground">Extract skills & match opportunities</p>
                    </div>
                  </div>
                  
                  <div className="flex items-center gap-4">
                    <div className="rounded-full bg-accent/10 p-3">
                      <Target className="h-6 w-6 text-accent" />
                    </div>
                    <div>
                      <h4 className="font-semibold text-foreground">Get Results</h4>
                      <p className="text-sm text-muted-foreground">Top 5 matches + learning roadmap</p>
                    </div>
                  </div>
                </div>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="container py-24 bg-gradient-to-r from-primary/5 to-accent/5">
        <div className="mx-auto max-w-4xl text-center">
          <h2 className="text-3xl font-bold text-foreground md:text-4xl mb-4">
            Ready to Accelerate Your Career?
          </h2>
          <p className="text-xl text-muted-foreground mb-8">
            Join thousands of students who have already found their perfect internships
          </p>
          <div className="flex items-center justify-center gap-4">
            <div className="flex -space-x-2">
              <div className="h-10 w-10 rounded-full bg-primary/20 border-2 border-background"></div>
              <div className="h-10 w-10 rounded-full bg-accent/20 border-2 border-background"></div>
              <div className="h-10 w-10 rounded-full bg-primary/30 border-2 border-background"></div>
              <div className="h-10 w-10 rounded-full bg-accent/30 border-2 border-background"></div>
            </div>
            <div className="text-left">
              <p className="font-semibold text-foreground">2,000+ students</p>
              <p className="text-sm text-muted-foreground">successfully matched</p>
            </div>
          </div>
          <Button 
            size="lg" 
            className="btn-hero text-lg px-8 py-4 mt-8"
            onClick={() => navigate('/register')}
          >
            Get Started Now
            <ArrowRight className="ml-2 h-5 w-5" />
          </Button>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-border bg-muted/30 py-12">
        <div className="container">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-2">
              <Brain className="h-6 w-6 text-primary" />
              <span className="font-semibold text-foreground">InternAI</span>
            </div>
            <p className="text-sm text-muted-foreground">
              © 2024 InternAI. Empowering the next generation of talent.
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Landing;