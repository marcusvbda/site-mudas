import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faFacebook, faWhatsapp, faInstagram, faYoutube } from '@fortawesome/free-brands-svg-icons'

const SocialIcons = () => {
    return (
        <div className="d-flex flex-row justify-content-center">
            <a href="http://wa.me/+5514997210771" className="muted-icon" target="_blank">
                <FontAwesomeIcon icon={faWhatsapp} style={{ fontSize: 25 }} className="mx-1" />
            </a>
            <a href="https://www.instagram.com/mudascarvalho" className="muted-icon" target="_blank">
                <FontAwesomeIcon icon={faFacebook} style={{ fontSize: 25 }} className="mx-1" />
            </a>
            <a href="https://www.instagram.com/mudascarvalho" className="muted-icon" target="_blank">
                <FontAwesomeIcon icon={faInstagram} style={{ fontSize: 25 }} className="mx-1" />
            </a>
            <a href="https://www.youtube.com/channel/UCw3Si5-MCBwI-LTyPmrwsYA" className="muted-icon" target="_blank">
                <FontAwesomeIcon icon={faYoutube} style={{ fontSize: 25 }} className="mx-1" />
            </a>
        </div>
    )
}

export default SocialIcons