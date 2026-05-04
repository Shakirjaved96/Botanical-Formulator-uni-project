import { motion } from 'framer-motion'
import { GraduationCap, Users, Lightbulb, Github, Linkedin, Mail } from 'lucide-react'

const team = [
  {
    name: "Hania Ali",
    role: "Co-Founder & AI Integration Lead",
    desc: "Focusing on the core logic and making the AI seamlessly diagnose conditions.",
    color: "bg-botanical-green"
  },
  {
    name: "Daniya Shaikh",
    role: "Co-Founder & Frontend Architect",
    desc: "Designing the premium, VIP user experience and responsive web interface.",
    color: "bg-botanical-clay"
  },
  {
    name: "Shakir Hussain",
    role: "Co-Founder & Backend Systems Engineer",
    desc: "Managing the database, server architecture, and secure API integrations.",
    color: "bg-botanical-sand"
  }
]

export default function AboutPage() {
  return (
    <div className="max-w-6xl mx-auto px-6 py-12 pb-24">
      {/* Vision Section */}
      <div className="grid md:grid-cols-2 gap-16 items-center mb-24">
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
        >
          <div className="flex items-center gap-3 text-botanical-clay font-bold tracking-[0.2em] uppercase text-xs mb-4">
            <Lightbulb className="w-4 h-4" />
            <span>Our Vision</span>
          </div>
          <h1 className="text-5xl md:text-6xl text-botanical-green mb-8">Personal care as unique as you.</h1>
          <p className="text-gray-600 text-lg leading-relaxed mb-6">
            Welcome to Botanical Formulator. In a world saturated with generic chemical products, we recognized a gap: people lack accessible, smart tools to understand their specific skin and hair needs.
          </p>
          <p className="text-gray-600 text-lg leading-relaxed">
            Our mission is to bridge that gap by fusing cutting-edge Artificial Intelligence with the timeless, healing power of natural botanical ingredients.
          </p>
        </motion.div>
        
        <motion.div 
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          className="relative rounded-[3rem] overflow-hidden shadow-2xl aspect-[4/5]"
        >
          <img 
            src="https://images.unsplash.com/photo-1576091160550-2173dba999ef?q=80&w=800&auto=format&fit=crop" 
            className="w-full h-full object-cover" 
            alt="AI and Nature" 
          />
          <div className="absolute inset-0 bg-gradient-to-t from-botanical-green/60 to-transparent" />
          <div className="absolute bottom-8 left-8 text-white">
            <p className="text-sm uppercase tracking-widest opacity-80 mb-2">Established 2026</p>
            <p className="text-2xl font-serif italic">"Modern Science meets Ancient Wisdom"</p>
          </div>
        </motion.div>
      </div>

      {/* Who We Are */}
      <motion.section 
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="glass-card rounded-[4rem] p-12 mb-24 relative overflow-hidden"
      >
        <div className="relative z-10">
          <div className="flex items-center gap-3 text-botanical-green font-bold tracking-[0.2em] uppercase text-xs mb-6">
            <Users className="w-4 h-4" />
            <span>Who We Are</span>
          </div>
          <h2 className="text-4xl text-botanical-green mb-8 max-w-2xl">The Minds Behind the Magic.</h2>
          <div className="grid md:grid-cols-2 gap-12">
            <p className="text-gray-600 text-lg leading-relaxed">
              We are a driven group of 2nd-semester Computer Science undergraduates from the <span className="text-botanical-green font-bold">National University of Modern Languages (NUML), Hyderabad Campus</span>. What started as an ambitious academic endeavor quickly evolved into a passion project.
            </p>
            <p className="text-gray-600 text-lg leading-relaxed">
              We combined our technical skills in software engineering, AI, and web development to create a platform that makes personalized, natural grooming accessible to everyone.
            </p>
          </div>
        </div>
        <div className="absolute top-[-20%] right-[-10%] w-96 h-96 bg-botanical-sand/20 rounded-full blur-3xl -z-10" />
      </motion.section>

      {/* Meet the Creators */}
      <section>
        <div className="text-center mb-16">
          <div className="flex justify-center items-center gap-3 text-botanical-clay font-bold tracking-[0.2em] uppercase text-xs mb-4">
            <GraduationCap className="w-4 h-4" />
            <span>Meet the Creators</span>
          </div>
          <h2 className="text-5xl text-botanical-green">Our Expert Team</h2>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {team.map((member, i) => (
            <motion.div
              key={member.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="glass-card rounded-[3rem] p-10 hover:shadow-2xl transition-all group border-b-4 border-botanical-sand"
            >
              <div className={`w-16 h-16 rounded-2xl ${member.color} flex items-center justify-center text-white mb-8 group-hover:scale-110 transition-transform`}>
                <Users className="w-8 h-8" />
              </div>
              <h3 className="text-2xl font-serif text-botanical-green mb-1">{member.name}</h3>
              <p className="text-botanical-clay font-bold text-[10px] uppercase tracking-widest mb-4">
                {member.role}
              </p>
              <p className="text-gray-500 text-sm leading-relaxed mb-8">
                {member.desc}
              </p>
              <div className="flex gap-4">
                <Linkedin className="w-4 h-4 text-gray-400 hover:text-botanical-green cursor-pointer" />
                <Github className="w-4 h-4 text-gray-400 hover:text-botanical-green cursor-pointer" />
                <Mail className="w-4 h-4 text-gray-400 hover:text-botanical-green cursor-pointer" />
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Academic Note */}
      <div className="mt-24 text-center">
        <p className="text-gray-400 text-sm italic">
          Project developed as part of the 2nd Semester Computer Science curriculum at NUML Hyderabad.
        </p>
      </div>
    </div>
  )
}
