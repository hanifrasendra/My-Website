import {useState, useEffect} from 'react';


const Header = () => {
    const [typedWrite, setTypedWrite] = useState('');

    const typeWrite = 'Web Developer';

    useEffect(() => {
        const timeOut = setTimeout(() => {
            setTypedWrite(typeWrite.slice(0, typedWrite.length + 1));
        }, 200);
        return () => clearTimeout(timeOut);
    }, [typedWrite])

    return(
        <div className={``}>
            <div className={`bg-[linear-gradient(127deg,rgba(42,15,3,0)44%,rgba(43,16,3,0.0039)45%,rgba(44,17,3,0.0078)45%,rgba(46,18,3,0.0156)45%,rgba(51,22,3,0.0313)47%,rgba(60,28,2,0.0625)49%,rgba(78,42,2,0.125)54%,rgba(115,69,1,0.25)64%,rgba(188,122,0,0.5)84%,rgba(187,121,0,0.5078)84%,rgba(185,120,0,0.5156)85%,rgba(183,119,0,0.5313)85%,rgba(177,115,0,0.5625)86%,rgba(167,108,0,0.625)88%,rgba(156,101,0,0.6875)90%,rgba(145,95,0,0.75)92%,rgba(103,67,0,1)100%)] w-full h-[1024px] absolute z-0`}>

            </div>
            <div className={`ml-[100px] h-[675px] mb-[231px] relative z-2`}>
                <div className={`pt-[226px]`}>
                    <p className={`text-[64px] text-[rgba(255,255,255,1)] font-semibold`}>Hello!, I am</p>
                    <h1 className={`text-[96px] text-[rgba(255,255,255,1)] font-bold`}>Hanif Rasendra</h1>
                    <h1 className={`text-[96px] text-[rgba(255,255,255,1)] font-bold `}>A 
                        <span className={`italic bg-[linear-gradient(to_right,rgba(188,122,0,1)34%,rgba(133,87,0,1)85%)] bg-clip-text text-transparent`}>
                            {` ${typedWrite}`}
                            <span className={`text-[rgba(188,122,0,1)] italic animate-[blink_1s_infinite]`}>|</span>
                        </span>
                    </h1>
                    <div className={`flex gap-[30px]`}>
                        <button className={`bg-[rgba(66,43,0,1)] w-[182px] border border-[rgba(188,122,0,1)] rounded-[40px] `}>
                            <p className={`text-[32px] text-[rgba(255,255,255,1)] font-light`}>Contact</p>
                            <div></div>
                        </button>
                        <button className={`bg-[rgba(0,0,0,1)] w-[291px] border border-[rgba(108,108,108,1)] rounded-[40px]`}>
                            <p className={`text-[32px] text-[rgba(255,255,255,1)] font-light`}>Sertification</p>
                            <div></div>
                        </button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Header;