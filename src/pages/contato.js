import React, { useContext, useState } from 'react'
import Template from '@/src/components/template'
import { GlobalContext } from '@/src/context/globalContext'
import { Container, Row, Col, Form, Button } from 'react-bootstrap'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPaperPlane, faEnvelope } from '@fortawesome/free-solid-svg-icons'
import dynamic from 'next/dynamic'
const SocialIcons = dynamic(() => import('@/src/components/template/partials/social-icons'))
const PhonesRow = dynamic(() => import('@/src/components/template/partials/phones-row'))

const Contact = () => {
    const [emailForm, setEmailForm] = useState({
        subject: "",
        body: "",
    })

    const { app } = useContext(GlobalContext)

    const getMailtoLink = () => {
        return `mailto:vendas@mudascarvalho.com.br?subject=${emailForm.subject}&body=${emailForm.body}`
    }

    const sendEmail = e => {
        e.preventDefault()
        if (!emailForm.subject) return alert("Digite o assunto do email")
        if (!emailForm.body) return alert("Digite o texto do email")
        window.open(getMailtoLink())
    }
    return (
        <Template title="Contato" isMobile={app.isMobile} current="contact" hidefooter={true}>
            <Container className="mb-5">
                <h3 className="font-weight-light f-50 my-4 text-md-left text-sm-center">✉️ Contato</h3>
                <Row>
                    <Col xs={12} md={6} className="d-flex justify-content-center flex-column mb-5">
                        <h4 className="font-weight-light mb-5">
                            Nos envie um email, nos telefone ou mande uma mensagem nas nossa redes sociais, o atenderemos com o maior carinho 💚
                        </h4>
                        <PhonesRow />
                        <SocialIcons />
                    </Col>
                    <Col xs={12} md={6}>
                        <Form onSubmit={sendEmail}>
                            <Form.Group controlId="subject">
                                <Form.Label>Assunto de Email</Form.Label>
                                <Form.Control placeholder="Digite o assunto" onChange={e => setEmailForm({ ...emailForm, subject: e.target.value })} />
                            </Form.Group>
                            <Form.Group controlId="body">
                                <Form.Label>Conteúdo de Email</Form.Label>
                                <Form.Control as="textarea" rows={6} placeholder="Digite aqui o texto do seu email" onChange={e => setEmailForm({ ...emailForm, body: e.target.value })} />
                            </Form.Group>
                            <Button variant="primary" type="submit" className="mb-5">
                                <FontAwesomeIcon icon={faPaperPlane} className="mr-2" />Enviar Email
                            </Button>
                        </Form>
                    </Col>
                </Row>
            </Container>
        </Template>
    )
}
export default Contact