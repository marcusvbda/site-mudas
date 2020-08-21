import React, { useContext } from 'react'
import Template from '@/src/components/template'
import { GlobalContext } from '@/src/context/globalContext'
import { Container, Row, Col } from 'react-bootstrap'

const Location = () => {
    const { app } = useContext(GlobalContext)

    return (
        <Template title="Localização" isMobile={app.isMobile} current="location">
            <Container>
                <Row>
                    <Col>
                        <h1>Localização</h1>
                    </Col>
                </Row>
            </Container>
        </Template>
    )
}
export default Location