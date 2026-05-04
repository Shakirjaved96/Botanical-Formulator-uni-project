import { ArrowLeft, CheckCircle2, FlaskConical, ListChecks } from 'lucide-react'
import { motion } from 'framer-motion'

interface Props {
  data: any;
  onReset: () => void;
}

export default function DiagnosisResult({ data, onReset }: Props) {
  const { detectedCondition, confidence, conditionDetails, formulation } = data

  return (
    <div className="space-y-8 pb-20">
      <button 
        onClick={onReset}
        className="flex items-center gap-2 text-gray-500 hover:text-botanical-green transition-colors mb-6"
      >
        <ArrowLeft className="w-4 h-4" />
        Back to Camera
      </button>

      {/* Diagnosis Header */}
      <section className="glass-card rounded-3xl p-8 flex flex-col md:flex-row gap-8 items-center">
        <div className="w-32 h-32 rounded-full bg-botanical-sand flex items-center justify-center text-botanical-green relative">
          <FlaskConical className="w-12 h-12" />
          <div className="absolute -bottom-2 -right-2 bg-white rounded-full p-2 shadow-sm">
            <CheckCircle2 className="w-6 h-6 text-green-500" />
          </div>
        </div>
        
        <div className="text-center md:text-left">
          <h2 className="text-sm uppercase tracking-widest text-botanical-clay font-bold mb-1">Diagnosis Complete</h2>
          <h1 className="text-4xl font-serif text-botanical-green mb-2">{detectedCondition}</h1>
          <p className="text-gray-500 italic">Confidence Score: {(confidence * 100).toFixed(0)}%</p>
        </div>
      </section>

      {/* Description & Remedy */}
      <div className="grid md:grid-cols-2 gap-8">
        <motion.section 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="glass-card rounded-3xl p-8"
        >
          <h3 className="text-xl font-serif text-botanical-green mb-4 border-b border-botanical-green/10 pb-2">Understanding the Condition</h3>
          <p className="text-gray-600 leading-relaxed">
            {conditionDetails?.description || "Our AI has identified patterns consistent with " + detectedCondition + ". This condition is commonly categorized under " + conditionDetails?.category + " care."}
          </p>
        </motion.section>

        <motion.section 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3 }}
          className="bg-botanical-green text-white rounded-3xl p-8 shadow-xl"
        >
          <h3 className="text-xl font-serif mb-4 border-b border-white/10 pb-2">Botanical Formulation</h3>
          <h4 className="text-2xl font-serif mb-6 text-botanical-sand">
            {formulation?.remedyTitle || "Custom Herbal Blend"}
          </h4>
          
          <div className="space-y-4">
            <div className="flex items-start gap-3">
              <ListChecks className="w-5 h-5 text-botanical-clay mt-1 shrink-0" />
              <div>
                <p className="font-semibold text-botanical-sand uppercase text-xs tracking-wider mb-2">Ingredients</p>
                <ul className="grid grid-cols-1 gap-2">
                  {formulation?.ingredientsUsed.map((ing: any, i: number) => (
                    <li key={i} className="flex justify-between border-b border-white/5 pb-1">
                      <span>{ing.ingredientName}</span>
                      <span className="text-botanical-sand/80">{ing.exactMeasurement}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </motion.section>
      </div>

      {/* Instructions */}
      <motion.section 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.4 }}
        className="glass-card rounded-3xl p-8"
      >
        <h3 className="text-xl font-serif text-botanical-green mb-6 border-b border-botanical-green/10 pb-2">Preparation & Application</h3>
        <div className="grid gap-6">
          {formulation?.stepByStepInstructions.map((step: string, i: number) => (
            <div key={i} className="flex gap-4">
              <span className="w-8 h-8 rounded-full bg-botanical-sand text-botanical-green flex items-center justify-center font-bold shrink-0">
                {i + 1}
              </span>
              <p className="text-gray-600 pt-1">{step}</p>
            </div>
          ))}
        </div>
      </motion.section>
    </div>
  )
}
