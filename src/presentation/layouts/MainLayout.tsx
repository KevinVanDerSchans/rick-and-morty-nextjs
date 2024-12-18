import Header from '@sharedComponents/header/Header'
import React from 'react'

interface MainLayoutProps {
  children: React.ReactNode
}

const MainLayout = ({ children }: MainLayoutProps) => {
  return (
    <>
      <Header />
      <main>{children}</main>
    </>
  )
}

export default MainLayout
