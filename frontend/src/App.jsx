import React, { useState, useEffect } from 'react';
import { motion, useAnimation } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
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
  Mail,
  Search,
  Settings,
  ShieldCheck,
  Terminal,
  Activity,
  Battery
} from 'lucide-react';

const Reveal = ({ children, width = "fit-content" }) => {
  const controls = useAnimation();
  const [ref, inView] = useInView({ threshold: 0.2, triggerOnce: true });

  useEffect(() => {
    if (inView) {
      controls.start("visible");
    }
  }, [controls, inView]);

  return (
    <motion.div
      ref={ref}
      variants={{
        hidden: { opacity: 0, y: 75 },
        visible: { opacity: 1, y: 0 },
      }}
      initial="hidden"
      animate={controls}
      transition={{ duration: 0.8, ease: "easeOut" }}
      style={{ width }}
    >
      {children}
    </motion.div>
  );
};

const SectionHeading = ({ title, subtitle }) => (
  <div className="mb-12">
    {subtitle && (
      <p className="text-serif-italic text-[#FF5A5F] text-lg mb-4">{subtitle}</p>
    )}
    <h2 className="heading-condensed text-5xl md:text-7xl lg:text-8xl">{title}</h2>
  </div>
);

const Section = ({ title, subtitle, description, children, visual, reverse = false, id }) => (
  <section id={id} className="reveal-section px-8 md:px-24">
    <div className={`max-w-7xl mx-auto flex flex-col ${reverse ? 'md:flex-row-reverse' : 'md:flex-row'} items-center gap-16 md:gap-32`}>
      <div className="flex-1">
        <Reveal>
          <SectionHeading title={title} subtitle={subtitle} />
          <p className="text-xl text-white/50 leading-relaxed mb-10 max-w-xl">
            {description}
          </p>
          {children}
        </Reveal>
      </div>
      <div className="flex-1 w-full">
        <Reveal>
          <div className="relative group">
            <div className="absolute -inset-1 bg-gradient-to-r from-white/10 to-transparent rounded-[2rem] blur-xl opacity-20 group-hover:opacity-40 transition-opacity" />
            <div className="relative glass-lupine rounded-[2rem] overflow-hidden aspect-square flex items-center justify-center p-8">
              {visual}
            </div>
          </div>
        </Reveal>
      </div>
    </div>
  </section>
);

const Nav = () => (
  <nav className="fixed top-8 left-1/2 -translate-x-1/2 z-50 flex items-center justify-between px-8 py-4 glass-dark rounded-full w-[95%] max-w-7xl border-white/10 shadow-2xl">
    <div className="flex items-center gap-3 group cursor-pointer">
      <img
        src="/antares_logo.png"
        alt="Antares Logo"
        className="w-8 h-8 object-contain group-hover:scale-110 transition-transform duration-500"
      />
      <span className="heading-condensed text-xl tracking-widest">Antares</span>
    </div>
    <div className="hidden lg:flex items-center gap-10 text-[10px] font-bold tracking-[0.2em] uppercase text-white/50">
      <a href="#features" className="hover:text-white transition-colors">Products</a>
      <a href="#performance" className="hover:text-white transition-colors">Performance</a>
      <a href="#security" className="hover:text-white transition-colors">Security</a>
      <a href="https://github.com" className="hover:text-[#FF5A5F] transition-colors"><Github className="w-4 h-4" /></a>
    </div>
    <div className="flex items-center gap-4">
      <button className="btn-ghost !px-6 !py-2 !text-[9px] border-white/10">
        Coming soon
      </button>
    </div>
  </nav>
);

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
      }
    } catch (error) {
      console.error('Error:', error);
    }
  };

  return (
    <div className="bg-black text-white selection:bg-[#FF5A5F]/30 glow-vignette">
      <Nav />

      {/* SECTION 1 — HERO SECTION */}
      <section className="relative min-h-screen flex flex-col items-center justify-center pt-48 px-8">
        <div className="absolute top-0 left-0 right-0 bottom-0 overflow-hidden pointer-events-none">
          <div className="absolute top-[10%] left-[20%] w-[30%] h-[40%] bg-[#FF5A5F]/10 rounded-full blur-[120px]" />
          <div className="absolute bottom-[20%] right-[10%] w-[40%] h-[30%] bg-[#FF5A5F]/5 rounded-full blur-[120px]" />
        </div>

        <div className="max-w-7xl mx-auto text-center relative z-10">
          <Reveal>
            <p className="text-serif-italic text-[#FF5A5F] text-xl mb-6">The AI-Powered Intelligent Browser</p>
            <h1 className="heading-condensed text-7xl md:text-9xl lg:text-[12rem] mb-8 leading-[0.8] tracking-tighter">
              Antares <br /> Browser
            </h1>
            <p className="text-xl text-white/40 max-w-2xl mx-auto mb-12 leading-relaxed font-light">
              Antares is a next-generation browser built on the Chromium engine with deep AI integration. It enhances productivity, optimizes browsing performance, and protects your privacy with intelligent automation.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-6">
              <button className="btn-accent border-2 border-[#FF5A5F]">Coming Soon</button>
              <button className="btn-ghost border-2">View Features</button>
            </div>
          </Reveal>

          <Reveal>
            <div className="mt-24 relative px-4 max-w-5xl mx-auto">
              <div className="glass-lupine rounded-[3rem] p-4 border-white/5 shadow-2xl overflow-hidden aspect-[21/10]">
                <img
                  src="/antares_hero_visual_lupine_style_1773643585909.png"
                  alt="Antares UI Mockup"
                  className="w-full h-full object-cover rounded-[2.5rem] opacity-90"
                />
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      {/* SECTION 2 — PRODUCT INTRODUCTION */}
      <Section
        id="intro"
        title="Reinventing the Way You Browse"
        subtitle="Innovation"
        description="Antares combines the speed of Chromium with powerful AI features to create a smarter browsing experience. From intelligent search assistance to automated summarization and performance optimization, Antares transforms how users interact with the web."
        visual={
          <div className="w-full h-full flex items-center justify-center">
            <div className="relative w-full aspect-video glass-lupine rounded-3xl p-6 border-white/5 overflow-hidden">
              <div className="flex gap-2 mb-4">
                <div className="w-3 h-3 rounded-full bg-red-500/20" />
                <div className="w-3 h-3 rounded-full bg-yellow-500/20" />
                <div className="w-3 h-3 rounded-full bg-green-500/20" />
              </div>
              <div className="space-y-4">
                <div className="h-4 w-3/4 bg-white/5 rounded" />
                <div className="h-4 w-full bg-white/5 rounded" />
                <div className="h-4 w-1/2 bg-[#FF5A5F]/20 rounded border border-[#FF5A5F]/30" />
              </div>
              <div className="absolute -bottom-10 -right-10 w-40 h-40 bg-[#FF5A5F]/10 blur-3xl rounded-full" />
            </div>
          </div>
        }
      />

      {/* SECTION 3 — CORE FEATURES */}
      <section id="features" className="py-24 px-8 md:px-24">
        <div className="max-w-7xl mx-auto">
          <Reveal>
            <SectionHeading title="Built for the Future of Browsing" subtitle="Core Features" />
          </Reveal>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mt-12">
            {[
              { icon: Search, title: "AI Search Assistant", text: "Instantly summarize webpages, ask questions about content, and get intelligent answers without leaving the page." },
              { icon: Activity, title: "Performance Optimization", text: "Antares intelligently manages tabs and system resources to ensure faster browsing and reduced memory usage." },
              { icon: ShieldCheck, title: "Privacy First Architecture", text: "Advanced privacy protection blocks trackers and ensures secure browsing with built-in encryption." },
              { icon: Terminal, title: "Developer Friendly Tools", text: "Built-in tools designed for developers including enhanced debugging, network analysis, and performance monitoring." }
            ].map((feature, i) => (
              <Reveal key={i}>
                <div className="p-10 glass-lupine rounded-[2rem] border-white/5 hover:border-[#FF5A5F]/20 transition-all group">
                  <feature.icon className="w-10 h-10 text-[#FF5A5F] mb-8 group-hover:scale-110 transition-transform" />
                  <h4 className="heading-condensed text-2xl mb-4">{feature.title}</h4>
                  <p className="text-white/40 leading-relaxed font-light">{feature.text}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* SECTION 4 — TECHNOLOGY STACK */}
      <Section
        id="tech"
        title="Built on Modern Technology"
        subtitle="Infrastructure"
        description="Antares leverages industry-leading technologies to deliver a fast and reliable browsing experience."
        reverse={true}
        visual={
          <div className="grid grid-cols-3 gap-6 opacity-30">
            {[Github, Zap, Cpu, Sparkles, Globe, Lock].map((Icon, i) => (
              <div key={i} className="aspect-square glass-lupine rounded-3xl flex items-center justify-center">
                <Icon className="w-10 h-10" />
              </div>
            ))}
          </div>
        }
      >
        <div className="flex flex-wrap gap-3">
          {['Chromium', 'Electron', 'React', 'Node.js', 'AI Integration', 'AES-256 Encryption'].map((tag, i) => (
            <span key={i} className="px-4 py-2 border border-white/10 text-[10px] uppercase tracking-widest font-bold hover:border-[#FF5A5F]/50 transition-colors">
              {tag}
            </span>
          ))}
        </div>
      </Section>

      {/* SECTION 5 — AI INTEGRATION */}
      <Section
        id="ai"
        title="Browsing Meets Artificial Intelligence"
        subtitle="Intelligence"
        description="Antares integrates advanced AI capabilities directly into the browser to assist users with research, summarization, and automation."
        visual={
          <div className="w-full h-full flex items-center justify-center">
            <div className="relative w-full aspect-square glass-lupine rounded-full p-4 border-white/5 overflow-hidden animate-pulse">
              <img
                src="/antares_ai_interface_visual_1773643614333.png"
                alt="AI Interface"
                className="w-full h-full object-cover rounded-full opacity-60"
              />
              <div className="absolute inset-0 bg-[#FF5A5F]/10 blur-xl mix-blend-overlay" />
            </div>
          </div>
        }
      >
        <ul className="space-y-4">
          {['Smart webpage summarization', 'AI powered search insights', 'Context aware suggestions', 'Automated productivity tools'].map((item, i) => (
            <li key={i} className="flex items-center gap-4 text-white/60">
              <div className="w-1.5 h-1.5 bg-[#FF5A5F] rounded-full" />
              <span className="text-serif-italic italic text-lg">{item}</span>
            </li>
          ))}
        </ul>
      </Section>

      {/* SECTION 6 — PERFORMANCE */}
      <Section
        id="performance"
        title="Speed Without Compromise"
        subtitle="Performance"
        description="Powered by Chromium and optimized resource management, Antares ensures lightning-fast page loading, smooth multitasking, and improved battery efficiency."
        reverse={true}
        visual={
          <div className="flex flex-col gap-8 w-full">
            {[
              { label: 'Tab Management', value: '50% Faster' },
              { label: 'Memory Usage', value: '-40% Reduced' },
              { label: 'Browsing Speed', value: '2.5x Enhanced' }
            ].map((stat, i) => (
              <div key={i} className="space-y-2">
                <div className="flex justify-between text-[10px] uppercase font-bold tracking-[0.2em]">
                  <span>{stat.label}</span>
                  <span className="text-[#FF5A5F]">{stat.value}</span>
                </div>
                <div className="h-1 bg-white/5 w-full">
                  <motion.div
                    initial={{ width: 0 }}
                    whileInView={{ width: '70%' }}
                    className="h-full bg-[#FF5A5F]"
                  />
                </div>
              </div>
            ))}
          </div>
        }
      />

      {/* SECTION 7 — SECURITY */}
      <Section
        id="security"
        title="Privacy Built Into the Core"
        subtitle="Security"
        description="Antares protects your data with advanced encryption, tracker blocking, and secure sandboxing architecture."
        visual={
          <div className="relative group perspective-1000">
            <div className="w-64 h-64 glass-lupine rounded-[3rem] p-12 flex items-center justify-center transform group-hover:rotate-12 transition-transform duration-700">
              <ShieldCheck className="w-32 h-32 text-[#FF5A5F] glow-cyan" />
            </div>
            <div className="absolute -inset-10 bg-[#FF5A5F]/5 blur-3xl -z-10 rounded-full" />
          </div>
        }
      >
        <div className="grid grid-cols-2 gap-4">
          {['End-to-end encryption', 'Tracker blocking', 'Secure browsing isolation', 'Data protection architecture'].map((feature, i) => (
            <div key={i} className="flex flex-col gap-2 p-4 border border-white/5">
              <CheckCircle2 className="w-4 h-4 text-[#FF5A5F]" />
              <span className="text-[10px] uppercase font-bold tracking-widest">{feature}</span>
            </div>
          ))}
        </div>
      </Section>

      {/* SECTION 8 — DOWNLOAD */}
      <section className="py-32 px-8 flex items-center justify-center border-t border-white/5">
        <div className="max-w-4xl mx-auto text-center">
          <Reveal>
            <SectionHeading title="Experience the Future of Browsing" subtitle="GET STARTED" />
            <p className="text-xl text-white/40 mb-12 max-w-2xl mx-auto font-light">
              Download Antares today and experience an AI-powered browsing environment built for productivity, speed, and security.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-6">
              <button className="btn-accent px-12 py-5 text-sm">Download for Windows</button>
              <button className="btn-ghost px-12 py-5 text-sm opacity-50 cursor-not-allowed">Coming Soon: macOS & Linux</button>
            </div>

            <div className="mt-24 p-12 glass-lupine rounded-[3rem] border-white/10 max-w-2xl mx-auto">
              <h4 className="heading-condensed text-3xl mb-8">Join the Waitlist</h4>
              {subscribed ? (
                <div className="text-[#FF5A5F] text-2xl heading-condensed">You're on the list.</div>
              ) : (
                <form onSubmit={handleSubscribe} className="flex flex-col sm:flex-row gap-4">
                  <input
                    type="email"
                    required
                    placeholder="ENTER YOUR EMAIL"
                    className="flex-1 bg-transparent border-b-2 border-white/20 py-4 text-white focus:outline-none focus:border-[#FF5A5F] transition-colors"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                  />
                  <button type="submit" className="btn-accent">Submit</button>
                </form>
              )}
            </div>
          </Reveal>
        </div>
      </section>

      {/* SECTION 9 — FOOTER */}
      <footer className="py-24 px-8 md:px-24 bg-black border-t border-white/5 relative overflow-hidden">
        <div className="absolute bottom-[-10%] left-[-5%] heading-condensed text-[20rem] opacity-[0.02] select-none pointer-events-none">
          ANTARES
        </div>
        <div className="max-w-7xl mx-auto relative z-10">
          <div className="grid grid-cols-2 md:grid-cols-5 gap-12 mb-24">
            {['Product', 'Features', 'Technology', 'Download', 'GitHub'].map((section, i) => (
              <div key={i}>
                <h5 className="heading-condensed text-lg mb-6">{section}</h5>
                <ul className="space-y-3 text-[10px] font-bold tracking-widest text-white/30 uppercase cursor-pointer">
                  <li className="hover:text-white transition-colors">Overview</li>
                  <li className="hover:text-white transition-colors">Documentation</li>
                  <li className="hover:text-white transition-colors">Updates</li>
                </ul>
              </div>
            ))}
          </div>
          <div className="flex flex-col md:flex-row justify-between items-center gap-8 pt-12 border-t border-white/5 text-[10px] font-bold tracking-[0.3em] uppercase text-white/20">
            <p>Antares Browser © 2026</p>
            <p>AI-Integrated Optimized Browsing Experience</p>
          </div>
        </div>
      </footer>
    </div>
  );
}
