import Instagram from '../data/images/socialIcons/instagram.jsx'
import GitHub from '../data/images/socialIcons/github.jsx'
import Linkedin from '../data/images/socialIcons/linkedin.jsx'
import Twitter from '../data/images/socialIcons/twitter.jsx'
import TikTok from '../data/images/socialIcons/tiktok.jsx'

var iconWidth="25px";
var iconHeight="25px"

var social = [
    {'media': {
        'name': 'instagram',
        'link' : 'https://www.instagram.com/rubenp_z/',
        'icon': <Instagram width={iconWidth} height={iconHeight}/>
    }},
    {'media': {
        'name': 'linkedin',
        'link':'https://www.linkedin.com/in/rubenp-z/',
        'icon': <Linkedin width={iconWidth} height={iconHeight}/>
    }},
    {'media': {
        'name': 'twitter',
        'link': 'https://twitter.com/rubenp_z',
        'icon': <TikTok width={iconWidth} height={iconHeight}/>
    }},   
    {'media': {
        'name': 'tiktok',
        'link': 'https://www.tiktok.com/@rubenp_z',
        'icon': <Twitter width={iconWidth} height={iconHeight}/>
    }}, 
    {'media': {
        'name': 'github',
        'link' : 'https://github.com/9Shuck',
        'icon' : <GitHub width="33px" height="33px"/>
    }},
]

function SocialNavbar() {
    return (
        <div className="social-nav">
            {
                social.map(x => {
                    return(
                        <a className="socialLink" href={x.media.link}
                            target='_blank' key={social.indexOf(x)}>{x.media.icon}</a>
                    )
                })
            }
        </div>
    )
}

export default SocialNavbar