import React, { useContext } from 'react'
import { GlobalContext } from '@/src/context/globalContext'
import Template from '@/src/components/template'
import dynamic from 'next/dynamic'
const About = dynamic(() => import('@/src/components/about'))

const AboutPage = () => {
    const { app } = useContext(GlobalContext)

    return (
        <Template title="Sobre" isMobile={app.isMobile} current="about">
            <About />
        </Template>
    )
}
export default AboutPage