import React from 'react'
import Head from 'next/head'
import ReactIf from '@/src/components/logic/react-if'
import NavBar from '@/src/components/template/navbar'
import Footer from '@/src/components/template/footer'
import WppFloatButton from '@/src/components/template/wpp-float-button'

const Template = ({ title, children, isMobile, current, hidefooter }) => {

    const GetTitle = () => {
        const defaultTitle = "Mudas Carvalho"
        if (!title) return defaultTitle
        return `${title} | ${defaultTitle}`
    }

    return (
        <>
            <NavBar isMobile={isMobile} current={current} />
            <Head>
                <title>{GetTitle()}</title>
                <meta property="og:title" content={GetTitle()} key="title" />
            </Head>
            <h1 className="d-none">{GetTitle()}</h1>
            <main>
                {children}
            </main>
            <WppFloatButton isMobile={isMobile} />
            <ReactIf condition={hidefooter !== true}>
                <Footer isMobile={isMobile} />
            </ReactIf>
        </>
    )
}
export default Template
