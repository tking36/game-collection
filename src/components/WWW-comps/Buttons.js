import React, {useState} from 'react';

const Buttons = ({ handleIntro, creation, intro, playerName, playerHealth, playerStrength, playerCharisma, playerAgility, setLevel, level, endCreation,section, setSection, chars, gold, skillPoints, setGold, setSkillPoints, setPlayerHealth }) => {

  const [choices, setChoices] = useState(0)

  const creationLevel = (num) => {
    setLevel(num)
  }

  const plusSection = () => {
    setSection(section+ 1)
  }

  const plusLevel = () => {
    setLevel(level + 1)
    setSection(1)
  }

  const consolePlayer = () => {
    console.log([playerName, playerHealth, playerStrength, playerCharisma, playerAgility])
  }

  const choiceNum = (num) => {
    setChoices(num)
  }
  


  const [buttonsInfo, setButtonsInfo] = useState([
    [
        "1: Try to outmaneuver Sam by using your superior agility to evade his attacks.",
        "2: Attempt to negotiate with Sam, using your charisma to persuade him to let you go peacefully.",
        "3: Confront Sam head-on, relying on your strength to overpower him and his gang."
    ],
    [
        "1: Accept the landowner's demands and pay the fee to access the gold mine.",
        "2: Negotiate with the landowner, leveraging your charisma to reduce the fee and maximize your profits.",
        "3: Refuse to comply with the landowner's demands and search for an alternative entrance to the gold mine."
    ],
    [
        "1: Use your charisma to calm the escalating tensions and broker a peaceful resolution.",
        "2: Intimidate the conflicting parties with your strength, asserting your dominance and ending the dispute.",
        "3: Act as a mediator between the opposing sides, utilizing diplomacy to find common ground and restore peace."
    ],
    [
        "1: Carefully navigate the rapids, using your agility to maneuver through the treacherous waters.",
        "2: Build a sturdy raft to traverse the river safely, relying on your craftsmanship to withstand the rapids' force.",
        "3: Seek an alternative route around the river, avoiding the dangerous currents altogether."
    ],
    [
        "1: Offer assistance to the traveler, utilizing your charisma to gain their trust and potentially form a beneficial alliance.",
        "2: Decline the traveler's request for help, prioritizing your own journey and goals over aiding others.",
        "3: Assess the situation before making a decision, weighing the potential risks and rewards of assisting the traveler."
    ],
    [
        "1: Follow the fugitive's trail with stealth and precision, using your tracking skills to stay one step ahead of them.",
        "2: Gather information from locals and witnesses to uncover clues about the fugitive's whereabouts, utilizing your charisma to gain their trust.",
        "3: Confront the fugitive directly, relying on your strength and determination to apprehend them and bring them to justice."
    ]
]);

const playerChange = () => {
  if (level === 1) {
    switch (choices) {
      case 1:
        if (playerAgility > chars[level][4]) {
          setGold(gold + 10);
          setSkillPoints(skillPoints + 2);
        } else {
          setGold(gold + 5);
          setSkillPoints(skillPoints + 1);
        }
        break;
      case 2:
        if (playerCharisma > chars[level][3]) {
          setGold(gold - 5);
          setSkillPoints(skillPoints + 1);
        } else {
          setGold(gold - 5);
        }
        break;
      case 3:
        setPlayerHealth(playerHealth - 10);
        setGold(gold - 10);
        break;
      default:
        break;
    }
  }
  console.log([gold, skillPoints])
};


  return (
    <>
      {intro || creation ? (
        <div className='WWW-begin'>
          <button className={intro ? 'button-78' : 'WWW-hide'} onClick={handleIntro}>Start Game</button>

          <button className={creation && level === 0 ? 'button-78' : 'WWW-hide'} onClick={() => creationLevel(1)}>Submit Stats</button>

          <button className={creation && level === 1 ? 'button-78' : 'WWW-hide'} onClick={() => creationLevel(0)}>Back to Stats</button>
          <button className={creation && level === 1 ? 'button-78' : 'WWW-hide'} onClick={() => creationLevel(2)}>Continue</button>

          <button className={creation && level === 1 ? 'button-78' : 'WWW-hide'} onClick={consolePlayer}>Console Player</button>

          <button className={creation && level === 2 ? 'button-78' : 'WWW-hide'} onClick={() => creationLevel(1)}>Back to Image Selection</button>
          <button className={creation && level === 2 ? 'button-78' : 'WWW-hide'} onClick={endCreation}>Continue</button>
        </div>
      ) : (
        <div className='WWW-ch-buttons'>
          {section === 1 && <button onClick={() => plusSection()} className='button-78'>Enter Chapter</button>}

          {section === 2 && <button onClick={() => plusSection()} className='button-78'>Begin Encounter</button>}

          {section === 3 && 
  <div className='WWW-enc-buttons'>
    <button className='button-78' onClick={() => { plusLevel(); choiceNum(1); playerChange() }}>{buttonsInfo[level][0]}</button>

    <button className='button-78' onClick={() => { plusLevel(); choiceNum(2);playerChange() }}>{buttonsInfo[level][1]}</button>
    <button className='button-78' onClick={() => { plusLevel(); choiceNum(3);playerChange() }}>{buttonsInfo[level][2]}</button>
  </div>
}
        </div>
      )}
    </>
  );
}

export default Buttons;
