import NavbarElement from './navbarElement'
import { navLinks } from "../data/navlinks"


export const NavbarLinks = (props) => (
    <div className='navbarLinks'>
        {
            navLinks.map((link, index) => {
                return(
                    <NavbarElement 
                        key={index} 
                        name={link.name} 
                        link={link.path} 
                        blank=""
                        click={props.closeSideBar}
                    />
                    
                )
            })
        }
    </div>
)