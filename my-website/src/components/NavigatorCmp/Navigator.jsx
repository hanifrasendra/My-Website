

const Navigator = () => {


    return(
        <div className={`w-full absolute top-0 z-10`}>
            <div className={`flex justify-between mx-[100px] h-[100px] sticky top-0`}>
                <div className={`flex flex-start w-[80px] h-[80px] mt-[10px]`}>
                    <img src="public/Profile_Logo.png" alt="" 
                    className={`object-cover`}    
                />
                </div>
                <ul className={`flex flex-end gap-[66px] items-center`}>
                    {["Home", "About", "Portofolio", "Skill", "Contact"].map((item) => (
                        <li
                            key={item}
                            className={`relative`}
                        >
                            <a href={`#${item}`} className={`text-[24px] text-[rgba(255,255,255,1)] after:bg-[rgba(188,122,0,1)] after:absolute after:w-0 after:h-[4px] hover:after:w-full after:transition-all after:ease-in-out after:duration-300 after:bottom-[-10px] after:left-0`}>{item}</a>
                        </li>
                    ))}
                </ul>
            </div>
        </div>
    )
}

export default Navigator;