import React from 'react'
import { useState } from 'react'

const intro = (creation) => {
  return (
    <div className={intro ? 'WWW-full WWW-intro' : 'WWW-hide'}>
        <h1 className='WWW-intro-title'>Welcome to The Wild Wild West</h1>
        <p className='WWW-intro-text'>Welcome to the Wild Wild West, where you step into the boots of a cowboy striving to make a living in the rugged frontier. As a cowboy, you've left your family back home to seek fortune and adventure in the untamed lands of the West. Your main goal is to earn enough money to support your loved ones and secure a better future for them.</p>
        <p className='WWW-intro-text'>
        You are a hardworking cowboy with a heart of gold. Born and raised on a small farm back East, you've always dreamed of a life of freedom and opportunity in the West. With your trusty horse by your side, you embark on a journey filled with danger, excitement, and the promise of wealth.
        </p>
    </div>
  )
}

export default intro