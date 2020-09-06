import React from 'react'

import './MainLayout.scss'
import AppNavbar from '../../ui/AppNavbar/AppNavbar'
import AppFooter from '../../ui/AppFooter/AppFooter'

function MainLayout({children}) {
  return (
    <>
      <AppNavbar />
      <div className="container">
        {children}
      </div>
      <AppFooter />
    </>
  )
}

export default MainLayout
