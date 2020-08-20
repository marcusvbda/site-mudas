import React, { useContext } from 'react'
import { GlobalContext } from '@/src/context/globalContext'
import LandingTemplate from '@/src/components/landing'
import { Container, Row, Col, Image, Card } from 'react-bootstrap'
import Carousel from "@/src/components/home/carousel"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faQuoteLeft, faQuoteRight, faStar } from '@fortawesome/free-solid-svg-icons'

const Home = () => {
    const { app } = useContext(GlobalContext)

    return (
        <LandingTemplate title="Home" isMobile={app.isMobile}>
            <div className="mb-4">
                <Carousel isMobile={app.isMobile} />
            </div>
            <section id="saber-mais">
                <Container>
                    <Row>
                        <Col>
                            <h1 className="font-weight-light my-4 text-md-left text-sm-center">
                                💡 SOBRE NÓS
                            </h1>
                        </Col>
                    </Row>
                </Container>
                <Container>
                    <Row id="saber-mais" className="mt-3">
                        <Col xs={12} md={6}>
                            <span>
                                <p className="mb-0">
                                    A <b className="text-mudas ml-1">MUDAS CARVALHO</b>, está no mercado desde 1987, prestando serviços e produtos de qualidade.
                            </p>
                                <p className="mb-0">
                                    Ao decorrer deste 21 anos fomos nos especializando na produção de mudas frutíferas produzindo, que são vendidas no torrão ou em latas de 20 litros. Também continuamos oferecendo as tradicionais mudas em embalagens plásticas de saquinhos.
                            </p>
                                <p className="mb-0">
                                    Trabalhamos com vendas de árvores de sombra e de lei, bem como cercas vivas e ornamentais.
                            </p>
                                <p className="mb-0">
                                    Esperamos que você venha conhecer nossos produtos e serviços, nos quais são distribuidos em todo território brasileiro.
                            </p>
                            </span>
                        </Col>
                        <Col xs={12} md={6}>
                            <div className="container-img">
                                <iframe
                                    src="https://www.youtube.com/embed/cXhPbYtUXTc"
                                />
                            </div>
                        </Col>
                    </Row>
                </Container>
            </section>
            <section className="bg-green py-5">
                <Container>
                    <Row>
                        <Col>
                            <h1 className="font-weight-light my-4 text-md-right text-sm-center">
                                💚 UMA MUDA POR VEZ
                            </h1>
                        </Col>
                    </Row>
                </Container>
                <Container>
                    <Row className="pb-5">
                        <Col xs={12} md={4} className="d-flex justify-content-center flex-column">
                            <div className="square-250" style={{
                                backgroundImage: `url(/home/plante.jpg)`
                            }}>
                                <div class="container-tree d-flex flex-column green">
                                    <span className="mb-4 title">Plante uma Arvore 🌴</span>
                                    <span className="description">Um novo futuro pode começar com você !</span>
                                </div>
                            </div>
                        </Col>
                        <Col xs={12} md={4} className="d-flex justify-content-center">
                            <div className="square-250" style={{
                                backgroundImage: `url(/home/flor.jfif)`
                            }}>
                                <div class="container-tree d-flex flex-column purple">
                                    <span className="mb-4 title">Permita Florecer 🌹</span>
                                    <span className="description">Tudo que floresce na nossa vida é resultado do que cultivamos !</span>
                                </div>
                            </div>
                        </Col>
                        <Col xs={12} md={4} className="d-flex justify-content-center">
                            <div className="square-250" style={{
                                backgroundImage: `url(/home/jabuticabeira.jpg)`
                            }}>
                                <div class="container-tree d-flex flex-column black">
                                    <span className="mb-4 title">Adoce a Vida 🍍</span>
                                    <span className="description">De mais sabor ao mundo e adoce o dia das pessoas colhendo frutas !</span>
                                </div>
                            </div>
                        </Col>
                    </Row>
                </Container>
            </section>
            <section className="py-5">
                <Container>
                    <Row>
                        <Col>
                            <h1 className="font-weight-light my-4 text-center">
                                🤩 DEPOIMENTOS
                            </h1>
                        </Col>
                    </Row>
                </Container>
                <Container>
                    <Row>
                        <Col md={4} sm={12} className="d-flex align-items-strench">
                            <Card className="testimonial-card shadow w-100">
                                <Card.Body className="d-flex flex-column">
                                    <Row className="d-flex justify-content-center">
                                        <Col xs={8} sm={8} md={6} style={{ height: 70 }}>
                                            <Image src="/home/person_1.jfif" roundedCircle className="w-100" />
                                        </Col>
                                    </Row>
                                    <Row>
                                        <Col className="text-center mb-4">
                                            <FontAwesomeIcon icon={faStar} className="text-mudas" style={{ fontSize: 30 }} />
                                            <FontAwesomeIcon icon={faStar} className="text-mudas" style={{ fontSize: 30 }} />
                                            <FontAwesomeIcon icon={faStar} className="text-mudas" style={{ fontSize: 30 }} />
                                            <FontAwesomeIcon icon={faStar} className="text-mudas" style={{ fontSize: 30 }} />
                                            <FontAwesomeIcon icon={faStar} className="text-mudas" style={{ fontSize: 30 }} />
                                        </Col>
                                    </Row>
                                    <Row className="mb-3">
                                        <Col>
                                            <FontAwesomeIcon icon={faQuoteLeft} className="text-tree mr-2" style={{ fontSize: 20 }} />
                                            Nullam laoreet id orci cursus porttitor. Ut sodales felis at auctor facilisis. Cras varius dolor sit amet quam malesuada, eget sodales massa rutrum.
                                            <FontAwesomeIcon icon={faQuoteRight} className="text-tree ml-2" style={{ fontSize: 20 }} />
                                        </Col>
                                    </Row>
                                    <Row className="my-3 mt-auto">
                                        <Col className="text-center">
                                            <b>
                                                Silvana P. Goulart
                                            </b>
                                        </Col>
                                    </Row>
                                </Card.Body>
                            </Card>
                        </Col>
                        <Col md={4} sm={12} className="d-flex align-items-strench">
                            <Card className="testimonial-card shadow w-100">
                                <Card.Body className="d-flex flex-column">
                                    <Row className="d-flex justify-content-center">
                                        <Col xs={8} sm={8} md={6} style={{ height: 70 }}>
                                            <Image src="/home/person_2.jfif" roundedCircle className="w-100" />
                                        </Col>
                                    </Row>
                                    <Row>
                                        <Col className="text-center mb-4">
                                            <FontAwesomeIcon icon={faStar} className="text-mudas" style={{ fontSize: 30 }} />
                                            <FontAwesomeIcon icon={faStar} className="text-mudas" style={{ fontSize: 30 }} />
                                            <FontAwesomeIcon icon={faStar} className="text-mudas" style={{ fontSize: 30 }} />
                                            <FontAwesomeIcon icon={faStar} className="text-mudas" style={{ fontSize: 30 }} />
                                            <FontAwesomeIcon icon={faStar} className="text-mudas" style={{ fontSize: 30 }} />
                                        </Col>
                                    </Row>
                                    <Row className="mb-3">
                                        <Col>
                                            <FontAwesomeIcon icon={faQuoteLeft} className="text-tree mr-2" style={{ fontSize: 20 }} />
                                            Nullam laoreet id orci cursus porttitor. Ut sodales felis at auctor facilisis. Cras varius dolor sit amet quam malesuada, eget sodales massa rutrum.
                                            <FontAwesomeIcon icon={faQuoteRight} className="text-tree ml-2" style={{ fontSize: 20 }} />
                                        </Col>
                                    </Row>
                                    <Row className="my-3 mt-auto">
                                        <Col className="text-center">
                                            <b>
                                                Marco Antonio Coutinho
                                            </b>
                                        </Col>
                                    </Row>
                                </Card.Body>
                            </Card>
                        </Col>
                        <Col md={4} sm={12} className="d-flex align-items-strench">
                            <Card className="testimonial-card shadow w-100">
                                <Card.Body className="d-flex flex-column">
                                    <Row className="d-flex justify-content-center">
                                        <Col xs={8} sm={8} md={6} style={{ height: 70 }}>
                                            <Image src="/home/person_3.jfif" roundedCircle className="w-100" />
                                        </Col>
                                    </Row>
                                    <Row>
                                        <Col className="text-center mb-4">
                                            <FontAwesomeIcon icon={faStar} className="text-mudas" style={{ fontSize: 30 }} />
                                            <FontAwesomeIcon icon={faStar} className="text-mudas" style={{ fontSize: 30 }} />
                                            <FontAwesomeIcon icon={faStar} className="text-mudas" style={{ fontSize: 30 }} />
                                            <FontAwesomeIcon icon={faStar} className="text-mudas" style={{ fontSize: 30 }} />
                                            <FontAwesomeIcon icon={faStar} className="text-mudas" style={{ fontSize: 30 }} />
                                        </Col>
                                    </Row>
                                    <Row className="mb-3">
                                        <Col>
                                            <FontAwesomeIcon icon={faQuoteLeft} className="text-tree mr-2" style={{ fontSize: 20 }} />
                                            Maecenas rutrum accumsan venenatis. Cras nec viverra nisi. Aenean quam urna, laoreet pellentesque nisl non, blandit luctus nulla. Curabitur nec dui vulputate, rhoncus dui in, euismod enim. Etiam pellentesque quam ut sapien dictum imperdiet. Morbi non venenatis dolor. Mauris sit amet elit sodales.
                                            <FontAwesomeIcon icon={faQuoteRight} className="text-tree ml-2" style={{ fontSize: 20 }} />
                                        </Col>
                                    </Row>
                                    <Row className="my-3 mt-auto">
                                        <Col className="text-center">
                                            <b>
                                                Marcio Constantino
                                            </b>
                                        </Col>
                                    </Row>
                                </Card.Body>
                            </Card>
                        </Col>
                    </Row>
                </Container>
            </section>
        </LandingTemplate >
    )
}
export default Home
