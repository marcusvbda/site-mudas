import React, { useContext } from 'react'
import { GlobalContext } from '@/src/context/globalContext'
import Template from '@/src/components/template'
import { Container, Row } from 'react-bootstrap'
import dynamic from 'next/dynamic'
const Carousel = dynamic(() => import('@/src/components/home/carousel'))
import About from '@/src/components/about'
const TestimonalCard = dynamic(() => import('@/src/components/home/testimonial-card'))
// const InstagramFeed = dynamic(() => import('@/src/components/instagram-feed'))
const TypeList = dynamic(() => import('@/src/components/products/type-list'))


const Home = () => {
	const { app } = useContext(GlobalContext)

	return (
		<Template title="Home" isMobile={app.isMobile} current="home">
			<div className="mb-5">
				<Carousel isMobile={app.isMobile} />
			</div>
			<section id="saber-mais">
				<About />
			</section>
			<section className="bg-green py-3">
				<Container>
					<h3 className="font-weight-light f-50 mt-3 mb-4 text-md-right text-sm-center">
						💚 UMA MUDA POR VEZ
                    </h3>
					<Row className="pb-5 mt-3">
						<TypeList />
					</Row>
				</Container>
			</section>
			{/* <section id="instagram-section" className="py-5 mb-3">
                <Container>
                    <h3 className="font-weight-light f-50 mt-2 mb-4  text-md-left text-sm-center">
                        ❤️ CURTA NOSSAS ÚLTIMAS POSTAGENS
                    </h3>
                </Container>
                <InstagramFeed
                    isMobile={app.isMobile}
                    username={"mudascarvalho"}
                />
            </section> */}
			<section className="pt-5 mb-3">
				<Container>
					<h3 className="font-weight-light f-50 mt-2 mb-4 text-left">
						🤩 DEPOIMENTOS
                    </h3>
					<Row className="d-flex justify-content-center mt-3">
						<TestimonalCard
							image="/home/person_1.webp"
							name="Silvana P. Goulart"
							rate={5}
						>
							Procurei em todos o viveiros conhecidos os produtos que eu estava precisando, porém o único lugar onde encontrei tudo foi na Mudas Carvalho, e o melhor, por um ótimo preço.
                        </TestimonalCard>
						<TestimonalCard
							image="/home/person_2.webp"
							name="Marco Antonio Coutinho"
							rate={5}
						>
							Desde a abertura da minha empresa, todos os produtos de paisagismo que preciso encontro no Mudas Carvalho, além de ótimo atendimento sempre saí dela lá extremamente satisfeito. Indico muito !
                        </TestimonalCard>
						<TestimonalCard
							image="/home/person_3.webp"
							name="Paulo Constantino"
							rate={5}
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
