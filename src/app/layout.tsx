import type { Metadata } from 'next'
import Main from './main'
import './globals.css'

export const metadata: Metadata = {
    title: 'Scientry',
    description: 'Self-hosted, all-in-one Data Management & Visualization solution for scientific researchers.',
    icons: [{ rel: 'icon', url: '/favicon.svg', type: 'image/svg+xml' }]
}

export default function RootLayout({
    children
}: Readonly<{
    children: React.ReactNode
}>) {
    return (
        <html
            lang="en"
            className="bg-background text-foreground dark"
        >
            <body>
                <Main>{children}</Main>
            </body>
        </html>
    )
}
