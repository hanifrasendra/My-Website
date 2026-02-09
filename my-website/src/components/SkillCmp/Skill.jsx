
import {useState, useEffect, useRef} from 'react'
import * as faIcons from 'react-icons/fa'
import * as siIcons from 'react-icons/si'
import * as mdIcons from 'react-icons/md'


const Skill = () => {
    const [currentIndex, setCurrentIndex] = useState(0);
    const [isActive, setIsActive] = useState(0)
    const [isAfter, setIsAfter] = useState(0)
    const [isBefore, setIsBefore] = useState(0)
    const [gapWidth, setGapWidth] = useState(0)
    const carouselRef = useRef(null);
    const isTransitioning = useRef(false);

    useEffect(() => {
        const calculateOffset = () => {
            const calculatedWidth = window.innerWidth - (196 * 2)
            console.log(calculatedWidth)
            const card = document.querySelectorAll('.item-card')
            const cardWidth = card[0].offsetWidth
            console.log(cardWidth)
            const calculated = (calculatedWidth - (cardWidth * 5)) / 4
            console.log(calculated)
            setGapWidth(calculated)
        }

        calculateOffset()

        window.addEventListener('resize', calculateOffset)
        return () => window.removeEventListener('resize', calculateOffset)
    })


    

    const skills = [
        {
            element: (
                <div className={`grid grid-cols-3 grid-rows-3 bg-[rgba(0,0,0,0)] border-3 border-[rgba(169,110,0,0)] rounded-[15] transition-transform ease-in-out duration-[3s] w-[65px] h-[65px]
                    
                `}>
                    <div className={`col-start-1 col-end-4 row-start-2 flex justify-center items-center`}>
                        <faIcons.FaHtml5 className={`text-[rgba(255,255,255,1)] max-h-[65px] h-[35px] w-[35px]`}/>
                    </div>
                    <div className={`col-start-1 col-end-4 row-start-3 flex items-center`}>
                        <p className={`text-[rgba(255,255,255,0)] text-[30px] text-center font-semibold font-[Public_Sans] w-full `}>HTML</p>
                    </div>
                </div>
            )
        },
        {
            element: (
                <div className={`grid grid-cols-3 grid-rows-3 bg-[rgba(0,0,0,0)] border-3 border-[rgba(169,110,0,0)] rounded-[15] transition-transform ease-in-out duration-[3s] w-[65px] h-[65px]
                    
                `}>
                    <div className={`col-start-1 col-end-4 row-start-2 flex justify-center items-center`}>
                        <faIcons.FaCss3 className={`text-[rgba(255,255,255,1)] max-h-[65px] h-[35px] w-[35px]`}/>
                    </div>  
                    <div className={`col-start-1 col-end-4 row-start-3 flex items-center`}>
                        <p className={`text-[rgba(255,255,255,0)] text-[30px] text-center font-semibold font-[Public_Sans] w-full `}>CSS</p>
                    </div>
                </div>
            )
        },
        {
            text: "Javasript for making a responsive web UI/UX and logic",
            element: (
                <div className={`grid grid-cols-3 grid-rows-3 bg-[rgba(0,0,0,0)] border-3 border-[rgba(169,110,0,0)] rounded-[15] transition-transform ease-in-out duration-[3s] w-[65px] h-[65px]
                    
                `}>
                    <div className={`col-start-1 col-end-4 row-start-2 flex justify-center items-center`}>
                        <siIcons.SiJavascript className={`text-[rgba(255,255,255,1)] text-[rgba(255,255,255,1 )] max-h-[65px] h-[35px] w-[35px]`}/>    
                    </div>
                    <div className={`col-start-1 col-end-4 row-start-3 flex items-center`}>
                        <p className={`text-[rgba(255,255,255,0)] text-[30px] text-center font-semibold font-[Public_Sans] w-full`}>Javascript</p>
                    </div>
                </div>
            )
        },
        {
            element: (
                <div className={`grid grid-cols-3 grid-rows-3 bg-[rgba(0,0,0,0)] border-3 border-[rgba(169,110,0,0)] rounded-[15] transition-transform ease-in-out duration-[3s] w-[65px] h-[65px]
                    
                `}>
                    <div className={`col-start-1 col-end-4 row-start-2 flex justify-center items-center`}>
                        <faIcons.FaReact className={`text-[rgba(255,255,255,1)] max-h-[65px] h-[35px] w-[35px]`}/>
                    </div>
                    <div className={`col-start-1 col-end-4 row-start-3 flex items-center`}>
                        <p className={`text-[rgba(255,255,255,0)] text-[30px] text-center font-semibold font-[Public_Sans] w-full h-full`}>React JS</p>
                    </div>
                </div>
            )
        },
        {
            element: (
                <div className={`grid grid-cols-3 grid-rows-3 bg-[rgba(0,0,0,0)] border-3 border-[rgba(169,110,0,0)] rounded-[15] transition-transform ease-in-out duration-[3s] w-[65px] h-[65px]
                    
                `}>
                    <div className={`col-start-1 col-end-4 row-start-2 flex justify-center items-center`}>
                        <faIcons.FaNodeJs className={`text-[rgba(255,255,255,1)] max-h-[65px] h-[35px] w-[35px]`}/>
                    </div>
                    <div className={`col-start-1 col-end-4 row-start-3 flex items-center`}>
                        <p className={`text-[rgba(255,255,255,0)] text-[30px] text-center font-semibold font-[Public_Sans] w-full `}>Node JS</p>
                    </div>
                </div>
            )
        },
        {
            element: (
                <div className={`grid grid-cols-3 grid-rows-3 bg-[rgba(0,0,0,0)] border-3 border-[rgba(169,110,0,0)] rounded-[15] transition-transform ease-in-out duration-[3s] w-[65px] h-[65px]
                    
                `}>
                    <div className={`col-start-1 col-end-4 row-start-2 flex justify-center items-center`}>
                        <faIcons.FaPhp className={`text-[rgba(255,255,255,1)] max-h-[65px] h-[35px] w-[35px]`}/>
                    </div>
                    <div className={`col-start-1 col-end-4 row-start-3 flex items-center`}>
                        <p className={`text-[rgba(255,255,255,0)] text-[30px] text-center font-semibold font-[Public_Sans] w-full `}>PHP</p>
                    </div>
                </div>
            )
        }

    ]

    const totalItems = skills.length;
    const CENTER_OFFSET = 2;

    const allSkills = [
        ...skills.slice(-3),
        ...skills,
        ...skills.slice(0, 3)
    ] 

    useEffect(() => {
        updateCarousol(false);
    }, []);

    const updateCarousol = (withTransition = true, index = currentIndex) => {
        if(!carouselRef.current) return;

        const cardWidthHovered = carouselRef.current.children[0]?.offsetWidth;
        const cardWidth = cardWidthHovered
        console.log(cardWidth)

        
        console.log(index)
        
        const gap = gapWidth
        const offsetIndex = index + CENTER_OFFSET
        const offset = index * (cardWidth + gap);

        setIsActive(offsetIndex)
        setIsAfter(offsetIndex + 1)
        setIsBefore(offsetIndex - 1)
        console.log(isAfter)
        console.log(isBefore)
        console.log(isActive)

        carouselRef.current.style.transition = withTransition ? 'transform 0.5s ease-in-out' : '';
        carouselRef.current.style.transform = `translateX(-${offset}px)`;
        
    }

    const handleNext = () => {
        if (isTransitioning.current) return;
        isTransitioning.current = true;

        const newIndex = currentIndex + 1;
        setCurrentIndex(newIndex)
        updateCarousol(true, newIndex);

        setTimeout(() => {
            if(newIndex >= totalItems){ 
                setCurrentIndex(0)
                updateCarousol(false, 0);
            }
            isTransitioning.current = false
        }, 500);
    }

    useEffect(() => {
        updateCarousol(true)
    }, [currentIndex])

    useEffect(() => {
        const interval = setInterval(() => {
            handleNext()
        }, 3000)
        return () => clearInterval(interval);
    }, [currentIndex]) 

    return(
        <div className={`bg-[rgba(0,0,0,1)]`} id="skill">
            <h1 className={`text-[50px] text-[rgba(255,255,255,1)] pt-[169px] mx-[100px]`}>Technical Skill</h1>
            <div className={`relative mx-[188px] overflow-hidden mt-[116px]`}>
                <div className={`absolute z-1 w-full h-full bg-[linear-gradient(90deg,rgba(0,0,0,1)0%,rgba(0,0,0,0.8)1%,rgba(0,0,0,0.7)2%,transparent,rgba(0,0,0,0.7)98%,rgba(0,0,0,0.8)99%,rgba(0,0,0,1)100%)]`}></div>
                <div
                onClick={handleNext}
                ref={carouselRef}
                style={{
                    gap: `${gapWidth}px`
                }}
                className={`flex relative z-0 h-[328px] items-center`}
                >
                    {allSkills.map((skill, index) => (
                        <div
                            key={index}
                            className={`item-card transition-transform ease-in-out duration-[1s]
                                ${index === isActive ? 'scale-[2.88] bg-[rgba(0,0,0,1)] border-3 border-[rgba(169,110,0,1)]':''}
                                ${(index === isAfter) || (index === isBefore) ? 'scale-[1.59] bg-[rgba(0,0,0,1)] border-3 border-[rgba(169,110,0,1)]':''}
                                ${index !== isAfter && index !== isBefore && index !== isActive ? '':''}
                            `}
                        >
                            {skill.element}
                        </div>
                    ))}
                </div>
            </div>
            <div className={`w-full mt-[209px] pb-[174px]`}>
                <div className={`bg-[rgba(255,154,65,1)] h-[3px] w-[402px] mx-auto`}></div>
                <div className={`w-[368px] mx-auto mt-[47px]`}>
                    {allSkills.map((skill, index) => (
                        <p
                        key={index}
                        className={`text-[30px] text-[rgba(255,255,255,1)] font-semibold font-[Open_sans] w-[368px] transition-opacity ease-in-out duration-300
                            ${(index) === isActive ? 'opacity-[100%]':'opacity-0'}
                        `}
                        >
                            {skill.text}
                        </p>
                    ))}
                </div>
            </div>
        </div>
    )
}

export default Skill