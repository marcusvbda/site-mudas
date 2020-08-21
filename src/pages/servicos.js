import React, { useContext } from 'react'
import Template from '@/src/components/template'
import { GlobalContext } from '@/src/context/globalContext'
import { Container, Row, Col } from 'react-bootstrap'

const Services = () => {
    const { app } = useContext(GlobalContext)

    return (
        <Template title="Serviços" isMobile={app.isMobile} current="services">
            <Container>
                <Row>
                    <Col>
                        <h1>Serviços</h1>
                    </Col>
                </Row>
            </Container>
        </Template>
    )
}
export default Services