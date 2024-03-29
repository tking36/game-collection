import React from 'react'

const Buttons = ({handleIntro}) => {
  return (
    <div>
        <button onClick={handleIntro}>Start Game</button>
    </div>
  )
}

export default Buttons