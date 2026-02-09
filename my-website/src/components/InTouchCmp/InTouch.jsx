import * as faIcons from 'react-icons/fa'
 
const InTouch = () => {
    return(
        <div className={`bg-[rgba(0,0,0,1)] pt-[237px]`}>
            <h1 className={`text-[rgba(255,255,255,1)] text-[50px] font-bold mx-[100px]`}>Get In Touch</h1>
            <div className={`flex justify-between bg-[linear-gradient(rgba(73,48,0,0.4)0%,rgba(39,26,0,0.52),rgba(107,70,0,1)100%)] border border-[rgba(175,108,0,1)] h-[386px] rounded-[10px] mt-[80px] mx-[100px] px-[37px]`}>
                <div>
                    <div className={`mt-[35px]`}>
                        <img src="public/Profile_Logo.png" alt="" className={`w-[80px] h-[80px]`}/>
                    </div>
                    <p className={`text-[rgba(255,255,255,1)] text-[20px] font-semibold mt-[19px]`}>Stay connected with the latest insights and developments in web technology.</p>
                    <form action="" className={`flex mt-[24px] gap-[25px]`}>
                        <div className={`bg-[rgba(85,55,0,1)] border border-[rgba(133,87,0,1)] w-[562px] h-[51px]`}>
                            <input type="text" />
                        </div>
                        <button type="submit" className={`bg-[rgba(107,70,0,1)] border-2 border-[rgba(160,104,0,1)] text-[rgba(255,255,255,1)] text-[20px] font-light font-[Open_sans] w-[116px]`}>Submit</button>
                    </form>
                    <p className={`text-[rgba(255,255,255,1)] font-[Open_sans] font-normal mt-[24px]`}>You agree to our Privacy Policy and consent to receive occasional updates about new work and opportunities.</p>
                </div>
                <div className={`flex gap-[72px] mt-[48px]`}>
                    <div className={`flex flex-col gap-[17px]`}>
                        <h3 className={`text-[rgba(248,242,230,1)] text-[20] `}>Follow Us</h3>
                        <div>
                            <faIcons.FaInstagram className={`text-[rgba(248,242,230,1)] w-[22px] h-[22px]`}/>
                        </div>
                        <div>
                            <faIcons.FaLinkedin className={`text-[rgba(248,242,230,1)] w-[22px] h-[22px]`}/>
                        </div>
                        <div>
                            <faIcons.FaWhatsapp className={`text-[rgba(248,242,230,1)] w-[22px] h-[22px]`}/>
                        </div>
                    </div>
                    <div>
                        <h3 className={`text-[rgba(248,242,230,1)] text-[20] `}>Quick Links</h3>
                        <p></p>
                        <p></p>
                    </div>
                </div>
            </div>
            <div className={`bg-[rgba(255,255,255,1)] mt-[69px] w-[94%] h-[1px] mx-auto`}></div>
            <div className={`mt-[21px] pb-[44px] mx-[100px]`}>
                <p className={`text-[rgba(255,255,255,1)] text-[16px] font-normal font-[Open_sans] `}>© 2025 Hanif Rasendra. All rights reserved.</p>
            </div>
        </div>
    )
}

export default InTouch