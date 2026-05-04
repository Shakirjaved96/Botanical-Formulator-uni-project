import { useState } from 'react'
import { User, Mail, Calendar, Droplets, ChevronRight } from 'lucide-react'

interface Props {
  onComplete: (data: any) => void;
}

export default function UserForm({ onComplete }: Props) {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    age: '',
    skinType: 'Normal'
  })

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    onComplete(formData)
  }

  return (
    <div className="space-y-8 max-w-lg mx-auto">
      <div className="text-center">
        <h2 className="text-3xl text-botanical-green font-serif mb-2">Step 1: Your Profile</h2>
        <p className="text-gray-500 text-sm">Tell us about yourself for a more personalized analysis.</p>
      </div>

      <form onSubmit={handleSubmit} className="space-y-6">
        <div className="space-y-4">
          {/* Name Field */}
          <div className="relative">
            <User className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-botanical-clay" />
            <input
              required
              type="text"
              placeholder="Full Name"
              className="w-full pl-12 pr-4 py-4 rounded-2xl bg-white border border-gray-100 shadow-sm focus:ring-2 focus:ring-botanical-green focus:border-transparent outline-none transition-all"
              value={formData.name}
              onChange={(e) => setFormData({...formData, name: e.target.value})}
            />
          </div>

          {/* Email Field */}
          <div className="relative">
            <Mail className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-botanical-clay" />
            <input
              required
              type="email"
              placeholder="Email Address"
              className="w-full pl-12 pr-4 py-4 rounded-2xl bg-white border border-gray-100 shadow-sm focus:ring-2 focus:ring-botanical-green focus:border-transparent outline-none transition-all"
              value={formData.email}
              onChange={(e) => setFormData({...formData, email: e.target.value})}
            />
          </div>

          {/* Age & Skin Type Grid */}
          <div className="grid grid-cols-2 gap-4">
            <div className="relative">
              <Calendar className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-botanical-clay" />
              <input
                required
                type="number"
                placeholder="Age"
                className="w-full pl-12 pr-4 py-4 rounded-2xl bg-white border border-gray-100 shadow-sm focus:ring-2 focus:ring-botanical-green focus:border-transparent outline-none transition-all"
                value={formData.age}
                onChange={(e) => setFormData({...formData, age: e.target.value})}
              />
            </div>
            
            <div className="relative">
              <Droplets className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-botanical-clay" />
              <select
                className="w-full pl-12 pr-4 py-4 rounded-2xl bg-white border border-gray-100 shadow-sm focus:ring-2 focus:ring-botanical-green focus:border-transparent outline-none appearance-none cursor-pointer transition-all"
                value={formData.skinType}
                onChange={(e) => setFormData({...formData, skinType: e.target.value})}
              >
                <option value="Normal">Normal</option>
                <option value="Oily">Oily</option>
                <option value="Dry">Dry</option>
                <option value="Combination">Combination</option>
              </select>
            </div>
          </div>
        </div>

        <button 
          type="submit"
          className="w-full btn-primary flex items-center justify-center gap-2 py-4"
        >
          Next Step
          <ChevronRight className="w-5 h-5" />
        </button>
      </form>
    </div>
  )
}
