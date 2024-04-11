import React from 'react'

const Buttons = ({ handleIntro, creation, intro, playerName, playerHealth, playerStrength, playerCharisma, playerAgility, setLevel, level, endCreation }) => {

  const creationLevel = (num) => {
    setLevel(num)
  }

  const consolePlayer = () => {
    console.log([playerName, playerHealth, playerStrength, playerCharisma, playerAgility])
  }

  return (
    <div>
        <button className={intro ? 'button-78' : 'WWW-hide'} onClick={handleIntro}>Start Game</button>

        <button className={creation && level === 0 ? 'button-78' : 'WWW-hide'} onClick={() => creationLevel(1)} >Submit Stats</button>

        <button className={creation && level === 1 ? 'button-78' : 'WWW-hide'} onClick={() => creationLevel(0)} >Back to Stats</button>
        <button className={creation && level === 1 ? 'button-78' : 'WWW-hide'} onClick={() => creationLevel(2)} >Continue</button>

        <button className={creation && level === 1 ? 'button-78' : 'WWW-hide'} onClick={() => consolePlayer()} >Console Player</button>

        <button className={creation && level === 2 ? 'button-78' : 'WWW-hide'} onClick={() => creationLevel(1)} >Back to Image Selection</button>
        <button className={creation && level === 2 ? 'button-78' : 'WWW-hide'} onClick={() => endCreation()} >Continue</button>
    </div>
  )
}

export default Buttons