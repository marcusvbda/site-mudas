import React from 'react'
import { Col } from 'react-bootstrap'
import Link from 'next/link'
import "./styles.scss"

const MotionCard = ({ description, title, image, type }) => {
    return (
        <Col xs={12} md={4} className="d-flex justify-content-center flex-column">
            <div className="square-250" style={{
                backgroundImage: `url(${image})`
            }}>
                <Link href="/produtos" >
                    <a>
                        <div className={`container-tree d-flex flex-column ${type}`}>
                            <span className="mb-4 title">{title}</span>
                            <span className="description">{description}</span>
                        </div>
                    </a>
                </Link>
            </div>
        </Col>
    )
}

export default MotionCard