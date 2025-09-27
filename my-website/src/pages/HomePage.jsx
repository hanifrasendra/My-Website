import Introduction from '../components/IntroductionCmp/Introduction.jsx'
import About from '../components/AboutCmp/About.jsx'
import Project from '../components/ProjectCmp/Project.jsx'
import Porto from '../components/PortoCmp/Porto.jsx'
import Skill from '../components/SkillCmp/Skill.jsx'
import Contact from '../components/ContactCmp/Contact.jsx'
import InTouch from '../components/InTouchCmp/InTouch.jsx'

const HomePage = () => {
    return(
        <div>
            <Introduction/>
            <About/>
            <Project/>
            <Porto/>
            <Skill/>
            <Contact/>
            <InTouch/>
        </div>
    )
}

export default HomePage