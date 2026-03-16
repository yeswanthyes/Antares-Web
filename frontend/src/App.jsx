import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { 
  Zap, 
  Shield, 
  Cpu, 
  Globe, 
  Github,
  ChevronRight,
  Sparkles,
  Lock,
  Download,
  Smartphone,
  CheckCircle2,
  Mail
} from 'lucide-react';

const Highlight = ({ children, color = 'cyan' }) => {
  const colors = {
    cyan: 'border-brand-cyan text-brand-cyan',
    purple: 'border-brand-purple text-brand-purple',
    lime: 'border-brand-lime text-brand-lime',
  };
  return (
    <span className={`highlight-pill mx-1 ${colors[color] || colors.cyan}`}>
      {children}
    </span>
  );
};

const Nav = () => (
  <nav className="fixed top-6 left-1/2 -translate-x-1/2 z-50 flex items-center justify-between px-8 py-4 glass-dark rounded-full w-[90%] max-w-6xl">
    <div className="flex items-center gap-2">
      <div className="w-8 h-8 flex items-center justify-center">
        <Globe className="w-6 h-6 text-brand-cyan" />
      </div>
      <span className="text-xl font-bold tracking-tight text-white">Antares</span>
    </div>
    <div className="hidden lg:flex items-center gap-10 text-sm font-medium text-white/60">
      <a href="#features" className="hover:text-brand-cyan transition-colors">Products</a>
      <a href="#solutions" className="hover:text-brand-cyan transition-colors">Solutions</a>
      <a href="#pricing" className="hover:text-brand-cyan transition-colors">Pricing</a>
      <a href="#about" className="hover:text-brand-cyan transition-colors">About</a>
    </div>
    <div className="flex items-center gap-4">
      <button className="hidden sm:block text-sm font-semibold text-white/80 hover:text-white transition-colors">
        Log In
      </button>
      <button className="px-6 py-2.5 bg-white text-brand-black font-bold rounded-full transition-all hover:scale-105 active:scale-95 text-sm">
        Sign Up
      </button>
    </div>
  </nav>
);

const FeatureCard = ({ icon: Icon, title, description, color = 'cyan', delay }) => (
  <motion.div 
    initial={{ opacity: 0, y: 30 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true }}
    transition={{ delay, duration: 0.6 }}
    className="p-8 rounded-[2.5rem] glass-dark border-white/5 hover:border-white/20 transition-all group relative overflow-hidden"
  >
    <div className={`absolute top-0 right-0 w-32 h-32 blur-3xl opacity-10 transition-opacity group-hover:opacity-20 -mr-16 -mt-16 bg-brand-${color}`} />
    <div className={`w-14 h-14 rounded-2xl flex items-center justify-center mb-8 glass border-white/10`}>
      <Icon className={`w-7 h-7 text-brand-${color}`} />
    </div>
    <h3 className="text-2xl font-bold mb-4 text-white">{title}</h3>
    <p className="text-white/50 leading-relaxed text-lg">{description}</p>
  </motion.div>
);

const StoreButton = ({ type }) => {
  const isAppStore = type === 'apple';
  return (
    <button className="flex items-center gap-4 px-8 py-3.5 glass hover:bg-white/10 transition-all rounded-2xl group border-white/10">
      {isAppStore ? <Download className="w-6 h-6 text-white" /> : <Smartphone className="w-6 h-6 text-white" />}
      <div className="text-left">
        <p className="text-[10px] uppercase tracking-widest text-white/50">{isAppStore ? 'Download on' : 'Get it on'}</p>
        <p className="text-lg font-bold text-white">{isAppStore ? 'App Store' : 'Google Play'}</p>
      </div>
    </button>
  );
};

export default function App() {
  const [email, setEmail] = useState('');
  const [subscribed, setSubscribed] = useState(false);

  const handleSubscribe = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch('http://localhost:5000/api/waitlist', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ email }),
      });
      if (response.ok) {
        setSubscribed(true);
      } else {
        console.error('Subscription failed');
      }
    } catch (error) {
      console.error('Error connecting to backend:', error);
    }
  };

  return (
    <div className="min-h-screen bg-brand-black selection:bg-brand-cyan/30">
      <Nav />
      
      {/* Hero Section */}
      <section className="relative pt-48 pb-24 px-8 overflow-hidden">
        {/* Decorative Background Glows */}
        <div className="absolute top-[-10%] left-[-10%] w-[50%] h-[50%] bg-brand-cyan/10 rounded-full blur-[160px] animate-pulse" />
        <div className="absolute bottom-[10%] right-[-10%] w-[40%] h-[40%] bg-brand-purple/10 rounded-full blur-[160px]" />
        
        <div className="max-w-7xl mx-auto flex flex-col items-center text-center relative z-10">
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8 }}
          >
            <h1 className="text-5xl md:text-7xl lg:text-8xl font-black mb-10 tracking-tight leading-[1.1]">
              Ensuring <Highlight color="lime">online payments</Highlight> <br />
              are <Highlight color="cyan">advanced</Highlight> and <Highlight color="purple">secure</Highlight>
            </h1>
            <p className="text-xl text-white/50 max-w-3xl mx-auto mb-16 leading-relaxed">
              Experience the next frontier of digital security with Antares Browser. 
              Built for speed, baked-in privacy, and high-performance AI integration.
            </p>
            
            <div className="flex flex-wrap items-center justify-center gap-6 mb-24">
              <StoreButton type="apple" />
              <StoreButton type="google" />
            </div>
          </motion.div>
          
          {/* Main Hero Visual */}
          <motion.div 
            initial={{ opacity: 0, y: 60 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4, duration: 1 }}
            className="w-full max-w-6xl relative"
          >
            <div className="relative z-10 glass-dark rounded-[3rem] p-4 border-white/5 shadow-2xl overflow-hidden aspect-[21/10]">
              <img 
                src="/hero.png" 
                alt="Cyber Security Visual" 
                className="w-full h-full object-cover rounded-[2.5rem] opacity-80"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-brand-black via-transparent to-transparent " />
            </div>
            {/* Background elements for depth */}
            <div className="absolute -top-12 -right-12 w-64 h-64 glass rounded-[3rem] rotate-12 -z-10 blur-sm opacity-20" />
            <div className="absolute -bottom-12 -left-12 w-80 h-80 glass rounded-[4rem] -rotate-6 -z-10 blur-sm opacity-20" />
          </motion.div>
        </div>
      </section>

      {/* Stats/Logo Cloud Section */}
      <section className="py-20 border-y border-white/5 bg-white/[0.02]">
        <div className="max-w-7xl mx-auto px-8 flex flex-wrap justify-between items-center gap-12 opacity-40">
           {['Trusted by', 'FORTUNE 500', 'TECHCRUNCH', 'WIRED', 'FORBES', 'VERGE'].map((logo, i) => (
             <span key={i} className="text-xl font-bold tracking-widest">{logo}</span>
           ))}
        </div>
      </section>

      {/* Features Section */}
      <section id="features" className="py-32 px-8">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-20 gap-8">
            <div className="max-w-2xl">
              <h2 className="text-4xl md:text-6xl font-black mb-8 leading-tight">
                Empowering businesses with <br />
                <span className="text-white/40">innovative security tools.</span>
              </h2>
            </div>
            <div className="pb-4">
              <button className="text-lg font-bold text-brand-cyan hover:underline flex items-center gap-2">
                Explore all features <ChevronRight className="w-5 h-5" />
              </button>
            </div>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <FeatureCard 
              icon={Zap} 
              title="Real-time Monitoring" 
              description="Stay ahead of threats with constant surveillance of your digital assets and transactions."
              color="cyan"
              delay={0.1}
            />
            <FeatureCard 
              icon={Lock} 
              title="Quantum Encryption" 
              description="Protect your sensitive data with unbreakable, next-level cryptographic protocols."
              color="purple"
              delay={0.2}
            />
            <FeatureCard 
              icon={Shield} 
              title="Automated Shielding" 
              description="Our AI-driven backend automatically blocks suspicious activities before they happen."
              color="lime"
              delay={0.3}
            />
          </div>
        </div>
      </section>

      {/* Coming Soon / Newsletter Section */}
      <section className="py-32 px-8">
        <div className="max-w-5xl mx-auto relative group">
          <div className="absolute -inset-1 bg-gradient-to-r from-brand-cyan via-brand-purple to-brand-lime rounded-[4rem] opacity-20 blur-2xl group-hover:opacity-30 transition-opacity" />
          <div className="relative glass-dark rounded-[4rem] p-12 md:p-24 text-center border-white/10">
            <h2 className="text-4xl md:text-6xl font-black mb-8 leading-[1.1]">
              Antares Cloud is <Highlight color="cyan">Coming Soon</Highlight>
            </h2>
            <p className="text-xl text-white/50 mb-12 max-w-2xl mx-auto">
              Be the first to know when we launch our enterprise-grade security cloud. Secure your spot on the waitlist today.
            </p>
            
            {subscribed ? (
              <motion.div 
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                className="flex items-center justify-center gap-3 text-brand-lime text-2xl font-bold bg-brand-lime/10 py-6 rounded-3xl"
              >
                <CheckCircle2 className="w-8 h-8" />
                You're on the list!
              </motion.div>
            ) : (
              <form onSubmit={handleSubscribe} className="flex flex-col sm:flex-row gap-4 max-w-2xl mx-auto">
                <div className="flex-1 relative">
                  <Mail className="absolute left-6 top-1/2 -translate-y-1/2 text-white/30 w-6 h-6" />
                  <input 
                    type="email" 
                    required
                    placeholder="Enter your work email"
                    className="w-full bg-white/5 border border-white/10 rounded-3xl py-6 pl-16 pr-8 text-white focus:outline-none focus:border-brand-cyan transition-colors text-lg"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                  />
                </div>
                <button 
                  type="submit" 
                  className="px-10 py-6 bg-white text-brand-black font-black rounded-3xl hover:scale-105 transition-all text-xl"
                >
                  Join Waitlist
                </button>
              </form>
            )}
            
            <div className="mt-12 flex items-center justify-center gap-8 opacity-40 grayscale group-hover:grayscale-0 transition-all">
               <Zap className="w-8 h-8" />
               <Sparkles className="w-8 h-8" />
               <Cpu className="w-8 h-8" />
               <Globe className="w-8 h-8" />
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-32 px-8 border-t border-white/5 bg-brand-black">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-16 mb-24">
            <div className="col-span-1 md:col-span-1">
              <div className="flex items-center gap-2 mb-8">
                <Globe className="w-8 h-8 text-brand-cyan" />
                <span className="text-2xl font-bold text-white">Antares</span>
              </div>
              <p className="text-white/40 leading-relaxed text-lg italic">
                The future of web security, built for everyone.
              </p>
            </div>
            <div>
              <h4 className="text-white font-bold mb-8 text-xl">Product</h4>
              <ul className="space-y-4 text-white/40 text-lg">
                <li className="hover:text-brand-cyan cursor-pointer transition-colors">Features</li>
                <li className="hover:text-brand-cyan cursor-pointer transition-colors">Security</li>
                <li className="hover:text-brand-cyan cursor-pointer transition-colors">Enterprise</li>
                <li className="hover:text-brand-cyan cursor-pointer transition-colors">Roadmap</li>
              </ul>
            </div>
            <div>
              <h4 className="text-white font-bold mb-8 text-xl">Company</h4>
              <ul className="space-y-4 text-white/40 text-lg">
                <li className="hover:text-brand-cyan cursor-pointer transition-colors">About Us</li>
                <li className="hover:text-brand-cyan cursor-pointer transition-colors">Careers</li>
                <li className="hover:text-brand-cyan cursor-pointer transition-colors">Blog</li>
                <li className="hover:text-brand-cyan cursor-pointer transition-colors">Press</li>
              </ul>
            </div>
            <div>
              <h4 className="text-white font-bold mb-8 text-xl">Legal</h4>
              <ul className="space-y-4 text-white/40 text-lg">
                <li className="hover:text-brand-cyan cursor-pointer transition-colors">Privacy Policy</li>
                <li className="hover:text-brand-cyan cursor-pointer transition-colors">Terms of Service</li>
                <li className="hover:text-brand-cyan cursor-pointer transition-colors">Cookie Policy</li>
              </ul>
            </div>
          </div>
          <div className="flex flex-col md:flex-row justify-between items-center gap-8 pt-12 border-t border-white/5 text-white/30">
            <p className="text-lg">© 2026 Antares Security. All rights reserved.</p>
            <div className="flex gap-8">
              <Github className="w-6 h-6 hover:text-white cursor-pointer transition-colors" />
              <div className="w-6 h-6 rounded-full bg-white/30 hover:bg-white transition-colors cursor-pointer" />
              <div className="w-6 h-6 rounded-full bg-white/30 hover:bg-white transition-colors cursor-pointer" />
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
