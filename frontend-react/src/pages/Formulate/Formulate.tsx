import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import UserForm from '../../components/UserForm'
import CameraCapture from '../../components/CameraCapture'
import DiagnosisResult from '../../components/DiagnosisResult'
import { Sparkles, Leaf } from 'lucide-react'

type Step = 'user-details' | 'camera-capture' | 'loading' | 'result'

export default function FormulatePage() {
  const [step, setStep] = useState<Step>('user-details')
  const [userData, setUserData] = useState<any>(null)
  const [result, setResult] = useState<any>(null)

  const handleUserComplete = (data: any) => {
    setUserData(data)
    setStep('camera-capture')
  }

  const handleDiagnosis = (data: any) => {
    setResult(data)
    setStep('result')
  }

  const reset = () => {
    setStep('user-details')
    setUserData(null)
    setResult(null)
  }

  return (
    <div className="max-w-4xl mx-auto px-6 py-12">
      <div className="text-center mb-12">
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          className="inline-block p-3 rounded-2xl bg-botanical-sand/30 text-botanical-green mb-6"
        >
          <Leaf className="w-8 h-8" />
        </motion.div>
        <motion.h1 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-5xl md:text-6xl text-botanical-green mb-4 font-serif"
        >
          Botanical Formulator
        </motion.h1>
        <motion.p 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1 }}
          className="text-lg text-gray-500 max-w-xl mx-auto"
        >
          Experience the future of natural skincare through AI-powered botanical wisdom.
        </motion.p>
      </div>

      {/* Progress Indicator */}
      {step !== 'result' && (
        <div className="flex justify-center mb-12">
          <div className="flex items-center gap-4 bg-white/50 backdrop-blur-sm p-2 rounded-full border border-botanical-green/5 shadow-sm">
            <StepIndicator 
              number={1} 
              active={step === 'user-details'} 
              completed={step !== 'user-details'} 
              label="Profile"
            />
            <div className="w-8 h-[2px] bg-gray-100" />
            <StepIndicator 
              number={2} 
              active={step === 'camera-capture' || step === 'loading'} 
              completed={step === 'result'} 
              label="Analysis"
            />
          </div>
        </div>
      )}

      <AnimatePresence mode="wait">
        {step === 'user-details' && (
          <motion.div
            key="user-form"
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: 20 }}
            className="glass-card rounded-[2.5rem] p-10 md:p-16 shadow-xl"
          >
            <UserForm onComplete={handleUserComplete} />
          </motion.div>
        )}

        {step === 'camera-capture' && (
          <motion.div
            key="camera"
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 1.05 }}
            className="glass-card rounded-[2.5rem] overflow-hidden p-8 shadow-xl"
          >
            <CameraCapture 
              userData={userData}
              onResult={handleDiagnosis} 
              setLoading={(loading) => loading && setStep('loading')} 
              loading={false}
            />
          </motion.div>
        )}

        {step === 'loading' && (
          <motion.div
            key="loading"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="flex flex-col items-center justify-center py-20"
          >
            <div className="relative mb-12">
              <motion.div 
                animate={{ rotate: 360 }}
                transition={{ duration: 10, repeat: Infinity, ease: "linear" }}
                className="w-32 h-32 rounded-full border-t-2 border-b-2 border-botanical-green"
              />
              <div className="absolute inset-0 flex items-center justify-center">
                <Sparkles className="w-12 h-12 text-botanical-green animate-pulse" />
              </div>
            </div>
            <h2 className="text-3xl font-serif text-botanical-green mb-4">Analyzing Your Unique Skin</h2>
            <p className="text-gray-500 animate-pulse tracking-widest uppercase text-xs font-bold">Connecting to AI Microservice...</p>
          </motion.div>
        )}

        {step === 'result' && (
          <motion.div
            key="result"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
          >
            <DiagnosisResult data={result} onReset={reset} />
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  )
}

function StepIndicator({ number, active, completed, label }: { number: number, active: boolean, completed: boolean, label: string }) {
  return (
    <div className="flex items-center gap-2 px-3 py-1">
      <div className={`w-8 h-8 rounded-full flex items-center justify-center text-sm font-bold transition-all duration-500 ${
        active ? 'bg-botanical-green text-white shadow-lg shadow-botanical-green/20 scale-110' : 
        completed ? 'bg-botanical-sand text-botanical-green' : 'bg-gray-50 text-gray-300'
      }`}>
        {completed ? '✓' : number}
      </div>
      <span className={`text-xs font-bold uppercase tracking-widest ${active ? 'text-botanical-green' : 'text-gray-300'}`}>
        {label}
      </span>
    </div>
  )
}
