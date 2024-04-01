import React from 'react'

const Creation = ({creation, playerName, playerHealth, playerStength, playerCharisma, playerAgility }) => {
  return (
    <div className={creation ? 'WWW-full' : 'WWW-hide'}></div>
  )
}

export default Creation