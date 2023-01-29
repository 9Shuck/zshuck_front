import SocialNavbar from "./socialNavbar";
import { useState, useEffect } from 'react'
import FormSuccess from "./formSuccess";

function ContactForm() {

    const[openedModal, setOpenedModal] = useState(false)

    const openModal = () => {
        setOpenedModal(true)
    }

    async function handleSubmit(e){ 
        e.preventDefault();
        let data = {
            name,
            email,
            topic,
            message
        }
        await fetch('api/contact', {
            method: 'POST',
            headers: {
                'Accept': 'application/json, text/plain, */*',
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(data)
            }).then((res) => {
                console.log(res.status)
                setSubmitted(true)
                setName('')
                setEmail('')
                setTopic('')
                setMessage('')
                openModal();
        })
    }

    const [name, setName] = useState('')
    const [email, setEmail] = useState('')
    const [topic, setTopic] = useState('')
    const [message, setMessage] = useState('')
    const [submitted, setSubmitted] = useState(false)


    return(
        <div className="formContainer">
            {openedModal ? (
                            <div className="">
                                <FormSuccess opened={openedModal}/>
                            </div>
            ) : (
                <></>
            )}
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
            <form className="formFields" onSubmit={handleSubmit} method="post">
                <div>
                <label>Name:</label>
                <input className="formFields__input" 
                        type="text" 
                        placeholder="Nombre" 
                        id="name" 
                        name="first"
                        pattern="^[\w'\-,.][^0-9_!¡?÷?¿/\\+=@#$%ˆ&*(){}|~<>;:[\]]{2,}$"
                        title="El nombre sólo puede contener letras y mínimo 2." 
                        onChange={(e)=>{setName(e.target.value)}}
                        />
                </div>
                <div>
                <label>Email:</label>
                <input className="formFields__input" 
                        type="text" 
                        placeholder="Email" 
                        id="mail" 
                        name="email" 
                        pattern="[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$"
                        title="El email introducido no es válido." 
                        onChange={(e)=>{setEmail(e.target.value)}}
                        />
                </div>
                <div>
                <label>Asunto:</label>
                <input className="formFields__input" 
                        type="text" 
                        placeholder="Asunto" 
                        id="topic" 
                        name="topic" 
                        maxLength="20"
                        minLength="5"
                        pattern="[A-Za-z][A-Za-z0-9_ -]{5,20}$"
                        title="El asunto solo puede contener letras. Mínimo 5 y máximo 20." 
                        onChange={(e)=>{setTopic(e.target.value)}}
                        />
                </div>
                <div className="formFields__message">
                    <textarea  className="formFields__input" 
                                type="text" 
                                placeholder="Mensaje" 
                                id="message" 
                                name="topic" 
                                minLength="10"
                                onChange={(e)=>{setMessage(e.target.value)}}
                                />
                </div>
                <div className="formFields__submitContainer">
                <input className="formFields__submit" 
                        type="submit" 
                        value="Enviar mensaje"
                />
                </div>
            </form>
        </div>
    )
}

export default ContactForm;