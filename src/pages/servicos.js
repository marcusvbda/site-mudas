import React, { useContext } from 'react'
import Template from '@/src/components/template'
import { GlobalContext } from '@/src/context/globalContext'
import { Container, Row, Col, Image } from 'react-bootstrap'
import ModalImage from "react-modal-image"

const Services = () => {
    const { app } = useContext(GlobalContext)

    return (
        <Template title="Serviços" isMobile={app.isMobile} current="services">
            <Container>
                <h3 className="font-weight-light f-50 my-4 text-md-left text-sm-center">💪 SERVIÇOS</h3>
            </Container>

            <Container>
                <Row className="mb-4">
                    <Col md={6} sm={12}>
                        Trabalhamos com uma variedade extensa de plantas de diversos tamanhos e espécies.<br />
                        Fazemos entregas e se desejado, fazemos a plantação das mudas !<br />
                        Um grande diferencial da empresa é o atendimento e a satisfação dos clientes.<br />
                    </Col>
                    <Col md={6} sm={12} className="d-flex justify-content-center">
                        <Image src="/logo.webp"
                            height={app.isMobile ? 50 : 75}
                            alt="Carvalho Mudas" />
                    </Col>
                </Row>
                <Row className="d-flex align-items-center justify-content-center">
                    {[...Array(6)].map((x, i) => (
                        <Col md={4} sm={12} className="mb-2">
                            <ModalImage
                                small={`/servicos/s${i + 1}.webp`}
                                large={`/servicos/s${i + 1}.webp`}
                                alt="Mudas Carvalho"
                            />
                        </Col>
                    ))}
                </Row>
            </Container>
        </Template>
    )
}
export default Services