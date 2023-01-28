import { arrayBuffer } from 'stream/consumers'
import SocialNavbar from '../components/socialNavbar'

var array = ['sobre mí', 'contacto', 'blog', 'guías']

function Footer() {
    return (
        <div className="footerContainer">
        <div className="footer">
            <div className="footer__company">
                <div className='footer__company__about'>
                    <p><span className='footer_subtitle'>sobre mí</span></p>
                    <p>Hola 👋🏽 mi nombre es Rubén Pérez y soy full-stack developer. 
                        Desarrollo todo tipo de páginas web y aplicaciones. Puedes seguirme
                        en mis redes para ver consejos sobre programación.</p>
                        <p>Hola 👋🏽 mi nombre es Rubén Pérez y soy full-stack developer. 
                        Desarrollo todo tipo de páginas web y aplicaciones. Puedes seguirme
                        en mis redes para ver consejos sobre programación.</p>
                                </div>
                <div className="footer__company__posts">
                    <div className='footer__company__posts_1'>
                        <p><span className='footer_subtitle'>últimos posts</span></p>
                        <p>POST 1</p>
                        <p>POST 2</p>
                        <p>POST 3</p>
                        <p>POST 4</p>
                        <p>POST 5</p>
                    </div>
                    <div className='footer__company__posts_2'>
                        <p><span className='footer_subtitle'><span className="secondary-color">z</span>shuck</span></p>
                        <p><a href="/">contacto</a></p>
                        <p><a href="/">política de cookies</a></p>
                        <p><a href="/">política de privacidad</a></p>
                    </div>
                </div>
            </div>
            <div className="footer__breaker"></div>
            <div className="footer__social">
                <div className="footer__social__links">
                    {array.map(x => {
                        return(
                            <a href="/" target="_blank">{x}</a>
                        )
                    })}
                </div>
                <div className="footer__social__div">
                    <SocialNavbar/>
                </div>
            </div>
        </div>
        </div>
    )
}

export default Footer