import React from 'react';
import { FaGithub, FaExternalLinkAlt } from 'react-icons/fa';

const Project = () => {
  const projectData = [
    {
      title: "Nyayalite for Law Firm",
      description: "A full-stack MERN application for Law awarness and legal information.",
      tech: ["MongoDB", "Express", "React", "Node"],
      github: "https://github.com/Gokulproject5/law-based-ai-bot-application",
      live: "https://nyayalite-com.onrender.com/",
      image: "./src/assets/images/nyayalite.png"
    },
   
    {
      title: "Portfolio Website",
      description: "Responsive personal portfolio built with Tailwind CSS and React.",
      tech: ["React", "Tailwind", "Vite"],
      github: "https://github.com",
      live: "https://yourlink.com",
      image: "/src/assets/images/portfolio.png"
    }
  ];

  return (
    <section id="project" className="sticky-section min-h-screen py-24 sticky top-0 z-50 px-5 bg-slate-50 dark:bg-slate-950 transition-colors overflow-hidden">
      {/* Overlsy */}
      <div className="absolute inset-0 opacity-20 dark:opacity-40 pointer-events-none">
        <div className="absolute top-[-10%] right-[-10%] w-[40%] h-[40%] bg-blue-600 rounded-full blur-[120px]"></div>
        <div className="absolute bottom-[-10%] left-[-10%] w-[40%] h-[40%] bg-purple-600 rounded-full blur-[120px]"></div>
      </div>
      <div className="max-w-6xl mx-auto">
        <h2 className="text-4xl font-bold text-center mb-12 dark:text-white">Featured Projects</h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8">
          {projectData.map((project, index) => (
            <div key={index} className="group bg-slate-50 dark:bg-slate-900 rounded-xl overflow-hidden border border-slate-200 dark:border-slate-800 shadow-md hover:shadow-xl transition-all">
              {/* Image Container */}
              <div className="overflow-hidden">
                <img src={project.image} alt={project.title} className="w-full bg-amber-50  h-48 object-cover group-hover:scale-110 transition-transform duration-500" />
              </div>

              {/* Content */}
              <div className="p-6">
                <h3 className="text-xl font-bold mb-2 dark:text-white">{project.title}</h3>
                <p className="text-slate-600 dark:text-slate-400 text-sm mb-4">{project.description}</p>

                {/* Tech Badges */}
                <div className="flex flex-wrap gap-2 mb-6">
                  {project.tech.map((t, i) => (
                    <span key={i} className="px-3 py-1 bg-blue-100 dark:bg-blue-900/30 text-blue-600 dark:text-blue-400 text-xs font-semibold rounded-full">
                      {t}
                    </span>
                  ))}
                </div>

                {/* Links */}
                <div className="flex items-center space-x-4 border-t border-slate-200 dark:border-slate-800 pt-4">
                  <a href={project.github} target="_blank" rel="noreferrer" className="flex items-center text-slate-700 dark:text-slate-300 hover:text-blue-500 dark:hover:text-blue-400 transition">
                    <FaGithub className="mr-2" /> Code
                  </a>
                  <a href={project.live} target="_blank" rel="noreferrer" className="flex items-center text-slate-700 dark:text-slate-300 hover:text-blue-500 dark:hover:text-blue-400 transition">
                    <FaExternalLinkAlt className="mr-2" /> Live Demo
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Project;
