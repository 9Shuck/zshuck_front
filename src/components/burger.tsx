import { NavbarLinks } from './navbarLinks'
import { slide as Menu } from 'react-burger-menu'


const HamburgerMenu = () => (<div>
    <Menu customBurgerIcon={<HamburgerIcon />}>
        <NavbarLinks/>
    </Menu>
</div>)

const HamburgerIcon = () => (<div className='p-1/2'><svg fill="none" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" stroke="currentColor"><path d="M4 6h16M4 12h16M4 18h16"></path></svg></div>)


export default HamburgerMenu