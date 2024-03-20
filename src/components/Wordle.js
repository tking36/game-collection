import React, { useState, useEffect, useRef, useCallback } from 'react';
import NavBar from './NavBar';

const Wordle = () => {
    const [tryCount, setTryCount] = useState(0);
    const [currentWord, setCurrentWord] = useState('');
    const [guess, setGuess] = useState([]);
    const [guesses, setGuesses] = useState([]);
    const initialProgress = Array.from({ length: 6 }, () => Array.from({ length: 5 }, () => false));
    const [wordProgress, setWordProgress] = useState(initialProgress);
    const [win, setWin] = useState(false);

    const randomWord = useCallback(() => {
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
        const random = Math.floor(Math.random() * words.length);
        setCurrentWord(words[random]);
    }, []);


    const split = currentWord.split('');
    const inputRefs = useRef(Array.from({ length: 6 }, () => Array.from({ length: 5 }, () => React.createRef())));

    const countIncrease = () => {
        if (tryCount < 6) {
            setTryCount(tryCount + 1);
        }
    };

    const resetGuess = () => {
        setGuess([]);
    };


    const pushGuess = () => {
        setGuesses([...guesses, guess]);
        resetGuess();
    };

    const guessHandler = (event, index) => {
        event.preventDefault();
        countIncrease();
        pushGuess();
        checkWin();
        resetGuess();

        const nextIndex = index + 1;
    if (nextIndex < inputRefs.current.length) {
        inputRefs.current[nextIndex][0].current.focus();
    }
    };

    const inputChangeHandler = (index, inputIndex, value) => {
        const updatedGuess = [...guess];
        updatedGuess[inputIndex] = value;
        setGuess(updatedGuess.join(''));

        if (value.length === 1 && inputIndex < inputRefs.current[index].length - 1) {
            inputRefs.current[index][inputIndex + 1].current.focus();
        }
    };

    const checkWin = () => {
        if (wordProgress[tryCount].every((item) => item === true)) {
            setWin(true);
        }
    };

    const isSubmitDisabled = (index) => {
        return guess.length !== 5 || tryCount !== index;
    };

    useEffect(() => {
        randomWord();
    }, [randomWord]);

    useEffect(() => {
        if (tryCount < 6 && guess.length === 5) {
            const copy = [...split];

            for (let i = 0; i < 5; i++) {
                if (split[i] === guess[i].toUpperCase()) {
                    wordProgress[tryCount][i] = true;
                    copy[i] = '';
                }
            }

            for (let i = 0; i < 5; i++) {
                if (!wordProgress[tryCount][i]) {
                    const index = copy.indexOf(guess[i].toUpperCase());

                    if (index !== -1 && index !== i) {
                        wordProgress[tryCount][i] = 1;
                        copy[index] = '';
                    }
                }
            }
        }
    }, [guess, tryCount, split, wordProgress]);

    useEffect(() => {
        if (win || tryCount === 6) {
            setTimeout(() => {
                setWin(false);
                setTryCount(0);
                setGuess([]);
                setGuesses([]);
                setWordProgress(initialProgress);
                randomWord();
                window.location.reload();
            }, 5000);
        }
    }, [win, tryCount, initialProgress, randomWord]);

    const renderInputFields = () => {
        return Array.from({ length: 6 }, (_, index) => (
            <div className='input-answer' key={index}>
                <form onSubmit={(event) => guessHandler(event, index)} className={tryCount === index && !win ? "worlde-input-group-current" : 'wordle-input-group'}>
                    {Array.from({ length: 5 }, (_, inputIndex) => (
                        <input
                            ref={inputRefs.current[index][inputIndex]}
                            maxLength={1}
                            key={inputIndex}
                            className={
                                tryCount > index
                                    ? wordProgress[index][inputIndex] === true
                                        ? 'wordle-input-correct'
                                        : wordProgress[index][inputIndex] === 1
                                        ? 'wordle-input-partial'
                                        : 'wordle-input'
                                    : 'wordle-input-disabled'
                            }
                            type='text'
                            placeholder=''
                            onChange={(event) => inputChangeHandler(index,
                                inputIndex, event.target.value)}
                                />
                            ))}
                            <button type='submit' disabled={isSubmitDisabled(index)}>Submit</button>
                        </form>
                    </div>
                ));
            };
        
            return (
                <div>
                    <NavBar />
                    <div className='wordle-game'>
                        <h1 className='wordle-title'>Wordle</h1>
            
                        <div className='wordle-input-cont'>
                            <div className='wordle-info'>
                            
                                <h3 className='wordle-subtitle'>Guesses: {tryCount}/6 {currentWord}</h3>
                                <div className='wordle-info'>
                                    {win || tryCount === 6 ? (
                                    <div>
                                        <h3 className={win ? "wordle-win-flashing" : "wordle-win"}>You Win</h3>
                                        <h3 className={!win && tryCount === 6 ? "wordle-win-flashing" : "wordle-win"}>You Lost</h3>
                                    </div>
                                    ) : (
                                    <div>
                                        <h3 className='letter-disc'>
                                            <span className='green'>Green:</span>
                                            <span> Correct letter in correct position</span>
                                        </h3>
                                        <h3 className='letter-disc'>
                                            <span className='yellow'>Yellow:</span>
                                            <span> Correct letter in wrong position</span>
                                        </h3>
                                    </div>
                                    )}
                                </div>
                            </div>
                            <div>
                                {win && <h2>Congratulations! You won!</h2>}
                                <div className='word-container'>
                                    {renderInputFields()}
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            );
        };
        
        export default Wordle;
        