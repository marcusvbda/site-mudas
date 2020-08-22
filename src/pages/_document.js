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
                    {/* <meta name="google-site-verification" content="EjVfNL7-L50qFZGgRVeOhwjXySQrbkU4_XTsic2lvGMdsd" /> */}
                </Head>
                <body>
                    <h2 className="d-none">{this.getDescription()}</h2>
                    <Main />
                    <NextScript />
                </body>
            </Html>
        )
    }
}

export default _Document