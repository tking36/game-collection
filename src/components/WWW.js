import React from 'react'
import NavBar from './NavBar'


const WWW = () => {
  return ( <>
    <NavBar />
    <div className='WWW-container'>
        <div className='WWW-main'>
            <div className='WWW-main-left'>
                <div className='WWW-left-top'>
                    <h1>LT</h1>
                </div>
                <div className='WWW-left-bottom'>
                    <h1>LB</h1>
                </div>
            </div>
            <div className='WWW-main-right'>
                <h1>MR</h1>
            </div>
        </div>
        
        <div className='WWW-bottom'>
            <h1>Bottom</h1>
        </div>
    </div>
    </>
  )
}

export default WWW