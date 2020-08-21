import React, { useContext } from 'react'
import Template from '@/src/components/template'
import { GlobalContext } from '@/src/context/globalContext'
import { Container, Row, Col } from 'react-bootstrap'

const Contact = () => {
    const { app } = useContext(GlobalContext)

    return (
        <Template title="Contato" isMobile={app.isMobile} current="contact">
            <Container>
                <Row>
                    <Col>
                        <h1>Contatos</h1>
                    </Col>
                </Row>
            </Container>
        </Template>
    )
}
export default Contact