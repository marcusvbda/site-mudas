import React, { useContext } from 'react'
import { GlobalContext } from '@/src/context/globalContext'
import Template from '@/src/components/template'
import { Container, Row, Col } from 'react-bootstrap'

import dynamic from 'next/dynamic'
const Carousel = dynamic(() => import('@/src/components/home/carousel'))
const TestimonalCard = dynamic(() => import('@/src/components/home/testimonial-card'))
const MotionCard = dynamic(() => import('@/src/components/home/motion-card'))
const YouTube = dynamic(() => import('react-youtube'))

const Home = () => {
    const { app } = useContext(GlobalContext)

    return (
        <Template title="Home" isMobile={app.isMobile} current="home">
            <div className="mb-5">
                <Carousel isMobile={app.isMobile} />
            </div>
            <section id="saber-mais">
                <Container>
                    <h3 className="font-weight-light f-50 my-4 text-md-left text-sm-center">
                        💡 SOBRE NÓS
                    </h3>
                    <Row id="saber-mais" className="mt-3 mb-4">
                        <Col xs={12} md={6}>
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
                        </Col>
                        <Col xs={12} md={6}>
                            <div className="container-img">
                                <YouTube videoId="cXhPbYtUXTc" />
                            </div>
                        </Col>
                    </Row>
                </Container>
            </section>
            <section className="bg-green py-3">
                <Container>
                    <h3 className="font-weight-light f-50 mt-3 mb-4 text-md-right text-sm-center">
                        💚 UMA MUDA POR VEZ
                    </h3>
                    <Row className="pb-5">
                        <MotionCard
                            image="/home/plante.webp"
                            type="green"
                            title="Plante uma Arvore 🌴"
                            description="Um novo futuro pode começar com você !"
                        />
                        <MotionCard
                            image="/home/flor.webp"
                            type="purple"
                            title="Permita Florecer 🌹"
                            description="Tudo que floresce na nossa vida é resultado do que cultivamos !"
                        />
                        <MotionCard
                            image="/home/jabuticabeira.webp"
                            type="black"
                            title="Adoce a Vida 🍍"
                            description="De mais sabor ao mundo e adoce o dia das pessoas colhendo frutas !"
                        />
                    </Row>
                </Container>
            </section>
            <section className="pt-5 mb-3">
                <Container>
                    <h3 className="font-weight-light f-50 mt-2 mb-4 text-center">
                        🤩 DEPOIMENTOS
                    </h3>
                    <Row>
                        <TestimonalCard
                            image="/home/person_1.webp"
                            name="Silvana P. Goulart"
                            stars={5}
                        >
                            Procure em todos o viveiros conhecidos os produtos que eu estava precisando, porém o único lugar onde encontrei tudo foi na Mudas Carvalho, e o melhor, por um ótimo preço.
                        </TestimonalCard>
                        <TestimonalCard
                            image="/home/person_2.webp"
                            name="Marco Antonio Coutinho"
                            stars={5}
                        >
                            Desde a abertura da minha empresa, todos os produtos de paisagismo que preciso encontro no Mudas Carvalho, além de ótimo antendiment sempre sair dela lá extremamente satisfeito. Indico muito !
                        </TestimonalCard>
                        <TestimonalCard
                            image="/home/person_3.webp"
                            name="Paulo Constantino"
                            stars={5}
                        >
                            Meu pai apresentou a Mudas Carvalho, disse que eu poderia procurar tudo que precisar lá.
                            desde então nunca precisei de outro viveiro.
                            Eles são extremamente versáteis, têm uma variedade incrível de produtos o serviço é nota 11 .
                            Sempre indiquei, e continuarei indicando.
                        </TestimonalCard>
                    </Row>
                </Container>
            </section>
        </Template >
    )
}
export default Home
