import skillStyles from './Skill.module.css'
import {useState, useEffect} from 'react'
import * as faIcons from 'react-icons/fa'
import * as siIcons from 'react-icons/si'
import * as mdIcons from 'react-icons/md'


const Skill = () => {
    const [isHovered, setIsHovered] = useState(false);

    const skills = [
        {
            icon: faIcons.FaHtml5,
            title: "HTML"
        },
        {
            icon: faIcons.FaCss3,
            title: "CSS"
        },
        {
            icon: siIcons.SiJavascript,
            title: "Javascript"
        },
        {
            icon: faIcons.FaReact,
            title: "React JS"
        },
        {
            icon: faIcons.FaNodeJs,
            title: "Node JS"
        },
        {
            icon: faIcons.FaPhp,
            title: "PHP"
        }

    ]

    const totalSkill = skills.length

    const moveSkillCard = (dir) => {
        setIsHovered(prev => {
            if ((prev + dir) >= totalSkill) {
                return 0
            } else if ((prev + dir) < 0) {
                return totalSkill - 1
            } else {
                return (prev + dir)
            }
        });
    }

    const getCardSkill = (index) => {
        if (index === isHovered) {return 'hovered'};
        if (index === (isHovered - 1 + totalSkill) % totalSkill) {return 'previous'};
        if (index === (isHovered + 1) % totalSkill) {return 'after'};
        return'';
    }

    useEffect(() => {
        const interval = setInterval(() => {
            moveSkillCard(1);
        }, 4000);

        return () => clearInterval(interval);
    }, [isHovered])

    return(
        <div className={skillStyles.skillContent} id="skill">
            <h1>Skill</h1>
            <div className={skillStyles.skillContainer}>
                
                <div className={skillStyles.skillBox}>
                    <button
                    onClick={() => moveSkillCard(-1)}
                    className={`${skillStyles.skillButton} ${skillStyles.left}`}
                    >
                    
                        <mdIcons.MdArrowBackIosNew/>
                    </button>
                    <button
                    onClick={() => moveSkillCard(1)}
                    className={`${skillStyles.skillButton} ${skillStyles.right}`}
                    >
                    
                        <mdIcons.MdArrowForwardIos/>
                    </button>
                    {skills.map((skill, index) => {
                        const IconComponent = skill.icon;
                        const cardSkill = getCardSkill(index);
                        return(
                            <div
                            key={index}
                            className={`${skillStyles.skill} 
                            ${cardSkill ? skillStyles[cardSkill] : ''}`}
                            >
                                
                                <IconComponent 
                                className={skillStyles.skillIcon} 
                                />
                                <h3
                                >{skill.title}</h3>
                            </div>
                        )
                    })}
                </div>
            </div>
        </div>
    )
}

export default Skill