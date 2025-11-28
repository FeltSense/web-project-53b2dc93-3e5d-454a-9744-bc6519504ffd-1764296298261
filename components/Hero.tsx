'use client';

import { motion } from 'framer-motion';

export default function Hero() {
  return (
    <section className="relative min-h-screen bg-slate-950 overflow-hidden flex items-center">
      {/* Animated gradient background */}
      <div className="absolute inset-0">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-violet-600/30 rounded-full blur-3xl animate-pulse" />
        <div className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-emerald-400/20 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '1s' }} />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-violet-500/10 rounded-full blur-3xl" />
      </div>
      
      {/* Floating decorative elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <motion.div
          animate={{ y: [-20, 20, -20], rotate: [0, 5, 0] }}
          transition={{ duration: 6, repeat: Infinity, ease: 'easeInOut' }}
          className="absolute top-32 left-[15%] w-3 h-3 bg-violet-500 rounded-full"
        />
        <motion.div
          animate={{ y: [20, -20, 20], rotate: [0, -5, 0] }}
          transition={{ duration: 8, repeat: Infinity, ease: 'easeInOut' }}
          className="absolute top-48 right-[20%] w-2 h-2 bg-emerald-400 rounded-full"
        />
        <motion.div
          animate={{ y: [-15, 15, -15] }}
          transition={{ duration: 7, repeat: Infinity, ease: 'easeInOut' }}
          className="absolute bottom-40 left-[25%] w-4 h-4 bg-violet-400/60 rounded-full"
        />
        <motion.div
          animate={{ y: [10, -10, 10], x: [-5, 5, -5] }}
          transition={{ duration: 5, repeat: Infinity, ease: 'easeInOut' }}
          className="absolute top-1/3 right-[10%] w-2 h-2 bg-emerald-400/80 rounded-full"
        />
        <motion.div
          animate={{ scale: [1, 1.2, 1], opacity: [0.3, 0.6, 0.3] }}
          transition={{ duration: 4, repeat: Infinity, ease: 'easeInOut' }}
          className="absolute bottom-1/4 right-[30%] w-6 h-6 border border-violet-500/40 rounded-lg rotate-45"
        />
      </div>

      {/* Grid pattern overlay */}
      <div className="absolute inset-0 bg-[linear-gradient(rgba(148,163,184,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(148,163,184,0.03)_1px,transparent_1px)] bg-[size:64px_64px]" />
      
      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12 relative z-10 pt-20">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center max-w-4xl mx-auto"
        >
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="inline-flex items-center gap-2 bg-violet-500/10 border border-violet-500/20 rounded-full px-4 py-2 mb-8"
          >
            <span className="w-2 h-2 bg-emerald-400 rounded-full animate-pulse" />
            <span className="text-violet-300 text-sm font-medium">Trusted by 10,000+ teams worldwide</span>
          </motion.div>
          
          <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold tracking-tight leading-[1.1] text-white mb-8">
            Ship faster.{' '}
            <span className="bg-gradient-to-r from-violet-400 to-emerald-400 bg-clip-text text-transparent">
              Stay organized.
            </span>
            {' '}Win together.
          </h1>
          <p className="text-xl md:text-2xl text-slate-400 max-w-2xl mx-auto mb-12 leading-relaxed">
            The modern project management platform that helps teams move from chaos to clarity. Track tasks, hit deadlines, and celebrate wins.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <a href="#contact" className="bg-violet-600 hover:bg-violet-700 text-white font-semibold rounded-xl px-8 py-4 transition-all duration-300 shadow-sm hover:shadow-md hover:shadow-violet-500/25 w-full sm:w-auto">
              Start Free Trial
            </a>
            <a href="#services" className="border-2 border-slate-700 text-white hover:bg-slate-800 font-semibold rounded-xl px-8 py-4 transition-all duration-300 w-full sm:w-auto">
              See How It Works
            </a>
          </div>
        </motion.div>
        
        {/* Hero visual - Dashboard mockup */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.4 }}
          className="mt-20 relative"
        >
          <div className="relative mx-auto max-w-5xl">
            {/* Glow effect behind dashboard */}
            <div className="absolute -inset-4 bg-gradient-to-r from-violet-600/20 via-emerald-400/10 to-violet-600/20 rounded-3xl blur-2xl" />
            
            {/* Dashboard mockup */}
            <div className="relative bg-slate-900/80 backdrop-blur-sm rounded-2xl border border-slate-700/50 p-6 shadow-2xl">
              {/* Window controls */}
              <div className="flex items-center gap-2 mb-6">
                <div className="w-3 h-3 rounded-full bg-red-500/80" />
                <div className="w-3 h-3 rounded-full bg-yellow-500/80" />
                <div className="w-3 h-3 rounded-full bg-green-500/80" />
                <div className="flex-1 mx-4">
                  <div className="bg-slate-800 rounded-lg h-8 max-w-md mx-auto flex items-center justify-center">
                    <span className="text-slate-500 text-sm">taskflow.app/dashboard</span>
                  </div>
                </div>
              </div>
              
              {/* Dashboard content */}
              <div className="grid grid-cols-12 gap-4">
                {/* Sidebar */}
                <div className="col-span-2 space-y-3">
                  <div className="h-8 bg-violet-600/30 rounded-lg" />
                  <div className="h-6 bg-slate-800 rounded-lg" />
                  <div className="h-6 bg-slate-800 rounded-lg" />
                  <div className="h-6 bg-slate-800 rounded-lg" />
                </div>
                
                {/* Main content */}
                <div className="col-span-7 space-y-4">
                  <div className="h-10 bg-slate-800 rounded-lg w-1/3" />
                  <div className="grid grid-cols-3 gap-3">
                    <div className="h-24 bg-slate-800 rounded-xl p-3">
                      <div className="h-3 bg-violet-500/40 rounded w-1/2 mb-2" />
                      <div className="h-8 bg-violet-600/30 rounded mt-4" />
                    </div>
                    <div className="h-24 bg-slate-800 rounded-xl p-3">
                      <div className="h-3 bg-emerald-400/40 rounded w-1/2 mb-2" />
                      <div className="h-8 bg-emerald-400/30 rounded mt-4" />
                    </div>
                    <div className="h-24 bg-slate-800 rounded-xl p-3">
                      <div className="h-3 bg-slate-600 rounded w-1/2 mb-2" />
                      <div className="h-8 bg-slate-700 rounded mt-4" />
                    </div>
                  </div>
                  <div className="h-32 bg-slate-800 rounded-xl" />
                </div>
                
                {/* Right panel */}
                <div className="col-span-3 space-y-3">
                  <div className="h-20 bg-slate-800 rounded-xl" />
                  <div className="h-20 bg-slate-800 rounded-xl" />
                  <div className="h-16 bg-emerald-400/20 rounded-xl border border-emerald-400/30" />
                </div></div>
        </motion.div>
      </div>
    </section>
  </div></div></div></div></div></div></div></div></div></div></div></div></div></div></div></div></div></div></div></div></div></div></div></div></div></span>);
}