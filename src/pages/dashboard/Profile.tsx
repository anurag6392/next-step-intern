import { 
  User, 
  Mail, 
  Phone, 
  MapPin, 
  Calendar,
  GraduationCap,
  Briefcase,
  Award,
  Edit3,
  Save,
  X,
  Upload,
  Download,
  Eye,
  Settings,
  Shield,
  Bell
} from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Textarea } from '@/components/ui/textarea';
import { Avatar, AvatarFallback } from '@/components/ui/avatar';
import { Badge } from '@/components/ui/badge';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Switch } from '@/components/ui/switch';
import { Progress } from '@/components/ui/progress';
import { useState } from 'react';

const Profile = () => {
  const [isEditing, setIsEditing] = useState(false);
  const [formData, setFormData] = useState({
    fullName: 'Alex Kumar',
    email: 'alex.kumar@college.edu',
    phone: '+91 98765 43210',
    location: 'Bangalore, India',
    college: 'National Institute of Technology',
    degree: 'Computer Science Engineering',
    graduationYear: '2025',
    bio: 'Passionate software developer with experience in full-stack web development. Strong foundation in algorithms and data structures. Looking for opportunities in fintech and AI companies.',
    github: 'https://github.com/alexkumar',
    linkedin: 'https://linkedin.com/in/alexkumar',
    portfolio: 'https://alexkumar.dev'
  });

  const [notifications, setNotifications] = useState({
    newMatches: true,
    courseUpdates: true,
    weeklyDigest: false,
    marketingEmails: false
  });

  // Mock profile data
  const skills = [
    { name: 'JavaScript', level: 85, category: 'Programming' },
    { name: 'React', level: 80, category: 'Frontend' },
    { name: 'Node.js', level: 70, category: 'Backend' },
    { name: 'Python', level: 75, category: 'Programming' },
    { name: 'SQL', level: 65, category: 'Database' },
    { name: 'AWS', level: 40, category: 'Cloud' },
    { name: 'Docker', level: 35, category: 'DevOps' },
    { name: 'System Design', level: 25, category: 'Architecture' }
  ];

  const achievements = [
    {
      title: 'Resume Uploaded',
      description: 'Successfully uploaded and processed resume',
      date: '2024-01-15',
      icon: Upload,
      completed: true
    },
    {
      title: 'First Course Completed',
      description: 'Completed JavaScript Fundamentals course',
      date: '2024-01-20',
      icon: Award,
      completed: true
    },
    {
      title: 'Profile 80% Complete',
      description: 'Added all essential profile information',
      date: '2024-01-22',
      icon: User,
      completed: false
    },
    {
      title: 'First Application Sent',
      description: 'Applied to first internship opportunity',
      date: null,
      icon: Briefcase,
      completed: false
    }
  ];

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSave = () => {
    setIsEditing(false);
    // Handle save logic here
  };

  const handleCancel = () => {
    setIsEditing(false);
    // Reset form data if needed
  };

  const getSkillColor = (level: number) => {
    if (level >= 80) return 'bg-accent';
    if (level >= 60) return 'bg-primary';
    if (level >= 40) return 'bg-warning';
    return 'bg-destructive';
  };

  const profileCompletion = 78;

  return (
    <div className="space-y-8">
      {/* Header */}
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-6">
        <div>
          <h1 className="text-3xl font-bold text-foreground mb-2">
            Profile Settings
          </h1>
          <p className="text-lg text-muted-foreground">
            Manage your account information and preferences
          </p>
        </div>
        <div className="flex items-center gap-4">
          <Badge className="bg-primary/10 text-primary">
            {profileCompletion}% Complete
          </Badge>
          {!isEditing ? (
            <Button onClick={() => setIsEditing(true)} className="btn-primary-soft">
              <Edit3 className="mr-2 h-4 w-4" />
              Edit Profile
            </Button>
          ) : (
            <div className="flex gap-2">
              <Button onClick={handleSave} className="btn-success">
                <Save className="mr-2 h-4 w-4" />
                Save
              </Button>
              <Button onClick={handleCancel} variant="outline">
                <X className="mr-2 h-4 w-4" />
                Cancel
              </Button>
            </div>
          )}
        </div>
      </div>

      <Tabs defaultValue="general" className="space-y-6">
        <TabsList className="grid w-full grid-cols-4">
          <TabsTrigger value="general">General</TabsTrigger>
          <TabsTrigger value="skills">Skills</TabsTrigger>
          <TabsTrigger value="achievements">Achievements</TabsTrigger>
          <TabsTrigger value="settings">Settings</TabsTrigger>
        </TabsList>

        <TabsContent value="general" className="space-y-6">
          {/* Profile Completion */}
          <Card className="card-premium p-6">
            <div className="flex items-center justify-between mb-4">
              <h2 className="text-lg font-semibold text-foreground">Profile Completion</h2>
              <span className="text-sm text-muted-foreground">{profileCompletion}% Complete</span>
            </div>
            <Progress value={profileCompletion} className="mb-4" />
            <div className="grid gap-2 text-sm">
              <div className="flex justify-between">
                <span className="text-muted-foreground">Basic Information</span>
                <span className="text-accent">✓ Complete</span>
              </div>
              <div className="flex justify-between">
                <span className="text-muted-foreground">Contact Details</span>
                <span className="text-accent">✓ Complete</span>
              </div>
              <div className="flex justify-between">
                <span className="text-muted-foreground">Education</span>
                <span className="text-accent">✓ Complete</span>
              </div>
              <div className="flex justify-between">
                <span className="text-muted-foreground">Portfolio Links</span>
                <span className="text-warning">Incomplete</span>
              </div>
            </div>
          </Card>

          <div className="grid gap-8 lg:grid-cols-3">
            {/* Profile Picture & Basic Info */}
            <div className="lg:col-span-1">
              <Card className="card-premium p-6 text-center">
                <Avatar className="h-24 w-24 mx-auto mb-4">
                  <AvatarFallback className="bg-primary/10 text-primary text-2xl">
                    {formData.fullName.split(' ').map(n => n[0]).join('')}
                  </AvatarFallback>
                </Avatar>
                
                <h3 className="text-xl font-semibold text-foreground mb-1">{formData.fullName}</h3>
                <p className="text-muted-foreground mb-4">{formData.college}</p>
                
                <Button variant="outline" className="w-full mb-4">
                  <Upload className="mr-2 h-4 w-4" />
                  Change Photo
                </Button>
                
                <div className="space-y-2 text-sm">
                  <div className="flex items-center gap-2 text-muted-foreground">
                    <Mail className="h-4 w-4" />
                    <span>{formData.email}</span>
                  </div>
                  <div className="flex items-center gap-2 text-muted-foreground">
                    <MapPin className="h-4 w-4" />
                    <span>{formData.location}</span>
                  </div>
                  <div className="flex items-center gap-2 text-muted-foreground">
                    <Calendar className="h-4 w-4" />
                    <span>Class of {formData.graduationYear}</span>
                  </div>
                </div>
              </Card>
            </div>

            {/* Profile Form */}
            <div className="lg:col-span-2">
              <Card className="card-premium p-6">
                <h2 className="text-lg font-semibold text-foreground mb-6">Personal Information</h2>
                
                <div className="space-y-6">
                  <div className="grid gap-4 md:grid-cols-2">
                    <div className="space-y-2">
                      <Label htmlFor="fullName">Full Name</Label>
                      <Input
                        id="fullName"
                        name="fullName"
                        value={formData.fullName}
                        onChange={handleInputChange}
                        disabled={!isEditing}
                        className="input-modern"
                      />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="email">Email Address</Label>
                      <Input
                        id="email"
                        name="email"
                        type="email"
                        value={formData.email}
                        onChange={handleInputChange}
                        disabled={!isEditing}
                        className="input-modern"
                      />
                    </div>
                  </div>

                  <div className="grid gap-4 md:grid-cols-2">
                    <div className="space-y-2">
                      <Label htmlFor="phone">Phone Number</Label>
                      <Input
                        id="phone"
                        name="phone"
                        value={formData.phone}
                        onChange={handleInputChange}
                        disabled={!isEditing}
                        className="input-modern"
                      />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="location">Location</Label>
                      <Input
                        id="location"
                        name="location"
                        value={formData.location}
                        onChange={handleInputChange}
                        disabled={!isEditing}
                        className="input-modern"
                      />
                    </div>
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="bio">Bio</Label>
                    <Textarea
                      id="bio"
                      name="bio"
                      value={formData.bio}
                      onChange={handleInputChange}
                      disabled={!isEditing}
                      className="input-modern min-h-20"
                      placeholder="Tell us about yourself..."
                    />
                  </div>

                  <div className="space-y-4">
                    <h3 className="font-medium text-foreground">Education</h3>
                    <div className="grid gap-4 md:grid-cols-3">
                      <div className="space-y-2">
                        <Label htmlFor="college">College/University</Label>
                        <Input
                          id="college"
                          name="college"
                          value={formData.college}
                          onChange={handleInputChange}
                          disabled={!isEditing}
                          className="input-modern"
                        />
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="degree">Degree</Label>
                        <Input
                          id="degree"
                          name="degree"
                          value={formData.degree}
                          onChange={handleInputChange}
                          disabled={!isEditing}
                          className="input-modern"
                        />
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="graduationYear">Graduation Year</Label>
                        <Input
                          id="graduationYear"
                          name="graduationYear"
                          value={formData.graduationYear}
                          onChange={handleInputChange}
                          disabled={!isEditing}
                          className="input-modern"
                        />
                      </div>
                    </div>
                  </div>

                  <div className="space-y-4">
                    <h3 className="font-medium text-foreground">Links</h3>
                    <div className="space-y-3">
                      <div className="space-y-2">
                        <Label htmlFor="github">GitHub Profile</Label>
                        <Input
                          id="github"
                          name="github"
                          value={formData.github}
                          onChange={handleInputChange}
                          disabled={!isEditing}
                          className="input-modern"
                          placeholder="https://github.com/username"
                        />
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="linkedin">LinkedIn Profile</Label>
                        <Input
                          id="linkedin"
                          name="linkedin"
                          value={formData.linkedin}
                          onChange={handleInputChange}
                          disabled={!isEditing}
                          className="input-modern"
                          placeholder="https://linkedin.com/in/username"
                        />
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="portfolio">Portfolio Website</Label>
                        <Input
                          id="portfolio"
                          name="portfolio"
                          value={formData.portfolio}
                          onChange={handleInputChange}
                          disabled={!isEditing}
                          className="input-modern"
                          placeholder="https://yourportfolio.com"
                        />
                      </div>
                    </div>
                  </div>
                </div>
              </Card>
            </div>
          </div>
        </TabsContent>

        <TabsContent value="skills" className="space-y-6">
          <Card className="card-premium p-6">
            <div className="flex items-center justify-between mb-6">
              <h2 className="text-lg font-semibold text-foreground">Skill Assessment</h2>
              <Button variant="outline" size="sm">
                <Edit3 className="mr-2 h-4 w-4" />
                Update Skills
              </Button>
            </div>
            
            <div className="grid gap-6 md:grid-cols-2">
              {skills.map((skill, index) => (
                <div key={index} className="space-y-3">
                  <div className="flex items-center justify-between">
                    <h4 className="font-medium text-foreground">{skill.name}</h4>
                    <div className="flex items-center gap-2">
                      <Badge variant="secondary" className="text-xs">
                        {skill.category}
                      </Badge>
                      <span className="text-sm font-medium text-foreground">{skill.level}%</span>
                    </div>
                  </div>
                  <Progress value={skill.level} className="h-2" />
                  <p className="text-xs text-muted-foreground">
                    {skill.level >= 80 ? 'Expert level' :
                     skill.level >= 60 ? 'Intermediate level' :
                     skill.level >= 40 ? 'Basic level' : 'Learning'}
                  </p>
                </div>
              ))}
            </div>
          </Card>
        </TabsContent>

        <TabsContent value="achievements" className="space-y-6">
          <Card className="card-premium p-6">
            <h2 className="text-lg font-semibold text-foreground mb-6">Achievements & Milestones</h2>
            
            <div className="space-y-6">
              {achievements.map((achievement, index) => {
                const Icon = achievement.icon;
                return (
                  <div key={index} className="flex items-start gap-4">
                    <div className={`
                      w-10 h-10 rounded-full flex items-center justify-center flex-shrink-0
                      ${achievement.completed ? 'bg-accent text-accent-foreground' : 'bg-muted text-muted-foreground'}
                    `}>
                      <Icon className="w-5 h-5" />
                    </div>
                    
                    <div className="flex-1">
                      <h4 className="font-medium text-foreground mb-1">{achievement.title}</h4>
                      <p className="text-sm text-muted-foreground mb-2">{achievement.description}</p>
                      {achievement.date && (
                        <p className="text-xs text-muted-foreground">
                          Completed on {new Date(achievement.date).toLocaleDateString()}
                        </p>
                      )}
                      {!achievement.completed && (
                        <Badge variant="secondary" className="text-xs mt-2">
                          In Progress
                        </Badge>
                      )}
                    </div>
                  </div>
                );
              })}
            </div>
          </Card>
        </TabsContent>

        <TabsContent value="settings" className="space-y-6">
          {/* Notification Settings */}
          <Card className="card-premium p-6">
            <h2 className="text-lg font-semibold text-foreground mb-6">Notification Preferences</h2>
            
            <div className="space-y-6">
              <div className="flex items-center justify-between">
                <div>
                  <h4 className="font-medium text-foreground">New Internship Matches</h4>
                  <p className="text-sm text-muted-foreground">Get notified when we find new matches for you</p>
                </div>
                <Switch
                  checked={notifications.newMatches}
                  onCheckedChange={(checked) => 
                    setNotifications(prev => ({ ...prev, newMatches: checked }))
                  }
                />
              </div>
              
              <div className="flex items-center justify-between">
                <div>
                  <h4 className="font-medium text-foreground">Course Updates</h4>
                  <p className="text-sm text-muted-foreground">Updates about your enrolled courses</p>
                </div>
                <Switch
                  checked={notifications.courseUpdates}
                  onCheckedChange={(checked) => 
                    setNotifications(prev => ({ ...prev, courseUpdates: checked }))
                  }
                />
              </div>
              
              <div className="flex items-center justify-between">
                <div>
                  <h4 className="font-medium text-foreground">Weekly Digest</h4>
                  <p className="text-sm text-muted-foreground">Weekly summary of your progress and new opportunities</p>
                </div>
                <Switch
                  checked={notifications.weeklyDigest}
                  onCheckedChange={(checked) => 
                    setNotifications(prev => ({ ...prev, weeklyDigest: checked }))
                  }
                />
              </div>
              
              <div className="flex items-center justify-between">
                <div>
                  <h4 className="font-medium text-foreground">Marketing Emails</h4>
                  <p className="text-sm text-muted-foreground">Product updates and promotional content</p>
                </div>
                <Switch
                  checked={notifications.marketingEmails}
                  onCheckedChange={(checked) => 
                    setNotifications(prev => ({ ...prev, marketingEmails: checked }))
                  }
                />
              </div>
            </div>
          </Card>

          {/* Privacy & Security */}
          <Card className="card-premium p-6">
            <h2 className="text-lg font-semibold text-foreground mb-6">Privacy & Security</h2>
            
            <div className="space-y-4">
              <Button variant="outline" className="w-full justify-between">
                <div className="flex items-center gap-2">
                  <Shield className="h-4 w-4" />
                  Change Password
                </div>
                <span className="text-muted-foreground">••••••••</span>
              </Button>
              
              <Button variant="outline" className="w-full justify-between">
                <div className="flex items-center gap-2">
                  <Download className="h-4 w-4" />
                  Download Your Data
                </div>
                <span className="text-muted-foreground">Export all data</span>
              </Button>
              
              <Button variant="outline" className="w-full justify-between">
                <div className="flex items-center gap-2">
                  <Eye className="h-4 w-4" />
                  Profile Visibility
                </div>
                <Badge variant="secondary">Public</Badge>
              </Button>
            </div>
          </Card>

          {/* Account Actions */}
          <Card className="card-premium p-6">
            <h2 className="text-lg font-semibold text-foreground mb-6">Account Actions</h2>
            
            <div className="space-y-4">
              <Button variant="outline" className="w-full text-destructive border-destructive hover:bg-destructive hover:text-destructive-foreground">
                Deactivate Account
              </Button>
              
              <Button variant="outline" className="w-full text-destructive border-destructive hover:bg-destructive hover:text-destructive-foreground">
                Delete Account
              </Button>
            </div>
          </Card>
        </TabsContent>
      </Tabs>
    </div>
  );
};

export default Profile;