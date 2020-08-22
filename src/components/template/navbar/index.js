import React, { useEffect, useRef } from 'react'
import Link from 'next/link'
import { Navbar, Nav, Image, Container } from 'react-bootstrap'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faHome, faLeaf, faEnvelope, faCompass, faBriefcase, faAddressCard } from '@fortawesome/free-solid-svg-icons'
import ReactIf from '@/src/components/logic/react-if'
import SocialIcons from '@/src/components/template/partials/social-icons'
import PhonesRow from '@/src/components/template/partials/phones-row'
import "./styles.scss"

const NavBarTemplate = ({ isMobile, current }) => {
    const greenNavBarContent = useRef('container')

    useEffect(() => {
        if (!isMobile) {
            window.addEventListener('scroll', () => {
                const element = greenNavBarContent.current
                if (element) {
                    const maxHeight = isMobile ? 90 : 160
                    if (document.body.scrollTop >= maxHeight || document.documentElement.scrollTop >= maxHeight) {
                        if (element.classList) element.classList.add("fixed-top")
                    } else {
                        if (element.classList) element.classList.remove("fixed-top")
                    }
                }
            })
        }
    })

    const Menu = () => {
        return (
            <>
                <Navbar.Toggle className="ml-auto" />
                <Navbar.Collapse>
                    <Nav className="ml-auto">
                        <Link href="/">
                            <a className={`nav-link ${current == 'home' ? 'active' : ''} ml-3`}>
                                <FontAwesomeIcon icon={faHome} className="mr-2" />Home
                            </a>
                        </Link>
                        <Link href="/sobre">
                            <a className={`nav-link ${current == 'about' ? 'active' : ''} ml-3`}>
                                <FontAwesomeIcon icon={faAddressCard} className="mr-2" />Sobre
                            </a>
                        </Link>
                        <Link href="/produtos">
                            <a className={`nav-link ${current == 'products' ? 'active' : ''} ml-3`}>
                                <FontAwesomeIcon icon={faLeaf} className="mr-2" />Produtos
                            </a>
                        </Link>
                        <Link href="/servicos">
                            <a className={`nav-link ${current == 'services' ? 'active' : ''} ml-3`}>
                                <FontAwesomeIcon icon={faBriefcase} className="mr-2" />Serviços
                            </a>
                        </Link>
                        <Link href="/contato">
                            <a className={`nav-link ${current == 'contact' ? 'active' : ''} ml-3`}>
                                <FontAwesomeIcon icon={faEnvelope} className="mr-2" />Contato
                            </a>
                        </Link>
                        <Link href="/localizacao">
                            <a className={`nav-link ${current == 'location' ? 'active' : ''} ml-3`}>
                                <FontAwesomeIcon icon={faCompass} className="mr-2" />Localização
                            </a>
                        </Link>
                    </Nav>
                </Navbar.Collapse>
            </>
        )
    }

    return (
        <>
            <ReactIf condition={!isMobile}>
                <Navbar expand="md" bg="ligth" className="top-contact d-none d-md-block">
                    <Container className="d-flex align-items-center">
                        <small className="text-secondary flex-row d-flex">
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
            <Navbar expand="md" bg="ligth" className="white-menu">
                <Container>
                    <Link href="/">
                        <a>
                            <Navbar.Brand className="cursor-pointer pt-0">
                                <Image src="/logo.webp"
                                    height={isMobile ? 50 : 75}
                                    alt="Carvalho Mudas" />
                            </Navbar.Brand>
                        </a>
                    </Link>
                    <ReactIf condition={isMobile}>
                        <Menu />
                    </ReactIf>
                </Container>
            </Navbar>
            <ReactIf condition={!isMobile}>
                <div className="fixed-navbar" ref={greenNavBarContent}>
                    <Navbar expand="md" bg="success" variant="dark" className="green-menu">
                        <Container>
                            <Menu />
                        </Container>
                    </Navbar>
                </div>
            </ReactIf>
            <div className="gradient-bar" />
        </>
    )
}

export default NavBarTemplate