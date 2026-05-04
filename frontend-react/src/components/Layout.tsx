import { ReactNode } from 'react'
import { Leaf } from 'lucide-react'
import { Link, useLocation } from 'react-router-dom'

export default function Layout({ children }: { children: ReactNode }) {
  const location = useLocation()
  
  const navItems = [
    { label: 'Formulate', path: '/' },
    { label: 'Ingredients', path: '/ingredients' },
    { label: 'About', path: '/about' },
  ]

  return (
    <div className="min-h-screen flex flex-col">
      <header className="py-6 px-10 flex justify-between items-center border-b border-botanical-green/10 bg-white/50 backdrop-blur-md sticky top-0 z-50">
        <Link to="/" className="flex items-center gap-2 text-botanical-green font-bold text-xl">
          <Leaf className="w-6 h-6" />
          <span>Botanical.</span>
        </Link>
        <nav className="hidden md:flex gap-8 text-sm font-medium uppercase tracking-widest">
          {navItems.map((item) => (
            <Link
              key={item.path}
              to={item.path}
              className={`transition-colors hover:text-botanical-green ${
                location.pathname === item.path ? 'text-botanical-green' : 'text-gray-500'
              }`}
            >
              {item.label}
            </Link>
          ))}
        </nav>
      </header>

      <div className="flex-1 relative overflow-hidden">
        {/* Background blobs for VIP aesthetic */}
        <div className="absolute top-[-10%] left-[-10%] w-[40%] h-[40%] bg-botanical-sand/40 rounded-full blur-[100px] -z-10" />
        <div className="absolute bottom-[-10%] right-[-10%] w-[40%] h-[40%] bg-botanical-clay/20 rounded-full blur-[100px] -z-10" />
        
        {children}
      </div>

      <footer className="bg-white/80 backdrop-blur-md border-t border-botanical-green/5 pt-16 pb-8 px-10">
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-12 mb-16">
          {/* Brand Column */}
          <div className="space-y-6">
            <Link to="/" className="flex items-center gap-2 text-botanical-green font-bold text-2xl">
              <Leaf className="w-8 h-8" />
              <span>Botanical.</span>
            </Link>
            <p className="text-gray-500 text-sm leading-relaxed">
              Fusing modern AI with ancient botanical wisdom to provide personalized natural care for everyone.
            </p>
            <div className="flex gap-4">
              <div className="w-10 h-10 rounded-full bg-botanical-sand/30 flex items-center justify-center text-botanical-green hover:bg-botanical-green hover:text-white transition-all cursor-pointer">
                <Leaf className="w-5 h-5" />
              </div>
              <div className="w-10 h-10 rounded-full bg-botanical-sand/30 flex items-center justify-center text-botanical-green hover:bg-botanical-green hover:text-white transition-all cursor-pointer">
                <Leaf className="w-5 h-5" />
              </div>
              <div className="w-10 h-10 rounded-full bg-botanical-sand/30 flex items-center justify-center text-botanical-green hover:bg-botanical-green hover:text-white transition-all cursor-pointer">
                <Leaf className="w-5 h-5" />
              </div>
            </div>
          </div>

          {/* Navigation */}
          <div>
            <h4 className="text-botanical-green font-bold uppercase tracking-widest text-xs mb-6">Quick Links</h4>
            <ul className="space-y-4 text-sm text-gray-500">
              <li><Link to="/" className="hover:text-botanical-green transition-colors">Formulate</Link></li>
              <li><Link to="/ingredients" className="hover:text-botanical-green transition-colors">Ingredients</Link></li>
              <li><Link to="/about" className="hover:text-botanical-green transition-colors">About Us</Link></li>
              <li><a href="#" className="hover:text-botanical-green transition-colors">Privacy Policy</a></li>
            </ul>
          </div>

          {/* Academic */}
          <div>
            <h4 className="text-botanical-green font-bold uppercase tracking-widest text-xs mb-6">Academic</h4>
            <ul className="space-y-4 text-sm text-gray-500">
              <li><span className="font-semibold text-botanical-clay">NUML Hyderabad</span></li>
              <li>CS Undergraduates</li>
              <li>Semester 2 Project</li>
              <li>AI & Web Development</li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="text-botanical-green font-bold uppercase tracking-widest text-xs mb-6">Connect</h4>
            <ul className="space-y-4 text-sm text-gray-500">
              <li className="flex items-center gap-2">
                <span className="w-1.5 h-1.5 rounded-full bg-botanical-clay" />
                <span>info@botanical.pk</span>
              </li>
              <li className="flex items-center gap-2">
                <span className="w-1.5 h-1.5 rounded-full bg-botanical-clay" />
                <span>NUML, Hyderabad Campus</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="max-w-7xl mx-auto pt-8 border-t border-botanical-green/5 text-center">
          <p className="text-xs text-gray-400 uppercase tracking-[0.3em]">
            &copy; 2026 Botanical Formulator. Crafted with heart by NUML Students.
          </p>
        </div>
      </footer>
    </div>
  )
}
