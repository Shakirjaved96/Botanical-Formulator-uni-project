import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import CameraCapture from '../../components/CameraCapture'
import DiagnosisResult from '../../components/DiagnosisResult'

export default function FormulatePage() {
  const [result, setResult] = useState<any>(null)
  const [loading, setLoading] = useState(false)

  const handleDiagnosis = (data: any) => {
    setResult(data)
  }

  const reset = () => {
    setResult(null)
    setLoading(false)
  }

  return (
    <div className="max-w-4xl mx-auto px-6 py-12">
      <div className="text-center mb-16">
        <motion.h1 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-5xl md:text-6xl text-botanical-green mb-4"
        >
          Botanical Formulator
        </motion.h1>
        <motion.p 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1 }}
          className="text-lg text-gray-600 max-w-xl mx-auto"
        >
          Harness the power of nature and AI for personalized skin and scalp care.
        </motion.p>
      </div>

      <AnimatePresence mode="wait">
        {!result ? (
          <motion.div
            key="camera"
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.95 }}
            className="glass-card rounded-3xl overflow-hidden p-8"
          >
            <CameraCapture 
              onResult={handleDiagnosis} 
              setLoading={setLoading} 
              loading={loading}
            />
          </motion.div>
        ) : (
          <motion.div
            key="result"
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -50 }}
          >
            <DiagnosisResult data={result} onReset={reset} />
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  )
}
