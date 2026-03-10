import React, { useContext, useEffect, useRef, useState } from 'react'
import { themeContext } from '../context/themeApi';
import { BsMoonStars } from "react-icons/bs";
import { MdOutlineWbSunny, MdMenu, MdClose } from "react-icons/md";
import { GrGithub } from 'react-icons/gr';

const SECTION_IDS = ['home', 'about', 'education', 'skills', 'project', 'contact'];

const Header = () => {
    const { theme, setTheme } = useContext(themeContext)
    const [isMenuOpen, setIsMenuOpen] = useState(false)
  
    const sectionOffsets = useRef({});

    useEffect(() => {
        const root = window.document.documentElement;
        if (theme === "dark") {
            root.classList.add("dark");
            localStorage.setItem("theme", "dark");
        } else {
            root.classList.remove("dark");
            localStorage.setItem("theme", "light");
        }
    }, [theme])

    
    useEffect(() => {
        const cache = {};
        SECTION_IDS.forEach(id => {
            const el = document.getElementById(id);
            if (el) cache[id] = el.getBoundingClientRect().top + window.scrollY;
        });
        sectionOffsets.current = cache;
    }, []);

    const handleTheme = () => {
        setTheme(prev => prev === 'dark' ? 'light' : 'dark');
    };

    const scrollTo = (id) => {
        setIsMenuOpen(false);
        const HEADER = 72;
        if (id === 'home') {
            window.scrollTo({ top: 0, behavior: 'smooth' });
            return;
        }
    
        const top = (sectionOffsets.current[id] ?? 0) - HEADER;
        window.scrollTo({ top, behavior: 'smooth' });
    };

    return (
        <header className='fixed top-0 z-[100] w-full transition-all duration-500 bg-white/70 dark:bg-slate-950/70 backdrop-blur-xl border-b border-slate-200/50 dark:border-slate-800/50
        rounded-b-[40px] shadow-[0_-20px_50px_rgba(0,0,0,0.1)]'>
            <div className='max-w-6xl mx-auto flex justify-between items-center px-6 md:px-10 py-4'>

                {/* Logo  */}
                <div onClick={() => scrollTo('home')} className='flex items-center  group cursor-pointer'>
                    <div className='relative'>
                        <div className='absolute inset-1 rounded-full blur opacity-20 transition duration-500'></div>
                        {/* <img src="/favicon.png" className='relative w-9 h-9 object-contain' alt="logo" /> */}
                    </div>
                    <h2 className='text-xl font-bold  tracking-wider dark:text-white uppercase'>
                        GOKUL
                    </h2>
                </div>

                {/* Navigation - Desktop */}
                <nav className='hidden  md:flex items-center gap-8 text-sm font-bold uppercase tracking-widest text-slate-600 dark:text-slate-400'>
                    <button onClick={() => scrollTo('home')} className="hover:text-purple-600 transition-colors">Home</button>
                    <button onClick={() => scrollTo('about')} className="hover:text-purple-600 transition-colors">About</button>
                    <button onClick={() => scrollTo('education')} className="hover:text-purple-600 transition-colors">Education</button>
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
                    <button onClick={() => scrollTo('education')} className="text-left font-bold uppercase tracking-[0.2em] text-sm dark:text-white">Education</button>
                    <button onClick={() => scrollTo('skills')} className="text-left font-bold uppercase tracking-[0.2em] text-sm dark:text-white">Skills</button>
                    <button onClick={() => scrollTo('project')} className="text-left font-bold uppercase tracking-[0.2em] text-sm dark:text-white">Projects</button>
                    <button onClick={() => scrollTo('contact')} className="text-left font-bold uppercase tracking-[0.2em] text-sm dark:text-white">Contact</button>

                </div>
            )}
        </header>
    )
}

export default Header
