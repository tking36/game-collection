import React from 'react'

const Buttons = ({ handleIntro, creation, intro }) => {
  return (
    <div>
        <button className={intro ? 'button-78' : 'WWW-hide'} onClick={handleIntro}>Start Game</button>

        <button className={creation ? 'button-78' : 'WWW-hide'} onClick={handleIntro}></button>
    </div>
  )
}

export default Buttons