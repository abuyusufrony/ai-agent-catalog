import { Html, Head, Main, NextScript } from 'next/document';


export default function Document() {
    return (
        <Html lang="en">
            <Head>

                <meta charSet="UTF-8" />
                <meta name="viewport" content="width=device-width, initial-scale=1" />


                <meta name="description" content="Explore a catalog of AI agents with filtering, search, and detailed views." />
                <meta name="author" content="Your Name" />
                <meta name="robots" content="index, follow" />


                <meta property="og:title" content="AI Agent Catalog" />
                <meta property="og:description" content="Browse and discover AI agents with powerful capabilities." />
                <meta property="og:type" content="website" />
                <meta property="og:image" content="/images/preview.png" />
                <meta property="og:url" content="https://yourdomain.com" />


                <link rel="icon" href="/favicon.ico" />


            </Head>
            <body className="bg-white text-gray-900 antialiased">
                <Main />
                <NextScript />
            </body>
        </Html>
    );
}
