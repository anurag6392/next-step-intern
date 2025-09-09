import { 
  MapPin, 
  Clock, 
  Users, 
  ExternalLink, 
  Star, 
  Bookmark,
  Filter,
  Search,
  Building2,
  Calendar,
  DollarSign,
  TrendingUp,
  Heart
} from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Input } from '@/components/ui/input';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { useState } from 'react';

const Recommendations = () => {
  const [filter, setFilter] = useState('all');
  const [searchQuery, setSearchQuery] = useState('');
  const [savedInternships, setSavedInternships] = useState<Set<string>>(new Set());

  // Mock internship data
  const internships = [
    {
      id: '1',
      title: 'Software Engineering Intern',
      company: 'TechCorp Solutions',
      location: 'Bangalore, India',
      type: 'Remote',
      duration: '3 months',
      stipend: '₹25,000/month',
      matchScore: 95,
      description: 'Work on cutting-edge web applications using React, Node.js, and cloud technologies.',
      skills: ['React', 'Node.js', 'JavaScript', 'AWS', 'MongoDB'],
      requirements: ['Computer Science student', '2+ years experience', 'Strong problem-solving skills'],
      posted: '2 days ago',
      applicants: 45,
      companyLogo: '🚀',
      featured: true
    },
    {
      id: '2', 
      title: 'Data Science Intern',
      company: 'Analytics Pro',
      location: 'Hyderabad, India',
      type: 'Hybrid',
      duration: '6 months',
      stipend: '₹30,000/month',
      matchScore: 88,
      description: 'Build ML models and analyze large datasets to drive business insights.',
      skills: ['Python', 'Machine Learning', 'Pandas', 'TensorFlow', 'SQL'],
      requirements: ['Statistics/Math background', 'Python proficiency', 'ML fundamentals'],
      posted: '1 week ago',
      applicants: 78,
      companyLogo: '📊'
    },
    {
      id: '3',
      title: 'UI/UX Design Intern',
      company: 'Creative Studios',
      location: 'Mumbai, India',
      type: 'On-site',
      duration: '4 months',
      stipend: '₹20,000/month',
      matchScore: 82,
      description: 'Design beautiful user interfaces and create amazing user experiences.',
      skills: ['Figma', 'Adobe Creative Suite', 'User Research', 'Prototyping', 'Design Systems'],
      requirements: ['Design portfolio', 'Figma expertise', 'Creative thinking'],
      posted: '3 days ago',
      applicants: 32,
      companyLogo: '🎨'
    },
    {
      id: '4',
      title: 'Mobile App Development Intern',
      company: 'AppTech India',
      location: 'Pune, India',
      type: 'Remote',
      duration: '5 months',
      stipend: '₹28,000/month',
      matchScore: 79,
      description: 'Develop cross-platform mobile applications using React Native and Flutter.',
      skills: ['React Native', 'Flutter', 'Dart', 'Mobile Development', 'API Integration'],
      requirements: ['Mobile development experience', 'React/Flutter knowledge', 'Problem-solving skills'],
      posted: '5 days ago',
      applicants: 56,
      companyLogo: '📱'
    },
    {
      id: '5',
      title: 'Digital Marketing Intern',
      company: 'Growth Marketing Co',
      location: 'Delhi, India',
      type: 'Hybrid',
      duration: '3 months',
      stipend: '₹18,000/month',
      matchScore: 74,
      description: 'Execute digital marketing campaigns and analyze performance metrics.',
      skills: ['Google Analytics', 'Social Media', 'Content Marketing', 'SEO', 'PPC'],
      requirements: ['Marketing knowledge', 'Analytics skills', 'Creative mindset'],
      posted: '1 week ago',
      applicants: 89,
      companyLogo: '📈'
    }
  ];

  const toggleSave = (internshipId: string) => {
    const newSaved = new Set(savedInternships);
    if (newSaved.has(internshipId)) {
      newSaved.delete(internshipId);
    } else {
      newSaved.add(internshipId);
    }
    setSavedInternships(newSaved);
  };

  const getMatchColor = (score: number) => {
    if (score >= 90) return 'text-accent';
    if (score >= 80) return 'text-primary';
    if (score >= 70) return 'text-warning';
    return 'text-muted-foreground';
  };

  const getMatchBadgeColor = (score: number) => {
    if (score >= 90) return 'bg-accent/10 text-accent';
    if (score >= 80) return 'bg-primary/10 text-primary';
    if (score >= 70) return 'bg-warning/10 text-warning';
    return 'bg-muted text-muted-foreground';
  };

  return (
    <div className="space-y-8">
      {/* Header */}
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-6">
        <div>
          <h1 className="text-3xl font-bold text-foreground mb-2">
            Your Recommendations
          </h1>
          <p className="text-lg text-muted-foreground">
            Top 5 internships matched to your profile using AI
          </p>
        </div>
        <div className="flex items-center gap-2">
          <Badge className="bg-accent/10 text-accent">
            <TrendingUp className="w-4 h-4 mr-1" />
            5 New Matches
          </Badge>
        </div>
      </div>

      {/* Filters */}
      <Card className="card-premium p-6">
        <div className="flex flex-col md:flex-row gap-4">
          <div className="flex-1">
            <div className="relative">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-muted-foreground" />
              <Input
                placeholder="Search internships, companies, skills..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="input-modern pl-10"
              />
            </div>
          </div>
          <div className="flex gap-2">
            <Select value={filter} onValueChange={setFilter}>
              <SelectTrigger className="w-32">
                <SelectValue placeholder="Filter" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="all">All Types</SelectItem>
                <SelectItem value="remote">Remote</SelectItem>
                <SelectItem value="hybrid">Hybrid</SelectItem>
                <SelectItem value="onsite">On-site</SelectItem>
              </SelectContent>
            </Select>
            <Button variant="outline" size="icon">
              <Filter className="h-4 w-4" />
            </Button>
          </div>
        </div>
      </Card>

      {/* Match Summary */}
      <div className="grid gap-6 md:grid-cols-4">
        <Card className="card-premium p-4 text-center">
          <div className="text-2xl font-bold text-accent mb-1">95%</div>
          <div className="text-sm text-muted-foreground">Best Match</div>
        </Card>
        <Card className="card-premium p-4 text-center">
          <div className="text-2xl font-bold text-primary mb-1">84%</div>
          <div className="text-sm text-muted-foreground">Avg Match</div>
        </Card>
        <Card className="card-premium p-4 text-center">
          <div className="text-2xl font-bold text-foreground mb-1">5</div>
          <div className="text-sm text-muted-foreground">Total Matches</div>
        </Card>
        <Card className="card-premium p-4 text-center">
          <div className="text-2xl font-bold text-warning mb-1">{savedInternships.size}</div>
          <div className="text-sm text-muted-foreground">Saved</div>
        </Card>
      </div>

      {/* Internship List */}
      <div className="space-y-6">
        {internships.map((internship, index) => (
          <Card key={internship.id} className={`card-premium ${internship.featured ? 'ring-2 ring-primary/20' : ''}`}>
            <div className="p-6">
              <div className="flex flex-col lg:flex-row lg:items-start gap-6">
                {/* Company Logo & Basic Info */}
                <div className="flex items-start gap-4 flex-1">
                  <div className="w-16 h-16 rounded-xl bg-muted flex items-center justify-center text-2xl flex-shrink-0">
                    {internship.companyLogo}
                  </div>
                  
                  <div className="flex-1 min-w-0">
                    <div className="flex items-start justify-between mb-2">
                      <div>
                        <div className="flex items-center gap-2 mb-1">
                          <h3 className="text-xl font-semibold text-foreground">{internship.title}</h3>
                          {internship.featured && (
                            <Badge className="bg-primary/10 text-primary">Featured</Badge>
                          )}
                        </div>
                        <p className="text-lg text-muted-foreground flex items-center gap-1">
                          <Building2 className="w-4 h-4" />
                          {internship.company}
                        </p>
                      </div>
                      
                      <div className="flex items-center gap-2">
                        <Button
                          variant="ghost"
                          size="sm"
                          onClick={() => toggleSave(internship.id)}
                          className={savedInternships.has(internship.id) ? 'text-red-500' : 'text-muted-foreground'}
                        >
                          <Heart className={`h-4 w-4 ${savedInternships.has(internship.id) ? 'fill-current' : ''}`} />
                        </Button>
                      </div>
                    </div>

                    {/* Location & Type */}
                    <div className="flex flex-wrap items-center gap-4 mb-3 text-sm text-muted-foreground">
                      <div className="flex items-center gap-1">
                        <MapPin className="w-4 h-4" />
                        {internship.location}
                      </div>
                      <Badge variant="secondary">{internship.type}</Badge>
                      <div className="flex items-center gap-1">
                        <Clock className="w-4 h-4" />
                        {internship.duration}
                      </div>
                      <div className="flex items-center gap-1">
                        <DollarSign className="w-4 h-4" />
                        {internship.stipend}
                      </div>
                    </div>

                    <p className="text-muted-foreground mb-4">{internship.description}</p>

                    {/* Skills */}
                    <div className="mb-4">
                      <p className="text-sm font-medium text-foreground mb-2">Required Skills:</p>
                      <div className="flex flex-wrap gap-2">
                        {internship.skills.map((skill) => (
                          <Badge key={skill} variant="secondary" className="text-xs">
                            {skill}
                          </Badge>
                        ))}
                      </div>
                    </div>

                    {/* Meta Info */}
                    <div className="flex flex-wrap items-center gap-4 text-xs text-muted-foreground">
                      <div className="flex items-center gap-1">
                        <Calendar className="w-3 h-3" />
                        Posted {internship.posted}
                      </div>
                      <div className="flex items-center gap-1">
                        <Users className="w-3 h-3" />
                        {internship.applicants} applicants
                      </div>
                    </div>
                  </div>
                </div>

                {/* Match Score & Actions */}
                <div className="lg:w-48 flex lg:flex-col gap-4 lg:items-end">
                  <div className="text-center lg:text-right">
                    <div className="mb-2">
                      <div className={`text-3xl font-bold ${getMatchColor(internship.matchScore)}`}>
                        {internship.matchScore}%
                      </div>
                      <Badge className={`text-xs ${getMatchBadgeColor(internship.matchScore)}`}>
                        {internship.matchScore >= 90 ? 'Excellent Match' :
                         internship.matchScore >= 80 ? 'Great Match' :
                         internship.matchScore >= 70 ? 'Good Match' : 'Fair Match'}
                      </Badge>
                    </div>
                    
                    <div className="flex items-center justify-center lg:justify-end gap-1 mb-4">
                      {Array.from({length: 5}).map((_, i) => (
                        <Star 
                          key={i} 
                          className={`w-3 h-3 ${i < Math.floor(internship.matchScore / 20) ? 'text-yellow-400 fill-current' : 'text-muted-foreground'}`} 
                        />
                      ))}
                    </div>
                  </div>

                  <div className="flex flex-col gap-2 w-full lg:w-auto">
                    <Button className="btn-success w-full lg:w-32">
                      Apply Now
                      <ExternalLink className="ml-2 h-4 w-4" />
                    </Button>
                    <Button variant="outline" className="w-full lg:w-32">
                      View Details
                    </Button>
                  </div>
                </div>
              </div>
            </div>
          </Card>
        ))}
      </div>

      {/* Load More */}
      <div className="text-center">
        <Button variant="outline" className="btn-primary-soft">
          Load More Recommendations
        </Button>
        <p className="text-sm text-muted-foreground mt-2">
          Showing top 5 matches. Update your profile for more personalized recommendations.
        </p>
      </div>
    </div>
  );
};

export default Recommendations;