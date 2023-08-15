import React, { useState } from 'react';
import NavBar from './NavBar';

const MadLib = () => {
    const [prompt, setPrompt] = useState(true);
    const [nouns, setNouns] = useState([]);
    const [adjectives, setAdjectives] = useState([]);
    const [verbs, setVerbs] = useState([]);

    const [stories, setStories] = useState([])

    const handleNounChange = (e, index) => {
        const newNouns = [...nouns];
        newNouns[index] = e.target.value;
        setNouns(newNouns);
        updateStories();
    };
    
    const handleAdjectiveChange = (e, index) => {
        const newAdjectives = [...adjectives];
        newAdjectives[index] = e.target.value;
        setAdjectives(newAdjectives);
        updateStories();
    };
    
    const handleVerbChange = (e, index) => {
        const newVerbs = [...verbs];
        newVerbs[index] = e.target.value;
        setVerbs(newVerbs);
        updateStories();
    };
    
    const updateStories = () => {
        const newStories = [
            `Once upon a time, there was a ${nouns[0]} who wanted to ${verbs[0]} a ${nouns[1]}.`,
            `The ${nouns[0]} was very ${adjectives[0]} and ${adjectives[1]}.`,
            `The ${nouns[0]} tried to ${verbs[1]} the ${nouns[1]} and ${verbs[2]} the ${nouns[1]}.`,
            `The ${nouns[1]} was very ${adjectives[2]} and ${adjectives[0]}.`,
            `The ${nouns[0]} and the ${nouns[1]} lived happily ever after.`
        ];
        setStories(newStories);
    };
    

    return (
        <div className='ml-container'>
            <NavBar/>
            <h1 className='ml-title'>Mad Libs</h1>

            {prompt ?
                <div className='ml-prompt'>
                    <h3>Enter 3 nouns</h3>
                    {Array.from({ length: 3 }).map((_, index) => (
                        <input key={index} onChange={(e) => handleNounChange(e, index)} />
                    ))}
                    <h3>Enter 3 adjectives</h3>
                    {Array.from({ length: 3 }).map((_, index) => (
                        <input key={index} onChange={(e) => handleAdjectiveChange(e, index)} />
                    ))}
                    <h3>Enter 3 verbs</h3>
                    {Array.from({ length: 3 }).map((_, index) => (
                        <input key={index} onChange={(e) => handleVerbChange(e, index)} />
                    ))}
                    <button onClick={() => setPrompt(false)}>Submit</button>
                </div>
                :
                null}

{!prompt ?
            <div className='ml-story'>
                {stories.map((story, index) => (
                    <p key={index}>{story}</p>
                ))}
                <button onClick={() => setPrompt(true)}>Reset</button>
            </div>
            :
            null}
        </div>
    );
};

export default MadLib;
