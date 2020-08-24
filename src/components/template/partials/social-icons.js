import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faFacebook, faWhatsapp, faInstagram, faYoutube } from '@fortawesome/free-brands-svg-icons'

const SocialIcons = () => {
    return (
        <div className="d-flex flex-row justify-content-center align-items-center">
            <a href="http://wa.me/+5514997210771" className="text-secondary" target="_blank" rel="noreferrer">
                <FontAwesomeIcon icon={faWhatsapp} style={{ fontSize: 25 }} className="mx-1" />
            </a>
            <a href="https://www.facebook.com/mudas.carvalho.1" className="text-secondary" target="_blank" rel="noreferrer">
                <FontAwesomeIcon icon={faFacebook} style={{ fontSize: 25 }} className="mx-1" />
            </a>
            <a href="https://www.instagram.com/mudascarvalho" className="text-secondary" target="_blank" rel="noreferrer">
                <FontAwesomeIcon icon={faInstagram} style={{ fontSize: 25 }} className="mx-1" />
            </a>
            <a href="https://www.youtube.com/channel/UCw3Si5-MCBwI-LTyPmrwsYA" className="text-secondary" target="_blank" rel="noreferrer">
                <FontAwesomeIcon icon={faYoutube} style={{ fontSize: 25 }} className="mx-1" />
            </a>
        </div>
    )
}
export default SocialIcons