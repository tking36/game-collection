import React from 'react';

const Info = ({ level, section,chars }) => {
  return (
    level === 0 && (
      <div>
        { (section === 1 || section === 2) && (
          <h1 className='WWW-sect-intro'>Map: Trail</h1>
        )}
        { section === 3 && (
           <div className='WWW-char-info-cont'>
           <h2 className='WWW-char-info'>Player Name: {chars[level][0]}</h2>
           <h2 className='WWW-char-info'>Player Health: {chars[level][1]}</h2>
           <h2 className='WWW-char-info'>Player Strength: {chars[level][2]}</h2>
           <h2 className='WWW-char-info'>Player Charisma: {chars[level][3]}</h2>
           <h2 className='WWW-char-info'>Player Agility: {chars[level][4]}</h2>
         </div> )}
      </div>
    )
  );
}

export default Info;
