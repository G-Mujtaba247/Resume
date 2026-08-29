const Education = () => {
  const educationList = [
    {
      degree: "Bachelor of Science in Computer Science",
      institution: "Tech University",
      duration: "Sep 2017 - May 2021",
      description: "Graduated with Honors. Coursework included Data Structures, Algorithms, Web Development, and Database Systems. Led the university coding club for 2 years.",
      tags: ["Computer Science", "Web Development", "Algorithms"]
    },
    {
      degree: "Full Stack Web Development Bootcamp",
      institution: "Code Masters Academy",
      duration: "Jun 2021 - Aug 2021",
      description: "Intensive 12-week bootcamp focusing on the MERN stack. Built multiple full-stack applications including an e-commerce platform and a social media dashboard.",
      tags: ["MERN Stack", "React", "Node.js"]
    }
  ];

  return (
    <section id="education" className="section-padding bg-slate-50 dark:bg-slate-900/40">
      <div className="container mx-auto">
        <div className="text-center mb-20">
          <h2 className="text-3xl md:text-4xl font-extrabold text-slate-900 dark:text-white tracking-tight">
            Education
          </h2>
          <p className="text-slate-500 dark:text-slate-400 mt-2 font-medium">My academic background and learning journey</p>
          <div className="w-16 h-1 bg-brand-500 mx-auto rounded-full mt-4"></div>
        </div>

        <div className="max-w-4xl mx-auto relative">
          <div className="absolute left-6 md:left-1/2 h-full w-0.5 bg-slate-200 dark:bg-slate-800/80 transform md:-translate-x-1/2"></div>
          
          <div className="space-y-12">
            {educationList.map((edu, idx) => (
              <div key={idx} className={`relative md:flex items-stretch ${idx % 2 === 0 ? 'md:flex-row-reverse' : ''}`}>
                <div className="hidden md:block w-1/2"></div>
                
                <div className="absolute left-6 md:left-1/2 w-4 h-4 bg-brand-500 rounded-full border-4 border-white dark:border-dark-bg z-10 transform -translate-x-1/2 mt-7 shadow-lg shadow-brand-500/40">
                  <span className="absolute inset-0 rounded-full bg-brand-500 animate-ping opacity-30"></span>
                </div>
                
                <div className={`md:w-1/2 pl-12 md:pl-0 ${idx % 2 === 0 ? 'md:pr-12' : 'md:pl-12'}`}>
                  <div className="p-7 bg-white dark:bg-dark-card border border-slate-200/40 dark:border-slate-800/40 rounded-2xl shadow-sm hover:shadow-md hover:border-brand-500/20 dark:hover:border-brand-500/20 transition-all duration-300 relative group">
                    <span className="text-brand-600 dark:text-brand-400 font-extrabold text-xs tracking-wider uppercase">{edu.duration}</span>
                    <h3 className="text-xl font-bold text-slate-800 dark:text-white mt-1.5 group-hover:text-brand-500 dark:group-hover:text-brand-400 transition-colors">{edu.degree}</h3>
                    <h4 className="text-slate-500 dark:text-slate-400 font-semibold text-sm mb-4">{edu.institution}</h4>
                    <p className="text-slate-600 dark:text-slate-400 text-sm leading-relaxed mb-6 font-normal">
                      {edu.description}
                    </p>
                    
                    <div className="flex flex-wrap gap-2">
                      {edu.tags.map((tag) => (
                        <span key={tag} className="px-2.5 py-1 bg-slate-50 dark:bg-slate-800 text-slate-600 dark:text-slate-400 text-xs font-semibold rounded-lg border border-slate-200/40 dark:border-slate-700/40">
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

export default Education;
