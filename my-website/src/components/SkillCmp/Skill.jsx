
import {useState, useEffect, useRef} from 'react'
import * as faIcons from 'react-icons/fa'
import * as siIcons from 'react-icons/si'
import * as mdIcons from 'react-icons/md'


const Skill = () => {
    const [isHovered, setIsHovered] = useState(false);

    const skills = [
        {
            element: (
                <div className={`grid grid-cols-3 grid-rows-3 bg-[rgba(0,0,0,1)] border-3 border-[rgba(169,110,0,1)] w-[251px] h-[234px]`}>
                    <div>
                        <faIcons.FaHtml5 className={``} size={50}/>
                    </div>
                    <div>
                        <p>HTML</p>
                    </div>
                </div>
            )
        },
        {
            element: (
                <div className={`grid grid-cols-3 grid-rows-3 bg-[rgba(0,0,0,1)] border-3 border-[rgba(169,110,0,1)] w-[251px] h-[234px]`}>
                    <div>
                        <faIcons.FaCss3 className={``} size={50}/>
                    </div>  
                    <div>
                        <p>CSS</p>
                    </div>
                </div>
            )
        },
        {
            text: "Javasript, for making a responsive web UI/UX and logic",
            element: (
                <div className={`grid grid-cols-3 grid-rows-3 bg-[rgba(0,0,0,1)] border-3 border-[rgba(169,110,0,1)] w-[251px] h-[234px]`}>
                    <div>
                        <siIcons.SiJavascript className={``} size={50}/>    
                    </div>
                    <div>
                        <p>Javascript</p>
                    </div>
                </div>
            )
        },
        {
            element: (
                <div className={`grid grid-cols-3 grid-rows-3 bg-[rgba(0,0,0,1)] border-3 border-[rgba(169,110,0,1)] w-[251px] h-[234px]`}>
                    <div>
                        <faIcons.FaReact className={``} size={50}/>
                    </div>
                    <div>
                        <p>React JS</p>
                    </div>
                </div>
            )
        },
        {
            element: (
                <div className={`grid grid-cols-3 grid-rows-3 bg-[rgba(0,0,0,1)] border-3 border-[rgba(169,110,0,1)] w-[251px] h-[234px]`}>
                    <div>
                        <faIcons.FaNodeJs className={``} size={50}/>
                    </div>
                    <div>
                        <p>Node JS</p>
                    </div>
                </div>
            )
        },
        {
            element: (
                <div className={`grid grid-cols-3 grid-rows-3 bg-[rgba(0,0,0,1)] border-3 border-[rgba(169,110,0,1)] w-[251px] h-[234px]`}>
                    <div>
                        <faIcons.FaPhp className={``} size={50}/>
                    </div>
                    <div>
                        <p>PHP</p>
                    </div>
                </div>
            )
        }

    ]


    return(
        <div className={``} id="skill">
            <h1 className={`text-[50px] text-[rgba(255,255,255,1)]`}>Technical Skill</h1>
            <div className={`relative`}>
                
                <div className={``}>
                    <button
                    onClick={() => moveSkillCard(-1)}
                    className={``}
                    >
                    
                        <mdIcons.MdArrowBackIosNew/>
                    </button>
                    <button
                    onClick={() => moveSkillCard(1)}
                    className={``}
                    >
                    
                        <mdIcons.MdArrowForwardIos/>
                    </button> 
                </div>
                <div

                className={`flex `}
                >
                    {skills.map((skill) => (
                        <div
                            key={skill.index}
                        >
                            {skill.element}
                        </div>
                    ))}
                </div>
            </div>
        </div>
    )
}

export default Skill