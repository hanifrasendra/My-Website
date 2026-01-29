

const About = () => {
    return(
        <div>
            <div className={`bg-[rgba(224,194,138,1)]`} id="about">
                <div className={`absolute flex justify-end w-full z-0`}>
                    <div className={`relative right-0 w-[604px] h-[584px] overflow-hidden mt-[164px]`}>
                        <div className={`absolute border-15 border-[rgba(66,43,0,1)] w-[859px] h-[384px] z-0 top-[82px] left-[12px] shadow-[-8px_6px_8px_0px_rgba(0,0,0,0.25)]`}></div>
                        <div className={`flex`}>
                            <div className={`relative w-[366px] h-[386px] top-[65px] overflow-hidden shrink-0`}>
                                <img src="public/Profile_foto.png" alt="" className={`relative object-fill scale-180 top-[-5]`}/>
                            </div>
                            <div className={`border-15 border-[rgba(141,92,0,1)] w-[268px] h-[584px] shrink-0 z-1`}></div>
                        </div>
                    </div>
                </div>

                <div className={`relative z-1 ml-[100px]`}>
                    <div className={`flex`}>
                        <h1 className={`text-[192px] text-[rgba(248,242,230,1)] h-[256px]`}>About My</h1>
                        <h1 className={`text-[192px] text-transparent [-webkit-text-stroke:3px_rgba(248,242,230,1)] h-[346px] pt-[90px]`}>Journey</h1>
                    </div>
                    <div className={``}>
                        <div className={`flex flex-col gap-[56px] mb-[112px]`}>
                            <p className={`w-[836px] text-[32px]`}>
                                Saya, Hanif Rasendra Putra, seorang mahasiswa yang penuh semangat dan tengah menempuh studi di Universitas Pembangunan Nasional "Veteran" Jawa Timur (UPN Jatim). Saya sedang mendalami dunia teknologi informasi dengan fokus utama pada Web Development.
                            </p>
                            <div className={`flex gap-[80px]`}>
                                <button className={`w-[230px] border-3 border-[rgba(133,87,0,1)] text-[32px]`}>Learn More</button>
                                <button className={`w-[166px] bg-[rgba(217,217,217,1)] text-[32px] text-[rgba(108,108,108,1)]`}>Reaserch</button>
                            </div>
                        </div>
                    </div>
                </div>
                <div className={`h-[200px] bg-[rgba(0,0,0,1)]`}>
                        
                </div>
            </div>
        </div>
        
    )
}

export default About;