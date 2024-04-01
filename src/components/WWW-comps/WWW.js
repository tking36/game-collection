import React from 'react'
import { useState } from 'react'
import NavBar from '../NavBar'
import Intro from './Intro'
import Buttons from './Buttons'
import Creation from './Creation'

const WWW = () => {
let [intro , setIntro] = useState(true)
let [creation , setCreation] = useState(false)
let [level , setLevel] = useState(0)
let [gameOver , setGameOver] = useState(false)
let [gameWon , setGameWon] = useState(false)
let [gameLost , setGameLost] = useState(false)
let [playerName , setPlayerName] = useState('')
let [playerHealth , setPlayerHealth] = useState(100)
let [playerStrength , setPlayerStrength] = useState(10)
let [playerCharisma , setPlayerCharisma] = useState(10)
let [playerAgility , setPlayerAgility] = useState(10)

const handleIntro = () => {
    setIntro(false)
    setCreation(true)
}


  return ( <>
    <NavBar />
    <div className='WWW-container'>
        <div className='WWW-main'>
            <div className={intro || creation ? 'WWW-hide' : 'WWW-main-left'}>
                <div className= 'WWW-left-top'>
                    <h1>LT</h1>
                </div>
                <div className='WWW-left-bottom'>
                    <h1>LB</h1>
                </div>
            </div>
            <div className= {intro || creation ? 'WWW-full WWW-main-right'  : 'WWW-main-right'}>
            <Intro className= {intro ? '' : 'WWW-hide'} intro={intro} handleIntro={handleIntro}/>
            <Creation creation={creation} playerName={playerName} playerHealth={playerHealth} playerStrength={playerStrength} playerCharisma={playerCharisma} playerAgility={playerAgility}/>
            </div>
        </div>
        
        <div className='WWW-bottom'>
            <Buttons creation={creation} level={level} gameOver={gameOver} gameWon={gameWon} gameLost={gameLost} playerName={playerName} playerHealth={playerHealth} playerStrength={playerStrength} playerCharisma={playerCharisma} playerAgility={playerAgility}
            handleIntro={handleIntro} intro={intro} />
            {intro ? <p>intro</p> : null}
            {creation ? <p>creation</p> : null}
        </div>
    </div>
    </>
  )
}

export default WWW