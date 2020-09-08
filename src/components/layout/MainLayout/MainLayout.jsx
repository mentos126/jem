import React from 'react'

import AppFooter from '../../ui/AppFooter/AppFooter'
import AppNavbar from '../../ui/AppNavbar/AppNavbar'

function MainLayout({children}) {
  return (
    // <div style={{background: '#f1f1f1'}}>
    <div  className="grey lighten-2">
      <AppNavbar />
        <div className="container grey lighten-4">
          {children}
        </div>
      <AppFooter />
    </div>
  )
}

export default MainLayout
