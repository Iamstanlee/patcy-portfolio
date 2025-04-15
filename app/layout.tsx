import type {Metadata} from 'next'
import './globals.css'

export const metadata: Metadata = {
    title: 'Patience Ugbeshe | Portfolio',
    description: 'SOCIAL MEDIA MANAGER / GRAPHIC DESIGNER / COPYWRITER',
    openGraph: {
        title: 'Patience Ugbeshe | Portfolio',
        description: 'SOCIAL MEDIA MANAGER / GRAPHIC DESIGNER / COPYWRITER',
        images: '/opengraph-image.png',
    },
    twitter: {
        title: 'Patience Ugbeshe | Portfolio',
        description: 'SOCIAL MEDIA MANAGER / GRAPHIC DESIGNER / COPYWRITER',
        images: '/twitter-image.png',
    },
}

export default function RootLayout({
                                       children,
                                   }: Readonly<{
    children: React.ReactNode
}>) {
    return (
        <html lang="en">
        <body>{children}</body>
        </html>
    )
}
