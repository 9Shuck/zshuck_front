import PropTypes from "prop-types"
import Link from 'next/link'

interface navbarElementTools {
    link: string;
    name: string;
    blank: string;
}

function NavbarElement(props: navbarElementTools) {
    return (
        <Link 
            className="navbarElement" 
            href={props.link} 
            target={props.blank} 
            rel="noreferrer"
        >
            {props.name}
        </Link>
    )
}

NavbarElement.propTypes = {
    name: PropTypes.string.isRequired,
    link: PropTypes.string.isRequired,
    blank: PropTypes.string
}

export default NavbarElement;