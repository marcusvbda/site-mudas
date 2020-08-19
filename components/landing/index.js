import React from 'react'
import Link from 'next/Link'
import { Navbar, Nav, Image, Container } from 'react-bootstrap'
import Head from 'next/head'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faHome, faAddressCard, faLeaf, faEnvelope, faCompass } from '@fortawesome/free-solid-svg-icons'
import FloatingWpp from './floating-wpp'
import PhonesRow from './phonesRow'
import Footer from './footer'
import SocialIcons from './socialIcons'

const LandingTemplate = ({ title, children }) => {

    const GetTitle = () => {
        const defaultTitle = "Mudas Carvalho"
        if (!title) return defaultTitle
        return `${title} | ${defaultTitle}`
    }

    return (
        <>
            <h1 class="d-none">Carvalho Mudas</h1>
            <h2 class="d-none">Mudas Carvalho está no mercado desde 1987, prestando serviços e produtos de qualidade.</h2>
            <Head>
                <title>{GetTitle()}</title>
                <meta property="og:title" content={GetTitle()} key="title" />
            </Head>
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
            <Navbar expand="md" bg="ligth">
                <Container>
                    <Link href="/">
                        <a>
                            <Navbar.Brand className="cursor-pointer pt-0">
                                <Image src="/logo.png"
                                    height="55"
                                    alt="Carvalho Mudas" />
                            </Navbar.Brand>
                        </a>
                    </Link>
                    <Navbar.Toggle />
                    <Navbar.Collapse>
                        <Nav className="ml-auto">
                            <Nav.Link href="/">
                                <FontAwesomeIcon icon={faHome} className="mr-1" />
                                Home
                            </Nav.Link>
                            <Nav.Link href="/#saber-mais">
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
                            <Nav.Link href="/localizacao">
                                <FontAwesomeIcon icon={faCompass} className="mr-1" />
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
            <FloatingWpp />
            <Footer />
        </>
    )
}
export default LandingTemplate
