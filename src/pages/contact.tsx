import ContactButton from "@/components/contactButton"
import ContactForm from "@/components/contactForm"
import dynamic from "next/dynamic"

const Map = dynamic(() => import('../components/googleMaps'), {
    ssr: false,
})

const Contact = () => {
    return(
        <div className="contact">
            <div className="contact__header">
                <div className="contact__header__contact">
                    <p><span className="subheader">Vivo en Barna pero me encanta conocer lugares por todo el mundo
                    </span></p>
                    <p>Contacta conmigo a través del 
                        <a className="brand_link" href="/contact#name">
                            <span className="bold">&nbsp;formulario</span>
                        </a> o de mis 
                        <a className="brand_link" href="/contact#contactInfo">
                            <span className="bold">&nbsp;redes sociales</span>
                        </a>
                    </p>
                    <div className="contact__header__contact_button">
                        <ContactButton/>
                    </div>
                </div>
                
                <div className="contact__header__formContainer">
                    <ContactForm/>
                </div>
                <div className="contact__header__mapContainer">
                    <Map/>
                </div>
            </div>

        </div>
    )
    }

export default Contact