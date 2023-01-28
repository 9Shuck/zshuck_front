import { NavbarLinks } from './navbarLinks'
import BurgerMenu from './burger'
import Link from 'next/link'
import { useEffect, useState } from 'react';



function NavBar() {

    const [scrolled, setScrolled] = useState(false);
    useEffect(() => {
        window.onscroll = function() {
            if (window.scrollY > 50) {
                setScrolled(true);
            } else {
                setScrolled(false);
            }
        };
    }, []);
    
    return (
        <div className={scrolled ? "navbar navbar-shadow" : "navbar"}>
            <div className="navbar__logo">
                <Link href="/">
                <span className="secondary-color">z</span>shuck
                </Link>
            </div>
            <div className="navbar__menu">
                <div className="navbar__menu_sm">
                    <BurgerMenu />
                </div>
                <div className="navbar__menu_md">
                    <NavbarLinks/>
                </div>
                <div className="navbar__menu_lg">
                    <NavbarLinks/>
                </div>
            </div>
        </div>
    )
}

export default NavBar