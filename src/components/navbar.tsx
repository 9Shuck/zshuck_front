import NavbarElement from './navbarElement'

function NavBar() {
    return (
        <div className="navbar">
            <div className="navbar__logo">
                <span className="secondary-color">z</span>shuck
            </div>
            <div className="navbar__menu">
                <NavbarElement name="inicio" link="/" blank=""/>
                <NavbarElement name="sobre mí" link="/" blank=""/>
                <NavbarElement name="proyectos" link="/" blank=""/>
                <NavbarElement name="contacto" link="/" blank=""/>
                <NavbarElement name="blog" link="/" blank=""/>
            </div>
        </div>
    )
}

export default NavBar