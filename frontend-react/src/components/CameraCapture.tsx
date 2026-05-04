import { useRef, useState, useEffect } from 'react'
import { Camera, RefreshCw, Sparkles, UserCircle } from 'lucide-react'

interface Props {
  userData: any;
  onResult: (data: any) => void;
  setLoading: (loading: boolean) => void;
  loading: boolean;
}

export default function CameraCapture({ userData, onResult, setLoading, loading }: Props) {
  const videoRef = useRef<HTMLVideoElement>(null)
  const canvasRef = useRef<HTMLCanvasElement>(null)
  const [stream, setStream] = useState<MediaStream | null>(null)
  const [capturedImage, setCapturedImage] = useState<string | null>(null)

  useEffect(() => {
    startCamera()
    return () => {
      if (stream) {
        stream.getTracks().forEach(track => track.stop())
      }
    }
  }, [])

  const startCamera = async () => {
    try {
      const s = await navigator.mediaDevices.getUserMedia({ 
        video: { facingMode: 'user' },
        audio: false 
      })
      setStream(s)
      if (videoRef.current) {
        videoRef.current.srcObject = s
      }
    } catch (err) {
      console.error("Error accessing camera:", err)
    }
  }

  const capture = () => {
    if (videoRef.current && canvasRef.current) {
      const video = videoRef.current
      const canvas = canvasRef.current
      canvas.width = video.videoWidth
      canvas.height = video.videoHeight
      const ctx = canvas.getContext('2d')
      if (ctx) {
        ctx.drawImage(video, 0, 0, canvas.width, canvas.height)
        const dataUrl = canvas.toDataURL('image/jpeg')
        setCapturedImage(dataUrl)
      }
    }
  }

  const handleSubmit = async () => {
    if (!capturedImage) return
    
    setLoading(true)
    try {
      const res = await fetch(capturedImage)
      const blob = await res.blob()
      
      const formData = new FormData()
      formData.append('image', blob, 'capture.jpg')
      formData.append('name', userData.name)
      formData.append('email', userData.email)
      formData.append('age', userData.age)
      formData.append('skinType', userData.skinType)

      const API_URL = import.meta.env.VITE_API_URL || 'http://localhost:8080'
      const response = await fetch(`${API_URL}/api/v1/diagnose-and-formulate`, {
        method: 'POST',
        body: formData,
      })

      if (!response.ok) throw new Error('Diagnosis failed')
      
      const result = await response.json()
      onResult(result)
    } catch (err) {
      console.warn("Backend connection failed, using mock data for demo purposes:", err)
      // Mock fallback
      setTimeout(() => {
        onResult({
          user: { ...userData, id: "mock-123" },
          detectedCondition: "Acne Breakout",
          confidence: 0.94,
          conditionDetails: {
            name: "Acne Breakout",
            description: "An inflammatory condition of the skin where sebum and dead skin cells clog hair follicles.",
            category: "skin"
          },
          formulation: {
            remedyTitle: "Sandalwood & Clay Mask",
            ingredientsUsed: [
              { ingredientName: "Sandalwood", exactMeasurement: "1 Tablespoon" },
              { ingredientName: "Multani Mitti", exactMeasurement: "2 Tablespoons" },
              { ingredientName: "Rose Water", exactMeasurement: "As needed" }
            ],
            stepByStepInstructions: [
              "Mix Sandalwood and Multani Mitti in a small glass bowl.",
              "Gradually add Rose Water until a thick, smooth paste forms.",
              "Apply evenly to the face, avoiding the eye area.",
              "Leave on for 15-20 minutes until completely dry.",
              "Rinse with cool water and pat dry."
            ]
          }
        })
      }, 2000)
    } finally {
      setLoading(false)
    }
  }

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between px-2">
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 rounded-full bg-botanical-sand flex items-center justify-center text-botanical-green">
            <UserCircle className="w-6 h-6" />
          </div>
          <div className="text-left">
            <p className="text-xs text-gray-400 font-bold uppercase tracking-widest">Analyzing for</p>
            <p className="text-sm font-bold text-botanical-green">{userData.name}</p>
          </div>
        </div>
        <div className="px-3 py-1 bg-botanical-sand/30 rounded-full text-[10px] font-bold text-botanical-clay uppercase tracking-tighter">
          Step 2: Analysis
        </div>
      </div>

      <div className="relative aspect-[4/3] bg-black rounded-[2rem] overflow-hidden shadow-2xl border-4 border-white/50">
        {!capturedImage ? (
          <video 
            ref={videoRef} 
            autoPlay 
            playsInline 
            className="w-full h-full object-cover"
          />
        ) : (
          <img 
            src={capturedImage} 
            className="w-full h-full object-cover animate-in fade-in duration-500"
            alt="Captured" 
          />
        )}

        {loading && (
          <div className="absolute inset-0 bg-botanical-green/70 backdrop-blur-md flex flex-col items-center justify-center text-white z-20">
            <div className="relative mb-8">
              <Sparkles className="w-16 h-16 animate-pulse" />
              <div className="absolute inset-0 animate-ping rounded-full bg-white/20" />
            </div>
            <p className="text-xl font-serif tracking-wide mb-2 italic">Scanning skin texture...</p>
            <p className="text-sm text-botanical-sand/60 animate-bounce">AI is formulating your recipe</p>
          </div>
        )}
      </div>

      <canvas ref={canvasRef} className="hidden" />

      <div className="flex justify-center gap-4">
        {!capturedImage ? (
          <button 
            onClick={capture}
            className="btn-primary flex items-center gap-3 px-10"
          >
            <Camera className="w-5 h-5" />
            Capture Snapshot
          </button>
        ) : (
          <>
            <button 
              onClick={() => setCapturedImage(null)}
              disabled={loading}
              className="px-8 py-4 rounded-full border border-gray-200 font-medium hover:bg-gray-50 transition-all flex items-center gap-2"
            >
              <RefreshCw className="w-5 h-5" />
              Retake
            </button>
            <button 
              onClick={handleSubmit}
              disabled={loading}
              className="btn-primary flex items-center gap-2 px-10 shadow-lg shadow-botanical-green/20"
            >
              {loading ? "Analyzing..." : "Confirm & Formulate"}
              {!loading && <Sparkles className="w-5 h-5" />}
            </button>
          </>
        )}
      </div>
    </div>
  )
}
