/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { motion } from "motion/react";
import { Navbar } from "./components/Navbar";
import { fadeUp } from "./lib/animations";
import { WordReveal } from "./components/WordReveal";
import { HlsVideoPlayer } from "./components/HlsVideoPlayer";
import { Search, Compass, Zap, Users } from "lucide-react";

export default function App() {
  return (
    <main className="relative bg-background text-foreground overflow-hidden">
      <Navbar />

      {/* Hero Section */}
      <section className="relative h-screen min-h-[800px] w-full flex flex-col items-center justify-center pt-32 text-center px-6 overflow-hidden">
        {/* Background Video */}
        <div className="absolute inset-0 z-0">
          <video
            src="https://d8j0ntlcm91z4.cloudfront.net/user_38xzZboKViGWJOttwIXH07lWA1P/hf_20260325_120549_0cd82c36-56b3-4dd9-b190-069cfc3a623f.mp4"
            autoPlay
            muted
            loop
            playsInline
            className="w-full h-full object-cover opacity-60"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-background via-background/40 to-transparent" />
        </div>

        <div className="relative z-10 max-w-5xl mx-auto flex flex-col items-center">
          <motion.div 
            {...fadeUp(0.1)}
            viewport={{ once: true, margin: "-100px" }}
            className="flex items-center gap-2 mb-8 bg-white/5 py-2 px-4 rounded-full backdrop-blur-md border border-white/10"
          >
            <div className="flex -space-x-2">
              {[1, 2, 3].map((i) => (
                <img
                  key={i}
                  src={`https://picsum.photos/seed/mind-user-${i}/100/100`}
                  alt="User"
                  className="w-8 h-8 rounded-full border-2 border-background object-cover shadow-lg"
                  referrerPolicy="no-referrer"
                />
              ))}
            </div>
            <span className="text-sm font-medium text-muted-foreground">7,000+ people already subscribed</span>
          </motion.div>

          <motion.h1 
            {...fadeUp(0.2)}
            viewport={{ once: true, margin: "-100px" }}
            className="text-5xl md:text-7xl lg:text-8xl font-medium tracking-tight mb-8 leading-[0.9]"
          >
            Get <span className="font-serif italic font-normal">Inspired</span> <br /> with Us
          </motion.h1>

          <motion.p 
            {...fadeUp(0.3)}
            viewport={{ once: true, margin: "-100px" }}
            className="text-lg text-hero-subtitle max-w-2xl mb-12 leading-relaxed"
          >
            Join our feed for meaningful updates, news around technology and a shared journey toward depth and direction.
          </motion.p>

          <motion.div 
            {...fadeUp(0.4)}
            viewport={{ once: true, margin: "-100px" }}
            className="liquid-glass rounded-full p-2 w-full max-w-lg flex"
          >
            <input 
              type="email" 
              placeholder="Enter your email" 
              className="bg-transparent border-none focus:ring-0 px-6 py-3 flex-1 text-foreground placeholder:text-muted-foreground outline-none"
            />
            <motion.button 
              whileHover={{ scale: 1.03 }}
              whileTap={{ scale: 0.98 }}
              className="bg-primary text-primary-foreground font-bold px-8 py-3 rounded-full text-sm uppercase tracking-wider shadow-[0_0_20px_rgba(124,58,237,0.3)]"
            >
              Subscribe
            </motion.button>
          </motion.div>
        </div>
      </section>

      {/* Search has changed Section */}
      <section className="relative pt-52 md:pt-64 pb-24 px-8 md:px-28">
        <div className="max-w-7xl mx-auto text-center">
          <motion.h2 
            {...fadeUp(0.1)}
            viewport={{ once: true, margin: "-100px" }}
            className="text-5xl md:text-7xl lg:text-8xl font-medium tracking-tight mb-6"
          >
            Search has <span className="font-serif italic font-normal text-primary">changed.</span> <br /> Have you?
          </motion.h2>
          <motion.p 
            {...fadeUp(0.2)}
            className="text-muted-foreground text-lg max-w-2xl mx-auto mb-32"
          >
            The way information flows is evolving. Traditional discovery is being replaced by intelligent context and meaningful depth.
          </motion.p>

          <div className="grid md:grid-cols-3 gap-16 md:gap-12 mb-32">
            {[
              { title: "ChatGPT", desc: "Generative context that understands intent, moving beyond simple keywords to meaningful interaction.", icon: <Zap size={40} className="text-[#10A37F]" />, bg: "from-emerald-500/10 to-transparent" },
              { title: "Perplexity", desc: "Real-time discovery engine that synthesizes the web into concise, sourced, and actionable knowledge.", icon: <Search size={40} className="text-[#20B2AA]" />, bg: "from-cyan-500/10 to-transparent" },
              { title: "Google Gemini", desc: "Multimodal intelligence integrated into your workflow, connecting data points across your digital ecosystem.", icon: <Users size={40} className="text-[#4285F4]" />, bg: "from-blue-500/10 to-transparent" }
            ].map((p, i) => (
              <motion.div 
                key={i}
                {...fadeUp(0.3 + i * 0.1)}
                viewport={{ once: true, margin: "-100px" }}
                className="flex flex-col items-center text-center space-y-6 group"
              >
                <div className={`w-48 h-48 liquid-glass rounded-3xl flex items-center justify-center p-8 bg-gradient-to-br ${p.bg} group-hover:scale-105 transition-transform duration-500`}>
                  <div className="w-full h-full flex items-center justify-center border border-white/5 rounded-2xl bg-white/[0.02] shadow-inner">
                    {p.icon}
                  </div>
                </div>
                <h3 className="font-semibold text-lg group-hover:text-primary transition-colors">{p.title}</h3>
                <p className="text-muted-foreground text-sm leading-relaxed px-4">{p.desc}</p>
              </motion.div>
            ))}
          </div>

          <motion.p 
            {...fadeUp(0.6)}
            className="text-muted-foreground text-sm uppercase tracking-[3px] font-medium"
          >
            If you don't answer the questions, someone else will.
          </motion.p>
        </div>
      </section>

      {/* Mission Section */}
      <section className="relative pt-0 pb-32 md:pb-44 px-8 md:px-28">
        <div className="max-w-5xl mx-auto">
          <motion.div 
            {...fadeUp(0.1)}
            className="relative w-full aspect-square md:aspect-video mb-32 overflow-hidden rounded-3xl border border-white/5"
          >
            <video 
              src="https://d8j0ntlcm91z4.cloudfront.net/user_38xzZboKViGWJOttwIXH07lWA1P/hf_20260325_132944_a0d124bb-eaa1-4082-aa30-2310efb42b4b.mp4"
              autoPlay
              muted
              loop
              playsInline
              className="w-full h-full object-cover"
            />
          </motion.div>

          <WordReveal 
            text="We're building a space where curiosity meets clarity — where readers find depth, writers find reach, and every newsletter becomes a conversation worth having."
            highlights={["curiosity", "meets", "clarity"]}
            className="text-2xl md:text-4xl lg:text-5xl font-medium tracking-tight mb-20 leading-[1.1]"
          />

          <WordReveal 
            text="A platform where content, community, and insight flow together — with less noise, less friction, and more meaning for everyone involved."
            className="text-xl md:text-2xl lg:text-3xl font-medium leading-[1.2]"
          />
        </div>
      </section>

      {/* Solution Section */}
      <section className="relative py-32 md:py-44 px-8 md:px-28 border-t border-white/5">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col items-center text-center mb-24">
            <motion.span 
              {...fadeUp(0.1)}
              className="text-xs tracking-[4px] uppercase text-muted-foreground mb-8 font-semibold"
            >
              The Solution
            </motion.span>
            <motion.h2 
              {...fadeUp(0.2)}
              className="text-4xl md:text-6xl font-medium tracking-tight max-w-4xl"
            >
              The platform for <span className="font-serif italic font-normal">meaningful</span> content
            </motion.h2>
          </div>

          <motion.div 
            {...fadeUp(0.3)}
            className="relative w-full aspect-[21/9] rounded-2xl overflow-hidden mb-24 border border-white/10"
          >
            <video 
              src="https://d8j0ntlcm91z4.cloudfront.net/user_38xzZboKViGWJOttwIXH07lWA1P/hf_20260325_125119_8e5ae31c-0021-4396-bc08-f7aebeb877a2.mp4"
              autoPlay
              muted
              loop
              playsInline
              className="w-full h-full object-cover"
            />
          </motion.div>

          <div className="grid md:grid-cols-4 gap-12 md:gap-8">
            {[
              { title: "Curated Feed", desc: "A noise-free environment focusing on quality over quantity, tailored specifically to your interests." },
              { title: "Writer Tools", desc: "Advanced distribution and analytical tools designed to help you reach the right audience effectively." },
              { title: "Community", desc: "Meaningful interaction layers that turn readers into contributors and followers into a community." },
              { title: "Distribution", desc: "Seamless cross-platform distribution ensuring your content reaches your audience where they are." }
            ].map((feature, i) => (
              <motion.div 
                key={i}
                {...fadeUp(0.4 + i * 0.1)}
                className="space-y-4"
              >
                <div className="w-8 h-8 border border-foreground/20 flex items-center justify-center text-xs font-mono">0{i+1}</div>
                <h3 className="font-semibold text-lg">{feature.title}</h3>
                <p className="text-muted-foreground text-sm leading-relaxed">{feature.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="relative py-44 md:py-64 border-t border-white/5 overflow-hidden flex items-center justify-center">
        <div className="absolute inset-0 z-0">
          <HlsVideoPlayer 
            url="https://stream.mux.com/8wrHPCX2dC3msyYU9ObwqNdm00u3ViXvOSHUMRYSEe5Q.m3u8"
            className="w-full h-full object-cover opacity-60"
          />
          <div className="absolute inset-0 bg-background/60 backdrop-blur-[2px]" />
        </div>

        <div className="relative z-10 max-w-4xl mx-auto text-center flex flex-col items-center px-6">
          <motion.div 
            {...fadeUp(0.1)}
            viewport={{ once: true, margin: "-100px" }}
            className="relative w-10 h-10 border-2 border-foreground mb-12 flex items-center justify-center"
          >
            <div className="w-5 h-5 border border-foreground" />
          </motion.div>
          
          <motion.h2 
            {...fadeUp(0.2)}
            viewport={{ once: true, margin: "-100px" }}
            className="text-5xl md:text-8xl font-medium tracking-tight mb-10"
          >
            Start Your <br /><span className="font-serif italic font-normal">Journey</span>
          </motion.h2>

          <motion.p 
            {...fadeUp(0.3)}
            viewport={{ once: true, margin: "-100px" }}
            className="text-muted-foreground text-lg mb-16 max-w-2xl"
          >
            Become part of a growing ecosystem of thinkers, creators, and visionaries.
          </motion.p>

          <motion.div 
            {...fadeUp(0.4)}
            viewport={{ once: true, margin: "-100px" }}
            className="flex flex-col sm:flex-row gap-4"
          >
            <motion.button 
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              className="bg-primary text-primary-foreground font-bold px-12 py-5 rounded-lg text-sm uppercase tracking-widest shadow-lg"
            >
              Subscribe Now
            </motion.button>
            <motion.button 
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              className="liquid-glass font-bold px-12 py-5 rounded-lg text-sm uppercase tracking-widest border border-white/10"
            >
              Start Writing
            </motion.button>
          </motion.div>
        </div>
      </section>

      {/* Footer */}
      <footer className="relative py-12 px-8 md:px-28 border-t border-white/5">
        <div className="max-w-7xl mx-auto flex flex-col md:row items-center justify-between gap-8 md:flex-row">
          <p className="text-muted-foreground text-sm font-medium tracking-tight">
            Â© 2026 Mindloop. All rights reserved.
          </p>
          <div className="flex gap-8">
            {["Privacy", "Terms", "Contact"].map((link) => (
              <a 
                key={link} 
                href={`#${link.toLowerCase()}`}
                className="text-sm font-medium text-muted-foreground hover:text-white transition-colors"
              >
                {link}
              </a>
            ))}
          </div>
        </div>
      </footer>
    </main>
  );
}

