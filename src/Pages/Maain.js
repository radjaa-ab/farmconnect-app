import React from 'react'
import Sidebar from '../Components/Sidebar'
import Chat from '../Components/Chat'
import '../Styles/Style.css';

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