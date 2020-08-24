import React, { useState, useEffect } from 'react'
import Instagram from './lib'
import InstagramEmbed from 'react-instagram-embed'
import { Container, Row, Col, Carousel } from 'react-bootstrap'
import ReactIf from '@/src/components/logic/react-if'
import "./styles.scss"

const InstagramFeed = ({ username, isMobile }) => {
    const [chunkedFeed, setChunkedFeed] = useState([])
    const [loading, setLoading] = useState(true)

    useEffect(() => {
        const getFeedFn = async () => {
            const chunk = await Instagram.getFeed(username, isMobile ? false : 3)
            setChunkedFeed(chunk)
            setLoading(false)
        }
        getFeedFn()
    }, [])

    const CarouselFeedDesktop = () => (
        <Carousel interval={4000} className="feed-instagram">
            {chunkedFeed && chunkedFeed.map((row, i) => (
                <Carousel.Item key={`${i}_carousel`}>
                    <Container>
                        <Row className="d-flex justify-content-center">
                            {row && row.map((x, y) => (
                                <Col xs={12} sm={12} md={4} key={`${y}_col_${i}`}>
                                    <InstagramEmbed key={`${y}_feed_${i}`}
                                        url={`https://instagr.am/p/${x.shortCode}`}
                                        maxWidth={320}
                                        hideCaption={false}
                                        containerTagName='div'
                                        protocol=''
                                        injectScript
                                    />
                                </Col>
                            ))}
                        </Row>
                    </Container>
                </Carousel.Item>
            ))}
        </Carousel>
    )

    const CarouselFeedMobile = () => (
        <Carousel interval={4000} className="feed-instagram">
            {chunkedFeed && chunkedFeed.map((row, i) => (
                <Carousel.Item key={`${i}_carousel`}>
                    <Container>
                        <Row className="d-flex justify-content-center">
                            <Col key={`${i}_col_`}>
                                <InstagramEmbed key={`${i}_feed_`}
                                    url={`https://instagr.am/p/${row.shortCode}`}
                                    maxWidth={320}
                                    hideCaption={false}
                                    containerTagName='div'
                                    protocol=''
                                    injectScript
                                />
                            </Col>
                        </Row>
                    </Container>
                </Carousel.Item>
            ))}
        </Carousel>
    )

    const Shimmer = () => (
        <Container>
            <Row className="d-flex justify-content-center">
                <Col xs={12} sm={12} md={4}>
                    <div style={{ height: 200, width: '100%' }} className="shimmer" />
                </Col>
                <Col xs={12} sm={12} md={4} >
                    <div style={{ height: 100, width: '100%' }} className="shimmer" />
                </Col>
                <Col xs={12} sm={12} md={4} >
                    <div style={{ height: 150, width: '100%' }} className="shimmer" />
                </Col>
            </Row>
        </Container>
    )

    return (
        <>
            <ReactIf condition={loading}>
                <Shimmer />
            </ReactIf>
            <ReactIf condition={!loading && !isMobile}>
                <CarouselFeedDesktop />
            </ReactIf>
            <ReactIf condition={!loading && isMobile}>
                <CarouselFeedMobile />
            </ReactIf>
        </>
    )
}

export default InstagramFeed