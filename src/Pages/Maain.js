import React from 'react'
import Sidebar from '../Components/Sidebar'
import Chat from '../Components/Chatt'


const Maain = () => {
  return (
    <div className='home'>
      <div className="container">
        <Sidebar/>
        <Chat/>
      </div>
    </div>  
    )
}

export default Maain;