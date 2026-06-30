

const Footer = () => {
  return (
    <footer className="bg-slate-950 border-t border-slate-900 text-slate-500 py-16">
      <div className="container mx-auto px-6 text-center">
        {/* Footer Brand Logo */}
        <div className="text-2xl font-extrabold flex items-center justify-center tracking-tight mb-4 select-none">
          <span className="text-brand-500">&lt;</span>
          <span className="bg-gradient-to-r from-brand-400 to-accent-cyan bg-clip-text text-transparent px-1">
            Mujtaba
          </span>
          <span className="text-brand-500">/&gt;</span>
        </div>
        
        <p className="mb-8 max-w-sm mx-auto text-sm leading-relaxed">
          Crafting high-performance web systems using MERN stack paradigms. Driven by design excellence and robust backend architecture.
        </p>

        {/* Footer Navigation */}
        <div className="flex flex-wrap justify-center gap-6 mb-8 text-xs font-semibold uppercase tracking-widest">
          <a href="#home" className="hover:text-brand-400 transition-colors">Home</a>
          <a href="#about" className="hover:text-brand-400 transition-colors">About</a>
          <a href="#skills" className="hover:text-brand-400 transition-colors">Skills</a>
          <a href="#experience" className="hover:text-brand-400 transition-colors">Experience</a>
          <a href="#projects" className="hover:text-brand-400 transition-colors">Projects</a>
          <a href="#contact" className="hover:text-brand-400 transition-colors">Contact</a>
        </div>

        {/* Copyright */}
        <div className="pt-8 border-t border-slate-900/60 text-xs font-medium text-slate-600">
          &copy; {new Date().getFullYear()} Ghulam Mujtaba. All rights reserved. Designed & Engineered with precision.
        </div>
      </div>
    </footer>
  );
};

export default Footer;
