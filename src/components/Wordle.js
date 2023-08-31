import React from 'react'
import { useState, useEffect } from 'react';
import NavBar from './NavBar';

const Wordle = () => {
    const [tryCount , setTryCount] = useState(0)
    const [currentWord, setCurrentWord] = useState('')
    const [guess, setGuess] = useState([])
    const [guesses, setGuesses] = useState([])
    const initialProgress = Array.from({ length: 6 }, () => Array.from({ length: 5 }, () => false));
    const [wordProgress, setWordProgress] = useState(initialProgress);
    const [win, setWin] = useState(false)   

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
    
        // if (value.length === 1 && index < inputRefs.length - 1) {
        //     inputRefs[index + 1].current.focus();
        // }
    };

    const checkWin = () => {

        if(wordProgress[tryCount].every((item) => item === true)) {
            setWin(true)
        }
    }
      
    

      const logger = () => {
            console.log(guess)
            console.log(guesses)
            console.log(currentWord)
            console.log(wordProgress)
            console.log(win)
        }

    // const inputRefs = Array.from({ length: 5 }, () => React.createRef());
    const inputRefs = Array.from({ length: 6 }, () => React.createRef());


    useEffect(() => {
        randomWord()
    }, [])


    if (tryCount === 0 && guess.length === 5) {
        let copy = [...split]; // Create a copy of the split array
    
        // Process correct letters in correct positions
        for (let i = 0; i < 5; i++) {
            if (split[i] === guess[i].toUpperCase()) {
                wordProgress[tryCount][i] = true;
                copy[i] = ''; // Mark the letter as used in the copy array
            }
        }
    
        // Process correct letters in incorrect positions
        for (let i = 0; i < 5; i++) {
            if (!wordProgress[tryCount][i]) {
                const index = copy.indexOf(guess[i].toUpperCase());
    
                if (index !== -1 && index !== i) {
                    wordProgress[tryCount][i] = 1;
                    copy[index] = ''; // Mark the letter as used in the copy array
                }
            }
        }
    }
    
    if (tryCount === 1 && guess.length === 5) {
        let copy = [...split]; // Create a copy of the split array
    
        // Process correct letters in correct positions
        for (let i = 0; i < 5; i++) {
            if (split[i] === guess[i].toUpperCase()) {
                wordProgress[tryCount][i] = true;
                copy[i] = ''; // Mark the letter as used in the copy array
            }
        }
    
        // Process correct letters in incorrect positions
        for (let i = 0; i < 5; i++) {
            if (!wordProgress[tryCount][i]) {
                const index = copy.indexOf(guess[i].toUpperCase());
    
                if (index !== -1 && index !== i) {
                    wordProgress[tryCount][i] = 1;
                    copy[index] = ''; // Mark the letter as used in the copy array
                }
            }
        }
    }

    if (tryCount === 2 && guess.length === 5) {
        let copy = [...split]; // Create a copy of the split array
    
        // Process correct letters in correct positions
        for (let i = 0; i < 5; i++) {
            if (split[i] === guess[i].toUpperCase()) {
                wordProgress[tryCount][i] = true;
                copy[i] = ''; // Mark the letter as used in the copy array
            }
        }
    
        // Process correct letters in incorrect positions
        for (let i = 0; i < 5; i++) {
            if (!wordProgress[tryCount][i]) {
                const index = copy.indexOf(guess[i].toUpperCase());
    
                if (index !== -1 && index !== i) {
                    wordProgress[tryCount][i] = 1;
                    copy[index] = ''; // Mark the letter as used in the copy array
                }
            }
        }
    }

    if (tryCount === 3 && guess.length === 5) {
        let copy = [...split]; // Create a copy of the split array
    
        // Process correct letters in correct positions
        for (let i = 0; i < 5; i++) {
            if (split[i] === guess[i].toUpperCase()) {
                wordProgress[tryCount][i] = true;
                copy[i] = ''; // Mark the letter as used in the copy array
            }
        }
    
        // Process correct letters in incorrect positions
        for (let i = 0; i < 5; i++) {
            if (!wordProgress[tryCount][i]) {
                const index = copy.indexOf(guess[i].toUpperCase());
    
                if (index !== -1 && index !== i) {
                    wordProgress[tryCount][i] = 1;
                    copy[index] = ''; // Mark the letter as used in the copy array
                }
            }
        }
    }

    if (tryCount === 4 && guess.length === 5) {
        let copy = [...split]; // Create a copy of the split array
    
        // Process correct letters in correct positions
        for (let i = 0; i < 5; i++) {
            if (split[i] === guess[i].toUpperCase()) {
                wordProgress[tryCount][i] = true;
                copy[i] = ''; // Mark the letter as used in the copy array
            }
        }
    
        // Process correct letters in incorrect positions
        for (let i = 0; i < 5; i++) {
            if (!wordProgress[tryCount][i]) {
                const index = copy.indexOf(guess[i].toUpperCase());
    
                if (index !== -1 && index !== i) {
                    wordProgress[tryCount][i] = 1;
                    copy[index] = ''; // Mark the letter as used in the copy array
                }
            }
        }
    }

    if (tryCount === 5 && guess.length === 5) {
        let copy = [...split]; // Create a copy of the split array
    
        // Process correct letters in correct positions
        for (let i = 0; i < 5; i++) {
            if (split[i] === guess[i].toUpperCase()) {
                wordProgress[tryCount][i] = true;
                copy[i] = ''; // Mark the letter as used in the copy array
            }
        }
    
        // Process correct letters in incorrect positions
        for (let i = 0; i < 5; i++) {
            if (!wordProgress[tryCount][i]) {
                const index = copy.indexOf(guess[i].toUpperCase());
    
                if (index !== -1 && index !== i) {
                    wordProgress[tryCount][i] = 1;
                    copy[index] = ''; // Mark the letter as used in the copy array
                }
            }
        }
    }
        
    if (win) {
        setTimeout(() => {
            setWin(false);
            setTryCount(0);
            setGuess([]);
            setGuesses([]);
            setWordProgress([initialProgress]);
            randomWord();
            window.location.reload();
        }, 5000);
    }

  return (
    <> 
        <NavBar/>
    <div>
        <h1 className='wordle-title'>Wordle</h1>
        <h3 className={win ? "wordle-win-flashing" : "wordle-win"}>You Win</h3>

        <div className='wordle-input-cont'>
            <div className='wordle-info'>
                <h3 className='wordle-subtitle'>Guesses: {tryCount}/6</h3>
                <button onClick={logger}>Log</button>
            </div>

            <div className='worlde-all-groups'>
                <div className='input-answer' >
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
                    onChange={(event) => inputChangeHandler(index, event.target.value)}
                    />
                    ))}
                    <button onClick={() => { countIncrease(); pushGuess(); checkWin(); }} type="submit">Submit</button>
                </form>
            </div>

            <div className='input-answer' >
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
                    onChange={(event) => inputChangeHandler(index, event.target.value)}
                    />
                    ))}
                    <button onClick={() => { countIncrease(); pushGuess(); checkWin(); }} type="submit">Submit</button>
                </form>
            </div>

            <div className='input-answer' >
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
                    onChange={(event) => inputChangeHandler(index, event.target.value)}
                    />
                    ))}
                    <button onClick={() => { countIncrease(); pushGuess(); checkWin(); }} type="submit">Submit</button>
                </form>
            </div>

            <div className='input-answer' >
                <form onSubmit={guessHandler} className='wordle-input-group'>
                    {Array.from({ length: 5 }, (_, index) => (
                    <input
                    ref={inputRefs[index]}
                    maxLength={1}
                    key={index}
                    className={
                        tryCount > 3
                            ? wordProgress[3][index] === true
                                ? 'wordle-input-correct'
                                : wordProgress[3][index] === 1
                                ? 'wordle-input-partial'
                                : 'wordle-input'
                            : 'wordle-input-disabled'
                    }
                    type='text'
                    placeholder=''
                    onChange={(event) => inputChangeHandler(index, event.target.value)}
                    />
                    ))}
                    <button onClick={() => { countIncrease(); pushGuess(); checkWin(); }} type="submit">Submit</button>
                </form>
            </div>

            <div className='input-answer' >
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
                    onChange={(event) => inputChangeHandler(index, event.target.value)}
                    />
                    ))}
                    <button onClick={() => { countIncrease(); pushGuess(); checkWin(); }} type="submit">Submit</button>
                </form>
            </div>

            <div className='input-answer' >
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
                    onChange={(event) => inputChangeHandler(index, event.target.value)}
                    />
                    ))}
                    <button onClick={() => { countIncrease(); pushGuess(); checkWin(); }} type="submit">Submit</button>
                </form>
            </div>

            </div>
            </div>
        </div>
    </>
  )
}

export default Wordle