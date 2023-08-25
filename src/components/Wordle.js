import React from 'react'
import { useState, useEffect } from 'react';
import NavBar from './NavBar';

const Wordle = () => {
    const [tryCount , setTryCount] = useState(0)
    const [currentWord, setCurrentWord] = useState('')
    const [guess, setGuess] = useState([])
    const [guesses, setGuesses] = useState([])
    const [wordProgress, setWordProgress] = useState([[false, false, false, false, false],[false, false, false, false, false],[false, false, false, false, false],[false, false, false, false, false],[false, false, false, false, false]])

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
      


    let split = currentWord.split('')
      

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
    
        if (value.length === 1 && index < inputRefs.length - 1) {
            inputRefs[index + 1].current.focus();
        }
    };
    

      const logger = () => {
            console.log(guess)
            console.log(guesses)
            console.log(currentWord)
            console.log(wordProgress)
        }

    const inputRefs = Array.from({ length: 5 }, () => React.createRef());

    useEffect(() => {
        randomWord()
    }, [])


    if(tryCount === 0 && guess.length === 5) {
        for(let i = 0; i < 5; i++) {
            if (split[i] === guess[i].toUpperCase()) {
                wordProgress[0][i] =(true)
            } else if (split.includes(guess[i].toUpperCase())) {
                    wordProgress[0][i] = 1
            }
        }
    }

    if(tryCount === 1 && guess.length === 5) {
        for(let i = 0; i < 5; i++) {
            if (split[i] === guess[i].toUpperCase()) {
                wordProgress[1][i] =(true)
            } else if (split.includes(guess[i].toUpperCase())) {
                    wordProgress[1][i] = 1
            }
        }
    }

    if(tryCount === 2 && guess.length === 5) {
        for(let i = 0; i < 5; i++) {
            if (split[i] === guess[i].toUpperCase()) {
                wordProgress[2][i] =(true)
            } else if (split.includes(guess[i].toUpperCase())) {
                    wordProgress[2][i] = 1
            }
        }
    }

    if(tryCount === 3 && guess.length === 5) {
        for(let i = 0; i < 5; i++) {
            if (split[i] === guess[i].toUpperCase()) {
                wordProgress[3][i] =(true)
            } else if (split.includes(guess[i].toUpperCase())) {
                    wordProgress[3][i] = 1
            }
        }
    }

    if(tryCount === 4 && guess.length === 5) {
        for(let i = 0; i < 5; i++) {
            if (split[i] === guess[i].toUpperCase()) {
                wordProgress[4][i] =(true)
            } else if (split.includes(guess[i].toUpperCase())) {
                    wordProgress[4][i] = 1
            }
        }
    }

    if(tryCount === 5 && guess.length === 5) {
        for(let i = 0; i < 5; i++) {
            if (split[i] === guess[i].toUpperCase()) {
                wordProgress[5][i] =(true)
            } else if (split.includes(guess[i].toUpperCase())) {
                    wordProgress[5][i] = 1
            }
        }
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
                    ref={inputRefs[index]}
                    maxLength={1}
                    key={index}
                    className={
                        tryCount > 0
                            ? wordProgress[0][index] === true
                                ? 'wordle-input-correct'
                                : wordProgress[0][index] === 1
                                ? 'wordle-input-partial'
                                : 'wordle-input'
                            : 'wordle-input-disabled'
                    }
                    type='text'
                    placeholder=''
                    value={tryCount > 0 ? guesses[0][index] : guess[index]}
                    onChange={(event) => inputChangeHandler(index, event.target.value)}
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
                    ref={inputRefs[index]}
                    maxLength={1}
                    key={index}
                    className={
                        tryCount > 1
                            ? wordProgress[1][index] === true
                                ? 'wordle-input-correct'
                                : wordProgress[1][index] === 1
                                ? 'wordle-input-partial'
                                : 'wordle-input'
                            : 'wordle-input-disabled'
                    }
                    type='text'
                    placeholder=''
                    value={tryCount > 1 ? guesses[1][index] : guess[index]}
                    onChange={(event) => inputChangeHandler(index, event.target.value)}
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
                    ref={inputRefs[index]}
                    maxLength={1}
                    key={index}
                    className={
                        tryCount > 2
                            ? wordProgress[2][index] === true
                                ? 'wordle-input-correct'
                                : wordProgress[2][index] === 1
                                ? 'wordle-input-partial'
                                : 'wordle-input'
                            : 'wordle-input-disabled'
                    }
                    type='text'
                    placeholder=''
                    value={tryCount > 2 ? guesses[2][index] : guess[index]}
                    onChange={(event) => inputChangeHandler(index, event.target.value)}
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
                    ref={inputRefs[index]}
                    maxLength={1}
                    key={index}
                    className={
                        tryCount > 4
                            ? wordProgress[4][index] === true
                                ? 'wordle-input-correct'
                                : wordProgress[4][index] === 1
                                ? 'wordle-input-partial'
                                : 'wordle-input'
                            : 'wordle-input-disabled'
                    }
                    type='text'
                    placeholder=''
                    value={tryCount > 3 ? guesses[3][index] : guess[index]}
                    onChange={(event) => inputChangeHandler(index, event.target.value)}
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
                    ref={inputRefs[index]}
                    maxLength={1}
                    key={index}
                    className={
                        tryCount > 5
                            ? wordProgress[5][index] === true
                                ? 'wordle-input-correct'
                                : wordProgress[5][index] === 1
                                ? 'wordle-input-partial'
                                : 'wordle-input'
                            : 'wordle-input-disabled'
                    }
                    type='text'
                    placeholder=''
                    value={tryCount > 4 ? guesses[4][index] : guess[index]}
                    onChange={(event) => inputChangeHandler(index, event.target.value)}
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
                    ref={inputRefs[index]}
                    maxLength={1}
                    key={index}
                    className={
                        tryCount > 6
                            ? wordProgress[6][index] === true
                                ? 'wordle-input-correct'
                                : wordProgress[6][index] === 1
                                ? 'wordle-input-partial'
                                : 'wordle-input'
                            : 'wordle-input-disabled'
                    }
                    type='text'
                    placeholder=''
                    value={tryCount > 5 ? guesses[5][index] : guess[index]}
                    onChange={(event) => inputChangeHandler(index, event.target.value)}
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