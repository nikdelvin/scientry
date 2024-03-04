import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import Main from './main'
import './globals.css'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
    title: 'Scientry',
    description: 'Smart dashboard database for scientific researchers'
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
            <body className={inter.className}>
                <Main>{children}</Main>
            </body>
        </html>
    )
}
