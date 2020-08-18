import React from 'react'
import Link from 'next/Link'
import { Navbar, Nav, Image, Container } from 'react-bootstrap'
import Head from 'next/head'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faHome, faAddressCard, faLeaf, faEnvelope, faPhone, faMobile, faBraille } from '@fortawesome/free-solid-svg-icons'
import { faFacebook, faWhatsapp, faInstagram, faYoutube } from '@fortawesome/free-brands-svg-icons'
import FloatingWpp from './floatingWpp'

const LandingTemplate = ({ title, children }) => {

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

    const GetTitle = () => {
        const defaultTitle = "Mudas Carvalho"
        if (!title) return defaultTitle
        return `${title} | ${defaultTitle}`
    }

    return (
        <>
            <Head>
                <title>{GetTitle()}</title>
                <meta property="og:title" content={GetTitle()} key="title" />
            </Head>
            <Navbar expand="lg" className="top-contact d-none d-md-block">
                <Container>
                    <small className="text-muted">
                        <FontAwesomeIcon icon={faEnvelope} className="mr-1" />
                        <span>vendas@mudascarvalho.com.br
                        <FontAwesomeIcon icon={faPhone} className="mx-1" />(14) 3486-1376
                        <FontAwesomeIcon icon={faMobile} className="mx-1" />(14) 99721-1736</span>
                    </small>
                    <div className="ml-auto">
                        <a href="http://wa.me/+5514997211736" className="muted-icon" target="_blank">
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
                </Container>
            </Navbar>
            <Navbar expand="lg" bg="ligth">
                <Container>
                    <Link href="">
                        <Navbar.Brand className="cursor-pointer pt-0">
                            <Image src="/logo.png"
                                height="55"
                                alt="Pixer" />
                        </Navbar.Brand>
                    </Link>
                    <Navbar.Toggle />
                    <Navbar.Collapse>
                        <Nav className="ml-auto">
                            <Nav.Link href="/">
                                <FontAwesomeIcon icon={faHome} className="mr-1" />
                                Home
                            </Nav.Link>
                            <Nav.Link href="/sobre">
                                <FontAwesomeIcon icon={faAddressCard} className="mr-1" />
                                Sobre
                            </Nav.Link>
                            <Nav.Link href="/servicos">
                                <FontAwesomeIcon icon={faLeaf} className="mr-1" />
                                Serviços
                            </Nav.Link>
                            <Nav.Link href="/contato">
                                <FontAwesomeIcon icon={faEnvelope} className="mr-1" />
                                Contato
                            </Nav.Link>
                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
            <div className="gradient-bar" />
            <main>
                {children}
            </main>
            <FloatingWpp />
            <footer className="footer container text-muted">
                <div className="d-flex flex-row justify-content-between align-items-center">
                    <Image src="/logo.png"
                        height="50"
                        alt="Pixer" />
                    <GetYear />
                </div>
            </footer>
        </>
    )
}
export default LandingTemplate
