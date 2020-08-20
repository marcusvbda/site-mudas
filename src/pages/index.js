import React, { useContext } from 'react'
import { GlobalContext } from '@/src/context/globalContext'
import LandingTemplate from '@/src/components/landing'
import { Container, Row, Col } from 'react-bootstrap'
import Carousel from "@/src/components/home/carousel"

const Home = () => {
    const { app } = useContext(GlobalContext)

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
        <LandingTemplate title="Home" isMobile={app.isMobile}>
            <div className="mb-4">
                <Carousel isMobile={app.isMobile} />
            </div>
            <Container>
                <Row id="saber-mais">
                    <RenderItems />
                </Row>
            </Container>
        </LandingTemplate>
    )
}
export default Home
