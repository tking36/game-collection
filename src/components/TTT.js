import React, { useEffect } from 'react'
import { useState } from 'react';
import NavBar from './NavBar';

const TTT = () => {
const [one, setOne] = useState('')
const [two, setTwo] = useState('')
const [three, setThree] = useState('')
const [four, setFour] = useState('')
const [five, setFive] = useState('')
const [six, setSix] = useState('')
const [seven, setSeven] = useState('')
const [eight, setEight] = useState('')
const [nine, setNine] = useState('')

const [player, setPlayer] = useState('X')
const [winner, setWinner] = useState('')
const [turn, setTurn] = useState(0)
const [gameOver, setGameOver] = useState(false)

const [xWins, setXWins] = useState(0)
const [oWins, setOwins] = useState(0)

const [flash, setFlash] = useState(false)

const resetState = () => {
    setOne('');
    setTwo('');
    setThree('');
    setFour('');
    setFive('');
    setSix('');
    setSeven('');
    setEight('');
    setNine('');
    setPlayer('X');
    setWinner('');
    setTurn(0);
    setGameOver(false);
  };

const handleClick = (num) => {
    if (num === 1) {
        setOne(player)
    } else if (num === 2) {
        setTwo(player)
    } else if (num === 3) {
        setThree(player)
    } else if (num === 4) {
        setFour(player)
    } else if (num === 5) {
        setFive(player)
    } else if (num === 6) {
        setSix(player)
    } else if (num === 7) {
        setSeven(player)
    } else if (num === 8) {
        setEight(player)
    } else if (num === 9) {
        setNine(player)
    }
    setTurn(turn + 1)
    if (player === 'X') {
        setPlayer('O')
    } else {
        setPlayer('X')
    }
}



const checkForWinner = () => {
    // Check rows
    if (one && one === two && one === three) {
      return one;
    }
    if (four && four === five && four === six) {
      return four;
    }
    if (seven && seven === eight && seven === nine) {
      return seven;
    }
  
    // Check columns
    if (one && one === four && one === seven) {
      return one;
    }
    if (two && two === five && two === eight) {
      return two;
    }
    if (three && three === six && three === nine) {
      return three;
    }
  
    // Check diagonals
    if (one && one === five && one === nine) {
      return one;
    }
    if (three && three === five && three === seven) {
      return three;
    }
  
    // If no winner yet
    return null;
  }


  const handleFlash = () => {
    setFlash(true)
    setTimeout(() => {
        setFlash(false)
    }, 1000)    
    }
  

  useEffect(() => {
    if (checkForWinner()) {
        setWinner(checkForWinner())
        setGameOver(true)
    } else if (turn === 9) {
        setGameOver(true)
    }
    }, [turn])

    useEffect(() => {
        if (gameOver) {
          setTimeout(() => {
            resetState();
          }, 3000);
        }
      }, [gameOver]);

        useEffect(() => {
            if (winner === 'X') {
                setXWins(xWins + 1)
            } else if (winner === 'O') {
                setOwins(oWins + 1)
            }
        }, [winner])


  return (
<div className='ttt'>
    <NavBar/>
    <div className='ttt-title'>
        <h3 className='wins red'>X wins: {xWins}</h3>
        <h1>Tic Tac Toe</h1>
        <h3 className='wins'>O wins: {oWins}</h3>   
    </div>

    {!winner && !gameOver ?
    <h2 className= {flash ? "flashing-text ttt-banner" : 'ttt-banner'}>
        Player {player}'s turn
    </h2> :
    null }

    <h2 className= {flash ? "flashing-text ttt-banner" : 'ttt-banner'}>
        {winner && turn !== 0 ? `Player ${winner} wins!` : null}
    </h2>

    <h2 className= {flash ? "flashing-text ttt-banner" : 'ttt-banner'}>
        {gameOver && !winner ? 'Game Over' : null}
    </h2>

    <div className="game">

        <div className="board">
            <div className="row">
            <div
                className={one === "X" ? 'cell red' : 'cell'} 
                onClick={() => {handleFlash(); handleClick(1);}}
                data-cell>{one}
            </div>
            <div 
                className={two === "X" ? 'cell red' : 'cell'} 
                onClick={() => {handleFlash(); handleClick(2);}} 
                data-cell>{two}
            </div>
            <div 
                className={three === "X" ? 'cell red' : 'cell'} 
                onClick={() => {handleFlash(); handleClick(3);}} 
                data-cell>{three}
            </div>
        </div>

        <div className="row">
            <div 
                className={four === "X" ? 'cell red' : 'cell'} 
                onClick={() => {handleFlash(); handleClick(4);}} 
                data-cell>{four}
            </div>
            <div 
                className={five === "X" ? 'cell red' : 'cell'} 
                onClick={() => {handleFlash(); handleClick(5);}} 
                data-cell>{five}
            </div>
            <div 
                className={six === "X" ? 'cell red' : 'cell'} 
                onClick={() => {handleFlash(); handleClick(6);}} 
                data-cell>{six}
            </div>
        </div>

        <div className="row">
            <div 
                className={seven === "X" ? 'cell red' : 'cell'} 
                onClick={() => {handleFlash(); handleClick(7);}} 
                data-cell>{seven}
            </div>
            <div 
                className={eight === "X" ? 'cell red' : 'cell'} 
                onClick={() => {handleFlash(); handleClick(8);}} 
                data-cell>{eight}
            </div>
            <div 
                className={nine === "X" ? 'cell red' : 'cell'} 
                onClick={() => {handleFlash(); handleClick(9);}} 
                data-cell>{nine}
            </div>
        </div>
    </div>

</div>
</div>
)
}

export default TTT