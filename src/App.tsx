import { useState } from 'react'
import { useKV } from '@github/spark/hooks'
import { Card } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { Label } from '@/components/ui/label'
import { Textarea } from '@/components/ui/textarea'
import { Badge } from '@/components/ui/badge'
import { Separator } from '@/components/ui/separator'
import { FileUpload } from '@/components/FileUpload'
import { CheckCircle, XCircle, ArrowLeft } from '@phosphor-icons/react'
import { toast } from 'sonner'
import telstraLogo from '/telstra-logo.png'

interface AssessmentData {
  scopeOfWork: string
  constructionControls: string
  hsmReport: File | null
  conservationPlan: File | null
  heritageGazette: File | null
}

interface AssessmentResult {
  significance: string
  approved: boolean
  details: string
}

function App() {
  const [assessmentData, setAssessmentData] = useKV<AssessmentData>('assessment-data', {
    scopeOfWork: '',
    constructionControls: '',
    hsmReport: null,
    conservationPlan: null,
    heritageGazette: null,
  })
  
  const [showResults, setShowResults] = useState(false)
  const [assessmentResult, setAssessmentResult] = useState<AssessmentResult | null>(null)
  const [isGenerating, setIsGenerating] = useState(false)

  const handleSubmit = async () => {
    if (!assessmentData?.scopeOfWork.trim()) {
      toast.error('Please enter Scope of Work')
      return
    }
    if (!assessmentData?.constructionControls.trim()) {
      toast.error('Please enter Construction Controls')
      return
    }
    if (!assessmentData?.hsmReport) {
      toast.error('Please upload HSM Search Report')
      return
    }
    if (!assessmentData?.conservationPlan) {
      toast.error('Please upload Conservation Plan')
      return
    }
    if (!assessmentData?.heritageGazette) {
      toast.error('Please upload Heritage Gazette')
      return
    }

    setIsGenerating(true)
    
    await new Promise(resolve => setTimeout(resolve, 1500))
    
    const mockResult: AssessmentResult = {
      significance: 'The proposed works are assessed as having moderate heritage significance. The site contains elements of cultural importance that require consideration during construction activities.',
      approved: assessmentData.scopeOfWork.length > 50,
      details: `Based on the submitted documentation:\n\n• HSM Search Report: ${assessmentData.hsmReport.name}\n• Conservation Plan: ${assessmentData.conservationPlan.name}\n• Heritage Gazette: ${assessmentData.heritageGazette.name}\n\nScope of Work Review:\n${assessmentData.scopeOfWork}\n\nConstruction Controls Assessment:\n${assessmentData.constructionControls}\n\nThe assessment indicates that the proposed works ${assessmentData.scopeOfWork.length > 50 ? 'comply with' : 'may not fully comply with'} the required heritage protection standards. ${assessmentData.scopeOfWork.length > 50 ? 'All necessary controls are in place.' : 'Additional controls may be required.'}\n\nRecommendation: ${assessmentData.scopeOfWork.length > 50 ? 'Approve with standard conditions' : 'Defer pending additional information'}`
    }
    
    setAssessmentResult(mockResult)
    setIsGenerating(false)
    setShowResults(true)
  }

  const handleBack = () => {
    setShowResults(false)
  }

  const handleGenerateReport = () => {
    toast.success('Assessment report generated successfully')
  }

  const handleQA = () => {
    toast.info('Q&A feature coming soon')
  }

  const isFormValid = () => {
    return (
      assessmentData?.scopeOfWork.trim() !== '' &&
      assessmentData?.constructionControls.trim() !== '' &&
      assessmentData?.hsmReport !== null &&
      assessmentData?.conservationPlan !== null &&
      assessmentData?.heritageGazette !== null
    )
  }

  if (showResults && assessmentResult) {
    return (
      <div className="min-h-screen bg-telstra-gradient p-4 md:p-8">
        <div className="max-w-4xl mx-auto">
          <Card className="p-6 md:p-10 shadow-lg border-2 card-telstra">
            <div className="flex items-center gap-3 mb-6">
              <Button
                variant="ghost"
                size="sm"
                onClick={handleBack}
                className="gap-2"
              >
                <ArrowLeft size={20} />
                Back
              </Button>
            </div>
            
            <div className="flex items-center justify-center mb-6">
              <img 
                src={telstraLogo} 
                alt="Telstra Logo" 
                className="h-16 w-auto"
              />
            </div>
            <h1 className="text-3xl font-bold mb-8 text-center">Land Access Assessment</h1>
            
            <div className="space-y-6">
              <div>
                <Label className="text-xl font-semibold mb-4 block">Assessment Report</Label>
                <Card className="p-6 bg-pink-50/50 border-2 border-pink-200"
                >
                  <p className="text-base italic text-muted-foreground">
                    {assessmentResult.significance}
                  </p>
                </Card>
              </div>

              <div className="flex items-center gap-3 text-lg">
                <span className="font-semibold">Approval Required:</span>
                <Badge
                  variant={assessmentResult.approved ? 'default' : 'destructive'}
                  className="text-base px-4 py-1.5 gap-2"
                >
                  {assessmentResult.approved ? (
                    <>
                      <CheckCircle size={20} weight="fill" />
                      Yes
                    </>
                  ) : (
                    <>
                      <XCircle size={20} weight="fill" />
                      No
                    </>
                  )}
                </Badge>
              </div>

              <div>
                <Label className="text-base font-medium mb-3 block">Assessment Details:</Label>
                <Card className="p-6 bg-purple-50/30 border-2 min-h-[300px]">
                  <div className="whitespace-pre-wrap text-base leading-relaxed">
                    {assessmentResult.details}
                  </div>
                </Card>
              </div>

              <Separator className="my-6" />

              <div className="flex flex-col sm:flex-row gap-4 justify-end">
                <Button
                  onClick={handleGenerateReport}
                  size="lg"
                  className="gap-2 text-base btn-telstra-primary"
                >
                  Generate Assessment Report
                </Button>
                <Button
                  onClick={handleQA}
                  variant="outline"
                  size="lg"
                  className="gap-2 text-base btn-telstra-secondary"
                >
                  Q&A
                </Button>
              </div>
            </div>
          </Card>
        </div>
      </div>
    )
  }

  return (
    <div className="min-h-screen bg-telstra-gradient p-4 md:p-8">
      <div className="max-w-4xl mx-auto">
        <Card className="p-6 md:p-10 shadow-lg border-2 card-telstra">
          <div className="flex items-center justify-center mb-6">
            <img 
              src={telstraLogo} 
              alt="Telstra Logo" 
              className="h-16 w-auto"
            />
          </div>
          <h1 className="text-3xl font-bold mb-8 text-center">Land Access Assessment</h1>
          
          <div className="space-y-6">
            <div>
              <Label htmlFor="scope-of-work" className="text-base font-semibold mb-3 block">
                Scope of Work
              </Label>
              <Textarea
                id="scope-of-work"
                placeholder="Scope of Work"
                value={assessmentData?.scopeOfWork || ''}
                onChange={(e) => 
                  setAssessmentData((prev) => ({
                    scopeOfWork: e.target.value,
                    constructionControls: prev?.constructionControls || '',
                    hsmReport: prev?.hsmReport || null,
                    conservationPlan: prev?.conservationPlan || null,
                    heritageGazette: prev?.heritageGazette || null,
                  }))
                }
                className="min-h-[120px] text-base border-2 border-purple-200 focus:border-pink-500"
              />
            </div>

            <div>
              <Label htmlFor="construction-controls" className="text-base font-semibold mb-3 block">
                Construction Controls
              </Label>
              <Textarea
                id="construction-controls"
                placeholder="Specific Construction Controls"
                value={assessmentData?.constructionControls || ''}
                onChange={(e) =>
                  setAssessmentData((prev) => ({
                    scopeOfWork: prev?.scopeOfWork || '',
                    constructionControls: e.target.value,
                    hsmReport: prev?.hsmReport || null,
                    conservationPlan: prev?.conservationPlan || null,
                    heritageGazette: prev?.heritageGazette || null,
                  }))
                }
                className="min-h-[120px] text-base border-2 border-purple-200 focus:border-pink-500"
              />
            </div>

            <Separator className="my-6" />

            <div className="space-y-4">
              <FileUpload
                label="HSM Search Report"
                placeholder="Upload HSM Search Reports"
                selectedFile={assessmentData?.hsmReport || null}
                onFileSelect={(file) =>
                  setAssessmentData((prev) => ({
                    scopeOfWork: prev?.scopeOfWork || '',
                    constructionControls: prev?.constructionControls || '',
                    hsmReport: file,
                    conservationPlan: prev?.conservationPlan || null,
                    heritageGazette: prev?.heritageGazette || null,
                  }))
                }
              />
              
              <FileUpload
                label="Conservation Plan"
                placeholder="Upload Conservation Plan"
                selectedFile={assessmentData?.conservationPlan || null}
                onFileSelect={(file) =>
                  setAssessmentData((prev) => ({
                    scopeOfWork: prev?.scopeOfWork || '',
                    constructionControls: prev?.constructionControls || '',
                    hsmReport: prev?.hsmReport || null,
                    conservationPlan: file,
                    heritageGazette: prev?.heritageGazette || null,
                  }))
                }
              />
              
              <FileUpload
                label="Heritage Gazette"
                placeholder="Upload Gazette"
                selectedFile={assessmentData?.heritageGazette || null}
                onFileSelect={(file) =>
                  setAssessmentData((prev) => ({
                    scopeOfWork: prev?.scopeOfWork || '',
                    constructionControls: prev?.constructionControls || '',
                    hsmReport: prev?.hsmReport || null,
                    conservationPlan: prev?.conservationPlan || null,
                    heritageGazette: file,
                  }))
                }
              />
            </div>

            <Separator className="my-6" />

            <div className="flex justify-center pt-4">
              <Button
                onClick={handleSubmit}
                disabled={!isFormValid() || isGenerating}
                size="lg"
                className="min-w-[250px] text-base btn-telstra-primary"
              >
                {isGenerating ? 'Processing...' : 'Submit for Assessment'}
              </Button>
            </div>
          </div>
        </Card>
      </div>
    </div>
  )
}

export default App
