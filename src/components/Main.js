import React, {useState} from 'react'

const Main = ({level, section, skillPoints}) => {

    const [chapters, setChapters] = useState([
        "Chapter 1: Rattlesnake",
        "Chapter 2: Gold Mine",
        "Chapter 3: Town Showdown",
        "Chapter 4: Riding the Rapids",
        "Chapter 5: Helping a Stranger",
        "Chapter 6: Tracking a Fugitive",
    ])

    const [intros, setIntros] = useState([
        "Meet Rattlesnake Sam, a notorious outlaw of the Wild West. With a quick draw and a gang of desperados at his side, he's a force to be reckoned with on the lonely trails. Sam's cunning character makes him a formidable adversary, lurking in the shadows to ambush unwary travelers. Can you outsmart him, or will you fall victim to his deadly trap? The choice is yours, but remember, in the Wild West, survival is never guaranteed.",
        "You've stumbled upon a potential gold mine, rumored to be the richest in the region. However, the landowner, known for his shrewdness, demands a hefty fee for access. Negotiate wisely, for the riches could be yours, or you may leave empty-handed.",
        "Tensions in town have reached a boiling point, and you find yourself in the midst of a heated dispute. Will you use your charisma to defuse the situation peacefully, or will you resort to more drastic measures to assert your dominance?",
        "Crossing the river presents a perilous challenge as the strong currents threaten to sweep you away. Will your agility guide you safely across, or will you succumb to the rapids' unforgiving force?",
        "A weary traveler approaches, seeking assistance on their journey. Will you lend a helping hand, forging a bond that may prove invaluable in the future? Or will you turn away, oblivious to the potential rewards that await?",
        "You've been tasked with tracking down a notorious fugitive, wanted for crimes against the law. Utilize your keen tracking skills to follow their trail, but beware, danger lurks around every corner."
    ]);

    const [encounters, setEncounters] = useState([
        "You've been ambushed by Rattlesnake Sam and his gang of outlaws. With guns drawn and a menacing look in their eyes, they demand your valuables and threaten to take your life if you don't comply. What will you do?",
        "The landowner's demands are exorbitant, but the promise of wealth beckons. Negotiate with tact and finesse, for the fate of your fortune hangs in the balance.",
        "Tensions escalate as tempers flare and fists are raised. Will you use diplomacy to quell the conflict, or will you resort to force to assert your dominance?",
        "The river's currents are treacherous, and one wrong move could spell disaster. Will your agility guide you safely to the other side, or will you succumb to the rapids' unforgiving embrace?",
        "The traveler's plea tugs at your heartstrings, but aiding them may come at a cost. Will you extend a helping hand, or will you prioritize your own interests above all else?",
        "The fugitive's trail grows cold as you navigate the rugged terrain. Will your tracking skills lead you to their whereabouts, or will the elusive outlaw evade capture once again?"
    ]);



  return (
    <div>
        {`Level: ${level}`}
        {`Section: ${section}`}
        {skillPoints}
        
        <div className='WWW-ch-one'>
            {section === 1 && <h1 className='WWW-sect-intro'>{chapters[level]}</h1> }
            {section === 2 && <p className='WWW-sect-intro'>{intros[level]}</p> }
            {section === 3 && 
            <div className='WWW-sect-disc'>
                <p>{encounters[level]}</p>
            </div>
            }
        </div>
        
    </div>
  )
}

export default Main