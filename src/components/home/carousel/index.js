import React from 'react'
import dynamic from 'next/dynamic'
import "./styles.scss"

const CarouselHome = ({ isMobile }) => {
    const CarouselVersion = () => {
        if (isMobile) {
            const CarouselMobile = dynamic(() => import('./partials/carousel-mobile'))
            return <CarouselMobile timeout={4000} />
        }
        const CarouselDesktop = dynamic(() => import('./partials/carousel-desktop'))
        return <CarouselDesktop timeout={4000} />
    }
    return (
        <div>
            <CarouselVersion />
        </div>
    )
}
export default CarouselHome
