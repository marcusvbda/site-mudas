import React from 'react'
import Link from 'next/link'
import { Navbar, Nav, Image, Container } from 'react-bootstrap'
import Head from 'next/head'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faHome, faAddressCard, faLeaf, faEnvelope, faCompass, faPhone, faMobile, faBraille, faBriefcase } from '@fortawesome/free-solid-svg-icons'
import { faFacebook, faWhatsapp, faInstagram, faYoutube } from '@fortawesome/free-brands-svg-icons'
import ReactIf from '@/src/components/logic/react-if'

const LandingTemplate = ({ title, children, isMobile }) => {

    const GetTitle = () => {
        const defaultTitle = "Mudas Carvalho"
        if (!title) return defaultTitle
        return `${title} | ${defaultTitle}`
    }

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

    const PhonesRow = () => {
        return (
            <span className="d-flex align-items-center justify-content-center my-1" >
                <FontAwesomeIcon icon={faPhone} className="mr-1" />
                <a className="text-muted" href="tel:+551434861376">(14) 3486-1376</a>
                <FontAwesomeIcon icon={faMobile} className="ml-3 mr-1" />
                <a className="text-muted" href="tel:+5514997210771">(14) 99721-0771</a>
            </span>
        )
    }

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

    return (
        <>
            <h1 className="d-none">Carvalho Mudas</h1>
            <h2 className="d-none">Mudas Carvalho está no mercado desde 1987, prestando serviços e produtos de qualidade.</h2>
            <Head>
                <title>{GetTitle()}</title>
                <meta property="og:title" content={GetTitle()} key="title" />
            </Head>
            <ReactIf condition={!isMobile}>
                <Navbar expand="md" bg="ligth" className="top-contact d-none d-md-block">
                    <Container>
                        <small className="text-muted flex-row d-flex">
                            <span className="d-flex align-items-center" >
                                <FontAwesomeIcon icon={faEnvelope} className="mr-1" />
                                <span>vendas@mudascarvalho.com.br</span>
                            </span>
                            <div className="ml-3">
                                <PhonesRow />
                            </div>
                        </small>
                        <div className="ml-auto">
                            <SocialIcons className="ml-3" />
                        </div>
                    </Container>
                </Navbar>
            </ReactIf>
            <Navbar expand="md" bg="ligth">
                <Container>
                    <Link href="/">
                        <a>
                            <Navbar.Brand className="cursor-pointer pt-0">
                                <Image src="/logo.png"
                                    height={isMobile ? 50 : 75}
                                    alt="Carvalho Mudas" />
                            </Navbar.Brand>
                        </a>
                    </Link>
                    <Navbar.Toggle />
                    <Navbar.Collapse>
                        <Nav className="ml-auto">
                            <Nav.Link href="/">
                                <FontAwesomeIcon icon={faHome} className="mr-2" />
                                Home
                            </Nav.Link>
                            <Nav.Link href="/#saber-mais">
                                <FontAwesomeIcon icon={faAddressCard} className="mr-2" />
                                Sobre
                            </Nav.Link>
                            <Nav.Link href="/produtos">
                                <FontAwesomeIcon icon={faLeaf} className="mr-2" />
                                Produtos
                            </Nav.Link>
                            <Nav.Link href="/servicos">
                                <FontAwesomeIcon icon={faBriefcase} className="mr-2" />
                                Serviços
                            </Nav.Link>
                            <Nav.Link href="/contato">
                                <FontAwesomeIcon icon={faEnvelope} className="mr-2" />
                                Contato
                            </Nav.Link>
                            <Nav.Link href="/localizacao">
                                <FontAwesomeIcon icon={faCompass} className="mr-2" />
                                Localização
                            </Nav.Link>
                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
            <div className="gradient-bar" />
            <main>
                {children}
            </main>
            <div className="floating-area">
                <a href="http://wa.me/+5514997210771" target="_blank" className="floating-wpp shadow">
                    <div className="ball">
                        <Image src="/wpp.png" alt="Whatsapp" />
                    </div>
                    <span className="title">FALE CONOSCO !</span>
                </a>
            </div>
            <footer className="footer container text-muted mt-4">
                <div className="d-flex flex-row justify-content-md-between justify-content-center align-items-center">
                    <ReactIf condition={!isMobile}>
                        <Image src="/logo.png"
                            className="d-none d-md-block"
                            height="50"
                            alt="Carvalho Mudas" />
                    </ReactIf>
                    <small className="text-muted flex-column d-flex">
                        <span className="d-flex align-items-center justify-content-center" >
                            <FontAwesomeIcon icon={faEnvelope} className="mr-1" />
                            <span>vendas@mudascarvalho.com.br</span>
                        </span>
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
        </>
    )
}
export default LandingTemplate
