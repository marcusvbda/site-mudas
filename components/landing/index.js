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
            <Navbar className="top-contact d-none d-md-block">
                <Container>
                    <small className="text-muted flex-row d-flex">
                        <span className="d-flex align-items-center" >
                            <FontAwesomeIcon icon={faEnvelope} className="mr-1" />
                            <span>vendas@mudascarvalho.com.br</span>
                        </span>
                        <span className="ml-4 d-flex align-items-center" >
                            <FontAwesomeIcon icon={faPhone} className="mr-1" />
                            <a class="text-muted" href="tel:+551434861376">(14) 3486-1376</a>
                        </span>
                        <span className="ml-4 d-flex align-items-center" >
                            <FontAwesomeIcon icon={faMobile} className="mr-1" />
                            <a class="text-muted" href="tel:+5514997210771">(14) 99721-0771</a>
                        </span>
                    </small>
                    <div className="ml-auto">
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
                </Container>
            </Navbar>
            <Navbar expand="md" bg="ligth">
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
            <footer className="footer container text-muted mt-4">
                <div className="d-flex flex-row justify-content-md-between justify-content-center align-items-center">
                    <div className="d-none d-md-block">
                        <Image src="/logo.png" className="d-none d-md-block"
                            height="50"
                            alt="Pixer" />
                    </div>
                    <small className="text-muted flex-column d-flex pb-3">
                        <span className="d-flex align-items-center justify-content-center" >
                            <FontAwesomeIcon icon={faEnvelope} className="mr-1" />
                            <span>vendas@mudascarvalho.com.br</span>
                        </span>
                        <span className="d-flex align-items-center justify-content-center" >
                            <FontAwesomeIcon icon={faPhone} className="mr-1" />
                            <a class="text-muted" href="tel:+551434861376">(14) 3486-1376</a>
                            <FontAwesomeIcon icon={faMobile} className="ml-2 mr-1" />
                            <a class="text-muted" href="tel:+5514997210771">(14) 99721-0771</a>
                        </span>
                    </small>
                    <div className="d-none d-md-block">
                        <GetYear />
                    </div>
                </div>
            </footer>
        </>
    )
}
export default LandingTemplate
