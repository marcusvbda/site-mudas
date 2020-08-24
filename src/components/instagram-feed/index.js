import React, { useState, useEffect } from 'react'
import Instagram from './lib'
import dynamic from 'next/dynamic'
const InstagramEmbed = dynamic(() => import('react-instagram-embed'))
import { Container, Row, Col, Carousel } from 'react-bootstrap'
import ReactIf from '@/src/components/logic/react-if'
import "./styles.scss"

const InstagramFeed = ({ username, isMobile }) => {
    const [chunkedFeed, setChunkedFeed] = useState([])
    const interval = 400000
    const perPage = 3

    useEffect(() => {
        const getFeedFn = async () => {
            const chunk = await Instagram.getFeed(username, isMobile ? false : perPage)
            setChunkedFeed(chunk)
        }
        getFeedFn()
    }, [])

    const CarouselFeedDesktop = () => (
        <Carousel interval={interval} className="feed-instagram">
            {chunkedFeed && chunkedFeed.map((row, i) => (
                <Carousel.Item key={`${i}_carousel`}>
                    <Container>
                        <Row className="d-flex justify-content-center">
                            {row && row.map((x, y) => (
                                <Col md={12 / perPage} key={`${y}_col_${i}`}>
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
        <Carousel interval={interval} className="feed-instagram">
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

    return (
        <>
            <ReactIf condition={!isMobile}>
                <CarouselFeedDesktop />
            </ReactIf>
            <ReactIf condition={isMobile}>
                <CarouselFeedMobile />
            </ReactIf>
        </>
    )
}

export default InstagramFeed