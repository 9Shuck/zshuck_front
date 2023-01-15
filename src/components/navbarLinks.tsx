import NavbarElement from './navbarElement'
import { navLinks } from "../data/navlinks"


export const NavbarLinks = () => (
    <>
        {
            navLinks.map((link, index) => {
                return(
                    <NavbarElement 
                        key={index} 
                        name={link.name} 
                        link={link.path} 
                        blank=""
                    />
                )
            })
        }
    </>
)