import headerStyles from './Header.module.css'
import {useState, useEffect} from 'react'

    const Header = () => {
        const [isScroll, setIsScrolled] = useState(false);

        useEffect(() => {
            const handleScroll = () => {
                const currentScrollY = window.scrollY;
                if(currentScrollY > 100) {
                    setIsScrolled(true);
                } else {
                    setIsScrolled(false);
                }
            }

            window.addEventListener('scroll', handleScroll);
            return () => {
                window.removeEventListener('scroll', handleScroll);
            }
        })

        return(
                <header className={headerStyles.header}>
                    <div className={`${headerStyles.innerHeader} ${isScroll ? headerStyles.scrolled : ''}`}>
                        <div className={headerStyles.logoWrapper}>
                            <a href="#introduction">
                                <img className={headerStyles.logo} src="/My-Website/Profile_Logo.png" alt=""/>
                            </a>
                        </div>
                        <nav className={headerStyles.navigator}>
                            <ul className={headerStyles.navWrapper}>
                                <li className={`${headerStyles.navLink} ${isScroll ? headerStyles.scrolled : ''}`}><a href="#introduction">Home</a></li>
                                <li className={`${headerStyles.navLink} ${isScroll ? headerStyles.scrolled : ''}`}><a href="#about">About</a></li>
                                <li className={`${headerStyles.navLink} ${isScroll ? headerStyles.scrolled : ''}`}><a href="#my-project">Portofolio</a></li>
                                <li className={`${headerStyles.navLink} ${isScroll ? headerStyles.scrolled : ''}`}><a href="#skill">Skill</a></li>
                                <li className={`${headerStyles.navLink} ${isScroll ? headerStyles.scrolled : ''}`}><a href="#contact">Contact</a></li>
                            </ul>
                        </nav>
                    </div>
                </header>
            )
    }



export default Header;