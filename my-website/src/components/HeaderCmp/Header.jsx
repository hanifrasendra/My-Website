import headerStyles from './Header.module.css'

const Header = () => {
    return(
            <header className={headerStyles.header}>
                <div className={headerStyles.innerHeader}>
                    <div className={headerStyles.logoWrapper}>
                        <a href="#introduction">
                            <img className={headerStyles.logo} src="public/Profile_Logo.png" alt=""/>
                        </a>
                    </div>
                    <nav className={headerStyles.navigator}>
                        <ul className={headerStyles.navWrapper}>
                            <li className={headerStyles.navLink}><a href="#introduction">Home</a></li>
                            <li className={headerStyles.navLink}><a href="#about">About</a></li>
                            <li className={headerStyles.navLink}><a href="#my-project">Portofolio</a></li>
                            <li className={headerStyles.navLink}><a href="#skill">Skill</a></li>
                            <li className={headerStyles.navLink}><a href="#contact">Contact</a></li>
                        </ul>
                    </nav>
                </div>
            </header>
        )
}

export default Header;