import React from 'react'
import { Container, Row, Col, Image, Card } from 'react-bootstrap'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faQuoteLeft, faQuoteRight, faStar } from '@fortawesome/free-solid-svg-icons'
import "./styles.scss"

const TestimonalCard = ({ children, name, image, stars }) => {
    const Rate = () => {
        let rate_stars = []
        for (let i = 0;i < stars;i++) rate_stars.push(<FontAwesomeIcon key={i} icon={faStar} className="text-mudas" style={{ fontSize: 30 }} />)
        return rate_stars
    }

    return (
        <Col md={4} sm={12} className="d-flex align-items-strench mb-3">
            <Card className="testimonial-card shadow w-100">
                <Card.Body className="d-flex flex-column">
                    <Row className="d-flex justify-content-center mb-4">
                        <Col xs={8} sm={8} md={6} className="imagecol">
                            <Image src={image} roundedCircle className="w-100 shadow" alt="testimonial" />
                        </Col>
                    </Row>
                    <Row>
                        <Col className="text-center mb-4">
                            <Rate />
                        </Col>
                    </Row>
                    <Row className="mb-3">
                        <Col className="text-center d-flex flex-column">
                            <div className="d-flex justify-content-start mb-3">
                                <FontAwesomeIcon icon={faQuoteLeft} className="text-tree" style={{ fontSize: 20 }} />
                            </div>
                            {children}
                            <div className="d-flex justify-content-end">
                                <FontAwesomeIcon icon={faQuoteRight} className="text-tree mt-2" style={{ fontSize: 20 }} />
                            </div>
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