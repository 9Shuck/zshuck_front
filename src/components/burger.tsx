import Link from 'next/link'
import { slide as Menu } from 'react-burger-menu'

const HamburgerMenu = () => (<div>
    <Menu customBurgerIcon={<HamburgerIcon />}>
        <Links />
    </Menu>
</div>)

const HamburgerIcon = () => (<div className='p-1/2'><svg fill="none" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" stroke="currentColor"><path d="M4 6h16M4 12h16M4 18h16"></path></svg></div>)

export const Links = () => (<>
    <Link href="/">inicio</Link>
    <Link href="/">sobre mí</Link>
    <Link href="/">proyectos</Link>
    <Link href="/">contacto</Link>
    <Link href="/">blog</Link>
</>)

export default HamburgerMenu