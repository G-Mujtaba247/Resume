

const Projects = () => {
  const projects = [
    {
      title: "Explore Pakistan",
      description: "A tourism platform showcasing remote landscapes in Pakistan. Features smooth client-side routing, immersive video/image galleries, and localized search filters.",
      tags: ["React 19", "Vite", "Tailwind v4", "Radix UI"],
      image: "https://images.unsplash.com/photo-1527004013197-933c4bb611b3?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80",
      githubUrl: "https://github.com/G-Mujtaba247/tourism"
    },
    {
      title: "Cars & Bikes Showcase",
      description: "A comprehensive digital marketplace portal for vehicles. Integrates a custom React search query builder and an automated Gemini AI-powered advisor chatbot.",
      tags: ["React 19", "Tailwind CSS", "JSON Server", "Gemini AI API"],
      image: "https://images.unsplash.com/photo-1533473359331-0135ef1b58bf?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80",
      githubUrl: "https://github.com/G-Mujtaba247/Cars-Bikes"
    },
    {
      title: "eLearning Tracker",
      description: "A secure assignment and dashboard application designed for academic programs. Utilizes JWT auth sessions and charts to visualize assignment completion stats.",
      tags: ["MERN Stack", "MongoDB Atlas", "Node.js", "Express", "Chart.js"],
      image: "https://images.unsplash.com/photo-1501504905252-473c47e087f8?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80",
      githubUrl: "https://github.com/G-Mujtaba247/Student-Assignment-Tracker"
    }
  ];

  return (
    <section id="projects" className="section-padding bg-slate-50/50 dark:bg-dark-bg/40">
      <div className="container mx-auto">
        <div className="text-center mb-20">
          <h2 className="text-3xl md:text-4xl font-extrabold text-slate-900 dark:text-white tracking-tight">
            Recent Creations
          </h2>
          <p className="text-slate-500 dark:text-slate-400 mt-2 font-medium">A selection of my core full-stack and frontend projects</p>
          <div className="w-16 h-1 bg-brand-500 mx-auto rounded-full mt-4"></div>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {projects.map((project, idx) => (
            <div key={idx} className="card group hover:scale-[1.02] hover:-translate-y-1 transition-all duration-300">
              <div className="relative overflow-hidden h-52">
                <img 
                  src={project.image} 
                  alt={project.title} 
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-108"
                  loading="lazy"
                />
                {/* Glass Hover Overlay */}
                <div className="absolute inset-0 bg-slate-950/40 backdrop-blur-sm opacity-0 group-hover:opacity-100 transition-all duration-350 flex items-center justify-center space-x-4">
                  <a 
                    href={project.githubUrl} 
                    target="_blank" 
                    rel="noreferrer" 
                    className="p-3 bg-white dark:bg-slate-900 rounded-xl text-slate-700 dark:text-white hover:scale-110 active:scale-95 transition-transform shadow-md cursor-pointer border border-slate-200/10"
                    title="GitHub Repository"
                  >
                    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round"><path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"></path></svg>
                  </a>
                  <a 
                    href="#" 
                    className="p-3 bg-white dark:bg-slate-900 rounded-xl text-slate-700 dark:text-white hover:scale-110 active:scale-95 transition-transform shadow-md cursor-pointer border border-slate-200/10"
                    title="Live Demo"
                  >
                    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round"><path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"></path><polyline points="15 3 21 3 21 9"></polyline><line x1="10" y1="14" x2="21" y2="3"></line></svg>
                  </a>
                </div>
              </div>

              {/* Project Card Info */}
              <div className="p-6.5">
                <h3 className="text-xl font-bold text-slate-800 dark:text-white mb-2.5 group-hover:text-brand-500 dark:group-hover:text-brand-400 transition-colors">
                  {project.title}
                </h3>
                <p className="text-slate-600 dark:text-slate-400 text-sm mb-5 leading-relaxed font-normal">
                  {project.description}
                </p>
                <div className="flex flex-wrap gap-2">
                  {project.tags.map((tag) => (
                    <span 
                      key={tag} 
                      className="px-3 py-1 bg-brand-50 dark:bg-brand-950/30 text-brand-600 dark:text-brand-400 text-xs font-semibold rounded-full border border-brand-100/30 dark:border-brand-900/30"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
