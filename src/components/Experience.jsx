

const Experience = () => {
  const experiences = [
    {
      role: "Software Engineer (MERN Stack)",
      company: "Innovate Tech Solutions",
      duration: "Jan 2023 - Present",
      description: "Leading development on enterprise-level SaaS applications. Architected responsive frontend architectures using React 19 and custom state machines. Overhauled server microservices in Node.js/Express, introducing Redis caching which lowered database query load by 35%.",
      tags: ["React 19", "Node.js", "Express", "MongoDB", "Redux Toolkit", "Redis", "Docker"]
    },
    {
      role: "Associate Full Stack Developer",
      company: "Nexus Digital Labs",
      duration: "Jun 2021 - Dec 2022",
      description: "Designed, tested, and implemented web dashboards for client systems. Implemented secure OAuth2 integrations, Stripe payment processing pipelines, and structured MongoDB schema designs. Achieved a 20% increase in initial load performance by auditing bundle chunks.",
      tags: ["React.js", "Express.js", "MongoDB", "REST APIs", "Stripe API", "Firebase", "Tailwind CSS"]
    }
  ];

  return (
    <section id="experience" className="section-padding bg-white dark:bg-dark-bg/20">
      <div className="container mx-auto">
        <div className="text-center mb-20">
          <h2 className="text-3xl md:text-4xl font-extrabold text-slate-900 dark:text-white tracking-tight">
            Work Experience
          </h2>
          <p className="text-slate-500 dark:text-slate-400 mt-2 font-medium">My professional trajectory and milestones</p>
          <div className="w-16 h-1 bg-brand-500 mx-auto rounded-full mt-4"></div>
        </div>

        <div className="max-w-4xl mx-auto relative">
          {/* Vertical central timeline line */}
          <div className="absolute left-6 md:left-1/2 h-full w-0.5 bg-slate-200 dark:bg-slate-800/80 transform md:-translate-x-1/2"></div>
          
          <div className="space-y-12">
            {experiences.map((exp, idx) => (
              <div key={idx} className={`relative md:flex items-stretch ${idx % 2 === 0 ? 'md:flex-row-reverse' : ''}`}>
                {/* Desktop layout spacing spacer */}
                <div className="hidden md:block w-1/2"></div>
                
                {/* Timeline node dot */}
                <div className="absolute left-6 md:left-1/2 w-4 h-4 bg-brand-500 rounded-full border-4 border-white dark:border-dark-bg z-10 transform -translate-x-1/2 mt-7 shadow-lg shadow-brand-500/40">
                  <span className="absolute inset-0 rounded-full bg-brand-500 animate-ping opacity-30"></span>
                </div>
                
                {/* Timeline card wrapper */}
                <div className={`md:w-1/2 pl-12 md:pl-0 ${idx % 2 === 0 ? 'md:pr-12' : 'md:pl-12'}`}>
                  <div className="p-7 bg-slate-50 dark:bg-dark-card border border-slate-200/40 dark:border-slate-800/40 rounded-2xl shadow-sm hover:shadow-md hover:border-brand-500/20 dark:hover:border-brand-500/20 transition-all duration-300 relative group">
                    <span className="text-brand-600 dark:text-brand-400 font-extrabold text-xs tracking-wider uppercase">{exp.duration}</span>
                    <h3 className="text-xl font-bold text-slate-800 dark:text-white mt-1.5 group-hover:text-brand-500 dark:group-hover:text-brand-400 transition-colors">{exp.role}</h3>
                    <h4 className="text-slate-500 dark:text-slate-400 font-semibold text-sm mb-4">{exp.company}</h4>
                    <p className="text-slate-600 dark:text-slate-400 text-sm leading-relaxed mb-6 font-normal">
                      {exp.description}
                    </p>
                    
                    {/* Tech tags list */}
                    <div className="flex flex-wrap gap-2">
                      {exp.tags.map((tag) => (
                        <span key={tag} className="px-2.5 py-1 bg-white dark:bg-slate-800 text-slate-600 dark:text-slate-400 text-xs font-semibold rounded-lg border border-slate-200/40 dark:border-slate-700/40">
                          {tag}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;
