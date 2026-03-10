import React from 'react'

const Education = () => {
     const educationData = [
    {
      degree: "Full Stack Engineering Intern",
      institution: "CyberDude Networks Pvt.Ltd. , Tamilnadu",
      duration: "Present",
     
    },
    {
      degree: "Bachelor of Technology in Information Technology",
      institution: "JKK Nataraja college of engineering and technology ,Tamilnadu",
      duration: "2022 - 2026",
     
    },
    {
      degree: "Schooling",
      institution: "Govt.Higher Sec.School , Tamilnadu",
      duration: "2015-2022",
     
    },
    
  ];
  return (
    <>
           {/*  EDUCATION */}
      <section id="education" className="sticky top-0 z-30 min-h-screen py-24 bg-white/95 dark:bg-slate-950/95 backdrop-blur-xl rounded-t-[60px] border-t border-slate-200 dark:border-slate-800 shadow-[0_-20px_50px_rgba(0,0,0,0.1)]">
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
                      <h1 className="text-2xl md:text-3xl font-bold dark:text-white group-hover:translate-x-2 transition-transform duration-300">{edu.degree}</h1>
                      <p className="text-lg text-slate-500 dark:text-slate-400 font-medium">{edu.institution}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>

             </div>  
          </div>
       
      </section>
    </>
  )
}

export default Education