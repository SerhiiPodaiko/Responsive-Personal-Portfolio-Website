import { Inter } from 'next/font/google'

import '@styles/globals.css'
import Header from '@components/Header/Header'

const inter = Inter({subsets: ['latin']})

export const metadata = {
    title: process.env.NEXT_MY_FULL_NAME,
    description: 'My portfolio. Description. Front-end development. React development. My company. My hard skills. My life',
    icons: {
        icon: 'images/logo.jpeg'
    }
}

export default function RootLayout({ children }) {
    return (
        <html lang='en'>
        <body className={inter.className}>
            <div className='w-full h-screen bg-bodyColor text-textLight overflow-x-hidden overflow-y-scroll'>
                <Header />
                {children}
            </div>
        </body>
        </html>
    )
}
