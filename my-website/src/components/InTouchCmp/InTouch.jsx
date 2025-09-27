import intouchstyles from './InTouch.module.css'
 
const InTouch = () => {
    return(
        <div className={intouchstyles.getInTouch}>
            <h1>Get In Touch</h1>
            <div className={intouchstyles.inTouchLayout}>
                <form action="">
                    <input type="text" className={intouchstyles.firstName}/>
                    <input type="text" className={intouchstyles.lastName}/>
                    <input type="email" className={intouchstyles.email}/>
                    <textarea name="" id="" cols="30" rows="10" className={intouchstyles.message}></textarea>
                </form>
            </div>
        </div>
    )
}

export default InTouch