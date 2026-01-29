
const Portofolio = () => {
    return(
        <div className={`bg-[rgba(248,242,230,1)]`} id="portofolio">
            <div className={`mx-[100px] pt-[168px] py-[195px]`}>
                <h1 className={`text-[150px] text-[rgba(224,194,138,1)] text-center font-[Open_sans] font-bold h-[190px]`}>Portofolio</h1>
                <div className={`flex justify-between w-full h-[470px]`}>
                    <div className={`relative h-full w-[1020px]`}>
                        <div className={`bg-[rgba(0,0,0,1)] absolute z-1 h-full w-full`}></div>
                        <div className={`relative z-2 w-full`}>
                            <button></button>
                        </div>
                    </div>
                    <div className={`w-[620px] flex flex-col justify-center gap-[30px]`}>
                        <h2 className={`text-[50px] text-[rgba(108,108,108,1)] font-semibold`}>Project Demo</h2>
                        <p className={`text-[32px] text-justify font-[Open_Sans]`}>Koleksi beberapa projek yang telah saya kerjakan mulai dari projek kuliah, hingga project development tingkat lanjut</p>
                        <button className={`text-[32px] text-[rgba(108,108,108,1)] w-[193px] h-[66px] bg-[rgba(239,223,194,1)] border border-[rgba(85,55,0,1)]`}>View all</button>
                    </div>
                </div>
            </div>  
        </div> 
    ) 
}

export default Portofolio;