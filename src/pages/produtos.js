import React, { useContext } from 'react'
import Template from '@/src/components/template'
import { GlobalContext } from '@/src/context/globalContext'
import { Container, Row, Col } from 'react-bootstrap'

const Products = () => {
    const { app } = useContext(GlobalContext)

    return (
        <Template title="Produtos" isMobile={app.isMobile} current="products">
            <Container>
                <Row>
                    <Col>
                        <h1>Produtos</h1>
                    </Col>
                </Row>
            </Container>
        </Template>
    )
}
export default Products