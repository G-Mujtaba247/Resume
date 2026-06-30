

const Header = () => {
  return (
    <section id="home" className="min-h-screen flex items-center justify-center section-padding relative overflow-hidden pt-28 bg-slate-50/50 dark:bg-dark-bg/40">
      {/* Background Decorative Elements */}
      <div className="absolute top-20 left-10 w-96 h-96 bg-brand-400/20 dark:bg-brand-500/10 rounded-full mix-blend-multiply filter blur-3xl opacity-30 animate-blob"></div>
      <div className="absolute top-40 right-10 w-96 h-96 bg-accent-violet/20 dark:bg-accent-violet/10 rounded-full mix-blend-multiply filter blur-3xl opacity-30 animate-blob animation-delay-2000"></div>
      <div className="absolute -bottom-10 left-40 w-96 h-96 bg-accent-cyan/20 dark:bg-accent-cyan/10 rounded-full mix-blend-multiply filter blur-3xl opacity-30 animate-blob animation-delay-4000"></div>

      <div className="container mx-auto grid md:grid-cols-2 gap-12 items-center relative z-10">
        <div className="order-2 md:order-1 text-center md:text-left flex flex-col justify-center">
          <div className="inline-flex items-center space-x-2 bg-brand-50 dark:bg-brand-950/40 border border-brand-100 dark:border-brand-900/30 px-3.5 py-1.5 rounded-full w-fit mx-auto md:mx-0 mb-6 shadow-sm">
            <span className="flex h-2 w-2 relative">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-brand-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-brand-500"></span>
            </span>
            <span className="text-xs font-semibold text-brand-700 dark:text-brand-300 uppercase tracking-widest">
              Open to Opportunities
            </span>
          </div>

          <p className="text-slate-500 dark:text-slate-400 font-medium mb-2 tracking-wide text-base">
            Hello, my name is
          </p>
          <h1 className="text-5xl md:text-7xl font-extrabold mb-4 text-slate-900 dark:text-white tracking-tight leading-none">
            Ghulam Mujtaba
          </h1>
          <h2 className="text-2xl md:text-3xl font-bold mb-6 text-slate-700 dark:text-slate-300 flex items-center justify-center md:justify-start">
            <span className="bg-gradient-to-r from-brand-600 via-accent-violet to-accent-cyan bg-clip-text text-transparent">
              MERN Stack Developer
            </span>
          </h2>
          <p className="text-lg text-slate-600 dark:text-slate-400 mb-8 max-w-lg mx-auto md:mx-0 leading-relaxed font-normal">
            I architect clean, robust, and highly-performant web applications. Transforming design models into highly responsive interactive digital solutions using the MERN ecosystem.
          </p>

          {/* Call to Actions */}
          <div className="flex flex-col sm:flex-row items-center justify-center md:justify-start gap-4">
            <a href="#contact" className="btn-primary w-full sm:w-auto text-center shadow-brand-500/20">
              Let's Collaborate
            </a>
            <a href="#projects" className="btn-secondary w-full sm:w-auto text-center">
              Explore Projects
            </a>
          </div>

          {/* Stats Bar */}
          <div className="mt-12 grid grid-cols-3 gap-6 max-w-md mx-auto md:mx-0 border-t border-slate-200/60 dark:border-slate-800/60 pt-8">
            <div>
              <h3 className="text-3xl font-extrabold text-brand-600 dark:text-brand-400">3+</h3>
              <p className="text-xs font-bold text-slate-500 dark:text-slate-400 uppercase tracking-widest mt-1">Years Exp.</p>
            </div>
            <div>
              <h3 className="text-3xl font-extrabold text-accent-violet">15+</h3>
              <p className="text-xs font-bold text-slate-500 dark:text-slate-400 uppercase tracking-widest mt-1">Completed</p>
            </div>
            <div>
              <h3 className="text-3xl font-extrabold text-accent-cyan">99%</h3>
              <p className="text-xs font-bold text-slate-500 dark:text-slate-400 uppercase tracking-widest mt-1">Uptime Rate</p>
            </div>
          </div>

          {/* Socials */}
          <div className="mt-8 flex items-center justify-center md:justify-start space-x-5">
            <a 
              href="https://github.com" 
              target="_blank" 
              rel="noreferrer" 
              className="p-3 bg-white dark:bg-slate-800/50 hover:bg-slate-100 dark:hover:bg-slate-700/50 border border-slate-200/50 dark:border-slate-700/50 rounded-xl text-slate-500 hover:text-brand-600 dark:text-slate-400 dark:hover:text-brand-400 transition-all shadow-sm cursor-pointer"
              aria-label="GitHub"
            >
              <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round"><path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"></path></svg>
            </a>
            <a 
              href="https://linkedin.com" 
              target="_blank" 
              rel="noreferrer" 
              className="p-3 bg-white dark:bg-slate-800/50 hover:bg-slate-100 dark:hover:bg-slate-700/50 border border-slate-200/50 dark:border-slate-700/50 rounded-xl text-slate-500 hover:text-brand-600 dark:text-slate-400 dark:hover:text-brand-400 transition-all shadow-sm cursor-pointer"
              aria-label="LinkedIn"
            >
              <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round"><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path><rect x="2" y="9" width="4" height="12"></rect><circle cx="4" cy="4" r="2"></circle></svg>
            </a>
            <a 
              href="https://twitter.com" 
              target="_blank" 
              rel="noreferrer" 
              className="p-3 bg-white dark:bg-slate-800/50 hover:bg-slate-100 dark:hover:bg-slate-700/50 border border-slate-200/50 dark:border-slate-700/50 rounded-xl text-slate-500 hover:text-brand-600 dark:text-slate-400 dark:hover:text-brand-400 transition-all shadow-sm cursor-pointer"
              aria-label="Twitter"
            >
              <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round"><path d="M23 3a10.9 10.9 0 0 1-3.14 1.53 4.48 4.48 0 0 0-7.86 3v1A10.66 10.66 0 0 1 3 4s-4 9 5 13a11.64 11.64 0 0 1-7 2c9 5 20 0 20-11.5a4.5 4.5 0 0 0-.08-.83A7.72 7.72 0 0 0 23 3z"></path></svg>
            </a>
          </div>
        </div>

        {/* Profile Image Column */}
        <div className="order-1 md:order-2 flex justify-center relative">
          {/* Subtle glowing ring underneath */}
          <div className="absolute w-72 h-72 md:w-96 md:h-96 rounded-full bg-gradient-to-tr from-brand-500 via-accent-violet to-accent-cyan opacity-25 dark:opacity-15 blur-3xl animate-pulse"></div>

          {/* Main frame */}
          <div className="relative w-64 h-64 md:w-80 md:h-80 rounded-full p-1.5 bg-gradient-to-tr from-brand-500 via-accent-violet to-accent-cyan shadow-2xl hover:scale-[1.03] transition-all duration-500 flex items-center justify-center group">
            <div className="w-full h-full rounded-full overflow-hidden border-4 border-white dark:border-dark-bg bg-slate-100 dark:bg-slate-800">
              <img
                src="profile.jpeg"
                alt="Ghulam Mujtaba"
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-108"
                onError={(e) => {
                  e.target.onerror = null;
                  e.target.src = "https://images.unsplash.com/photo-1534528741775-53994a69daeb?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80"; // Fallback URL
                }}
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Header;
