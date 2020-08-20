import React from 'react'
import { Container, Row, Col, Image, Card } from 'react-bootstrap'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faQuoteLeft, faQuoteRight, faStar } from '@fortawesome/free-solid-svg-icons'

const TestimonalCard = ({ children, name, image, stars }) => {
    const Rate = () => {
        let rate_stars = []
        for (let i = 0;i < stars;i++) rate_stars.push(<FontAwesomeIcon key={i} icon={faStar} className="text-mudas" style={{ fontSize: 30 }} />)
        return rate_stars
    }

    return (
        <Col md={4} sm={12} className="d-flex align-items-strench">
            <Card className="testimonial-card shadow w-100">
                <Card.Body className="d-flex flex-column">
                    <Row className="d-flex justify-content-center">
                        <Col xs={8} sm={8} md={6} style={{ height: 70 }}>
                            <Image src={image} roundedCircle className="w-100" />
                        </Col>
                    </Row>
                    <Row>
                        <Col className="text-center mb-4">
                            <Rate />
                        </Col>
                    </Row>
                    <Row className="mb-3">
                        <Col>
                            <FontAwesomeIcon icon={faQuoteLeft} className="text-tree mr-2" style={{ fontSize: 20 }} />
                            {children}
                            <FontAwesomeIcon icon={faQuoteRight} className="text-tree ml-2" style={{ fontSize: 20 }} />
                        </Col>
                    </Row>
                    <Row className="my-3 mt-auto">
                        <Col className="text-center">
                            <b>{name}</b>
                        </Col>
                    </Row>
                </Card.Body>
            </Card>
        </Col>
    )
}

export default TestimonalCard