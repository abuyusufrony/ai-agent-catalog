import Head from 'next/head';



export default function HomePage() {



    return (
        <>

            <Head>
                <title>AI Agent Catalog | Discover Smart AI Tools</title>
                <meta
                    name="description"
                    content="Explore a catalog of AI agents with filtering and search functionality. Learn more about their capabilities, features, and tags."
                />
                <meta name="robots" content="index, follow" />
                <meta property="og:title" content="AI Agent Catalog" />
                <meta property="og:description" content="Browse mock AI agents with rich features and capabilities." />
                <meta property="og:image" content="/images/preview.png" />
                <meta property="og:url" content="https://yourdomain.com" />
                <meta name="viewport" content="width=device-width, initial-scale=1" />
            </Head>

            {/* Main Content */}
            <main className="max-w-6xl mx-auto px-4 py-8">
                <header className="mb-8 text-center">
                    <h1 className="text-4xl font-bold mb-2">AI Agent Catalog</h1>
                    <p className="text-gray-600">
                        Discover, filter, and explore mock AI agents by category and capability.
                    </p>
                </header>






            </main>
        </>
    );
}
