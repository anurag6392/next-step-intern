import { 
  Upload, 
  Target, 
  TrendingUp, 
  Brain, 
  ArrowRight, 
  Clock,
  CheckCircle,
  Users,
  Zap
} from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { useNavigate } from 'react-router-dom';

const DashboardHome = () => {
  const navigate = useNavigate();

  // Mock data for recent activity and stats
  const stats = [
    {
      label: "Resume Uploaded",
      value: "✓",
      description: "PDF processed successfully",
      color: "bg-accent/10 text-accent"
    },
    {
      label: "Skills Extracted",
      value: "12",
      description: "Technical & soft skills",
      color: "bg-primary/10 text-primary"
    },
    {
      label: "Matches Found",
      value: "5",
      description: "Top recommendations",
      color: "bg-success/10 text-success"
    },
    {
      label: "Skills to Learn",
      value: "8",
      description: "Identified gaps",
      color: "bg-warning/10 text-warning"
    }
  ];

  const quickActions = [
    {
      title: "Upload New Resume",
      description: "Update your profile with latest resume",
      icon: Upload,
      action: () => navigate('/dashboard/upload'),
      primary: true
    },
    {
      title: "View Recommendations",
      description: "Check your top 5 internship matches",
      icon: Target,
      action: () => navigate('/dashboard/recommendations')
    },
    {
      title: "Skill Roadmap",
      description: "See your personalized learning path",
      icon: TrendingUp,
      action: () => navigate('/dashboard/roadmap')
    }
  ];

  const recentActivity = [
    {
      title: "Resume Analysis Complete",
      description: "12 skills extracted from your resume",
      time: "2 hours ago",
      icon: Brain,
      status: "completed"
    },
    {
      title: "New Matches Available",
      description: "5 internships match your profile",
      time: "3 hours ago",
      icon: Target,
      status: "new"
    },
    {
      title: "Roadmap Updated",
      description: "8 new courses added to your learning path",
      time: "1 day ago",
      icon: TrendingUp,
      status: "updated"
    }
  ];

  return (
    <div className="space-y-8">
      {/* Welcome Section */}
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-6">
        <div>
          <h1 className="text-3xl font-bold text-foreground mb-2">
            Welcome back, Alex! 👋
          </h1>
          <p className="text-lg text-muted-foreground">
            Your AI-powered internship journey continues here
          </p>
        </div>
        <Button 
          className="btn-hero"
          onClick={() => navigate('/dashboard/recommendations')}
        >
          View Latest Matches
          <ArrowRight className="ml-2 h-5 w-5" />
        </Button>
      </div>

      {/* Stats Grid */}
      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
        {stats.map((stat, index) => (
          <Card key={index} className="card-premium p-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-2xl font-bold text-foreground mb-1">
                  {stat.value}
                </p>
                <p className="text-sm font-medium text-foreground mb-1">
                  {stat.label}
                </p>
                <p className="text-xs text-muted-foreground">
                  {stat.description}
                </p>
              </div>
              <div className={`w-12 h-12 rounded-full ${stat.color} flex items-center justify-center`}>
                <CheckCircle className="h-6 w-6" />
              </div>
            </div>
          </Card>
        ))}
      </div>

      {/* Quick Actions */}
      <div>
        <h2 className="text-2xl font-bold text-foreground mb-6">Quick Actions</h2>
        <div className="grid gap-6 md:grid-cols-3">
          {quickActions.map((action, index) => {
            const Icon = action.icon;
            return (
              <Card 
                key={index} 
                className={`card-interactive p-6 ${action.primary ? 'ring-2 ring-primary/20' : ''}`}
                onClick={action.action}
              >
                <div className="flex items-start gap-4">
                  <div className={`p-3 rounded-lg ${action.primary ? 'bg-primary/10' : 'bg-muted'}`}>
                    <Icon className={`h-6 w-6 ${action.primary ? 'text-primary' : 'text-muted-foreground'}`} />
                  </div>
                  <div className="flex-1">
                    <h3 className="font-semibold text-foreground mb-1">
                      {action.title}
                    </h3>
                    <p className="text-sm text-muted-foreground mb-3">
                      {action.description}
                    </p>
                    <div className="flex items-center text-sm text-primary">
                      <span>Get started</span>
                      <ArrowRight className="ml-1 h-4 w-4" />
                    </div>
                  </div>
                </div>
              </Card>
            );
          })}
        </div>
      </div>

      {/* Main Content Grid */}
      <div className="grid gap-8 lg:grid-cols-3">
        {/* Recent Activity */}
        <div className="lg:col-span-2">
          <div className="flex items-center justify-between mb-6">
            <h2 className="text-2xl font-bold text-foreground">Recent Activity</h2>
            <Button variant="ghost" className="text-primary">View All</Button>
          </div>
          
          <Card className="card-premium p-6">
            <div className="space-y-6">
              {recentActivity.map((activity, index) => {
                const Icon = activity.icon;
                return (
                  <div key={index} className="flex items-start gap-4 pb-6 border-b border-border last:border-0 last:pb-0">
                    <div className="p-2 rounded-lg bg-primary/10">
                      <Icon className="h-5 w-5 text-primary" />
                    </div>
                    <div className="flex-1">
                      <div className="flex items-center gap-2 mb-1">
                        <h4 className="font-medium text-foreground">
                          {activity.title}
                        </h4>
                        <Badge 
                          variant="secondary"
                          className={
                            activity.status === 'completed' ? 'bg-accent/10 text-accent' :
                            activity.status === 'new' ? 'bg-primary/10 text-primary' :
                            'bg-warning/10 text-warning'
                          }
                        >
                          {activity.status}
                        </Badge>
                      </div>
                      <p className="text-sm text-muted-foreground mb-2">
                        {activity.description}
                      </p>
                      <div className="flex items-center gap-1 text-xs text-muted-foreground">
                        <Clock className="h-3 w-3" />
                        {activity.time}
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </Card>
        </div>

        {/* AI Insights */}
        <div>
          <h2 className="text-2xl font-bold text-foreground mb-6">AI Insights</h2>
          
          <div className="space-y-6">
            <Card className="card-premium p-6">
              <div className="flex items-center gap-3 mb-4">
                <div className="p-2 rounded-lg bg-accent/10">
                  <Zap className="h-5 w-5 text-accent" />
                </div>
                <h3 className="font-semibold text-foreground">Success Prediction</h3>
              </div>
              <div className="mb-4">
                <div className="flex items-center justify-between mb-2">
                  <span className="text-sm text-muted-foreground">Match Confidence</span>
                  <span className="text-sm font-medium text-foreground">87%</span>
                </div>
                <div className="w-full bg-muted rounded-full h-2">
                  <div className="bg-accent h-2 rounded-full" style={{width: '87%'}}></div>
                </div>
              </div>
              <p className="text-xs text-muted-foreground">
                High likelihood of success based on your profile and market trends
              </p>
            </Card>

            <Card className="card-premium p-6">
              <div className="flex items-center gap-3 mb-4">
                <div className="p-2 rounded-lg bg-primary/10">
                  <Users className="h-5 w-5 text-primary" />
                </div>
                <h3 className="font-semibold text-foreground">Peer Comparison</h3>
              </div>
              <div className="space-y-3">
                <div className="flex items-center justify-between">
                  <span className="text-sm text-muted-foreground">Skills Count</span>
                  <span className="text-sm font-medium text-accent">Above Average</span>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-sm text-muted-foreground">Profile Strength</span>
                  <span className="text-sm font-medium text-primary">Strong</span>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-sm text-muted-foreground">Market Readiness</span>
                  <span className="text-sm font-medium text-warning">Good</span>
                </div>
              </div>
            </Card>

            <Card className="card-premium p-6 bg-gradient-to-br from-primary/5 to-accent/5 border-primary/20">
              <div className="text-center">
                <Brain className="h-8 w-8 text-primary mx-auto mb-3" />
                <h3 className="font-semibold text-foreground mb-2">
                  Ready for the next step?
                </h3>
                <p className="text-sm text-muted-foreground mb-4">
                  Your profile shows strong potential for premium internships
                </p>
                <Button 
                  className="btn-success w-full"
                  onClick={() => navigate('/dashboard/recommendations')}
                >
                  View Premium Matches
                </Button>
              </div>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DashboardHome;