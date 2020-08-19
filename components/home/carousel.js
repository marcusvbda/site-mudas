import React from 'react'
import Link from 'next/link'
import { Button, Container, Carousel } from 'react-bootstrap'

const CarouselHome = () => {

    const timeout = 4000

    return (
        <div>
            <Carousel interval={timeout} className="d-none d-md-block">
                <Carousel.Item>
                    <div className="carousel-image" style={{
                        backgroundImage: `url(/home/verde.jpg)`
                    }}>
                        <Container className="pb-5">
                            <div className="carousel-item-content">
                                <strong>Viva o Verde</strong>
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
                        backgroundImage: `url(/home/laranja.jpg)`
                    }}>
                        <Container className="pb-5">
                            <div className="carousel-item-content">
                                <strong>Conheça o Viveiro</strong>
                                <p className="mb-0">Venha nos visitar e conheça nosso trabalho de perto !</p>
                                <p>Confira todos os produtos e serviços clicando no botão abaixo.</p>
                                <Link href="/localizacao" className="mt-3">
                                    <a><Button variant="primary">Ver Localização</Button></a>
                                </Link>
                            </div>
                        </Container>
                    </div>
                </Carousel.Item>
                <Carousel.Item>
                    <div className="carousel-image" style={{
                        backgroundImage: `url(/home/girassol.jpg)`
                    }}>
                        <Container className="pb-5">
                            <div className="carousel-item-content">
                                <strong>Confira Nossos Serviços</strong>
                                <p>Dedicamos todo nosso tempo e trabalho afim de atender da melhor forma possível nossos clientes !</p>
                                <Link href="/servicos" className="mt-3">
                                    <a><Button variant="primary">Nossos Serviços</Button></a>
                                </Link>
                            </div>
                        </Container>
                    </div>
                </Carousel.Item>
            </Carousel>
            <Carousel interval={timeout} className="d-block d-md-none">
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
                                <Link href="/localizacao" className="mt-3">
                                    <a><Button variant="primary">Ver Localização</Button></a>
                                </Link>
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
                                <Link href="/servicos" className="mt-3">
                                    <a><Button variant="primary">Nossos Serviços</Button></a>
                                </Link>
                            </div>
                        </Container>
                    </div>
                </Carousel.Item>
            </Carousel>
        </div>
    )
}
export default CarouselHome
