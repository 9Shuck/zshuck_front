import { arrayBuffer } from 'stream/consumers'
import SocialNavbar from '../components/socialNavbar'

var array = ['sobre mí', 'contacto', 'blog', 'guías']

function Footer() {
    return (
        <div className="footerContainer">
        <div className="footer">
            <div className="footer__company">
                various
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