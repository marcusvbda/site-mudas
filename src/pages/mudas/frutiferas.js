import React, { useContext } from 'react'
import Template from '@/src/components/template'
import { GlobalContext } from '@/src/context/globalContext'
import { Container, Row, Col } from 'react-bootstrap'
import dynamic from 'next/dynamic'
const TypeList = dynamic(() => import('@/src/components/products/type-list'))

const Fruits = () => {
    const { app } = useContext(GlobalContext)
    return (
        <Template title="Mudas Frutíferas" isMobile={app.isMobile} current="products">
            <Container>
                <h3 className="font-weight-light f-50 my-4 text-md-left text-sm-center">🍊 MUDAS FRUTÍFERAS</h3>
                <Row className="pb-5 mt-3" id="products-page" >
                    <TypeList compact={true} active='fruits' />
                </Row>
                <Row>
                    <Container>
                        <Col>
                            Frutiferas
                        </Col>
                    </Container>
                </Row>
            </Container>
        </Template>
    )
}
export default Fruits