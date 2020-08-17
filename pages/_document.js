import Document, { Html, Head, Main, NextScript } from 'next/document'

class _Document extends Document {
    static async getInitialProps(ctx) {
        const initialProps = await Document.getInitialProps(ctx)
        return { ...initialProps }
    }

    getDescription() {
        return "Mudas Carvalho está no mercado desde 1987, prestando serviços e produtos de qualidade."
    }

    render() {
        return (
            <Html>
                <Head>
                    <link rel="icon" href="https://picsum.photos/200/300" />
                    <meta property="og:image" content="https://picsum.photos/200/300" />
                    <meta property="og:url" content="image/png" />
                    <meta property="og:description" content={this.getDescription()} />
                    <meta property="og:type" content="website" />
                    <meta name="description" content={this.getDescription()} />
                    {/* <meta name="google-site-verification" content="EjVfNL7-L50qFZGgRVeOhwjXySQrbkU4_XTsic2lvGM" /> */}
                </Head>
                <body>
                    <Main />
                    <NextScript />
                </body>
            </Html>
        )
    }
}

export default _Document