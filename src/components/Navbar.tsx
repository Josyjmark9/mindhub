import React from 'react';
import { Instagram, Linkedin, Twitter } from 'lucide-react';
import { motion } from 'motion/react';

export const Navbar = () => {
  return (
    <nav className="fixed top-0 left-0 w-full z-50 flex items-center justify-between px-8 md:px-28 py-6 transition-all duration-300">
      <div className="flex items-center gap-3 group cursor-pointer">
        <div className="relative w-7 h-7 border-2 border-primary/60 flex items-center justify-center overflow-hidden">
          <div className="w-3 h-3 border border-primary/60 group-hover:bg-primary transition-colors duration-300" />
        </div>
        <span className="text-xl font-bold tracking-tight">Mindloop</span>
      </div>

      <div className="hidden md:flex items-center gap-6">
        {["Home", "How It Works", "Philosophy", "Use Cases"].map((item, i) => (
          <React.Fragment key={item}>
            <a href={`#${item.toLowerCase().replace(/ /g, '-')}`} className="text-sm font-medium text-muted-foreground hover:text-primary transition-colors">
              {item}
            </a>
            {i < 3 && <span className="text-muted-foreground/30 text-[10px]">â€¢</span>}
          </React.Fragment>
        ))}
      </div>

      <div className="flex items-center gap-3">
        <div className="flex items-center gap-2">
          {[Instagram, Linkedin, Twitter].map((Icon, i) => (
            <motion.button
              key={i}
              whileHover={{ scale: 1.05, backgroundColor: "rgba(124,58,237,0.1)" }}
              whileTap={{ scale: 0.95 }}
              className="liquid-glass w-10 h-10 rounded-full flex items-center justify-center group"
            >
              <Icon size={18} className="text-muted-foreground group-hover:text-primary transition-colors" />
            </motion.button>
          ))}
        </div>
      </div>
    </nav>
  );
};
