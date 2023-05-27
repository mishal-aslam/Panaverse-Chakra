'use client'
import { ChakraProvider } from '@chakra-ui/react'
import Header from './components/Header'
import Footer from './components/Footer'
export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <head />
      <body>
        <ChakraProvider>
          <Header />
          {children}
          <Footer />
        </ChakraProvider>
      </body>
    </html>
  )
}
