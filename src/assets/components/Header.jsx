import React, { useContext, useEffect, useState } from 'react'
import { themeContext } from '../context/themeApi';
import { BsMoonStars } from "react-icons/bs";
import { MdOutlineWbSunny, MdMenu, MdClose } from "react-icons/md";
import { GrGithub } from 'react-icons/gr';

const Header = () => {
   const { theme, setTheme } = useContext(themeContext)
   const [isMenuOpen, setIsMenuOpen] = useState(false)
      
   useEffect(() => {
     const root = window.document.documentElement;
     if(theme === "dark") {
        root.classList.add("dark");
        localStorage.setItem("theme", "dark");
     } else {
        root.classList.remove("dark");
        localStorage.setItem("theme", "light");
     }
   }, [theme])

   const handleTheme = () => {
        setTheme(prev => prev === 'dark' ? 'light' : 'dark');
    };

    const scrollTo = (id) => {
        const element = document.getElementById(id);
        if (element) {
            element.scrollIntoView({ behavior: 'smooth' });
            setIsMenuOpen(false);
        }
    };

    return (
        <header className='fixed top-0 z-[100] w-full transition-all duration-500 bg-white/70 dark:bg-slate-950/70 backdrop-blur-xl border-b border-slate-200/50 dark:border-slate-800/50'>
            <div className='max-w-7xl mx-auto flex justify-between items-center px-6 md:px-10 py-4'>
                
                {/* Logo  */}
                <div onClick={() => scrollTo('home')} className='flex items-center gap-3 group cursor-pointer'>
                    <div className='relative'>
                        <div className='absolute inset-1 rounded-full blur opacity-20 transition duration-500'></div>
                        <img src="/favicon.png" className='relative w-9 h-9 object-contain' alt="logo" />
                    </div>
                    <h2 className='text-xl sec font-black tracking-wider dark:text-white uppercase'>
                        GOKUL
                    </h2>
                </div>

                {/* Navigation - Desktop */}
                <nav className='hidden sec md:flex items-center gap-8 text-sm font-bold uppercase tracking-widest text-slate-600 dark:text-slate-400'>
                    <button onClick={() => scrollTo('home')} className="hover:text-purple-600 transition-colors">Home</button>
                    <button onClick={() => scrollTo('about')} className="hover:text-purple-600 transition-colors">About</button>
                    <button onClick={() => scrollTo('skills')} className="hover:text-purple-600 transition-colors">Skills</button>
                    <button onClick={() => scrollTo('project')} className="hover:text-purple-600 transition-colors">Projects</button>
                    <button onClick={() => scrollTo('contact')} className="hover:text-purple-600 transition-colors">Contact</button>
                </nav>

                {/* Actions Area */}
                <div className='flex items-center gap-5'>
                    <button 
                        onClick={handleTheme} 
                        className='p-2.5 rounded-full bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-yellow-400 hover:scale-110 active:scale-95 transition-all shadow-inner'
                    >
                        {theme === "dark" ? <MdOutlineWbSunny size={18} /> : <BsMoonStars size={18} />}
                    </button>
                    
                    <div className='h-6 w-[1px] bg-slate-200 dark:bg-slate-800 hidden sm:block'></div>

                    <a 
                        href="https://github.com/Gokulproject5" 
                        target="_blank" 
                        rel="noreferrer"
                        className='text-2xl text-slate-800 dark:text-white hover:text-purple-600 dark:hover:text-purple-400 transition-transform hover:-translate-y-1 hidden sm:block'
                    >
                        <GrGithub />
                    </a>

                    {/* Mobile  */}
                    <button 
                        className="md:hidden p-2 dark:text-white"
                        onClick={() => setIsMenuOpen(!isMenuOpen)}
                    >
                        {isMenuOpen ? <MdClose size={28} /> : <MdMenu size={28} />}
                    </button>
                </div>
            </div>

            {/* Mobile */}
            {isMenuOpen && (
                <div className="md:hidden absolute top-full left-0 w-full bg-white dark:bg-slate-950 border-b border-slate-200 dark:border-slate-800 py-6 px-10 flex flex-col gap-6 shadow-2xl transition-all animate-in fade-in slide-in-from-top-4">
                    <button onClick={() => scrollTo('home')} className="text-left font-bold uppercase tracking-[0.2em] text-sm dark:text-white">Home</button>
                    <button onClick={() => scrollTo('about')} className="text-left font-bold uppercase tracking-[0.2em] text-sm dark:text-white">About</button>
                    <button onClick={() => scrollTo('skills')} className="text-left font-bold uppercase tracking-[0.2em] text-sm dark:text-white">Skills</button>
                    <button onClick={() => scrollTo('project')} className="text-left font-bold uppercase tracking-[0.2em] text-sm dark:text-white">Projects</button>
                    <button onClick={() => scrollTo('contact')} className="text-left font-bold uppercase tracking-[0.2em] text-sm dark:text-white">Contact</button>
                </div>
            )}
        </header>
    )
}

export default Header
