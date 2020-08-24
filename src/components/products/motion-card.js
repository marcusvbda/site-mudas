import React from 'react'
import { Col } from 'react-bootstrap'
import Link from 'next/link'

const MotionCard = ({ description, title, image, type, url, hover, className }) => {
    return (
        <Col xs={12} md={4} className="d-flex justify-content-center flex-column">
            <div className={`square-250 ${className}`} style={{
                backgroundImage: `url(${image})`
            }}>
                <Link href={url} >
                    <a>
                        <div className={`container-tree d-flex flex-column ${type}`}>
                            <span className="mb-4 title">{title}</span>
                            <span className="description">{description}</span>
                            <b className="hover">{hover}</b>
                        </div>
                    </a>
                </Link>
            </div>
        </Col >
    )
}

export default MotionCard