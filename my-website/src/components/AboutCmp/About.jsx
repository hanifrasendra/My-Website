import aboutStyles from './About.module.css';

const About = () => {
    return(
        <div className={aboutStyles.aboutContent} id="about">
            <div className={aboutStyles.aboutHero}>
                <div className={aboutStyles.myContent}>
                    <h2>About Me</h2>
                    <p>
                        Halo! Saya Hanif Rasendra Putra, seorang mahasiswa yang penuh semangat dan tengah menempuh studi di Universitas Pembangunan Nasional "Veteran" Jawa Timur (UPN Jatim). Saya sedang mendalami dunia teknologi informasi dengan fokus utama pada Web Development.
                        Perjalanan saya dalam pemrograman web dimulai dari bangku kuliah, di mana saya tidak hanya mempelajari teori-teori fundamental seperti struktur data, algoritma, dan basis data, tetapi juga secara aktif mengasah keterampilan praktis dalam membangun website yang fungsional dan menarik. Saya sangat tertarik untuk menyelesaikan masalah melalui barisan kode dan menciptakan pengalaman digital yang bermanfaat bagi pengguna.
                    </p>
                </div>
                <div className={aboutStyles.myImage}>
                    <div className={`${aboutStyles.squareFrame} ${aboutStyles.horizontal}`}></div>
                    <div className={`${aboutStyles.squareFrame} ${aboutStyles.vertical}`}></div>
                    <div className={`${aboutStyles.squareFrame} ${aboutStyles.photo}`}>
                        <img src="public/foto_profil_web-removebg-preview.png" alt=""/>
                    </div>
                </div>
            </div>
            <div>
                <div className={aboutStyles.moreInfoBtn}>for more info</div>
            </div>
        </div>
    )
}

export default About;