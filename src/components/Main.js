import React from 'react'

const Main = ({level, section}) => {
  return (
    <div>
        <div className='WWW-ch-one'>
            {section === 1 && <h1 className='WWW-sect-intro'>Chapter 1: RattleSnake</h1> }
            {section === 2 && <p className='WWW-sect-intro'>Meet "Rattlesnake" Sam, a notorious outlaw of the Wild West. With a quick draw and a gang of desperados at his side, he's a force to be reckoned with on the lonely trails. Sam's agility and cunning make him a formidable adversary, lurking in the shadows to ambush unwary travelers. Can you outsmart him, or will you fall victim to his deadly trap? The choice is yours, but remember, in the Wild West, survival is never guaranteed.</p> }
        </div>
    </div>
  )
}

export default Main