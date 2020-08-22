import React from 'react'
import { Container, Row, Col } from 'react-bootstrap'
import dynamic from 'next/dynamic'
const Iframe = dynamic(() => import('@/src/components/logic/iframe'))

const Contact = () => {
    return (
        <Container>
            <h3 className="font-weight-light f-50 my-4 text-md-left text-sm-center">💡 SOBRE NÓS</h3>
            <Row id="saber-mais" className="mt-4 mb-4">
                <Col xs={12} md={6}>
                    <p className="mb-0">
                        A <b className="text-mudas ml-1">MUDAS CARVALHO</b>, está no mercado desde 1987, prestando serviços e produtos de qualidade.
                    </p>
                    <p className="mb-0">
                        Ao decorrer deste 21 anos fomos nos especializando na produção de mudas frutíferas produzindo, que são vendidas no torrão ou em latas de 20 litros. Também continuamos oferecendo as tradicionais mudas em embalagens plásticas de saquinhos.
                    </p>
                    <p className="mb-0">
                        Trabalhamos com vendas de árvores de sombra e de lei, bem como cercas vivas e ornamentais.
                    </p>
                    <p className="mb-0">
                        Esperamos que você venha conhecer nossos produtos e serviços, nos quais são distribuidos em todo território brasileiro.
                    </p>
                </Col>
                <Col xs={12} md={6} className="container-iframe" style={{ height: 350 }}>
                    <Iframe
                        src="https://www.youtube.com/embed/cXhPbYtUXTc"
                    />
                </Col>
            </Row>
        </Container>
    )
}

export default Contact