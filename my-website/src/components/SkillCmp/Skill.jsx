import skillStyles from './Skill.module.css'


const Skill = () => {
    return(
        <div className={skillStyles.skillContent} id="skill">
            <h1>Skill</h1>
            <div className={skillStyles.skillContainer}>
                <div className={skillStyles.skillBox}>
                    <div className={skillStyles.skill}></div>
                    <div className={`${skillStyles.skill} ${skillStyles.previous}`}></div>
                    <div className={`${skillStyles.skill} ${skillStyles.hovered}`}></div>
                    <div className={`${skillStyles.skill} ${skillStyles.after}`}></div>
                    <div className={skillStyles.skill}></div>
                </div>
            </div>
        </div>
    )
}

export default Skill