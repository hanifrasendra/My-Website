import { useState, useRef, useEffect } from 'react';
import * as mdIcons from 'react-icons/md';

const Project = () => {
    const [isVisible, setIsVisible] = useState(false);
    const sectionRef = useRef(null);

    useEffect(() => {
        const observer = new IntersectionObserver(
            ([entry]) => {
                if(entry.isIntersecting) {
                    setIsVisible(true);
                } else {
                    setIsVisible(false);
                }
            },
            {
                threshold: 0.3
            }
        )
        if(sectionRef.current) {
            observer.observe(sectionRef.current);
        }
    })

    const Counter = ({end, duration = 1600}) => {
        const [count, setCount] = useState(0);

        useEffect(() => {
            if(!isVisible) return;
            let start = 0;
            const incrementTimer = duration / end;

            const timer = setInterval(() => {
                start++
                setCount(start);
                if(start === end) {
                    clearInterval(timer);
                }
            }, incrementTimer); 

            return () => clearInterval(timer)
        }, [isVisible, end, duration]); 

        return <>{count}</>
    }


    return(
        <div 
        ref={sectionRef}
        className={``} id="my-project">
            <div className={`mt-[37px]`}>
                <div className={`flex flex-col items-center gap-[20px] mb-[16px] mx-[100px]`}>
                    <h2 className={`text-[32px] text-[rgba(255,255,255,1)]`}>Project</h2>
                    <hr className={`bg-[linear-gradient(90deg,rgba(221,151,60,1)47%,rgba(105,30,0,1)100%)] w-full h-[2px]`}/>
                    <p className={`text-[50px] text-[rgba(255,255,255,1)] text-center w-[738px] font-bold`}>Transformasi Digital Untuk Ubah Dunia</p>
                    <p className={`text-[24px] text-[rgba(255,255,255,1)] text-center font-[Open_Sans] font-semibold w-[1021px]`}>Beberapa proyek yang pernah saya kerjakan, mulai dari tugas kuliah sampai proyek pengembangan yang lebih kompleks.</p>
                </div>
                <div className={`relative h-[721px] overflow-hidden`}>
                    <div className={`absolute w-full h-full z-0`}>
                        <img src="public/Project_Background.jpg" alt="" className={`absolute w-full scale-x-[-1] z-0`}/>
                        <div className={`relative bg-[rgba(85,55,0,0.29)] h-full z-1`}></div>
                    </div>
                    <div className={`relative z-2 h-full`}>
                        <div className={`h-[calc(100%-400px)]`}></div>
                        <div className={`h-[400px] bg-[rgba(226,198,145,1)] w-[1549px]`}>
                            <div className={`flex flex-col justify-center ml-[15px] gap-y-[31px] h-full`}>
                                <div className={`flex gap-[60px] h-[180px]`}>
                                    <div className={`bg-[rgba(85,55,0,1)] h-full w-[1px]`}></div>
                                    <div className={`w-[357px]`}>
                                        <p className={`text-[90px] text-[rgba(162,72,12,1)] font-['Open_sans'] font-semibold`}>
                                            <Counter end={10} />+
                                        </p>
                                        <p className={`text-[rgba(248,242,230,1)] text-[32px] font-[Open_sans] font-semibold`}><span className={`text-[rgba(200,146,46,1)] font-[Playfair_display]`}>web</span> development</p>
                                    </div>
                                    <div className={`bg-[rgba(85,55,0,1)] h-full w-[1px]`}></div>
                                    <div className={`w-[357px]`}>
                                        <p className={`text-[90px] text-[rgba(162,72,12,1)] font-['Open_sans'] font-semibold`}>
                                            <Counter end={15} />+
                                        </p>
                                        <p className={`text-[rgba(248,242,230,1)] text-[32px] font-[Open_sans] font-semibold`}><span className={`text-[rgba(200,146,46,1)] font-[Playfair_display]`}>Desktop</span> development</p>
                                    </div>
                                    <div className={`bg-[rgba(85,55,0,1)] h-full w-[1px]`}></div>
                                    <div className={`w-[357px]`}>
                                        <p className={`text-[90px] text-[rgba(162,72,12,1)] font-['Open_sans'] font-semibold`}>
                                            <Counter end={12} />+   
                                        </p>
                                        <p className={`text-[rgba(248,242,230,1)] text-[32px] font-[Open_sans] font-semibold`}><span className={`text-[rgba(200,146,46,1)] font-[Playfair_display]`}>Highschool</span> development</p>
                                    </div>
                                    <div className={`bg-[rgba(85,55,0,1)] h-full w-[1px]`}></div>
                                </div>
                                <div className={`gap-[30px] flex`}>
                                    <button className={`bg-[rgba(85,55,0,1)] border-3 border-[rgba(160,104,0,1)] text-[32px] text-[rgba(239,223,194,1)] w-[193px] h-[66px] transition-all ease-in-out duration-10s hover:scale-[1.05] cursor-pointer`}>Explore</button>
                                    <button className={`bg-transparent text-[32px] text-[rgba(108,108,108,1)] w-[151px] flex items-center transition-all ease-in-out duration-10s group hover:scale-[1.05] cursor-pointer`}>Insight 
                                        <div className={`w-[35px] h-[35px] overflow-hidden`}>
                                            <mdIcons.MdOutlineKeyboardArrowRight className={`text-[40px]`}/>
                                        </div>
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div> 
                    
                </div>
            </div>
        </div>
    )
}

export default Project