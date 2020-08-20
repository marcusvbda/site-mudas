import React, { useContext } from 'react'
import dynamic from "next/dynamic"
import { GlobalContext } from '@/src/context/globalContext'
import LandingTemplate from '@/src/components/landing'
import { Container, Row, Col } from 'react-bootstrap'
const YouTube = dynamic(() => import('react-youtube'))
const Carousel = dynamic(() => import('@/src/components/home/carousel'))
const TestimonalCard = dynamic(() => import('@/src/components/home/testimonial-card'))
const MotionCard = dynamic(() => import('@/src/components/home/motion-card'))

const Home = () => {
    const { app } = useContext(GlobalContext)

    return (
        <LandingTemplate title="Home" isMobile={app.isMobile}>
            <div className="mb-4">
                <Carousel isMobile={app.isMobile} />
            </div>
            <section id="saber-mais">
                <Container>
                    <h1 className="font-weight-light my-4 text-md-left text-sm-center">
                        💡 SOBRE NÓS
                    </h1>
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
            <section className="bg-green py-5">
                <Container>
                    <h1 className="font-weight-light my-4 text-md-right text-sm-center">
                        💚 UMA MUDA POR VEZ
                    </h1>
                    <Row className="pb-5">
                        <MotionCard
                            image="/home/plante.jpg"
                            type="green"
                            title="Plante uma Arvore 🌴"
                            description="Um novo futuro pode começar com você !"
                        />
                        <MotionCard
                            image="/home/flor.jfif"
                            type="purple"
                            title="Permita Florecer 🌹"
                            description="Tudo que floresce na nossa vida é resultado do que cultivamos !"
                        />
                        <MotionCard
                            image="/home/jabuticabeira.jpg"
                            type="purple"
                            title="Adoce a Vida 🍍"
                            description="De mais sabor ao mundo e adoce o dia das pessoas colhendo frutas !"
                        />
                    </Row>
                </Container>
            </section>
            <section className="py-5">
                <Container>
                    <h1 className="font-weight-light my-4 text-center">
                        🤩 DEPOIMENTOS
                    </h1>
                    <Row>
                        <TestimonalCard
                            image="/home/person_1.jfif"
                            name="Silvana P. Goulart"
                            stars={5}
                        >
                            Nullam laoreet id orci cursus porttitor.
                            Ut sodales felis at auctor facilisis.
                            Cras varius dolor sit amet quam malesuada, eget sodales massa rutrum.
                        </TestimonalCard>
                        <TestimonalCard
                            image="/home/person_2.jfif"
                            name="Marco Antonio Coutinho"
                            stars={5}
                        >
                            Nullam laoreet id orci cursus porttitor.
                            Ut sodales felis at auctor facilisis.
                            Cras varius dolor sit amet quam malesuada, eget sodales massa rutrum.
                        </TestimonalCard>
                        <TestimonalCard
                            image="/home/person_3.jfif"
                            name="Paulo Constantino"
                            stars={5}
                        >
                            Maecenas rutrum accumsan venenatis.
                            Cras nec viverra nisi.
                            Aenean quam urna, laoreet pellentesque nisl non, blandit luctus nulla.
                            Curabitur nec dui vulputate, rhoncus dui in, euismod enim.
                            Etiam pellentesque quam ut sapien dictum imperdiet.
                            Morbi non venenatis dolor.
                            Mauris sit amet elit sodales.
                        </TestimonalCard>
                    </Row>
                </Container>
            </section>
        </LandingTemplate >
    )
}
export default Home
