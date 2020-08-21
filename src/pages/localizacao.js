import React, { useContext } from 'react'
import Template from '@/src/components/template'
import { GlobalContext } from '@/src/context/globalContext'
import { Container, Row, Col } from 'react-bootstrap'
import dynamic from 'next/dynamic'
const Iframe = dynamic(() => import('@/src/components/logic/iframe'))

const Location = () => {
    const { app } = useContext(GlobalContext)

    return (
        <Template title="Localização" isMobile={app.isMobile} current="location">
            <Container>
                <h3 className="font-weight-light f-50 my-4 text-md-left text-sm-center">
                    🗺️ Localização
                    </h3>
                <Row>
                    <Col className="container-iframe">
                        <b className="mr-2">Endereço :</b>Rod. Cmte. João Ribeiro de Barros - Rodovia, Herculândia - SP, 17650-000
                    </Col>
                </Row>
                <Row className="mt-4 d-flex justify-content-center">
                    <Col md={8} sm={12} className="container-iframe" style={{ height: 350 }}>
                        <Iframe
                            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3699.130586051554!2d-50.394626285218735!3d-22.00630688547708!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x94bf98d27ab09b3f%3A0x482a109285575ae6!2sRod.%20Cmte.%20Jo%C3%A3o%20Ribeiro%20de%20Barros%2C%20Hercul%C3%A2ndia%20-%20SP!5e0!3m2!1spt-BR!2sbr!4v1598042522192!5m2!1spt-BR!2sbr"
                        />
                    </Col>
                </Row>
            </Container>
        </Template>
    )
}
export default Location