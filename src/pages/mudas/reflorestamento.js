import React, { useContext } from 'react'
import Template from '@/src/components/template'
import { GlobalContext } from '@/src/context/globalContext'
import { Container, Row, Col } from 'react-bootstrap'
import dynamic from 'next/dynamic'
const TypeList = dynamic(() => import('@/src/components/products/type-list'))
import ModalImage from "react-modal-image"
const DownloadPdf = dynamic(() => import('@/src/components/mudas/download-pdf'))

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
                    <Col className="d-flex flex-row justify-content-between flex-wrap">
                        <div>
                            <h3 className="font-weight-light f-50 text-md-left text-sm-center mt-3 mb-4">🌳 MUDAS DE REFLORESTAMENTO</h3>
                        </div>
                        <DownloadPdf />
                    </Col>
                </Row>
                <Row className="d-flex align-items-center justify-content-center align-items-stretch">
                    <Col md={4} sm={12} className="mb-2">
                        <label className="label-muda"></label>
                        <ModalImage
                            small={`/mudas/reflorestamento/1.webp`}
                            large={`/mudas/reflorestamento/1.webp`}
                            alt="Mudas Carvalho"
                        />
                    </Col>
                    <Col md={4} sm={12} className="mb-2">
                        <label className="label-muda"></label>
                        <ModalImage
                            small={`/mudas/reflorestamento/2.webp`}
                            large={`/mudas/reflorestamento/2.webp`}
                            alt="Mudas Carvalho"
                        />
                    </Col>
                    <Col md={4} sm={12} className="mb-2">
                        <label className="label-muda"></label>
                        <ModalImage
                            small={`/mudas/reflorestamento/3.webp`}
                            large={`/mudas/reflorestamento/3.webp`}
                            alt="Mudas Carvalho"
                        />
                    </Col>
                </Row>
                <Row className="mt-3 d-flex align-items-stretch justify-content-center">
                    <Col md={4} sm={12} className="mb-2">
                        <label className="label-muda"></label>
                        <ModalImage
                            small={`/mudas/reflorestamento/4.webp`}
                            large={`/mudas/reflorestamento/4.webp`}
                            alt="Mudas Carvalho"
                        />
                    </Col>
                    <Col md={4} sm={12} className="mb-2">
                        <label className="label-muda"></label>
                        <ModalImage
                            small={`/mudas/reflorestamento/5.webp`}
                            large={`/mudas/reflorestamento/5.webp`}
                            alt="Mudas Carvalho"
                        />
                    </Col>
                </Row>
            </Container>
        </Template>
    )
}
export default Forest