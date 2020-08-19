import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEnvelope, faBraille } from '@fortawesome/free-solid-svg-icons'
import SocialIcons from './socialIcons'
import PhonesRow from './phonesRow'
import { Image } from 'react-bootstrap'

const Footer = () => {

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
        <footer className="footer container text-muted mt-4">
            <div className="d-flex flex-row justify-content-md-between justify-content-center align-items-center">
                <div className="d-none d-md-block">
                    <Image src="/logo.png" className="d-none d-md-block"
                        height="50"
                        alt="Carvalho Mudas" />
                </div>
                <small className="text-muted flex-column d-flex">
                    <span className="d-flex align-items-center justify-content-center" >
                        <FontAwesomeIcon icon={faEnvelope} className="mr-1" />
                        <span>vendas@mudascarvalho.com.br</span>
                    </span>
                    <PhonesRow />
                    <SocialIcons />
                </small>
                <div className="d-none d-md-block">
                    <GetYear />
                </div>
            </div>
        </footer>
    )
}

export default Footer