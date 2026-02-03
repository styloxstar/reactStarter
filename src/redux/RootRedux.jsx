import React from 'react'
import Navbar from '../components/layout/Navbar'
import Counter from '../components/reduxComponents/Counter'

const RootRedux = () => {
  return (
    <div>
         <div className="header">
      </div>
      <div className="mainBody container box-shadow"><Counter /></div>
    </div>
  )
}

export default RootRedux
