import introductionStyles from './Introduction.module.css'

const Introduction = () => {
    return(
        <div className={introductionStyles.introduction} id="introduction">
            <div className={introductionStyles.introductionLayout}>
                <div className={introductionStyles.judul}>
                    <p>Hello!, I am </p>
                    <h1 className={introductionStyles.nameIntro}><span className={introductionStyles.gradientBrownName}>Hanif Rasendra</span></h1> 
                    <br/> 
                    <h1 className={introductionStyles.roleIntro}>A <span className={introductionStyles.gradientBrownRole}>Front-End Dev</span></h1>
                    <div className={introductionStyles.buttonLayout}>
                        <button className={introductionStyles.contactBtn}>Contact </button>
                        <button className={introductionStyles.sertifBtn}>Sertificate</button>
                    </div>
                </div>
                <div className={introductionStyles.squareLayout}>
                    <div className={introductionStyles.square}>
                    </div>
                </div>        
            </div>
        </div>
    )
}

export default Introduction;