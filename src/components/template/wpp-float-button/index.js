import React from 'react'
import { Image } from 'react-bootstrap'
// import ReactIf from '@/src/components/logic/react-if'
import "./styles.scss"

const WppFloatButton = ({ isMobile }) => {
    return (
        <div className="floating-area">
            <a href="http://wa.me/+5514997210771" target="_blank" className="floating-wpp shadow" rel="noreferrer">
                <div className="ball">
                    <Image src="/wpp.webp" alt="Whatsapp" />
                </div>
            </a>
        </div>
    )
}
export default WppFloatButton
