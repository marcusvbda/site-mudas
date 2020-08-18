import React from 'react'
import { Image } from 'react-bootstrap'
import './styles.scss'

const FloatingWpp = () => {
    return (
        <div className="floating-area">
            <a href="http://wa.me/+5514997211736" target="_blank" className="floating-wpp shadow">
                <div className="ball">
                    <Image src="/wpp.png" />
                </div>
                <span className="title">FALE CONOSCO !</span>
            </a>
        </div>
    )
}

export default FloatingWpp