import React from 'react';

const About = () => {
  return (
    <section id="about" className="section-padding bg-white dark:bg-dark-bg/20">
      <div className="container mx-auto">
        <div className="text-center mb-20">
          <h2 className="text-3xl md:text-4xl font-extrabold text-slate-900 dark:text-white tracking-tight">
            About Me
          </h2>
          <p className="text-slate-500 dark:text-slate-400 mt-2 font-medium">My background and passion for development</p>
          <div className="w-16 h-1 bg-brand-500 mx-auto rounded-full mt-4"></div>
        </div>

        <div className="grid lg:grid-cols-12 gap-16 items-center max-w-6xl mx-auto">
          {/* Left Column: Image with floating badge */}
          <div className="lg:col-span-5 relative group">
            {/* Glow frame */}
            <div className="absolute inset-0 bg-gradient-to-tr from-brand-500 to-accent-violet rounded-3xl blur-2xl opacity-10 dark:opacity-20 transition-opacity duration-500 group-hover:opacity-30"></div>
            
            <div className="relative aspect-square md:aspect-[4/3] lg:aspect-square rounded-3xl overflow-hidden shadow-2xl border border-slate-200/50 dark:border-slate-800/50">
              <img 
                src="https://images.unsplash.com/photo-1605379399642-870262d3d051?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80" 
                alt="Professional Workspace" 
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
              />
            </div>
            
            {/* Floating Experience Badge */}
            <div className="absolute -bottom-6 -right-6 w-36 h-36 bg-slate-950/90 dark:bg-slate-900/95 backdrop-blur-md rounded-2xl flex flex-col items-center justify-center text-white shadow-2xl border border-slate-800/80 hidden sm:flex hover:scale-105 transition-transform duration-300">
              <span className="text-4xl font-extrabold bg-gradient-to-r from-brand-400 to-accent-cyan bg-clip-text text-transparent">3+</span>
              <span className="text-[10px] font-bold uppercase tracking-widest text-slate-400 mt-1 text-center">Years of<br/>Experience</span>
            </div>
          </div>

          {/* Right Column: Bio details */}
          <div className="lg:col-span-7">
            <h3 className="text-2xl md:text-3xl font-bold text-slate-800 dark:text-white mb-6 tracking-tight">
              Crafting scalable full-stack applications with elegant user interfaces
            </h3>
            <p className="text-slate-600 dark:text-slate-400 mb-6 leading-relaxed">
              I am a specialized MERN Stack Developer with a passion for designing and building highly efficient, responsive web solutions. With comprehensive knowledge of modern JavaScript architectures, I focus on delivering optimized frontends coupled with secure, scalable backend services.
            </p>
            <p className="text-slate-600 dark:text-slate-400 mb-8 leading-relaxed">
              I prioritize clean architectural design, responsive styling paradigms, and writing maintainable code that drives enterprise value. I enjoy collaborating with teams, solving complex state management problems, and continuously adopting standard industry practices.
            </p>
            
            {/* Cards Grid */}
            <div className="grid grid-cols-2 gap-4 mb-8">
              <div className="p-5 bg-slate-50 dark:bg-slate-800/40 border border-slate-200/40 dark:border-slate-800/40 rounded-2xl hover:border-brand-500/30 transition-all duration-300">
                <h4 className="text-2xl font-extrabold text-brand-600 dark:text-brand-400">15+</h4>
                <p className="text-xs font-bold text-slate-500 dark:text-slate-400 uppercase tracking-wider mt-1">Projects Completed</p>
              </div>
              <div className="p-5 bg-slate-50 dark:bg-slate-800/40 border border-slate-200/40 dark:border-slate-800/40 rounded-2xl hover:border-brand-500/30 transition-all duration-300">
                <h4 className="text-2xl font-extrabold text-accent-violet">100%</h4>
                <p className="text-xs font-bold text-slate-500 dark:text-slate-400 uppercase tracking-wider mt-1">Client Satisfaction</p>
              </div>
            </div>

            <div className="flex flex-wrap items-center gap-4">
              <a 
                href="#contact" 
                className="btn-primary"
              >
                Hire Me
              </a>
              <a 
                href="#" 
                className="btn-secondary"
              >
                Download CV
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
