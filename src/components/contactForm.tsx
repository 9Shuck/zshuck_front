import SocialNavbar from "./socialNavbar";

function ContactForm() {
    return(
        <div className="formContainer">
            <div className="formInfo" id="contactInfo">
                <div className="formInfo__text">
                    <div className="formInfo__title">métodos de contacto</div>
                    <p>Puedes contactar conmigo de las siguientes formas:</p>
                    <ul>
                        <li>
                        <p>Rellenando el
                    <a className="brand_link" href="/contact#name">
                                <span className="bold">&nbsp;formulario</span>
                            </a> de esta página
                    </p>
                        </li>
                        <li>
                        <p>A través de mis<a className="brand_link" href="/contact#rrss">
                            <span className="bold" id="socialLinks">&nbsp;redes sociales</span>
                        </a></p>
                        </li>
                        <li>
                            <p>Enviando un email a mi 
                            <a className="brand_link" href="/contact#email">
                            <span className="bold" id="socialLinks">&nbsp;correo electrónico</span>
                        </a>
                            </p>
                        </li>
                    </ul>
                </div>
                <div className="formInfo__textSocial" id="rrss">
                    <SocialNavbar/>
                </div>
            </div>
            <form className="formFields" action="/send-data-here" method="post">
                <div>
                <label for="name">Name:</label>
                <input className="formFields__input" type="text" placeholder="Nombre" id="name" name="first" />
                </div>
                <div>
                <label for="mail">Email:</label>
                <input className="formFields__input" type="text" placeholder="Email" id="mail" name="email" />
                </div>
                <div>
                <label for="topic">Asunto:</label>
                <input className="formFields__input" type="text" placeholder="Asunto" id="topic" name="topic" />
                </div>
                <div className="formFields__message">
                    <textarea  className="formFields__input" type="text" placeholder="Mensaje" id="message" name="topic" />
                </div>
                <div className="formFields__submitContainer">
                <input className="formFields__submit" type="submit" value="Enviar mensaje"/>
                </div>
            </form>
        </div>
    )
}

export default ContactForm;