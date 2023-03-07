import './globals.css'
export const metadata = {
  title: 'THT App Design',
  description: 'This is the THT App Design',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className='mx-auto max-w-screen-sm h-screen bg-gray-100 text-tertiary-400'>{children}</body>
    </html>
  )
}
