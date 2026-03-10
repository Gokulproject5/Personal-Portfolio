import Header from './assets/components/Header'
import { About } from './assets/pages/About.jsx'
import { Contact } from './assets/pages/Contact.jsx'
import { Home } from './assets/pages/Home.jsx'
import '@fontsource-variable/sansita-swashed';
import ApiProvider from './assets/context/ApiProvider.jsx'
import Skill from './assets/pages/Skill.jsx'
import Project from './assets/pages/Project.jsx'
import Education from './assets/pages/Education.jsx';

function App() {
    return (
        <ApiProvider>
            {/* <div className="relative bg-slate-50 dark:bg-slate-950 transition-colors duration-500 overflow-x-hidden"> */}
                <Header />
                <Home />
                <About />
                <Education />
                <Skill />
                <Project />
                <Contact />
            {/* </div> */}
        </ApiProvider>
    )
}

export default App
