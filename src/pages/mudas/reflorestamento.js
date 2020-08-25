import React, { useContext } from 'react'
import Template from '@/src/components/template'
import { GlobalContext } from '@/src/context/globalContext'
import { Container, Row, Col, Image } from 'react-bootstrap'
import dynamic from 'next/dynamic'
const TypeList = dynamic(() => import('@/src/components/products/type-list'))
import ModalImage from "react-modal-image"

const Forest = () => {
    const { app } = useContext(GlobalContext)
    return (
        <Template title="Mudas de Reflorestamento" isMobile={app.isMobile} current="products">
            <Container>
                <Row className="pb-3 mt-3" id="products-page" >
                    <TypeList compact={true} active='forest' />
                </Row>
            </Container>
            <Container>
                <Row className="mb-4 d-flex align-items-center flex-row">
                    <Col md={9} sm={12}>
                        <h3 className="font-weight-light f-50 text-md-left text-sm-center mt-3 mb-4">🌳 MUDAS DE REFLORESTAMENTO</h3>
                    </Col>
                    <Col md={3} sm={12} className="d-flex justify-content-center">
                        <Image src="/logo.webp"
                            height={app.isMobile ? 50 : 75}
                            alt="Carvalho Mudas" />
                    </Col>
                </Row>
                <Row className="d-flex align-items-center justify-content-center">
                    {[...Array(5)].map((x, i) => (
                        <Col md={4} sm={12} className="mb-2" key={i}>
                            <ModalImage
                                small={`/mudas/reflorestamento/${i + 1}.webp`}
                                large={`/mudas/reflorestamento/${i + 1}.webp`}
                                alt="Mudas Carvalho"
                            />
                        </Col>
                    ))}
                </Row>
            </Container>
        </Template>
    )
}
export default Forest