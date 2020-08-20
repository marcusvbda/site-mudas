import React from 'react'
import Link from 'next/link'
import { Button, Container, Carousel } from 'react-bootstrap'

const CarouselMobile = ({ timeout }) => {
    return (
        <Carousel interval={timeout}>
            <Carousel.Item>
                <div className="carousel-image mobile" style={{
                    backgroundImage: `url(/home/rio.jpg)`
                }}>
                    <Container className="pb-5">
                        <div className="carousel-item-content">
                            <strong>Viva o Verde</strong>
                            <p className="mb-0">Plante seu futuro e mude o de outras pessoas com Mudas Carvalho !</p>
                            <p>Confira todos os produtos e serviços clicando no botão abaixo.</p>
                            <a href="#saber-mais" className="mt-3"><Button variant="primary">Saber Mais</Button></a>
                        </div>
                    </Container>
                </div>
            </Carousel.Item>
            <Carousel.Item>
                <div className="carousel-image mobile" style={{
                    backgroundImage: `url(/home/laranja2.jpg)`
                }}>
                    <Container className="pb-5">
                        <div className="carousel-item-content">
                            <strong>Conheça o Viveiro</strong>
                            <p className="mb-0">Venha nos visitar e conheça nosso trabalho de perto !</p>
                            <p>Confira todos os produtos e serviços clicando no botão abaixo.</p>
                            <div className="mt-3">
                                <Link href="/localizacao">
                                    <a><Button variant="primary">Ver Localização</Button></a>
                                </Link>
                            </div>
                        </div>
                    </Container>
                </div>
            </Carousel.Item>
            <Carousel.Item>
                <div className="carousel-image mobile" style={{
                    backgroundImage: `url(/home/molhada.jpg)`
                }}>
                    <Container className="pb-5">
                        <div className="carousel-item-content">
                            <strong>Confira Nossos Serviços</strong>
                            <p>Dedicamos todo nosso tempo e trabalho afim de atender da melhor forma possível nossos clientes !</p>
                            <div className="mt-3">
                                <Link href="/servicos">
                                    <a><Button variant="primary">Nossos Serviços</Button></a>
                                </Link>
                            </div>
                        </div>
                    </Container>
                </div>
            </Carousel.Item>
        </Carousel>
    )
}
export default CarouselMobile
