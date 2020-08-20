import React from 'react'
import { Col } from 'react-bootstrap'

const MotionCard = ({ description, title, image, type }) => {
    return (
        <Col xs={12} md={4} className="d-flex justify-content-center flex-column">
            <div className="square-250" style={{
                backgroundImage: `url(${image})`
            }}>
                <div className={`container-tree d-flex flex-column ${type}`}>
                    <span className="mb-4 title">{title}</span>
                    <span className="description">{description}</span>
                </div>
            </div>
        </Col>
    )
}

export default MotionCard