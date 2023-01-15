import NavbarElement from './navbarElement'
import BurgerMenu, {Links} from './burger'

function NavBar() {
    return (
        <div className="navbar">
            <div className="navbar__logo">
                <span className="secondary-color">z</span>shuck
            </div>
            <div className="navbar__menu">
                <div className="navbar__menu_sm">
                    <BurgerMenu />
                </div>
                <div className="navbar__menu_md">
                    <NavbarElement name="inicio" link="/" blank=""/>
                    <NavbarElement name="sobre mí" link="/" blank=""/>
                    <NavbarElement name="proyectos" link="/" blank=""/>
                    <NavbarElement name="contacto" link="/" blank=""/>
                    <NavbarElement name="blog" link="/" blank=""/>
                </div>
                <div className="navbar__menu_lg">
                    <NavbarElement name="inicio" link="/" blank=""/>
                    <NavbarElement name="sobre mí" link="/" blank=""/>
                    <NavbarElement name="proyectos" link="/" blank=""/>
                    <NavbarElement name="contacto" link="/" blank=""/>
                    <NavbarElement name="blog" link="/" blank=""/>
                </div>
            </div>
        </div>
    )
}

export default NavBar