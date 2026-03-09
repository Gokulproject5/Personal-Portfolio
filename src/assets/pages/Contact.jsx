import React, { useState } from 'react';
import { SiGithub, SiLinkedin, SiInstagram, SiYoutube } from 'react-icons/si';
import { HiOutlineArrowNarrowRight, HiOutlineMoon, HiOutlineSun } from 'react-icons/hi';
import { SlSocialTwitter } from 'react-icons/sl';
import { BiArrowFromBottom, BiArrowFromTop } from 'react-icons/bi';

export const Contact = () => {
  const [revealed, setRevealed] = useState(false);

  const socialLinks = [
    { icon: <SiInstagram />, href: "www.instagram.com" },
    { icon: <SiLinkedin />, href: "https://www.linkedin.com/in/gokulakrishnan-a-g8608" },
  
    { icon: <SiGithub />, href: "https://github.com/Gokulproject5/" },
  ];
    const scrollTo = (id) => {
        const element = document.getElementById(id);
        if (element) {
            element.scrollIntoView({ behavior: 'smooth' });
            
        }
    };
  return (
    <footer id="contact" className="sticky top-0 z-[60] min-h-screen transition-colors duration-700 bg-slate-50 dark:bg-[#020617] text-slate-900 dark:text-white pt-24 pb-10 overflow-hidden font-sans">

      {/* overlay */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-20 left-[10%] w-72 h-72 bg-purple-400/10 dark:bg-purple-600/10 rounded-full blur-[100px]"></div>
        <div className="absolute bottom-10 right-[10%] w-72 h-72 bg-blue-400/10 dark:bg-blue-600/10 rounded-full blur-[100px]"></div>
        {/* stars */}
        <div className="hidden dark:block absolute top-40 right-1/4 w-1 h-1 bg-white rounded-full animate-pulse"></div>
        <div className="hidden dark:block absolute bottom-40 left-1/3 w-1 h-1 bg-purple-400 rounded-full animate-ping"></div>
      </div>

      <div className="container mx-auto px-6 relative z-10 text-center">

        {/* Contact Section */}
        <div className="mb-24">
          

          <h2 className="text-4xl md:text-8xl font-black tracking-tighter mb-12">
            Let's have a <span className="italic font-serif text-purple-600 dark:text-purple-400">chat</span>
          </h2>

          <button
            onClick={() => setRevealed(!revealed)}
            className="group flex items-center gap-4 mx-auto text-xl md:text-2xl font-bold transition-all"
          >
            <span className="border-b-2 border-slate-200 dark:border-slate-800 group-hover:border-purple-600 transition-colors">
              {revealed ? "agokul110@gmail.com" : "Click to reveal email"}
            </span>
            <div className={`p-3 rounded-full bg-slate-900 dark:bg-purple-600 group-hover:bg-purple-500 text-white transition-all duration-500 ${revealed ? 'rotate-0' : 'group-hover:rotate-45'}`}>
              <HiOutlineArrowNarrowRight size={24} />
            </div>
          </button>
        </div>

        {/* Footer */}
        <div className="pt-16 border-t border-slate-200 dark:border-slate-800/50">
          {/* Social Icons */}
          <div className="flex justify-center gap-8 mb-10">
            {socialLinks.map((item, i) => (
              <a key={i} href={item.href} target='_blank' className="text-xl text-slate-400 hover:text-purple-600 dark:hover:text-white transition-all hover:-translate-y-1">
                {item.icon}
              </a>
            ))}
          </div>

          <h3 className="text-2xl font-black tracking-[0.3em] text-slate-900 dark:text-white mb-8">GOKUL</h3>

          {/* Quick Links */}
          <div className="flex flex-wrap justify-center gap-x-8 gap-y-2 mb-12">
            {["Home", "Projects", "About", "Skills"].map((link) => (
              <a key={link} href={`#${link.toLowerCase()}`} className="text-xs font-bold uppercase tracking-widest text-slate-400 hover:text-purple-600 dark:hover:text-purple-400 transition-colors">
                {link}
              </a>
            ))}
          </div>

          <p className="text-[10px] font-bold tracking-[0.4em] text-slate-400 dark:text-slate-600 uppercase">
            © 2026 Gokulakrishnan A • Made with Passion
          </p>
        </div>
      </div>


      <button 
         onClick={()=>scrollTo('home')}   
        className="fixed bottom-6 right-6 w-10 h-10 flex items-center justify-center rounded-full bg-white dark:bg-slate-800 shadow-xl border border-slate-200 dark:border-slate-700 text-slate-900 dark:text-yellow-400 z-50 hover:scale-110 active:scale-95 transition-all"
      >
        <BiArrowFromBottom />
      </button>
    </footer>
  );
};

