import { 
  Target, 
  BookOpen, 
  Clock, 
  CheckCircle, 
  Play, 
  ExternalLink,
  TrendingUp,
  Award,
  Users,
  Star,
  ArrowRight,
  Calendar,
  Zap
} from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Progress } from '@/components/ui/progress';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';

const SkillRoadmap = () => {
  // Mock skill gap data
  const skillGaps = [
    { skill: 'Cloud Computing (AWS)', importance: 95, currentLevel: 30, targetLevel: 80 },
    { skill: 'System Design', importance: 90, currentLevel: 20, targetLevel: 75 },
    { skill: 'Docker & Kubernetes', importance: 85, currentLevel: 25, targetLevel: 70 },
    { skill: 'Advanced JavaScript', importance: 80, currentLevel: 60, targetLevel: 85 },
    { skill: 'Database Design', importance: 75, currentLevel: 45, targetLevel: 80 },
    { skill: 'API Development', importance: 70, currentLevel: 55, targetLevel: 80 }
  ];

  // Mock course recommendations
  const courses = [
    {
      id: '1',
      title: 'AWS Cloud Practitioner Essentials',
      provider: 'AWS Training',
      duration: '6 hours',
      level: 'Beginner',
      rating: 4.8,
      students: 125000,
      price: 'Free',
      skills: ['AWS', 'Cloud Computing', 'EC2', 'S3'],
      description: 'Learn the fundamentals of AWS cloud services and architecture.',
      progress: 0,
      featured: true
    },
    {
      id: '2', 
      title: 'System Design Interview Prep',
      provider: 'Tech Interview Pro',
      duration: '12 hours',
      level: 'Intermediate',
      rating: 4.9,
      students: 89000,
      price: 'Free',
      skills: ['System Design', 'Scalability', 'Architecture'],
      description: 'Master system design concepts for technical interviews.',
      progress: 0
    },
    {
      id: '3',
      title: 'Docker & Kubernetes Masterclass',
      provider: 'DevOps Academy',
      duration: '18 hours',
      level: 'Intermediate',
      rating: 4.7,
      students: 67000,
      price: 'Free',
      skills: ['Docker', 'Kubernetes', 'DevOps', 'Containers'],
      description: 'Complete guide to containerization and orchestration.',
      progress: 25
    },
    {
      id: '4',
      title: 'Advanced JavaScript Concepts',
      provider: 'JavaScript Mastery',
      duration: '8 hours', 
      level: 'Advanced',
      rating: 4.6,
      students: 156000,
      price: 'Free',
      skills: ['JavaScript', 'ES6+', 'Async/Await', 'Closures'],
      description: 'Deep dive into advanced JavaScript patterns and concepts.',
      progress: 60
    },
    {
      id: '5',
      title: 'Database Design & SQL Optimization',
      provider: 'Data Engineering Hub',
      duration: '10 hours',
      level: 'Intermediate',
      rating: 4.5,
      students: 78000,
      price: 'Free',
      skills: ['SQL', 'Database Design', 'Optimization', 'NoSQL'],
      description: 'Learn to design efficient databases and optimize queries.',
      progress: 0
    }
  ];

  // Mock learning path
  const learningPath = [
    {
      phase: 'Foundation',
      duration: '2-3 weeks',
      skills: ['JavaScript Fundamentals', 'Basic AWS'],
      status: 'completed'
    },
    {
      phase: 'Intermediate Skills',
      duration: '4-6 weeks', 
      skills: ['Advanced JavaScript', 'Docker Basics', 'API Development'],
      status: 'in-progress'
    },
    {
      phase: 'Advanced Topics',
      duration: '6-8 weeks',
      skills: ['System Design', 'Kubernetes', 'Cloud Architecture'],
      status: 'upcoming'
    },
    {
      phase: 'Specialization',
      duration: '4-5 weeks',
      skills: ['AWS Certification', 'Performance Optimization'],
      status: 'upcoming'
    }
  ];

  const getSkillProgress = (current: number, target: number) => {
    return Math.min((current / target) * 100, 100);
  };

  const getProgressColor = (progress: number) => {
    if (progress >= 80) return 'bg-accent';
    if (progress >= 60) return 'bg-primary';
    if (progress >= 40) return 'bg-warning';
    return 'bg-destructive';
  };

  return (
    <div className="space-y-8">
      {/* Header */}
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-6">
        <div>
          <h1 className="text-3xl font-bold text-foreground mb-2">
            Your Learning Roadmap
          </h1>
          <p className="text-lg text-muted-foreground">
            Personalized skill development path based on your career goals
          </p>
        </div>
        <div className="flex items-center gap-2">
          <Badge className="bg-primary/10 text-primary">
            <TrendingUp className="w-4 h-4 mr-1" />
            32% Complete
          </Badge>
        </div>
      </div>

      {/* Progress Overview */}
      <div className="grid gap-6 md:grid-cols-3">
        <Card className="card-premium p-6">
          <div className="flex items-center gap-3 mb-4">
            <div className="p-2 rounded-lg bg-primary/10">
              <Target className="h-6 w-6 text-primary" />
            </div>
            <div>
              <h3 className="font-semibold text-foreground">Skills Progress</h3>
              <p className="text-sm text-muted-foreground">Overall development</p>
            </div>
          </div>
          <div className="space-y-2">
            <div className="flex justify-between text-sm">
              <span className="text-muted-foreground">Current Level</span>
              <span className="font-medium text-foreground">32%</span>
            </div>
            <Progress value={32} className="h-2" />
          </div>
        </Card>

        <Card className="card-premium p-6">
          <div className="flex items-center gap-3 mb-4">
            <div className="p-2 rounded-lg bg-accent/10">
              <BookOpen className="h-6 w-6 text-accent" />
            </div>
            <div>
              <h3 className="font-semibold text-foreground">Courses Enrolled</h3>
              <p className="text-sm text-muted-foreground">Active learning</p>
            </div>
          </div>
          <div className="text-2xl font-bold text-foreground mb-1">5</div>
          <p className="text-xs text-muted-foreground">2 in progress, 3 pending</p>
        </Card>

        <Card className="card-premium p-6">
          <div className="flex items-center gap-3 mb-4">
            <div className="p-2 rounded-lg bg-warning/10">
              <Clock className="h-6 w-6 text-warning" />
            </div>
            <div>
              <h3 className="font-semibold text-foreground">Time to Goal</h3>
              <p className="text-sm text-muted-foreground">Estimated completion</p>
            </div>
          </div>
          <div className="text-2xl font-bold text-foreground mb-1">12-16</div>
          <p className="text-xs text-muted-foreground">weeks remaining</p>
        </Card>
      </div>

      <Tabs defaultValue="gaps" className="space-y-6">
        <TabsList className="grid w-full grid-cols-3">
          <TabsTrigger value="gaps">Skill Gaps</TabsTrigger>
          <TabsTrigger value="courses">Recommended Courses</TabsTrigger>
          <TabsTrigger value="path">Learning Path</TabsTrigger>
        </TabsList>

        <TabsContent value="gaps" className="space-y-6">
          <Card className="card-premium p-6">
            <h2 className="text-xl font-semibold text-foreground mb-6">Skill Gap Analysis</h2>
            
            <div className="space-y-6">
              {skillGaps.map((gap, index) => (
                <div key={index} className="space-y-3">
                  <div className="flex items-center justify-between">
                    <h4 className="font-medium text-foreground">{gap.skill}</h4>
                    <Badge 
                      className={
                        gap.importance >= 90 ? 'bg-destructive/10 text-destructive' :
                        gap.importance >= 80 ? 'bg-warning/10 text-warning' :
                        'bg-primary/10 text-primary'
                      }
                    >
                      {gap.importance >= 90 ? 'Critical' :
                       gap.importance >= 80 ? 'Important' : 'Helpful'}
                    </Badge>
                  </div>
                  
                  <div className="space-y-2">
                    <div className="flex justify-between text-sm text-muted-foreground">
                      <span>Current: {gap.currentLevel}%</span>
                      <span>Target: {gap.targetLevel}%</span>
                    </div>
                    <div className="relative">
                      <Progress 
                        value={gap.currentLevel} 
                        className="h-3 bg-muted"
                      />
                      <div 
                        className="absolute top-0 right-0 h-3 w-1 bg-primary rounded-r"
                        style={{ right: `${100 - gap.targetLevel}%` }}
                      />
                    </div>
                  </div>
                  
                  <div className="flex items-center justify-between pt-2">
                    <p className="text-xs text-muted-foreground">
                      Gap: {gap.targetLevel - gap.currentLevel}% improvement needed
                    </p>
                    <Button variant="outline" size="sm" className="text-xs">
                      Find Courses
                    </Button>
                  </div>
                </div>
              ))}
            </div>
          </Card>
        </TabsContent>

        <TabsContent value="courses" className="space-y-6">
          <div className="grid gap-6">
            {courses.map((course) => (
              <Card key={course.id} className={`card-premium ${course.featured ? 'ring-2 ring-primary/20' : ''}`}>
                <div className="p-6">
                  <div className="flex flex-col lg:flex-row gap-6">
                    <div className="flex-1">
                      <div className="flex items-start justify-between mb-3">
                        <div>
                          <div className="flex items-center gap-2 mb-1">
                            <h3 className="text-lg font-semibold text-foreground">{course.title}</h3>
                            {course.featured && (
                              <Badge className="bg-accent/10 text-accent">Recommended</Badge>
                            )}
                          </div>
                          <p className="text-muted-foreground">{course.provider}</p>
                        </div>
                        <Badge className="bg-success/10 text-success">{course.price}</Badge>
                      </div>

                      <p className="text-sm text-muted-foreground mb-4">{course.description}</p>

                      {/* Course Details */}
                      <div className="flex flex-wrap items-center gap-4 mb-4 text-sm text-muted-foreground">
                        <div className="flex items-center gap-1">
                          <Clock className="w-4 h-4" />
                          {course.duration}
                        </div>
                        <div className="flex items-center gap-1">
                          <Award className="w-4 h-4" />
                          {course.level}
                        </div>
                        <div className="flex items-center gap-1">
                          <Star className="w-4 h-4 fill-current text-yellow-400" />
                          {course.rating}
                        </div>
                        <div className="flex items-center gap-1">
                          <Users className="w-4 h-4" />
                          {course.students.toLocaleString()} students
                        </div>
                      </div>

                      {/* Skills */}
                      <div className="mb-4">
                        <p className="text-xs font-medium text-foreground mb-2">Skills you'll learn:</p>
                        <div className="flex flex-wrap gap-2">
                          {course.skills.map((skill) => (
                            <Badge key={skill} variant="secondary" className="text-xs">
                              {skill}
                            </Badge>
                          ))}
                        </div>
                      </div>

                      {/* Progress */}
                      {course.progress > 0 && (
                        <div className="space-y-2">
                          <div className="flex justify-between text-sm">
                            <span className="text-muted-foreground">Progress</span>
                            <span className="font-medium text-foreground">{course.progress}%</span>
                          </div>
                          <Progress value={course.progress} className="h-2" />
                        </div>
                      )}
                    </div>

                    {/* Actions */}
                    <div className="lg:w-48 flex lg:flex-col gap-3">
                      {course.progress > 0 ? (
                        <>
                          <Button className="btn-success flex-1 lg:flex-none">
                            <Play className="mr-2 h-4 w-4" />
                            Continue
                          </Button>
                          <Button variant="outline" className="flex-1 lg:flex-none">
                            View Details
                          </Button>
                        </>
                      ) : (
                        <>
                          <Button className="btn-primary-soft flex-1 lg:flex-none">
                            <BookOpen className="mr-2 h-4 w-4" />
                            Enroll Now
                          </Button>
                          <Button variant="outline" className="flex-1 lg:flex-none">
                            <ExternalLink className="mr-2 h-4 w-4" />
                            Preview
                          </Button>
                        </>
                      )}
                    </div>
                  </div>
                </div>
              </Card>
            ))}
          </div>
        </TabsContent>

        <TabsContent value="path" className="space-y-6">
          <Card className="card-premium p-6">
            <h2 className="text-xl font-semibold text-foreground mb-6">Your Learning Journey</h2>
            
            <div className="space-y-8">
              {learningPath.map((phase, index) => (
                <div key={index} className="relative">
                  {/* Connector Line */}
                  {index < learningPath.length - 1 && (
                    <div className="absolute left-6 top-12 w-0.5 h-16 bg-border"></div>
                  )}
                  
                  <div className="flex items-start gap-4">
                    {/* Status Icon */}
                    <div className={`
                      w-12 h-12 rounded-full flex items-center justify-center flex-shrink-0
                      ${phase.status === 'completed' ? 'bg-accent text-accent-foreground' :
                        phase.status === 'in-progress' ? 'bg-primary text-primary-foreground' :
                        'bg-muted text-muted-foreground'}
                    `}>
                      {phase.status === 'completed' ? (
                        <CheckCircle className="w-6 h-6" />
                      ) : phase.status === 'in-progress' ? (
                        <Play className="w-6 h-6" />
                      ) : (
                        <Clock className="w-6 h-6" />
                      )}
                    </div>

                    {/* Phase Content */}
                    <div className="flex-1">
                      <div className="flex items-center justify-between mb-2">
                        <h3 className="text-lg font-semibold text-foreground">{phase.phase}</h3>
                        <div className="flex items-center gap-2">
                          <Badge 
                            className={
                              phase.status === 'completed' ? 'bg-accent/10 text-accent' :
                              phase.status === 'in-progress' ? 'bg-primary/10 text-primary' :
                              'bg-muted text-muted-foreground'
                            }
                          >
                            {phase.status === 'completed' ? 'Completed' :
                             phase.status === 'in-progress' ? 'In Progress' : 'Upcoming'}
                          </Badge>
                          <div className="flex items-center gap-1 text-sm text-muted-foreground">
                            <Calendar className="w-4 h-4" />
                            {phase.duration}
                          </div>
                        </div>
                      </div>

                      <div className="flex flex-wrap gap-2 mb-4">
                        {phase.skills.map((skill) => (
                          <Badge key={skill} variant="secondary" className="text-xs">
                            {skill}
                          </Badge>
                        ))}
                      </div>

                      {phase.status === 'in-progress' && (
                        <div className="space-y-2">
                          <Progress value={45} className="h-2" />
                          <p className="text-xs text-muted-foreground">45% complete • 3 of 5 skills learned</p>
                        </div>
                      )}

                      {phase.status === 'upcoming' && index === 2 && (
                        <Button variant="outline" size="sm" className="mt-2">
                          <Zap className="mr-2 h-4 w-4" />
                          Start This Phase
                          <ArrowRight className="ml-2 h-4 w-4" />
                        </Button>
                      )}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </Card>

          {/* Timeline Summary */}
          <Card className="card-premium p-6 bg-gradient-to-r from-primary/5 to-accent/5 border-primary/20">
            <div className="text-center">
              <Target className="h-8 w-8 text-primary mx-auto mb-3" />
              <h3 className="text-lg font-semibold text-foreground mb-2">
                Career Goal Progress
              </h3>
              <p className="text-muted-foreground mb-4">
                You're 32% of the way to becoming job-ready for senior software engineering roles
              </p>
              <div className="flex items-center justify-center gap-4 text-sm">
                <div className="flex items-center gap-1">
                  <CheckCircle className="w-4 h-4 text-accent" />
                  <span className="text-muted-foreground">1 phase complete</span>
                </div>
                <div className="flex items-center gap-1">
                  <Play className="w-4 h-4 text-primary" />
                  <span className="text-muted-foreground">1 in progress</span>
                </div>
                <div className="flex items-center gap-1">
                  <Clock className="w-4 h-4 text-muted-foreground" />
                  <span className="text-muted-foreground">2 upcoming</span>
                </div>
              </div>
            </div>
          </Card>
        </TabsContent>
      </Tabs>
    </div>
  );
};

export default SkillRoadmap;