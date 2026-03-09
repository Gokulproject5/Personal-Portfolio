import React from 'react';
import { SiMongodb, SiExpress, SiReact, SiNodedotjs, SiTailwindcss, SiBootstrap, SiMui, SiJavascript } from 'react-icons/si';

const Skill = () => {
  const skillSet = [
    { name: 'React.js', icon: <SiReact className="text-[#61DAFB]" />, },
    { name: 'Node.js', icon: <SiNodedotjs className="text-[#339933]" />, },
    { name: 'Express.js', icon: <SiExpress className="dark:text-white text-slate-900" />, },
    { name: 'MongoDB', icon: <SiMongodb className="text-[#47A248]" />, },
    { name: 'Tailwind CSS', icon: <SiTailwindcss className="text-[#06B6D4]" /> },
    { name: 'Material UI', icon: <SiMui className="text-[#007FFF]" />, },
    { name: 'Bootstrap', icon: <SiBootstrap className="text-[#7952B3]" /> },
    { name: 'JavaScript', icon: <SiJavascript className="text-[#F7DF1E]" /> },];

  return (
    <section
      id="skills"

      className="sticky-section sticky top-0 z-40 min-h-screen py-24 bg-slate-50 dark:bg-slate-950 transition-colors duration-500 shadow-[0_-20px_50px_rgba(0,0,0,0.1)] dark:shadow-[0_-20px_50px_rgba(0,0,0,0.3)] rounded-t-[50px] lg:rounded-t-[100px]"
    >
      {/* Background Decor */}
      <div className="absolute inset-0 opacity-10 dark:opacity-20 pointer-events-none overflow-hidden rounded-t-[50px] lg:rounded-t-[100px]">
        <div className="absolute top-[20%] right-[-5%] w-[30%] h-[30%] bg-purple-600 rounded-full blur-[120px]"></div>
        <div className="absolute bottom-[10%] left-[-5%] w-[30%] h-[30%] bg-blue-600 rounded-full blur-[120px]"></div>
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="text-center mb-16 space-y-4">
          {/* <div className="inline-block px-4 py-1.5 rounded-full bg-purple-100 dark:bg-purple-900/30 text-purple-700 dark:text-purple-300 text-sm font-bold tracking-widest uppercase">
            My Abilities
          </div> */}
          <h1 className="text-4xl md:text-5xl font-black dark:text-white leading-tight">
            Technical <span className="text-purple-600 dark:text-purple-400">Expertise</span>
          </h1>
          <p className="text-slate-600 dark:text-slate-400 max-w-2xl mx-auto text-lg">
            A specialized stack focused on building high-performance,
            scalable, and <span className="text-slate-900 dark:text-white font-semibold">modern web applications.</span>
          </p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:mx-auto lg:grid-cols-4 max-w-4xl  gap-6 md:gap-8">
          {skillSet.map((skill, index) => (
            <div
              key={index}
              className="group relative p-8 bg-white dark:bg-slate-900 rounded-3xl border border-slate-200 dark:border-slate-800 transition-all duration-500 hover:shadow-2xl hover:shadow-purple-500/10 hover:-translate-y-2"
            >
              <div className="absolute inset-0 bg-gradient-to-br from-purple-600/10 to-blue-600/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-3xl"></div>

              <div className="relative z-10 flex flex-col items-center">
                <div className="text-6xl mb-6 transition-transform duration-500 group-hover:scale-110 group-hover:rotate-3">
                  {skill.icon}
                </div>
                <h3 className="text-xl font-bold dark:text-white mb-2">{skill.name}</h3>
                <span className="px-3 py-1 rounded-lg bg-slate-100 dark:bg-slate-800 text-slate-500 dark:text-slate-400 text-xs font-black uppercase tracking-tighter">
                  {skill.level}
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>

    </section>
  );
};

export default Skill;
