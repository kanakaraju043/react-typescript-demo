import React from 'react'
import Sidebar from './Sidebar'
import Header from './Header'
import RootContainer from './RootContainer'
import Footer from './Footer'

const Layout = () => {
  return (
    <div className="flex h-screen bg-gray-100">
      {/* Sidebar */}
      <Sidebar />

      <div className="flex-1 flex flex-col overflow-hidden">
        {/* Header */}
        <Header />

        {/* Body */}
        <RootContainer />

        {/* Footer */}
        <Footer />
      </div>
    </div>
  )
}

export default Layout