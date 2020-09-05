import React from 'react'
import './MainLayout.scss'

function MainLayout({child1, child2}) {
  return (
    <div className="row">
      <div className="col-sm-6">{child1}</div>
      <div className="col-sm-6">{child2}</div>
    </div>
  )
}

export default MainLayout
