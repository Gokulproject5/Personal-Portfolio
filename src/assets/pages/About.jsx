import React from 'react';

export const About = () => {
  const educationData = [
    {
      degree: "Full Stack Intern",
      institution: "CyberDude Networks Pvt Ltd",
      duration: "Present",
     
    },
    {
      degree: "Bachelor of Technology in Information Technology",
      institution: "JKK Nataraja college of engineering and technology",
      duration: "2022 - 2026",
     
    },
    {
      degree: "Schooling",
      institution: "Govt Higher Sec School",
      duration: "2015-2022",
     
    },
    
  ];

  return (
    <div className="bg-slate-50 dark:bg-slate-950 transition-colors duration-700 ease-in-out">
      
      {/* overlay*/}
      <section id="about" className="sticky-section sticky top-0 h-screen flex items-center z-20 overflow-hidden bg-slate-50 dark:bg-slate-950">
        {/* Background  */}
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute top-1/4 -left-20 w-72 h-72 bg-purple-500/10 rounded-full blur-[120px]"></div>
          <div className="absolute bottom-1/4 -right-20 w-72 h-72 bg-blue-500/10 rounded-full blur-[120px]"></div>
        </div>

        <div className="container max-w-6xl mx-auto px-6 relative z-20">
          <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-20">

            {/* LEFT */}
            <div className="w-full lg:w-3/5 space-y-8 text-center lg:text-left">
              <div className="space-y-4">
                <h1 className="text-4xl md:text-7xl text-purple-600 font-black dark:text-white leading-tight tracking-tighter">
                  About
                </h1>
                <p className="text-xl text-slate-600 dark:text-slate-400 leading-relaxed font-light max-w-2xl mx-auto lg:mx-0">
                  I'm <span className="dark:text-white font-medium">Gokulakrishnan A</span>, a MERN Stack Developer building <span className="dark:text-white font-medium">high-performance</span> web apps with a focus on robust architectures and user-centric design.
                </p>
                <p className='text-slate-600 dark:text-slate-400 leading-relaxed font-light max-w-2xl mx-auto lg:mx-0 '>
                  I am a passionate and results-oriented Full Stack Developer with a strong foundation in computer science and a proven track record of building modern, scalable web applications. My expertise spans the entire development lifecycle, from conceptualization and database design to frontend implementation and deployment. I am committed to writing clean, efficient, and maintainable code while continuously learning and adapting to new technologies.
                </p>
              </div>
              <button className="group relative px-8 py-4 bg-slate-900 dark:bg-white text-white dark:text-slate-900 rounded-2xl font-bold transition-all hover:scale-105 active:scale-95 overflow-hidden">
                <span className="relative z-10">Download Resume</span>
                <div className="absolute inset-0 bg-gradient-to-r from-purple-600 to-blue-600 opacity-0 group-hover:opacity-100 transition-opacity"></div>
              </button>
            </div>


            <div>
              <div className=' w-96 h-96  border-2 border-slate-200 dark:border-slate-800 rounded-full '>
                <img src="/profile.png" className='w-full h-full object-cover rounded-full' alt="" />
              </div>
            </div>



          </div>
        </div>
      </section>

      {/*  EDUCATION */}
      <section id="education" className="sticky-section sticky top-0 z-30 min-h-screen py-24 bg-white/95 dark:bg-slate-950/95 backdrop-blur-xl rounded-t-[60px] border-t border-slate-200 dark:border-slate-800 shadow-[0_-20px_50px_rgba(0,0,0,0.1)]">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto">
            <div className="mb-20 text-center">
              <h1 className="text-4xl font-black dark:text-white">
                Academic <span className="text-purple-600">Journey</span>
              </h1>
              <div className="h-1.5 w-20 bg-purple-600 mx-auto mt-4 rounded-full"></div>
            </div>
                   
           
                  
            <div className="space-y-16">
              {educationData.map((edu, index) => (
                <div key={index} className="relative pl-12 border-l-2 border-slate-200 dark:border-slate-800 group">
                  <div className="absolute -left-[11px] top-0 w-5 h-5 rounded-full bg-white dark:bg-slate-900 border-4 border-slate-200 dark:border-slate-800 group-hover:border-purple-600 transition-all duration-500 scale-100 group-hover:scale-125"></div>
                  <div className="flex flex-col md:flex-row md:items-start justify-between gap-6">
                    <div className="space-y-3">
                      <span className="text-sm font-black uppercase tracking-widest text-purple-600 opacity-80">{edu.duration}</span>
                      <h3 className="text-2xl md:text-3xl font-bold dark:text-white group-hover:translate-x-2 transition-transform duration-300">{edu.degree}</h3>
                      <p className="text-lg text-slate-500 dark:text-slate-400 font-medium">{edu.institution}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>

             </div>  
          </div>
       
      </section>
    </div>
  );
};
