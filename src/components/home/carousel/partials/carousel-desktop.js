import React from 'react'
import Link from 'next/link'
import { Button, Container, Carousel } from 'react-bootstrap'

const CarouselDesktop = ({ timeout }) => {
    return (
        <Carousel interval={timeout} >
            <Carousel.Item>
                <div className="carousel-image" style={{
                    backgroundImage: `url(/home/verde.webp)`
                }}>
                    <Container className="pb-5">
                        <div className="carousel-item-content">
                            <strong>VIVA O VERDE</strong>
                            <p className="mb-0">Plante seu futuro e mude o de outras pessoas com Mudas Carvalho !</p>
                            <p>Confira todos os produtos e serviços clicando no botão abaixo.</p>
                            <Link href="#saber-mais">
                                <a><Button variant="primary">Saber Mais</Button></a>
                            </Link>
                        </div>
                    </Container>
                </div>
            </Carousel.Item>
            <Carousel.Item>
                <div className="carousel-image" style={{
                    backgroundImage: `url(/home/jabuticabeira.webp)`
                }}>
                    <Container className="pb-5">
                        <div className="carousel-item-content">
                            <strong>CONHEÇA O VIVEIRO</strong>
                            <p className="mb-0">Venha nos visitar e conheça nosso trabalho de perto !</p>
                            <p>Confira todos os produtos e serviços clicando no botão abaixo.</p>
                            <div className="mt-3">
                                <Link href="/localizacao" >
                                    <a><Button variant="secondary">Ver Localização</Button></a>
                                </Link>
                            </div>
                        </div>
                    </Container>
                </div>
            </Carousel.Item>
            <Carousel.Item>
                <div className="carousel-image" style={{
                    backgroundImage: `url(/home/girassol.webp)`
                }}>
                    <Container className="pb-5">
                        <div className="carousel-item-content">
                            <strong>PRECISA DE AJUDA</strong>
                            <p>Entre e contato conosco por Whatsapp e tire todas suas dúvidas com algúm membro de nossa equipe comercial !</p>
                            <div className="mt-3">
                                <a href="http://wa.me/+5514997210771" target="_blank" rel="noreferrer">
                                    <Button variant="success">Conversar No Whatsapp</Button>
                                </a>
                            </div>
                        </div>
                    </Container>
                </div>
            </Carousel.Item>
        </Carousel>
    )
}
export default CarouselDesktop
