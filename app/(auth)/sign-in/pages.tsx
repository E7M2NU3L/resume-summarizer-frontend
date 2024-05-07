import Footer from '@/components/Footer/Footer'
import Navbar from '@/components/Navbar/Navbar'
import React from 'react'

const pages = ({children} : {children: React.ReactNode}) => {
  return (
    <div>
        <Navbar />
        {children}
        <Footer />
    </div>
  )
}

export default pages