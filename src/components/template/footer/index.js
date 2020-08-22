import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEnvelope, faBraille } from '@fortawesome/free-solid-svg-icons'
import ReactIf from '@/src/components/logic/react-if'
import { Image } from 'react-bootstrap'
import SocialIcons from '@/src/components/template/partials/social-icons'
import PhonesRow from '@/src/components/template/partials/phones-row'
import "./styles.scss"

const Footer = ({ isMobile }) => {
    const GetYear = () => {
        const date = new Date()
        const start_date = '2019'
        const current_date = date.getFullYear()
        if (start_date == current_date) return current_date

        return (
            <div className="d-flex flex-row align-items-center">
                <FontAwesomeIcon icon={faBraille} style={{ fontSize: 20 }} className="mr-2" />
                {start_date} - {date.getFullYear()}
            </div>
        )
    }


    return (
        <footer className="footer container text-secondary mt-4">
            <div className="d-flex flex-row justify-content-md-between justify-content-center align-items-center w-100">
                <ReactIf condition={!isMobile}>
                    <Image src="/logo.webp"
                        className="d-none d-md-block"
                        height="50"
                        alt="Carvalho Mudas" />
                </ReactIf>
                <small className="flex-column d-flex">
                    <a className="text-secondary" href="mailto:vendas@mudascarvalho.com.br">
                        <span className="d-flex align-items-center justify-content-center" >
                            <FontAwesomeIcon icon={faEnvelope} className="mr-1" />
                            <span>vendas@mudascarvalho.com.br</span>
                        </span>
                    </a>
                    <PhonesRow />
                    <SocialIcons />
                </small>
                <ReactIf condition={!isMobile}>
                    <div className="d-none d-md-block">
                        <GetYear />
                    </div>
                </ReactIf>
            </div>
        </footer>
    )
}

export default Footer