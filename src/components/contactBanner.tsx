import MapIcon from "@/data/images/icons/mapIcon";
import MailIcon from "@/data/images/icons/mailicon";

function ContactBanner() {
    return(
        <div className="contactBanner" id="email">
            <div className="contactBanner__location">
                <MapIcon/>
                <a className="contactBannerAn" href="https://goo.gl/maps/ATDVhq6NnHZoqpKBA" target="_blank">
                    <p>barcelona, spain</p></a>
            </div>
            <div className="contactBanner__mail">
                <MailIcon/>
                <a className="contactBannerAn" href="mailto:zshuck@outlook.es">
                    <p>zshuck@outlook.es</p></a>
            </div>
        </div>
    )
}

export default ContactBanner;