import Router from 'next/router'
import NProgress from 'nprogress'
import GlobalContextProvider from '@/src/context/globalContext'
import "@/src/scss/app.scss"
// import { getIsMobile } from '@/src/utils/helpers'

Router.events.on('routeChangeStart', () => NProgress.start())
Router.events.on('routeChangeComplete', () => NProgress.done())
Router.events.on('routeChangeError', () => NProgress.done())

const App = ({ Component, pageProps, app }) => {
    return (
        <GlobalContextProvider app={app}>
            <Component {...pageProps} />
        </GlobalContextProvider>
    )
}

App.getInitialProps = async ({ Component, ctx }) => {
    const getChildProps = async (comp, ctx) => {
        let pageProps = {}
        if (Component.getInitialProps) pageProps = await Component.getInitialProps(ctx)
        return pageProps
    }

    const getAppConfigProps = ctx => {
        return { isMobile: false }
    }

    return { pageProps: await getChildProps(Component, ctx), app: getAppConfigProps(ctx) }
}


export default App