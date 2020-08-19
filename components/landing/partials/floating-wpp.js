import React from 'react'
import { Image } from 'react-bootstrap'

const FloatingWpp = () => {
    return (
        <div className="floating-area">
            <a href="http://wa.me/+5514997210771" target="_blank" className="floating-wpp shadow">
                <div className="ball">
                    <Image src="/wpp.png" alt="Whatsapp" />
                </div>
                <span className="title">FALE CONOSCO !</span>
            </a>
        </div>
    )
}

export default FloatingWpp