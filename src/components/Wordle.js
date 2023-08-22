import React from 'react'
import { useState, useEffect } from 'react';
import NavBar from './NavBar';

const Wordle = () => {
    const [tryCount , setTryCount] = useState(0)
    const [currentWord, setCurrentWord] = useState('')
    const [guess, setGuess] = useState('')

    const words = [
        "QUART", "COYLY", "YOUTH", "RHYME", "BUGGY", "ALIEN", "SMEAR", "UNFIT", "PATTY", "CLING",
        "GLEAN", "LABEL", "HUNKY", "KHAKI", "POKER", "GRUEL", "TWICE", "TWANG", "SHRUG", "TREAT",
        "WASTE", "MERIT", "WOVEN", "NEEDY", "CLOWN", "IRONY", "RUDER", "GAUZE", "CHIEF", "ONSET",
        "PRIZE", "FUNGI", "CHARM", "GULLY", "INTER", "WHOOP", "TAUNT", "LEERY", "CLASS", "THEME",
        "LOFTY", "TIBIA", "BOOZE", "ALPHA", "THYME", "DOUBT", "PARER", "CHUTE", "STICK", "TRICE",
        "ALIKE", "RECAP", "SAINT", "GLORY", "GRATE", "ADMIT", "BRISK", "SOGGY", "USURP", "SCALD",
        "SCORN", "LEAVE", "TWINE", "STING", "BOUGH", "MARSH", "SLOTH", "DANDY", "VIGOR", "HOWDY",
        "ENJOY", "VALID", "IONIC", "EQUAL", "FLOOR", "CATCH", "SPADE", "STEIN", "EXIST", "QUIRK",
        "DENIM", "GROVE", "SPIEL", "MUMMY", "FAULT", "FOGGY", "FLOUT", "CARRY", "SNEAK", "LIBEL",
        "WALTZ", "APTLY", "PINEY", "INEPT", "ALOUD", "PHOTO", "DREAM", "STALE", "BEGIN", "SNARL",
        "RAINY", "UNITE", "MEDAL", "VALET", "INANE", "MAPLE", "SNARL", "BAKER", "THERE", "GLYPH",
        "AVERT", "BRAVE", "AXIOM", "PRIME", "DRIVE", "FEAST", "ITCHY", "CLEAN", "HAPPY", "TEPID",
        "UNDUE", "STUDY", "EJECT", "CHAFE", "TORSO", "ADORE", "WOKEN", "AMBER", "JOUST", "INFER",
        "BRAID", "KNOCK", "NAIVE", "APPLY", "SPOKE", "USUAL", "RIVAL", "PROBE"
      ];
      
    useEffect(() => {
        randomWord()
    }, [])
      

    const countIncrease = () => {
        if(tryCount < 6) {
            setTryCount(tryCount + 1)
        }
    }

    const randomWord = () => {
        let random = Math.floor(Math.random() * words.length)
        setCurrentWord(words[random])
    }
    

  return (
    <> 
        <NavBar/>
        <div>
            <h1 className='wordle-title'>Wordle</h1>
            <h3 className='wordle-subtitle'>Guess the 5 letter word</h3>

            <div className='wordle-input-cont'>
                <div className='wordle-info'>
                    <h3 className='wordle-subtitle'>Guesses: {tryCount}/6</h3>
                    <button className='worlde-submit' onClick={countIncrease} >Submit</button>
                </div>

                <div className='worlde-all-groups'>

                    <div className='wordle-input-group'>

                        <input className='wordle-input' 
                        type='text' placeholder='' 
                        disabled={tryCount === 0 ? false : true}>
                        </input>

                        <input className='wordle-input' 
                        type='text' 
                        placeholder='' 
                        disabled={tryCount === 0 ? false : true}>
                        </input>

                        <input className='wordle-input' 
                        type='text' 
                        placeholder='' 
                        disabled={tryCount === 0 ? false : true}>
                        </input>

                        <input className='wordle-input' 
                        type='text' 
                        placeholder='' 
                        disabled={tryCount === 0 ? false : true}>
                        </input>

                        <input className='wordle-input' 
                        type='text' 
                        placeholder='' 
                        disabled={tryCount === 0 ? false : true}>
                        </input>

                    </div>

                    <div className='wordle-input-group'>

                        <input className='wordle-input' 
                        type='text' placeholder='' 
                        disabled={tryCount === 1 ? false : true}>
                        </input>

                        <input className='wordle-input' 
                        type='text' 
                        placeholder='' 
                        disabled={tryCount === 1 ? false : true}>
                        </input>

                        <input className='wordle-input' 
                        type='text' 
                        placeholder='' 
                        disabled={tryCount === 1 ? false : true}>
                        </input>

                        <input className='wordle-input' 
                        type='text' 
                        placeholder='' 
                        disabled={tryCount === 1 ? false : true}>
                        </input>

                        <input className='wordle-input' 
                        type='text' 
                        placeholder='' 
                        disabled={tryCount === 1 ? false : true}>
                        </input>

                    </div>

                <div className='wordle-input-group'>

                        <input className='wordle-input' 
                        type='text' placeholder='' 
                        disabled={tryCount === 2 ? false : true}>
                        </input>

                        <input className='wordle-input' 
                        type='text' 
                        placeholder='' 
                        disabled={tryCount === 2 ? false : true}>
                        </input>

                        <input className='wordle-input' 
                        type='text' 
                        placeholder='' 
                        disabled={tryCount === 2 ? false : true}>
                        </input>

                        <input className='wordle-input' 
                        type='text' 
                        placeholder='' 
                        disabled={tryCount === 2 ? false : true}>
                        </input>

                        <input className='wordle-input' 
                        type='text' 
                        placeholder='' 
                        disabled={tryCount === 2 ? false : true}>
                        </input>

                </div>

                <div className='wordle-input-group'>

                        <input className='wordle-input' 
                        type='text' placeholder='' 
                        disabled={tryCount === 3 ? false : true}>
                        </input>

                        <input className='wordle-input' 
                        type='text' 
                        placeholder='' 
                        disabled={tryCount === 3 ? false : true}>
                        </input>

                        <input className='wordle-input' 
                        type='text' 
                        placeholder='' 
                        disabled={tryCount === 3 ? false : true}>
                        </input>

                        <input className='wordle-input' 
                        type='text' 
                        placeholder='' 
                        disabled={tryCount === 3 ? false : true}>
                        </input>

                        <input className='wordle-input' 
                        type='text' 
                        placeholder='' 
                        disabled={tryCount === 3 ? false : true}>
                        </input>

                </div>

                <div className='wordle-input-group'>

                        <input className='wordle-input' 
                        type='text' placeholder='' 
                        disabled={tryCount === 4 ? false : true}>
                        </input>

                        <input className='wordle-input' 
                        type='text' 
                        placeholder='' 
                        disabled={tryCount === 4 ? false : true}>
                        </input>

                        <input className='wordle-input' 
                        type='text' 
                        placeholder='' 
                        disabled={tryCount === 4 ? false : true}>
                        </input>

                        <input className='wordle-input' 
                        type='text' 
                        placeholder='' 
                        disabled={tryCount === 4 ? false : true}>
                        </input>

                        <input className='wordle-input' 
                        type='text' 
                        placeholder='' 
                        disabled={tryCount === 4 ? false : true}>
                        </input>

                </div>

                <div className='wordle-input-group'>

                    <input className='wordle-input' 
                        type='text' placeholder='' 
                        disabled={tryCount === 5 ? false : true}>
                        </input>

                        <input className='wordle-input' 
                        type='text' 
                        placeholder='' 
                        disabled={tryCount === 5 ? false : true}>
                        </input>

                        <input className='wordle-input' 
                        type='text' 
                        placeholder='' 
                        disabled={tryCount === 5 ? false : true}>
                        </input>

                        <input className='wordle-input' 
                        type='text' 
                        placeholder='' 
                        disabled={tryCount === 5 ? false : true}>
                        </input>

                        <input className='wordle-input' 
                        type='text' 
                        placeholder='' 
                        disabled={tryCount === 5 ? false : true}>
                        </input>

                </div>
                </div>
            </div>
        </div>
    </>
  )
}

export default Wordle