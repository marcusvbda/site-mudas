import React, { useContext } from 'react'
import Template from '@/src/components/template'
import { GlobalContext } from '@/src/context/globalContext'
import { Container, Row, Col } from 'react-bootstrap'
import dynamic from 'next/dynamic'
const TypeList = dynamic(() => import('@/src/components/products/type-list'))
import ModalImage from "react-modal-image"
const DownloadPdf = dynamic(() => import('@/src/components/mudas/download-pdf'))

const Fruits = () => {
    const { app } = useContext(GlobalContext)
    return (
        <Template title="Mudas Frutíferas" isMobile={app.isMobile} current="products">
            <Container>
                <Row className="pb-3 mt-3" id="products-page" >
                    <TypeList compact={true} active='fruits' />
                </Row>
            </Container>
            <Container>
                <Row className="mb-4 d-flex align-items-center flex-row">
                    <Col className="d-flex flex-row justify-content-between flex-wrap">
                        <div>
                            <h3 className="font-weight-light f-50 text-md-left text-sm-center mt-3 mb-4">🍊 MUDAS FRUTÍFERAS</h3>
                        </div>
                        <DownloadPdf />
                    </Col>
                </Row>
                <Row className="d-flex align-items-center justify-content-center align-items-stretch">
                    <Col md={4} sm={12}>
                        <label className="label-muda">Jabuticaba</label>
                        <ModalImage
                            small={`/mudas/frutiferas/1.webp`}
                            large={`/mudas/frutiferas/1.webp`}
                            alt="Jabuticaba"
                        />
                    </Col>
                    <Col md={4} sm={12}>
                        <label className="label-muda">Coco Anão</label>
                        <ModalImage
                            small={`/mudas/frutiferas/2.webp`}
                            large={`/mudas/frutiferas/2.webp`}
                            alt="Coco Anão"
                        />
                    </Col>
                    <Col md={4} sm={12}>
                        <label className="label-muda">Acerola</label>
                        <ModalImage
                            small={`/mudas/frutiferas/3.webp`}
                            large={`/mudas/frutiferas/3.webp`}
                            alt="Acerola"
                        />
                    </Col>
                </Row>
                <Row className="mt-3 d-flex align-items-stretch justify-content-center">
                    <Col md={4} sm={12}>
                        <label className="label-muda">Manga</label>
                        <ModalImage
                            small={`/mudas/frutiferas/4.webp`}
                            large={`/mudas/frutiferas/4.webp`}
                            alt="Manga"
                        />
                    </Col>
                    <Col md={4} sm={12}>
                        <label className="label-muda">Uva</label>
                        <ModalImage
                            small={`/mudas/frutiferas/5.webp`}
                            large={`/mudas/frutiferas/5.webp`}
                            alt="Uva"
                        />
                    </Col>
                    <Col md={4} sm={12}>
                        <label className="label-muda">Acerola</label>
                        <ModalImage
                            small={`/mudas/frutiferas/6.webp`}
                            large={`/mudas/frutiferas/6.webp`}
                            alt="Uva"
                        />
                    </Col>
                </Row>
            </Container>
        </Template>
    )
}
export default Fruits