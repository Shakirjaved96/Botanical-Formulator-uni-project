import { motion } from 'framer-motion'
import { Beaker, Sparkles, Sprout } from 'lucide-react'

const ingredients = [
  {
    name: "Sandalwood",
    properties: ["Anti-inflammatory", "Cooling", "Skin Brightening"],
    description: "A sacred wood used for centuries to treat skin irritation and provide a natural glow.",
    image: "https://images.unsplash.com/photo-1628151015968-3a4429e9ef04?q=80&w=800&auto=format&fit=crop"
  },
  {
    name: "Multani Mitti",
    properties: ["Oil Absorbing", "Deep Cleansing", "Toning"],
    description: "Also known as Fuller's Earth, it's a natural clay that draws out impurities and excess oil.",
    image: "https://images.unsplash.com/photo-1596755094514-f87e34085b2c?q=80&w=800&auto=format&fit=crop"
  },
  {
    name: "Fenugreek",
    properties: ["Anti-fungal", "Strengthening", "Soothing"],
    description: "Rich in protein and nicotinic acid, excellent for dandruff and hair root health.",
    image: "https://images.unsplash.com/photo-1599488615731-7e5c2823ff28?q=80&w=800&auto=format&fit=crop"
  }
]

export default function IngredientsPage() {
  return (
    <div className="max-w-6xl mx-auto px-6 py-12">
      <div className="text-center mb-16">
        <h1 className="text-5xl text-botanical-green mb-4">Our Ingredients</h1>
        <p className="text-lg text-gray-600 max-w-xl mx-auto italic">
          Ethically sourced, traditionally proven, and scientifically validated.
        </p>
      </div>

      <div className="grid md:grid-cols-3 gap-8">
        {ingredients.map((ing, i) => (
          <motion.div
            key={ing.name}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: i * 0.1 }}
            className="glass-card rounded-3xl overflow-hidden hover:shadow-2xl transition-all group"
          >
            <div className="h-48 overflow-hidden relative">
              <img src={ing.image} alt={ing.name} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500" />
              <div className="absolute inset-0 bg-botanical-green/10" />
            </div>
            <div className="p-8">
              <div className="flex items-center gap-2 mb-4">
                <Sprout className="text-botanical-clay w-5 h-5" />
                <h3 className="text-2xl font-serif text-botanical-green">{ing.name}</h3>
              </div>
              <p className="text-gray-600 mb-6 text-sm leading-relaxed">{ing.description}</p>
              <div className="flex flex-wrap gap-2">
                {ing.properties.map(prop => (
                  <span key={prop} className="text-[10px] uppercase tracking-widest px-3 py-1 bg-botanical-sand/50 text-botanical-green rounded-full font-bold">
                    {prop}
                  </span>
                ))}
              </div>
            </div>
          </motion.div>
        ))}
      </div>

      <section className="mt-20 bg-botanical-green text-white rounded-[3rem] p-12 relative overflow-hidden">
        <div className="relative z-10 max-w-2xl">
          <h2 className="text-4xl font-serif mb-6">Purity Guaranteed</h2>
          <p className="text-botanical-sand/80 text-lg mb-8">
            Every ingredient in our database undergoes rigorous quality checks to ensure they retain their natural bioactive compounds. We believe in the synergy of nature and technology.
          </p>
          <div className="flex gap-8">
            <div className="flex flex-col items-center gap-2">
              <div className="w-12 h-12 rounded-full border border-white/20 flex items-center justify-center"><Beaker className="w-5 h-5" /></div>
              <span className="text-xs uppercase tracking-tighter">Lab Tested</span>
            </div>
            <div className="flex flex-col items-center gap-2">
              <div className="w-12 h-12 rounded-full border border-white/20 flex items-center justify-center"><Sparkles className="w-5 h-5" /></div>
              <span className="text-xs uppercase tracking-tighter">100% Organic</span>
            </div>
          </div>
        </div>
        <div className="absolute right-[-5%] bottom-[-10%] opacity-10">
          <Sprout className="w-96 h-96 rotate-12" />
        </div>
      </section>
    </div>
  )
}
