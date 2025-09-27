import contactStyles from './Contact.module.css'

const Contact = () => {
    return(
        <div className={contactStyles.contactInfo} id="contact">
            <hr/>
            <div className={contactStyles.contactInfoLayout}>
                <h2>Contact</h2>
                <div className={contactStyles.orbLine}>
                    <div className={contactStyles.itemLine}>
                        <div className={`${contactStyles.orb} ${contactStyles.orb1}`}></div>
                        <div className={`${contactStyles.orb} ${contactStyles.orb2}`}></div>
                        <div className={`${contactStyles.orb} ${contactStyles.orb3}`}></div>
                        <div className={`${contactStyles.item} ${contactStyles.item1}`}>
                            <p>Github</p>
                        </div>
                        <div className={`${contactStyles.item} ${contactStyles.item2}`}>
                            <p>Whatsapp</p>
                        </div>
                        <div className={`${contactStyles.item} ${contactStyles.item3}`}>
                            <p>Instagram</p>
                        </div>
                    </div>
                    
                </div>
            </div>
        </div>
    )
}

export default Contact;