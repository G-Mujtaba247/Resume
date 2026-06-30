import React, { useState } from 'react';

const Skills = () => {
  const [activeTab, setActiveTab] = useState('All');

  const skillsData = [
    // Frontend
    { name: "React.js", category: "Frontend", level: "92%", status: "Expert", color: "from-cyan-400 to-blue-500" },
    { name: "JavaScript (ES6+)", category: "Frontend", level: "95%", status: "Expert", color: "from-yellow-400 to-amber-500" },
    { name: "TypeScript", category: "Frontend", level: "85%", status: "Advanced", color: "from-blue-500 to-indigo-600" },
    { name: "Next.js", category: "Frontend", level: "80%", status: "Advanced", color: "from-slate-700 to-slate-950" },
    { name: "Tailwind CSS", category: "Frontend", level: "90%", status: "Expert", color: "from-teal-400 to-cyan-500" },
    { name: "Redux Toolkit", category: "Frontend", level: "85%", status: "Advanced", color: "from-purple-500 to-indigo-500" },
    
    // Backend
    { name: "Node.js", category: "Backend", level: "88%", status: "Expert", color: "from-green-400 to-emerald-600" },
    { name: "Express.js", category: "Backend", level: "90%", status: "Expert", color: "from-slate-400 to-slate-600" },
    { name: "MongoDB", category: "Backend", level: "85%", status: "Advanced", color: "from-green-500 to-emerald-700" },
    { name: "RESTful APIs", category: "Backend", level: "95%", status: "Expert", color: "from-blue-400 to-accent-violet" },
    { name: "GraphQL", category: "Backend", level: "75%", status: "Intermediate", color: "from-pink-500 to-rose-600" },
    { name: "PostgreSQL", category: "Backend", level: "80%", status: "Advanced", color: "from-blue-600 to-cyan-600" },

    // Tools / DevOps
    { name: "Git & GitHub", category: "Tools", level: "90%", status: "Expert", color: "from-orange-500 to-red-600" },
    { name: "Docker", category: "Tools", level: "75%", status: "Intermediate", color: "from-blue-400 to-blue-600" },
    { name: "AWS", category: "Tools", level: "70%", status: "Intermediate", color: "from-yellow-500 to-orange-500" },
    { name: "Postman", category: "Tools", level: "90%", status: "Expert", color: "from-orange-400 to-red-500" },
    { name: "Firebase", category: "Tools", level: "85%", status: "Advanced", color: "from-amber-400 to-yellow-500" },
    { name: "Vercel / Netlify", category: "Tools", level: "90%", status: "Expert", color: "from-slate-800 to-black" }
  ];

  const categories = ['All', 'Frontend', 'Backend', 'Tools'];

  const filteredSkills = activeTab === 'All' 
    ? skillsData 
    : skillsData.filter(skill => skill.category === activeTab);

  return (
    <section id="skills" className="section-padding bg-slate-50/50 dark:bg-dark-bg/40">
      <div className="container mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-extrabold text-slate-900 dark:text-white tracking-tight">
            Technical Arsenal
          </h2>
          <p className="text-slate-500 dark:text-slate-400 mt-2 font-medium">Languages, frameworks, databases, and workflow utilities</p>
          <div className="w-16 h-1 bg-brand-500 mx-auto rounded-full mt-4"></div>
        </div>

        {/* Tab Selector */}
        <div className="flex flex-wrap justify-center gap-3 mb-12 max-w-lg mx-auto">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setActiveTab(cat)}
              className={`px-5 py-2.5 rounded-xl text-sm font-semibold transition-all duration-300 cursor-pointer shadow-sm ${
                activeTab === cat
                  ? 'bg-gradient-to-r from-brand-600 to-accent-violet text-white shadow-brand-500/20'
                  : 'bg-white dark:bg-slate-800/80 text-slate-600 dark:text-slate-400 border border-slate-200/40 dark:border-slate-700/40 hover:bg-slate-100 dark:hover:bg-slate-700/60'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Skills Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto min-h-[350px]">
          {filteredSkills.map((skill, idx) => (
            <div 
              key={idx} 
              className="p-6 bg-white dark:bg-dark-card border border-slate-200/40 dark:border-slate-800/40 rounded-2xl shadow-sm hover:shadow-md hover:border-brand-500/20 dark:hover:border-brand-500/20 transition-all duration-300 group"
            >
              <div className="flex justify-between items-center mb-4">
                <div>
                  <h3 className="font-bold text-slate-800 dark:text-white group-hover:text-brand-500 dark:group-hover:text-brand-400 transition-colors">
                    {skill.name}
                  </h3>
                  <span className="text-[10px] uppercase font-extrabold tracking-widest text-slate-400 dark:text-slate-500">
                    {skill.category}
                  </span>
                </div>
                <div className="text-right">
                  <span className="text-sm font-extrabold text-slate-800 dark:text-slate-300">
                    {skill.level}
                  </span>
                  <p className="text-[9px] uppercase font-bold text-brand-600 dark:text-brand-400 tracking-wider">
                    {skill.status}
                  </p>
                </div>
              </div>

              {/* Progress track */}
              <div className="w-full bg-slate-100 dark:bg-slate-800/60 rounded-full h-2">
                <div 
                  className={`bg-gradient-to-r ${skill.color} h-2 rounded-full transition-all duration-1000 ease-out`} 
                  style={{ width: skill.level }}
                ></div>
              </div>
            </div>
          ))}
        </div>

        {/* Summary badges */}
        <div className="mt-16 text-center">
          <p className="text-sm text-slate-500 dark:text-slate-400 font-semibold mb-6 uppercase tracking-widest">Additional methodologies</p>
          <div className="flex flex-wrap justify-center gap-3 max-w-3xl mx-auto">
            {["Agile Scrum", "REST / GraphQL", "TDD & Jest", "CI/CD Pipelines", "Responsive Design", "Microservices Architecture", "Performance Optimization"].map((tech) => (
              <span 
                key={tech} 
                className="px-4.5 py-2 bg-white dark:bg-slate-800/50 text-slate-600 dark:text-slate-400 rounded-xl border border-slate-200/50 dark:border-slate-700/50 text-xs font-semibold hover:border-brand-500/30 dark:hover:border-brand-500/30 transition-all shadow-sm"
              >
                {tech}
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;
