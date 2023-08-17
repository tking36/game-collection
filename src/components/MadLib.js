import React, { useState, useEffect } from 'react';
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
        updateStories(newNouns, adjectives, verbs);
    };
    
    const handleAdjectiveChange = (e, index) => {
        const newAdjectives = [...adjectives];
        newAdjectives[index] = e.target.value;
        setAdjectives(newAdjectives);
        updateStories(nouns, newAdjectives, verbs);
    };
    
    const handleVerbChange = (e, index) => {
        const newVerbs = [...verbs];
        newVerbs[index] = e.target.value;
        setVerbs(newVerbs);
        updateStories(nouns, adjectives, newVerbs);
    };
    
    const updateStories = (newNouns, newAdjectives, newVerbs) => {
        const newStories = [
            [
                `Once upon a time, there was a ${nouns[0]} who wanted to ${verbs[0]} the ${nouns[1]}.`,
                `The ${nouns[0]} was very ${adjectives[0]} and ${adjectives[1]}.`,
                `The ${nouns[0]} tried to ${verbs[1]} the ${nouns[1]} and ${verbs[2]} the ${nouns[1]}.`,
                `The ${nouns[1]} was very ${adjectives[2]} and ${adjectives[0]}.`,
                `The ${nouns[0]} and the ${nouns[1]} lived happily ever after.`
            ], 
            [
                `I decided to ${verbs[0]} a ${nouns[0]} today.`,
                `The ${nouns[0]} was very ${adjectives[0]} and ${adjectives[1]}.`,
                `All of a sudden, a ${nouns[1]} tried to ${verbs[1]}.`,
                `This made a ${nouns[2]} very ${adjectives[2]}, so they had to ${verbs[2]} the ${nouns[1]}.`,    
            ],
            [
                `In a mysterious forest, a ${nouns[0]} and a ${nouns[1]} embarked on a journey.`,
                `The ${nouns[0]} was known for being ${adjectives[0]} and ${adjectives[1]}, while the ${nouns[1]} was ${adjectives[2]}.`,
                `Their quest was to ${verbs[0]} the legendary ${nouns[2]} and ${verbs[1]} its hidden power.`,
                `As they delved deeper, challenges arose, forcing them to ${verbs[2]} their skills and rely on each other's ${adjectives[0]} traits.`,
                `In the end, their determination and ${adjectives[1]} bond allowed them to conquer the ${nouns[2]} and bring peace to the forest.`
            ]
        ];
        setStories(newStories);
    };

    useEffect(() => {
        updateStories(nouns, adjectives, verbs);
    }, [nouns, adjectives, verbs]);
    
    

    return (
        <div className='ml-container'>
            <NavBar className='nav' />
            <h1 className='ml-title'>Mad Libs</h1>

            {prompt ?
                <div className='ml-prompt'>
                    <div className='ml-prompt-cont'>
                        <h3 className='prompt-type' >Enter 3 Nouns</h3>
                        {Array.from({ length: 3 }).map((_, index) => (
                            <input className='ml-input' key={index} onChange={(e) => handleNounChange(e, index)} />
                        ))}
                    </div>
                    <div className='ml-prompt-cont'>
                        <h3 className='prompt-type' >Enter 3 Adjectives</h3>
                        {Array.from({ length: 3 }).map((_, index) => (
                            <input className='ml-input' key={index} onChange={(e) => handleAdjectiveChange(e, index)} />
                        ))}
                    </div>
                    <div className='ml-prompt-cont'>
                        <h3 className='prompt-type' >Enter 3 Verbs</h3>
                        {Array.from({ length: 3 }).map((_, index) => (
                            <input className='ml-input' key={index} onChange={(e) => handleVerbChange(e, index)} />
                        ))}
                    </div>
                    <button className='ml-submit' onClick={() => setPrompt(false)}>Submit</button>
                </div>
                :
                null}

{!prompt ?
            <div className='ml-story'>
                {stories.map((story, index) => (
                    <p className='ml-p' key={index}>{story}</p>
                ))}
                <button className='ml-reset' onClick={() => setPrompt(true)}>Reset</button>
            </div>
            :
            null}
        </div>
    );
};

export default MadLib;
