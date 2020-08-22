import React from 'react'
import { Row, Col, Image, Card } from 'react-bootstrap'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faStar } from '@fortawesome/free-solid-svg-icons'
import "./styles.scss"

const TestimonalCard = ({ children, name, image, rate }) => {

    return (
        <Col md={3} sm={12} className="d-flex align-items-strench mb-3">
            <Card className="testimonial-card shadow w-100">
                <Card.Body className="d-flex flex-column">
                    <Row>
                        <Col className="text-center mb-2">
                            {[...Array(rate)].map((star, i) => (
                                <FontAwesomeIcon key={i} icon={faStar} className="text-golden" style={{ fontSize: 15 }} />
                            ))}
                        </Col>
                    </Row>
                    <Row className="d-flex justify-content-center mb-2">
                        <Col xs={6} sm={5} md={4} className="imagecol">
                            <Image src={image} roundedCircle className="w-100 shadow" alt="testimonial" />
                        </Col>
                    </Row>
                    <Row className="mb-3">
                        <Col className="text-center d-flex flex-column">
                            <small>{children}</small>
                        </Col>
                    </Row>
                    <Row className="my-3 mt-auto">
                        <Col className="text-center">
                            <small><b>{name}</b></small>
                        </Col>
                    </Row>
                </Card.Body>
            </Card>
        </Col>
    )
}

export default TestimonalCard