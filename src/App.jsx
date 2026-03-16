import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { 
  Zap, 
  Shield, 
  Cpu, 
  Globe, 
  Search, 
  Code, 
  Download, 
  Github,
  ChevronRight,
  Layers,
  Sparkles,
  Lock
} from 'lucide-react';

const Nav = () => (
  <nav className="fixed top-0 left-0 right-0 z-50 flex items-center justify-between px-8 py-6 backdrop-blur-md bg-slate-950/50 border-b border-slate-800">
    <div className="flex items-center gap-2">
      <div className="w-8 h-8 bg-gradient-to-tr from-orange-500 to-amber-400 rounded-lg flex items-center justify-center shadow-lg shadow-orange-500/20">
        <Globe className="w-5 h-5 text-slate-950" />
      </div>
      <span className="text-xl font-bold tracking-tight text-white">Antares</span>
    </div>
    <div className="hidden md:flex items-center gap-8 text-sm font-medium text-slate-400">
      <a href="#features" className="hover:text-orange-400 transition-colors">Features</a>
      <a href="#tech" className="hover:text-orange-400 transition-colors">Tech Stack</a>
      <a href="#ai" className="hover:text-orange-400 transition-colors">AI Integration</a>
      <a href="https://github.com" className="hover:text-white transition-colors flex items-center gap-2">
        <Github className="w-4 h-4" />
        GitHub
      </a>
    </div>
    <button className="px-5 py-2.5 bg-orange-500 hover:bg-orange-600 text-slate-950 font-bold rounded-full transition-all hover:scale-105 active:scale-95 shadow-lg shadow-orange-500/20 text-sm">
      Download Beta
    </button>
  </nav>
);

const FeatureCard = ({ icon: Icon, title, description, delay }) => (
  <motion.div 
    initial={{ opacity: 0, y: 20 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true }}
    transition={{ delay, duration: 0.5 }}
    className="p-8 rounded-3xl bg-slate-900/50 border border-slate-800 hover:border-orange-500/50 transition-all group"
  >
    <div className="w-12 h-12 bg-slate-800 rounded-2xl flex items-center justify-center mb-6 group-hover:bg-orange-500 transition-colors">
      <Icon className="w-6 h-6 text-orange-500 group-hover:text-slate-950 transition-colors" />
    </div>
    <h3 className="text-xl font-bold mb-3 text-white group-hover:text-orange-400 transition-colors">{title}</h3>
    <p className="text-slate-400 leading-relaxed">{description}</p>
  </motion.div>
);

export default function App() {
  return (
    <div className="min-h-screen bg-slate-950">
      <Nav />
      
      {/* Hero Section */}
      <section className="relative pt-32 pb-20 px-8 overflow-hidden">
        {/* Abstract Background Orbs */}
        <div className="absolute top-0 right-0 -mr-24 -mt-24 w-96 h-96 bg-orange-500/10 rounded-full blur-[120px]" />
        <div className="absolute bottom-0 left-0 -ml-24 -mb-24 w-96 h-96 bg-amber-400/10 rounded-full blur-[120px]" />
        
        <div className="max-w-6xl mx-auto text-center relative z-10">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8 }}
          >
            <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-orange-500/10 border border-orange-500/20 text-orange-400 text-sm font-semibold mb-8">
              <Sparkles className="w-4 h-4" />
              Powered by Chromium & AI
            </span>
            <h1 className="text-6xl md:text-8xl font-black mb-8 tracking-tighter text-transparent bg-clip-text bg-gradient-to-b from-white to-slate-400">
              Antares <br />
              <span className="text-orange-500">Fast. Secure. AI.</span>
            </h1>
            <p className="text-xl text-slate-400 max-w-2xl mx-auto mb-12 leading-relaxed">
              Experience the web like never before. A privacy-first browser integrated with powerful AI to summarize, search, and secure your digital life.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <button className="w-full sm:w-auto px-8 py-4 bg-orange-500 text-slate-950 font-black rounded-2xl flex items-center justify-center gap-2 hover:bg-orange-600 transition-all hover:scale-105 shadow-xl shadow-orange-500/20 group">
                Download Now
                <ChevronRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </button>
              <button className="w-full sm:w-auto px-8 py-4 bg-slate-900 text-white font-bold rounded-2xl border border-slate-800 hover:bg-slate-800 transition-all flex items-center justify-center gap-2">
                <Github className="w-5 h-5" />
                View Source
              </button>
            </div>
          </motion.div>
          
          {/* Mockup Preview */}
          <motion.div 
            initial={{ opacity: 0, y: 100 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4, duration: 1 }}
            className="mt-20 relative px-4"
          >
            <div className="relative mx-auto max-w-5xl rounded-[2.5rem] border-[12px] border-slate-900 bg-slate-900 shadow-2xl overflow-hidden aspect-video">
              <div className="absolute inset-0 bg-gradient-to-tr from-slate-950 to-slate-900 flex items-center justify-center">
                 <div className="w-full h-full p-4 flex flex-col">
                    <div className="h-10 border-b border-slate-800 flex items-center justify-between px-4">
                       <div className="flex gap-1.5">
                          <div className="w-3 h-3 rounded-full bg-red-500/50" />
                          <div className="w-3 h-3 rounded-full bg-yellow-500/50" />
                          <div className="w-3 h-3 rounded-full bg-green-500/50" />
                       </div>
                       <div className="h-6 w-1/2 bg-slate-800/50 rounded-lg" />
                       <div className="w-12 h-6 bg-slate-800/50 rounded-lg" />
                    </div>
                    <div className="flex-1 flex items-center justify-center">
                       <div className="text-slate-800 text-6xl font-black uppercase tracking-widest opacity-20">Antares</div>
                    </div>
                 </div>
              </div>
            </div>
            <div className="absolute -inset-4 bg-orange-500/20 blur-3xl -z-10 rounded-[3rem]" />
          </motion.div>
        </div>
      </section>

      {/* Features Section */}
      <section id="features" className="py-32 px-8 bg-slate-950">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-20">
            <h2 className="text-4xl md:text-5xl font-black mb-6 text-white">Next-Generation Features</h2>
            <p className="text-slate-400 text-lg">Built with the latest technologies for a superior browsing experience.</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <FeatureCard 
              icon={Zap} 
              title="Chromium Speed" 
              description="Built on the Blink engine and V8, Antares delivers lightning-fast page loads and JS execution."
              delay={0.1}
            />
            <FeatureCard 
              icon={Sparkles} 
              title="AI Integrated" 
              description="Summarize long articles instantly and search smarter with our built-in OpenAI and Ollama support."
              delay={0.2}
            />
            <FeatureCard 
              icon={Shield} 
              title="Ironclad Privacy" 
              description="AES-256 encryption and advanced sandboxing keep your data and system safe from threats."
              delay={0.3}
            />
            <FeatureCard 
              icon={Cpu} 
              title="Local AI Support" 
              description="Run Large Language Models locally using Ollama for maximum privacy and zero latency."
              delay={0.4}
            />
            <FeatureCard 
              icon={Layers} 
              title="State Management" 
              description="Powered by Redux for a buttery-smooth tab and history management experience."
              delay={0.5}
            />
            <FeatureCard 
              icon={Lock} 
              title="Secure Storage" 
              description="Your passwords and browsing data are stored using hardware-level security APIs."
              delay={0.6}
            />
          </div>
        </div>
      </section>

      {/* Tech Stack Section */}
      <section id="tech" className="py-32 px-8 bg-slate-900/30 border-y border-slate-800">
        <div className="max-w-6xl mx-auto">
          <div className="flex flex-col md:flex-row items-center gap-20">
            <div className="flex-1">
              <h2 className="text-4xl font-black mb-8 text-white leading-tight">Modern Stack for <br />Modern Performance</h2>
              <ul className="space-y-6">
                {[
                  { name: 'Electron', desc: 'Desktop Application Framework', icon: Code },
                  { name: 'React & Tailwind', desc: 'Modern & Responsive UI', icon: Globe },
                  { name: 'Framer Motion', desc: 'Silky Smooth Animations', icon: Sparkles },
                  { name: 'Node.js', desc: 'Powerful Backend Runtime', icon: Cpu },
                ].map((item, i) => (
                  <motion.li 
                    key={i}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: i * 0.1 }}
                    className="flex items-center gap-4 py-4 border-b border-slate-800 last:border-0"
                  >
                    <div className="p-2 bg-slate-800 rounded-lg">
                      <item.icon className="w-5 h-5 text-orange-500" />
                    </div>
                    <div>
                      <h4 className="font-bold text-white">{item.name}</h4>
                      <p className="text-sm text-slate-400">{item.desc}</p>
                    </div>
                  </motion.li>
                ))}
              </ul>
            </div>
            <div className="flex-1 relative">
               <div className="grid grid-cols-2 gap-4">
                  {[1, 2, 3, 4].map((i) => (
                    <div key={i} className={`h-40 rounded-3xl bg-gradient-to-br ${i % 2 === 0 ? 'from-orange-500/20 to-orange-500/5' : 'from-slate-800 to-slate-900'} border border-slate-700/50 flex items-center justify-center`}>
                      <div className="w-12 h-12 bg-slate-950/50 rounded-full blur-xl animate-pulse" />
                    </div>
                  ))}
               </div>
               <div className="absolute inset-0 bg-orange-500/10 blur-3xl -z-10" />
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-32 px-8">
        <div className="max-w-4xl mx-auto text-center p-16 rounded-[3rem] bg-gradient-to-br from-orange-500 to-amber-500 relative overflow-hidden shadow-2xl shadow-orange-500/20">
          <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/carbon-fibre.png')] opacity-10" />
          <h2 className="text-4xl md:text-5xl font-black mb-8 text-slate-950 relative z-10">Ready for a faster web?</h2>
          <p className="text-slate-900/80 text-lg mb-12 font-medium relative z-10">Join the thousands of users already exploring the web with Antares.</p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 relative z-10">
            <button className="px-10 py-5 bg-slate-950 text-white font-black rounded-2xl hover:scale-105 transition-all shadow-2xl">
              Get Started Now
            </button>
            <button className="px-10 py-5 bg-white/20 hover:bg-white/30 text-slate-950 font-bold rounded-2xl backdrop-blur-md transition-all">
              Join Discord
            </button>
          </div>
        </div>
      </section>

      <footer className="py-20 px-8 border-t border-slate-900 bg-slate-950 text-slate-500">
        <div className="max-w-6xl mx-auto flex flex-col md:flex-row justify-between items-center gap-8">
          <div className="flex items-center gap-2">
            <Globe className="w-6 h-6 text-orange-500" />
            <span className="text-xl font-bold text-white">Antares</span>
          </div>
          <p>© 2026 Antares Browser. Open Source under MIT License.</p>
          <div className="flex gap-6">
            <a href="#" className="hover:text-white transition-colors">Privacy</a>
            <a href="#" className="hover:text-white transition-colors">Terms</a>
            <a href="#" className="hover:text-white transition-colors">Contact</a>
          </div>
        </div>
      </footer>
    </div>
  );
}
