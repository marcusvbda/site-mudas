import React from 'react'
import LandingTemplate from '@/components/landing'
import { Container, Row, Col } from 'react-bootstrap'
import Carousel from "@/components/home/carousel"

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

    return (
        <LandingTemplate title="Home">
            <Carousel className="mb-4" />
            <Container>
                <Row id="saber-mais">
                    <RenderItems />
                </Row>
            </Container>
        </LandingTemplate>
    )
}
export default Home
