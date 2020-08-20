import React from 'react'
import Link from 'next/link'
import { Button, Container, Carousel } from 'react-bootstrap'

const CarouselMobile = ({ timeout }) => {
    return (
        <Carousel interval={timeout}>
            <Carousel.Item>
                <div className="carousel-image mobile" style={{
                    backgroundImage: `url(/home/viveiro.jpg)`
                }}>
                    <Container className="pb-5">
                        <div className="carousel-item-content">
                            <strong>VIVA O VERDE</strong>
                            <p className="mb-0">Plante seu futuro e mude o de outras pessoas com Mudas Carvalho !</p>
                            <p>Confira todos os produtos e serviços clicando no botão abaixo.</p>
                            <a href="#saber-mais" className="mt-3"><Button variant="primary">Saber Mais</Button></a>
                        </div>
                    </Container>
                </div>
            </Carousel.Item>
            <Carousel.Item>
                <div className="carousel-image mobile" style={{
                    backgroundImage: `url(/home/flor.jpg)`
                }}>
                    <Container className="pb-5">
                        <div className="carousel-item-content">
                            <strong>CONHEÇA O VIVEIRO</strong>
                            <p className="mb-0">Venha nos visitar e conheça nosso trabalho de perto !</p>
                            <p>Confira todos os produtos e serviços clicando no botão abaixo.</p>
                            <div className="mt-3">
                                <Link href="/localizacao">
                                    <a><Button variant="secondary">Ver Localização</Button></a>
                                </Link>
                            </div>
                        </div>
                    </Container>
                </div>
            </Carousel.Item>
            <Carousel.Item>
                <div className="carousel-image mobile" style={{
                    backgroundImage: `url(/home/jabuticabeira.jpg)`
                }}>
                    <Container className="pb-5">
                        <div className="carousel-item-content">
                            <strong>PRECISA DE AJUDA</strong>
                            <p>Entre e contato conosco por Whatsapp e tire todas suas dúvidas com algúm membro de nossa equipe comercial !</p>
                            <div className="mt-3">
                                <a href="http://wa.me/+5514997210771" target="_blank">
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
export default CarouselMobile
