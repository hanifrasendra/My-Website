import projectStyles from './Project.module.css';

const Project = () => {
    return(
        <div className={projectStyles.myProject} id="my-project">
            <div className={projectStyles.projectContent}>
                <h2>Project</h2>
                <hr/>
                <p>
                    Saya telah menyelesaikan <span className={projectStyles.coloredText}>+10</span> Project web development, dan <span className={projectStyles.coloredText}>+15</span> Project berbasis Desktop. yang terdiri dari tugas kuliah, proyek latihan, dan tantangan pribadi. Setiap baris kode yang saya tulis adalah langkah nyata dalam mengasah kemampuan teknis dan pemecahan masalah saya. "Saya bersemangat dalam menciptakan solusi digital yang memberikan dampak nyata."
                </p>
                <div className={projectStyles.projectCounter}>
                    <div className={projectStyles.counterBox}>
                        <h1>10+</h1>
                        <p><span className={projectStyles.coloredText}>web</span> development</p>
                    </div>
                    <div className={projectStyles.counterBox}>
                        <h1>15+</h1>
                        <p><span className={projectStyles.coloredText}>Desktop</span> Development</p>
                    </div>
                    <div className={projectStyles.counterBox}>
                        <h1>12+</h1>
                        <p><span className={projectStyles.coloredText}>Highschool</span> Project</p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Project