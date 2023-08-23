import React from 'react'
import { useState, useEffect } from 'react';
import NavBar from './NavBar';

const Wordle = () => {
    const [tryCount , setTryCount] = useState(0)
    const [currentWord, setCurrentWord] = useState('')
    const [guess, setGuess] = useState([])
    const [guesses, setGuesses] = useState([])

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

    const resetGuess = () => {
        setGuess([])
    }

    const randomWord = () => {
        let random = Math.floor(Math.random() * words.length)
        setCurrentWord(words[random])
    }

    const pushGuess = () => {
        setGuesses([...guesses, guess]);
        resetGuess(); // Add this line to reset the guess state
    };
    
    

    const guessHandler = (event) => {
        event.preventDefault();
        // pushGuess();
        resetGuess();
    };
    
      const inputChangeHandler = (index, value) => {
        const updatedGuess = [...guess];
        updatedGuess[index] = value;
        setGuess(updatedGuess.join(''));
      };

      const logger = () => {
            console.log(guess)
            console.log(guesses)
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
                    <button onClick={logger}>Log</button>
                </div>

                <div className='worlde-all-groups'>

                <div className='input-answer' >
                    <h1 className='wordle-guess' >
                        {guesses.length > 0 ? 
                        guesses[0].split('').map((letter, index) => (
                            <span key={index} className='wordle-letter'>{letter}</span>
                        )) : ' '} 
                    </h1>
                <form onSubmit={guessHandler} className='wordle-input-group'>
                    {Array.from({ length: 5 }, (_, index) => (
                    <input
                    key={index}
                    className={tryCount === 0 ? 'wordle-input' : 'wordle-input-disabled'}
                    type='text'
                    placeholder=''
                    value={tryCount === 0 ? guess[index] : ''}
                    onChange={(event) => inputChangeHandler(index, event.target.value)}
                    disabled={tryCount === 0 ? false : true}
                    />
                    ))}
                    <button onClick={() => { countIncrease(); pushGuess(); }} type="submit">Submit</button>
                </form>
                </div>

                <div className='input-answer' >
                    <h1 className='wordle-guess' >
                        {guesses.length > 1 ? 
                        guesses[1].split('').map((letter, index) => (
                            <span key={index} className='wordle-letter'>{letter}</span>
                        )) : ' '} 
                    </h1>
                <form onSubmit={guessHandler} className='wordle-input-group'>
                    {Array.from({ length: 5 }, (_, index) => (
                    <input
                    key={index}
                    className={tryCount === 1 ? 'wordle-input' : 'wordle-input-disabled'}
                    type='text'
                    placeholder=''
                    value={tryCount === 1 ? guess[index] : ''}
                    onChange={(event) => inputChangeHandler(index, event.target.value)}
                    disabled={tryCount === 1 ? false : true}
                    />
                    ))}
                    <button onClick={() => { countIncrease(); pushGuess(); }} type="submit">Submit</button>
                </form>
                </div>

                <div className='input-answer' >
                    <h1 className='wordle-guess' >
                        {guesses.length > 2 ? 
                        guesses[2].split('').map((letter, index) => (
                            <span key={index} className='wordle-letter'>{letter}</span>
                        )) : ' '} 
                    </h1>
                <form onSubmit={guessHandler} className='wordle-input-group'>
                    {Array.from({ length: 5 }, (_, index) => (
                    <input
                    key={index}
                    className={tryCount === 2 ? 'wordle-input' : 'wordle-input-disabled'}
                    type='text'
                    placeholder=''
                    value={tryCount === 2 ? guess[index] : ''}
                    onChange={(event) => inputChangeHandler(index, event.target.value)}
                    disabled={tryCount === 2 ? false : true}
                    />
                    ))}
                    <button onClick={() => { countIncrease(); pushGuess(); }} type="submit">Submit</button>
                </form>
                </div>

                <div className='input-answer' >
                    <h1 className='wordle-guess' >
                        {guesses.length > 3 ? 
                        guesses[3].split('').map((letter, index) => (
                            <span key={index} className='wordle-letter'>{letter}</span>
                        )) : ' '} 
                    </h1>
                <form onSubmit={guessHandler} className='wordle-input-group'>
                    {Array.from({ length: 5 }, (_, index) => (
                    <input
                    key={index}
                    className={tryCount === 3 ? 'wordle-input' : 'wordle-input-disabled'}
                    type='text'
                    placeholder=''
                    value={tryCount === 3 ? guess[index] : ''}
                    onChange={(event) => inputChangeHandler(index, event.target.value)}
                    disabled={tryCount === 3 ? false : true}
                    />
                    ))}
                    <button onClick={() => { countIncrease(); pushGuess(); }} type="submit">Submit</button>
                </form>
                </div>

                <div className='input-answer' >
                    <h1 className='wordle-guess' >
                        {guesses.length > 4 ? 
                        guesses[4].split('').map((letter, index) => (
                            <span key={index} className='wordle-letter'>{letter}</span>
                        )) : ' '} 
                    </h1>
                <form onSubmit={guessHandler} className='wordle-input-group'>
                    {Array.from({ length: 5 }, (_, index) => (
                    <input
                    key={index}
                    className={tryCount === 4 ? 'wordle-input' : 'wordle-input-disabled'}
                    type='text'
                    placeholder=''
                    value={tryCount === 4 ? guess[index] : ''}
                    onChange={(event) => inputChangeHandler(index, event.target.value)}
                    disabled={tryCount === 4 ? false : true}
                    />
                    ))}
                    <button onClick={() => { countIncrease(); pushGuess(); }} type="submit">Submit</button>
                </form>
                </div>

                <div className='input-answer' >
                    <h1 className='wordle-guess' >
                        {guesses.length > 5 ? 
                        guesses[5].split('').map((letter, index) => (
                            <span key={index} className='wordle-letter'>{letter}</span>
                        )) : ' '} 
                    </h1>
                <form onSubmit={guessHandler} className='wordle-input-group'>
                    {Array.from({ length: 5 }, (_, index) => (
                    <input
                    key={index}
                    className={tryCount === 5 ? 'wordle-input' : 'wordle-input-disabled'}
                    type='text'
                    placeholder=''
                    value={tryCount === 5 ? guess[index] : ''}
                    onChange={(event) => inputChangeHandler(index, event.target.value)}
                    disabled={tryCount === 5 ? false : true}
                    />
                    ))}
                    <button onClick={() => { countIncrease(); pushGuess(); }} type="submit">Submit</button>
                </form>
                </div>

                    
                </div>
            </div>
        </div>
    </>
  )
}

export default Wordle