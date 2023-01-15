import PropTypes from "prop-types"

interface navbarElementTools {
    link: string;
    name: string;
    blank: string;
}

function NavbarElement(props: navbarElementTools) {
    return (
        <a 
            className="navbarElement" 
            href={props.link} 
            target={props.blank} 
            rel="noreferrer"
        >
            {props.name}
        </a>
    )
}

NavbarElement.propTypes = {
    name: PropTypes.string.isRequired,
    link: PropTypes.string.isRequired,
    blank: PropTypes.string
}

export default NavbarElement;