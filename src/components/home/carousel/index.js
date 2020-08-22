import React from 'react'
import dynamic from 'next/dynamic'
import "./styles.scss"

const CarouselHome = ({ isMobile }) => {
    const timeout = 4000000

    const CarouselVersion = () => {
        if (isMobile) {
            const CarouselMobile = dynamic(() => import('./partials/carousel-mobile'))
            return <CarouselMobile timeout={timeout} />
        }
        const CarouselDesktop = dynamic(() => import('./partials/carousel-desktop'))
        return <CarouselDesktop timeout={timeout} />
    }
    return (
        <div>
            <CarouselVersion />
        </div>
    )
}
export default CarouselHome
