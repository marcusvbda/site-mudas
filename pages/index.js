import React from 'react'
import Link from 'next/Link'
import LandingTemplate from '@/components/landing'

import { Button, Container, Row, Col, Carousel } from 'react-bootstrap'

const Home = () => {
    const RenderItems = () => {
        let items = []
        for (let i = 0;i < 3;i++) {
            items.push(
                <Col sm={12} lg={4} key={i}>
                    <h2>Heading</h2>
                    <p>Donec id elit non mi porta gravida at eget metus. Fusce dapibus, tellus ac cursus commodo, tortor mauris condimentum nibh, ut fermentum massa justo sit amet risus. Etiam porta sem malesuada magna mollis euismod. Donec sed odio dui. </p>
                    <p><a className="btn btn-secondary" href="#" role="button">Fusce dapibus</a></p>
                </Col>
            )
        }
        return items
    }

    const web_images_carousel = [
        {
            title: 'Lorem ipsum',
            description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
            btn_text: 'Ver Sobre',
            url: "https://i.picsum.photos/id/308/800/300.jpg?hmac=cT6KkmjnvmnI0cwdNdg54P6X_1ZNxRhFuDn_EJeG99M",
            alt: 'imagem 1',
        },
        {
            title: 'Ipsum Lorem',
            description: 'Lorem ipsum dolor sit amet.',
            btn_text: 'Saiba Mais',
            url: "https://i.picsum.photos/id/7/800/300.jpg?hmac=-MmM4msrU1TvPi7SWSJxPsefiFD3FJ0yFY0T65YA3gI",
            alt: 'imagem 2',
        },
    ]

    const mobile_images_carousel = [
        {
            title: 'Lorem ipsum',
            description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
            btn_text: 'Ver Sobre',
            url: "https://i.picsum.photos/id/235/400/400.jpg?hmac=lhKy3NgJaHngfFJpUSThs5GCScgNjaqavtTVvLCiRRc",
            alt: 'imagem 1',
        },
        {
            title: 'Ipsum Lorem',
            description: 'Lorem ipsum dolor sit amet.',
            btn_text: 'Saiba Mais',
            url: "https://i.picsum.photos/id/407/400/400.jpg?hmac=5UhArkiuK9GeJX7RbPQwJQTZRCT8ewP7XEKXXXv-zmA",
            alt: 'imagem 2',
        },
    ]


    return (
        <LandingTemplate title="Home">
            <div className="mb-4">
                <Carousel interval={3000} className="d-none d-md-block">
                    {web_images_carousel.map((image, i) => (
                        <Carousel.Item key={i}>
                            <img
                                className="d-block w-100"
                                src={image.url}
                                alt={image.alt}
                            />
                            <Carousel.Caption>
                                <h1>{image.title}</h1>
                                <p>{image.description}</p>
                                <p><Button variant="primary">{image.btn_text}</Button></p>
                            </Carousel.Caption>
                        </Carousel.Item>
                    ))}
                </Carousel>
                <Carousel interval={3000} className="d-block d-md-none">
                    {mobile_images_carousel.map((image, i) => (
                        <Carousel.Item key={i}>
                            <img
                                className="d-block w-100"
                                src={image.url}
                                alt={image.alt}
                            />
                            <Carousel.Caption>
                                <h1>{image.title}</h1>
                                <p>{image.description}</p>
                                <p><Button variant="primary">{image.btn_text}</Button></p>
                            </Carousel.Caption>
                        </Carousel.Item>
                    ))}
                </Carousel>
            </div>
            <Container>
                <Row>
                    <RenderItems />
                </Row>
            </Container>
        </LandingTemplate>
    )
}
export default Home
