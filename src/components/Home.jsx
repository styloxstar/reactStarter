import React from 'react'
import { Link } from 'react-router-dom'

const Home = () => {
  return (
    <div className="flex flex-col items-center justify-center min-h-[60vh] text-center p-6">
      <div className="relative mb-12">
        <div className="absolute inset-0 bg-blue-500 blur-[120px] opacity-20 dark:opacity-40 animate-pulse"></div>
        <div className="relative w-32 h-32 md:w-48 md:h-48 bg-gradient-to-tr from-[hsl(var(--primary))] to-purple-600 rounded-[3rem] rotate-12 shadow-2xl flex items-center justify-center transform hover:rotate-0 transition-all duration-700 cursor-pointer group">
          <span className="text-white text-6xl md:text-8xl font-black group-hover:scale-110 transition-transform">S</span>
        </div>
      </div>

      <h1 className="text-5xl md:text-7xl font-black tracking-tighter mb-6 bg-clip-text text-transparent bg-gradient-to-b from-[hsl(var(--foreground))] to-[hsl(var(--foreground))/0.5]">
        StyloStar React <br className="hidden md:block" /> Design System
      </h1>
      
      <p className="max-w-2xl text-lg md:text-xl opacity-70 mb-10 leading-relaxed">
        A high-fidelity collection of premium React components and layouts. 
        Designed for performance, accessibility, and visual excellence.
      </p>

      <div className="flex flex-wrap items-center justify-center gap-4">
        <Link 
          to="/pages/landing" 
          className="px-8 py-4 bg-[hsl(var(--primary))] text-white font-bold rounded-2xl shadow-xl shadow-blue-500/20 hover:scale-105 transition-all"
        >
          View Landing Page
        </Link>
        <Link 
          to="/components/buttons" 
          className="px-8 py-4 bg-[hsl(var(--secondary))] text-[hsl(var(--foreground))] font-bold rounded-2xl hover:bg-[hsl(var(--accent))] transition-all"
        >
          Explore Components
        </Link>
      </div>

      <div className="mt-24 grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl w-full">
        {[
          { title: "Dark Mode Ready", desc: "Native support for light and dark themes with system persistence.", icon: "🌗" },
          { title: "Responsive Layout", desc: "Seamless experience across mobile, tablet, and desktop displays.", icon: "📱" },
          { title: "Glassmorphism", desc: "Modern, translucent UI elements with smooth backdrop filters.", icon: "✨" }
        ].map((feat, i) => (
          <div key={i} className="glass-card p-8 rounded-3xl text-left hover:-translate-y-2 transition-all">
            <div className="text-4xl mb-4">{feat.icon}</div>
            <h3 className="text-xl font-bold mb-2">{feat.title}</h3>
            <p className="text-sm opacity-60 leading-relaxed">{feat.desc}</p>
          </div>
        ))}
      </div>
    </div>
  )
}

export default Home
