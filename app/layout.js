'use client'
import './globals.css'
import Head from 'next/head'
export const metadata = {
  title: 'THT App Design',
  description: 'This is the THT App Design',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <Head>
        <link rel="shortcut icon" href="../public/logo.jpg" />
      </Head>
      <body className='mx-auto max-w-screen-sm h-screen bg-gray-100 text-tertiary-400'>{children}</body>
    </html>
  )
}
