import Document, { Html, Head, Main, NextScript } from 'next/document'
class _Document extends Document {
    static async getInitialProps(ctx) {
        const initialProps = await Document.getInitialProps(ctx)
        return { ...initialProps }
    }

    getDescription() {
        return "Mudas Carvalho está no mercado desde 1987, prestando serviços e produtos de qualidade."
    }

    getLogo() {
        return `/logo.webp`
    }

    render() {
        return (
            <Html lang="pt-br">
                <Head>
                    <link rel="icon" href="/favicon.ico" />
                    <link rel="apple-touch-icon" href={this.getLogo()} />
                    <meta property="og:image" content={this.getLogo()} />
                    <meta property="og:url" content="image/png" />
                    <meta property="og:description" content={this.getDescription()} />
                    <meta property="og:type" content="website" />
                    <meta name="description" content={this.getDescription()} />
                    <meta name="google-site-verification" content="9juz3aw9HuVbOjgzDoBP0WFriXNSpwqYDcB-iHmoUPA" />
                </Head>
                {/* Google Tag Manager */}
                <script
                    dangerouslySetInnerHTML={{
                        __html: `(function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
                            new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
                            j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
                            'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
                            })(window,document,'script','dataLayer','GTM-NCPHWKZ');`,
                    }}
                />
                {/* End Google Tag Manager */}
                <body>
                    <h2 className="d-none">{this.getDescription()}</h2>
                    <Main />
                    <NextScript />
                </body>
                {/* Google Tag Manager (noscript) */}
                <noscript
                    dangerouslySetInnerHTML={{
                        __html: `<iframe src="https://www.googletagmanager.com/ns.html?id=GTM-NCPHWKZ"height="0" width="0" style="display:none;visibility:hidden"></iframe></iframe>`,
                    }}
                />
                {/* End Google Tag Manager (noscript) */}
            </Html>
        )
    }
}

export default _Document