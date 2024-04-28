import React, { useEffect } from 'react';
import { useState } from 'react';
import NavBar from '../NavBar';
import Intro from './Intro';
import Buttons from './Buttons';
import Creation from './Creation';
import Character from './Character';
import Info from './Info';
import Main from '../Main';

const WWW = () => {
    let [intro, setIntro] = useState(true);
    let [creation, setCreation] = useState(false);
    let [level, setLevel] = useState(0);
    let [section, setSection] = useState(1);
    let [gameOver, setGameOver] = useState(false);
    let [gameWon, setGameWon] = useState(false);
    let [gameLost, setGameLost] = useState(false);
    let [skillPoints, setSkillPoints] = useState(10);
    let [playerName, setPlayerName] = useState('');
    let [playerImage, setPlayerImage] = useState('');
    let [playerHealth, setPlayerHealth] = useState(100);
    let [playerStrength, setPlayerStrength] = useState(10);
    let [playerCharisma, setPlayerCharisma] = useState(10);
    let [playerAgility, setPlayerAgility] = useState(10);
    let [option, setOption] = useState(0);
    let [gold, setGold] = useState(50);

    let [chars, setChars] = useState([
        ['Bandit Leader', 90, 8, 8, 8],         // Encounter with Bandits
        ['Landowner', 90, 8, 8, 8],             // Prospecting for Gold
        ['Cowhand', 90, 8, 8, 8],               // Herding Cattle
        ['Town Bully', 90, 8, 8, 8],            // Town Showdown
        ['River Guide', 90, 8, 8, 8],           // Riding the Rapids
        ['Traveler', 90, 8, 8, 8],              // Helping a Stranger
        ['Drunken Patron', 90, 8, 8, 8],        // Barroom Brawl
        ['Deputy Sheriff', 90, 8, 8, 8],        // Tracking a Fugitive
        ['Wild Animal', 90, 8, 8, 8]            // Fending Off Wildlife

    ]);

    const handleIntro = () => {
        setIntro(false);
        setCreation(true);
    };

    const endCreation = () => {
        setLevel(0);
        setIntro(false);
        setCreation(false);
    };

    useEffect(() => {
        console.log(['Level:', level]);
        console.log(['Section:', section]);
    }, [level, section]);

    return (
        <>
            <NavBar />
            <div className='WWW-container'>
                <div className='WWW-main'>
                    <div className={intro || creation ? 'WWW-hide' : 'WWW-main-left'}>
                        <div className='WWW-left-top'>
                            <Info level={level} section={section} chars={chars} setChars={setChars} />
                        </div>
                        <div className='WWW-left-bottom'>
                            <Character
                                setPlayerName={setPlayerName}
                                setPlayerHealth={setPlayerHealth}
                                setPlayerAgility={setPlayerAgility}
                                setPlayerCharisma={setPlayerCharisma}
                                setPlayerStrength={setPlayerStrength}
                                skillPoints={skillPoints}
                                setSkillPoints={setSkillPoints}
                                creation={creation}
                                playerName={playerName}
                                playerHealth={playerHealth}
                                playerStrength={playerStrength}
                                playerCharisma={playerCharisma}
                                playerAgility={playerAgility}
                                level={level}
                                playerImage={playerImage}
                                setPlayerImage={setPlayerImage}
                                gold={gold}
                            />
                        </div>
                    </div>
                    <div className={intro || creation ? 'WWW-full WWW-main-right' : 'WWW-main-right'}>
                        {intro && <Intro className='' intro={intro} handleIntro={handleIntro} />}
                        {creation ? (
                            <Creation
                                className=''
                                setPlayerName={setPlayerName}
                                setPlayerHealth={setPlayerHealth}
                                setPlayerAgility={setPlayerAgility}
                                setPlayerCharisma={setPlayerCharisma}
                                setPlayerStrength={setPlayerStrength}
                                skillPoints={skillPoints}
                                setSkillPoints={setSkillPoints}
                                creation={creation}
                                playerName={playerName}
                                playerHealth={playerHealth}
                                playerStrength={playerStrength}
                                playerCharisma={playerCharisma}
                                playerAgility={playerAgility}
                                level={level}
                                playerImage={playerImage}
                                setPlayerImage={setPlayerImage}
                            />
                        ) : (
                            !intro && <Main level={level} section={section} chars={chars} setChars={setChars} skillPoints={skillPoints} />
                        )}
                    </div>
                </div>

                <div className='WWW-bottom'>
                    <Buttons
                        creation={creation}
                        level={level}
                        setLevel={setLevel}
                        gameOver={gameOver}
                        gameWon={gameWon}
                        gameLost={gameLost}
                        playerName={playerName}
                        playerHealth={playerHealth}
                        playerStrength={playerStrength}
                        playerCharisma={playerCharisma}
                        playerAgility={playerAgility}
                        handleIntro={handleIntro}
                        intro={intro}
                        endCreation={endCreation}
                        section={section}
                        setSection={setSection}
                        chars={chars}
                        gold={gold}
                        setGold={setGold}
                        skillPoints={skillPoints}
                        setSkillPoints={setSkillPoints}
                        setPlayerHealth={setPlayerHealth}
                    />
                </div>
            </div>
        </>
    );
};

export default WWW;
