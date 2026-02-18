import * as faIcons from 'react-icons/fa'
import {useState, useEffect, useRef} from 'react';

const Contact = () => {
    const [isVisible, setIsVisible] = useState(false);
    const sectionRef = useRef(null);

    useEffect(() => {
        const observer = new IntersectionObserver(
            (entries) => {
                entries.forEach((entry) => {
                    if (entry.isIntersecting) {
                        setIsVisible(true);
                    } else {
                        setIsVisible(false);
                    }
                })
            },
            {
            threshold: 0.3  // ← Trigger saat 30% section terlihat
            }
        );
        if (sectionRef.current) {
            observer.observe(sectionRef.current);
        }

    }, [])

    

   
    const info = [
        {
            icon: faIcons.FaGithub,
            media: 'Github',
            text: 'All of my project are partially in github ',
            underline: 'hanifrasendra'
        },
        {
            icon: faIcons.FaWhatsapp,
            media: 'WhatsApp',
            text: 'This is where you can contact me. Let’s discuss how I can help you!',
            underline: '+62 877 5396 9259'
        },
        {
            icon: faIcons.FaInstagram, 
            media: 'Instagram',
            text: 'Where my activity through out the past are in here',
            underline: 'h4nif_rasendra'
        }
    ]

    return(
        <div 
        ref={sectionRef}
        className={`bg-[rgba(66,43,0,1)]`} id="contact">
            <div className={`pt-[244px]`}>
                <h1 className={`text-[rgba(255,255,255,1)] text-[50px] font-semibold mx-[100px] w-[546px]
                       
                `}>Look Forward Working With You </h1>
                <hr className={`bg-[linear-gradient(rgba(128,68,0,1),rgba(175,126,3,1))] w-[0px] h-[2px] border-none mt-[20px] mx-[100px] transition-all ease-in-out duration-1000
                    ${isVisible ? 'w-[35%]':''}     
                `}/>
                <div className={`mt-[189px] pb-[265px] mx-[100px]`}>
                    <div className={`flex justify-between`}>
                        {info.map((info) => (
                            <div className={`h-[197px] flex flex-col justify-between w-[432px]`}>
                                <div className={`flex gap-[38px]`}>
                                    <div>
                                        <info.icon className={`text-[35px] text-[rgba(255,255,255,1)]`}/>
                                    </div>
                                    <h1 className={`text-[rgba(255,255,255,1)] text-[30px] font-semibold font-[Open_sans]`}>{info.media}</h1>
                                </div>
                                <p className={`text-[rgba(255,255,255,1)] text-[20px] font-semibold`}>{info.text}</p>
                                <p className={`text-[rgba(255,255,255,1)] underline`}> {info.underline}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Contact;