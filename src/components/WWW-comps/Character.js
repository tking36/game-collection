import { useEffect } from "react";
import React from 'react'

const Character = ( { creation,
    playerName,
    setPlayerName,
    playerHealth,
    setPlayerHealth,
    playerStrength,
    setPlayerStrength,
    playerCharisma,
    setPlayerCharisma,
    playerAgility,
    setPlayerAgility,
    skillPoints,
    setSkillPoints,
    level,
    playerImage,
    setPlayerImage,
gold}) => {

    useEffect(() => {
        
      }, [playerHealth, gold]);

    
  return (
    <div className='WWW-Char-Cont'>
          <img className='WWW-char-image' src={playerImage}></img>
        <div className='WWW-char-info-cont'>
          <h2 className='WWW-char-info'>Player Name: {playerName}</h2>
          <h2 className='WWW-char-info'>Player Health: {playerHealth}</h2>
          <h2 className='WWW-char-info'>Player Strength: {playerStrength}</h2>
          <h2 className='WWW-char-info'>Player Charisma: {playerCharisma}</h2>
          <h2 className='WWW-char-info'>Player Agility: {playerAgility}</h2>
            <h2 className='WWW-char-info'>Gold: {gold}</h2>
        </div>
        </div>
  )
}

export default Character