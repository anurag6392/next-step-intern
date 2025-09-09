import { useState } from 'react';
import { 
  Upload, 
  FileText, 
  CheckCircle, 
  X, 
  AlertCircle,
  Plus,
  Trash2,
  Brain,
  ArrowRight
} from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Textarea } from '@/components/ui/textarea';
import { Badge } from '@/components/ui/badge';
import { Progress } from '@/components/ui/progress';
import { toast } from 'sonner';
import { useNavigate } from 'react-router-dom';

const UploadResume = () => {
  const navigate = useNavigate();
  const [uploadMethod, setUploadMethod] = useState<'file' | 'manual'>('file');
  const [file, setFile] = useState<File | null>(null);
  const [isProcessing, setIsProcessing] = useState(false);
  const [processingStep, setProcessingStep] = useState(0);
  const [skills, setSkills] = useState<string[]>([]);
  const [newSkill, setNewSkill] = useState('');
  const [manualData, setManualData] = useState({
    experience: '',
    education: '',
    projects: '',
    skills: ''
  });

  const processingSteps = [
    "Parsing PDF content...",
    "Extracting personal information...",
    "Identifying technical skills...",
    "Analyzing experience level...",
    "Generating recommendations..."
  ];

  const handleFileUpload = (event: React.ChangeEvent<HTMLInputElement>) => {
    const selectedFile = event.target.files?.[0];
    if (selectedFile) {
      if (selectedFile.type !== 'application/pdf') {
        toast.error('Please upload a PDF file');
        return;
      }
      if (selectedFile.size > 5 * 1024 * 1024) {
        toast.error('File size must be less than 5MB');
        return;
      }
      setFile(selectedFile);
    }
  };

  const handleDragOver = (e: React.DragEvent) => {
    e.preventDefault();
  };

  const handleDrop = (e: React.DragEvent) => {
    e.preventDefault();
    const droppedFile = e.dataTransfer.files[0];
    if (droppedFile) {
      if (droppedFile.type !== 'application/pdf') {
        toast.error('Please upload a PDF file');
        return;
      }
      setFile(droppedFile);
    }
  };

  const removeFile = () => {
    setFile(null);
  };

  const addSkill = () => {
    if (newSkill.trim() && !skills.includes(newSkill.trim())) {
      setSkills([...skills, newSkill.trim()]);
      setNewSkill('');
    }
  };

  const removeSkill = (skillToRemove: string) => {
    setSkills(skills.filter(skill => skill !== skillToRemove));
  };

  const handleKeyPress = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter') {
      e.preventDefault();
      addSkill();
    }
  };

  const processResume = async () => {
    if (!file && uploadMethod === 'file') {
      toast.error('Please upload a resume file');
      return;
    }

    if (uploadMethod === 'manual' && (!manualData.skills.trim() || !manualData.experience.trim())) {
      toast.error('Please fill in at least skills and experience');
      return;
    }

    setIsProcessing(true);
    setProcessingStep(0);

    // Simulate processing steps
    for (let i = 0; i < processingSteps.length; i++) {
      await new Promise(resolve => setTimeout(resolve, 1500));
      setProcessingStep(i + 1);
    }

    toast.success('Resume processed successfully!');
    setTimeout(() => {
      navigate('/dashboard/recommendations');
    }, 1000);
  };

  if (isProcessing) {
    return (
      <div className="space-y-8">
        <div className="text-center">
          <h1 className="text-3xl font-bold text-foreground mb-2">
            Processing Your Resume
          </h1>
          <p className="text-lg text-muted-foreground">
            AI is analyzing your profile...
          </p>
        </div>

        <Card className="card-premium p-8 max-w-2xl mx-auto">
          <div className="text-center mb-8">
            <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-4">
              <Brain className="h-8 w-8 text-primary animate-pulse" />
            </div>
            <h2 className="text-xl font-semibold text-foreground mb-2">
              AI Analysis in Progress
            </h2>
            <p className="text-muted-foreground">
              {processingSteps[processingStep - 1] || "Initializing..."}
            </p>
          </div>

          <Progress value={(processingStep / processingSteps.length) * 100} className="mb-6" />

          <div className="space-y-3">
            {processingSteps.map((step, index) => (
              <div key={index} className="flex items-center gap-3">
                {index < processingStep ? (
                  <CheckCircle className="h-5 w-5 text-accent" />
                ) : index === processingStep ? (
                  <div className="h-5 w-5 border-2 border-primary border-t-transparent rounded-full animate-spin" />
                ) : (
                  <div className="h-5 w-5 border-2 border-muted rounded-full" />
                )}
                <span className={`text-sm ${index <= processingStep ? 'text-foreground' : 'text-muted-foreground'}`}>
                  {step}
                </span>
              </div>
            ))}
          </div>
        </Card>
      </div>
    );
  }

  return (
    <div className="space-y-8">
      {/* Header */}
      <div>
        <h1 className="text-3xl font-bold text-foreground mb-2">
          Upload Your Resume
        </h1>
        <p className="text-lg text-muted-foreground">
          Let AI analyze your profile and find the perfect internship matches
        </p>
      </div>

      {/* Upload Method Selection */}
      <div className="flex gap-4">
        <Button
          variant={uploadMethod === 'file' ? 'default' : 'outline'}
          onClick={() => setUploadMethod('file')}
          className="flex items-center gap-2"
        >
          <Upload className="h-4 w-4" />
          Upload PDF
        </Button>
        <Button
          variant={uploadMethod === 'manual' ? 'default' : 'outline'}
          onClick={() => setUploadMethod('manual')}
          className="flex items-center gap-2"
        >
          <FileText className="h-4 w-4" />
          Manual Entry
        </Button>
      </div>

      {uploadMethod === 'file' ? (
        /* File Upload Section */
        <div className="grid gap-8 lg:grid-cols-3">
          <div className="lg:col-span-2">
            <Card className="card-premium p-8">
              <div
                className={`upload-zone ${file ? 'border-accent bg-accent/5' : ''}`}
                onDragOver={handleDragOver}
                onDrop={handleDrop}
              >
                {file ? (
                  <div className="space-y-4">
                    <CheckCircle className="h-12 w-12 text-accent mx-auto" />
                    <div>
                      <h3 className="text-lg font-semibold text-foreground mb-1">
                        File Ready for Processing
                      </h3>
                      <p className="text-muted-foreground mb-4">
                        {file.name} • {(file.size / 1024 / 1024).toFixed(2)} MB
                      </p>
                    </div>
                    <div className="flex gap-3 justify-center">
                      <Button onClick={processResume} className="btn-success">
                        <Brain className="mr-2 h-4 w-4" />
                        Process Resume
                      </Button>
                      <Button variant="outline" onClick={removeFile}>
                        <X className="mr-2 h-4 w-4" />
                        Remove
                      </Button>
                    </div>
                  </div>
                ) : (
                  <div className="space-y-4">
                    <Upload className="h-12 w-12 text-muted-foreground mx-auto" />
                    <div>
                      <h3 className="text-lg font-semibold text-foreground mb-2">
                        Drop your resume here
                      </h3>
                      <p className="text-muted-foreground mb-4">
                        or click to browse files
                      </p>
                    </div>
                    <input
                      type="file"
                      accept=".pdf"
                      onChange={handleFileUpload}
                      className="hidden"
                      id="resume-upload"
                    />
                    <Button
                      onClick={() => document.getElementById('resume-upload')?.click()}
                      className="btn-primary-soft"
                    >
                      Browse Files
                    </Button>
                  </div>
                )}
              </div>
              
              <div className="mt-6 flex items-start gap-3 p-4 bg-muted/50 rounded-lg">
                <AlertCircle className="h-5 w-5 text-muted-foreground mt-0.5" />
                <div className="text-sm">
                  <p className="font-medium text-foreground mb-1">File Requirements:</p>
                  <ul className="text-muted-foreground space-y-1">
                    <li>• PDF format only</li>
                    <li>• Maximum size: 5MB</li>
                    <li>• Clear, readable text (no images of text)</li>
                  </ul>
                </div>
              </div>
            </Card>
          </div>

          <div>
            <Card className="card-premium p-6">
              <h3 className="font-semibold text-foreground mb-4">What happens next?</h3>
              <div className="space-y-4">
                <div className="flex items-start gap-3">
                  <div className="w-8 h-8 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0">
                    <span className="text-sm font-medium text-primary">1</span>
                  </div>
                  <div>
                    <p className="font-medium text-foreground">AI Analysis</p>
                    <p className="text-sm text-muted-foreground">Extract skills, experience, and education</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <div className="w-8 h-8 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0">
                    <span className="text-sm font-medium text-primary">2</span>
                  </div>
                  <div>
                    <p className="font-medium text-foreground">Smart Matching</p>
                    <p className="text-sm text-muted-foreground">Find top 5 internship opportunities</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <div className="w-8 h-8 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0">
                    <span className="text-sm font-medium text-primary">3</span>
                  </div>
                  <div>
                    <p className="font-medium text-foreground">Skill Gap Analysis</p>
                    <p className="text-sm text-muted-foreground">Identify areas for improvement</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <div className="w-8 h-8 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0">
                    <span className="text-sm font-medium text-primary">4</span>
                  </div>
                  <div>
                    <p className="font-medium text-foreground">Learning Roadmap</p>
                    <p className="text-sm text-muted-foreground">Personalized course recommendations</p>
                  </div>
                </div>
              </div>
            </Card>
          </div>
        </div>
      ) : (
        /* Manual Entry Section */
        <div className="grid gap-8 lg:grid-cols-3">
          <div className="lg:col-span-2">
            <Card className="card-premium p-8">
              <div className="space-y-6">
                <div>
                  <Label htmlFor="experience" className="text-sm font-medium text-foreground mb-2 block">
                    Work Experience & Projects
                  </Label>
                  <Textarea
                    id="experience"
                    value={manualData.experience}
                    onChange={(e) => setManualData(prev => ({...prev, experience: e.target.value}))}
                    placeholder="Describe your work experience, internships, and projects..."
                    className="input-modern min-h-32"
                  />
                </div>

                <div>
                  <Label htmlFor="education" className="text-sm font-medium text-foreground mb-2 block">
                    Education Background
                  </Label>
                  <Textarea
                    id="education"
                    value={manualData.education}
                    onChange={(e) => setManualData(prev => ({...prev, education: e.target.value}))}
                    placeholder="Your college, degree, GPA, relevant coursework..."
                    className="input-modern"
                  />
                </div>

                <div>
                  <Label className="text-sm font-medium text-foreground mb-2 block">
                    Technical Skills
                  </Label>
                  <div className="space-y-3">
                    <div className="flex gap-2">
                      <Input
                        value={newSkill}
                        onChange={(e) => setNewSkill(e.target.value)}
                        onKeyPress={handleKeyPress}
                        placeholder="Add a skill (e.g., Python, React, Machine Learning)"
                        className="input-modern flex-1"
                      />
                      <Button onClick={addSkill} disabled={!newSkill.trim()}>
                        <Plus className="h-4 w-4" />
                      </Button>
                    </div>
                    
                    {skills.length > 0 && (
                      <div className="flex flex-wrap gap-2">
                        {skills.map((skill, index) => (
                          <Badge 
                            key={index} 
                            variant="secondary" 
                            className="flex items-center gap-1 py-1 px-3"
                          >
                            {skill}
                            <button
                              onClick={() => removeSkill(skill)}
                              className="text-muted-foreground hover:text-foreground"
                            >
                              <X className="h-3 w-3" />
                            </button>
                          </Badge>
                        ))}
                      </div>
                    )}
                  </div>
                </div>

                <div>
                  <Label htmlFor="additional" className="text-sm font-medium text-foreground mb-2 block">
                    Additional Information
                  </Label>
                  <Textarea
                    id="additional"
                    value={manualData.projects}
                    onChange={(e) => setManualData(prev => ({...prev, projects: e.target.value}))}
                    placeholder="Certifications, achievements, extracurricular activities..."
                    className="input-modern"
                  />
                </div>

                <Button 
                  onClick={processResume} 
                  className="btn-hero w-full"
                  disabled={!manualData.experience.trim() || skills.length === 0}
                >
                  <Brain className="mr-2 h-4 w-4" />
                  Analyze Profile & Find Matches
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
              </div>
            </Card>
          </div>

          <div>
            <Card className="card-premium p-6">
              <h3 className="font-semibold text-foreground mb-4">Tips for Best Results</h3>
              <div className="space-y-3 text-sm">
                <div className="flex items-start gap-2">
                  <CheckCircle className="h-4 w-4 text-accent mt-0.5 flex-shrink-0" />
                  <p className="text-muted-foreground">Be specific about your technical skills</p>
                </div>
                <div className="flex items-start gap-2">
                  <CheckCircle className="h-4 w-4 text-accent mt-0.5 flex-shrink-0" />
                  <p className="text-muted-foreground">Include programming languages and frameworks</p>
                </div>
                <div className="flex items-start gap-2">
                  <CheckCircle className="h-4 w-4 text-accent mt-0.5 flex-shrink-0" />
                  <p className="text-muted-foreground">Mention any relevant projects or internships</p>
                </div>
                <div className="flex items-start gap-2">
                  <CheckCircle className="h-4 w-4 text-accent mt-0.5 flex-shrink-0" />
                  <p className="text-muted-foreground">Add certifications and online courses</p>
                </div>
              </div>
            </Card>
          </div>
        </div>
      )}
    </div>
  );
};

export default UploadResume;