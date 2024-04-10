import React, {useEffect, useState} from 'react';

const Creation = ({
  creation,
  playerName,
  setPlayerName,
  playerHealth,
  setPlayerHealth,
  playerStrength,
  setPlayerStrength,
  playerCharisma,
  setPlayerCharisma,
  playerAgility,
  setPlayerAgility,
  skillPoints,
  setSkillPoints,
  level,
  playerImage,
  setPlayerImage,
}) => {

const [current, setCurrent] = useState(0)


  const handleNameChange = (e) => {
    setPlayerName(e.target.value);
  };

  const increment = (setter) => () => {
    setter((prevValue) => prevValue + 1);
    setSkillPoints((prevPoints) => prevPoints - 1);
  };

  const decrement = (setter) => () => {
    setter((prevValue) => prevValue - 1);
    setSkillPoints((prevPoints) => prevPoints + 1);
  };

  const handleHealthIncrement = () => {
    if (skillPoints > 0) {
      increment(setPlayerHealth)();
    }
  };

  const handleHealthDecrement = () => {
    if (playerHealth > 0) {
      decrement(setPlayerHealth)();
    }
  };

  const handleStrengthIncrement = () => {
    if (skillPoints > 0) {
      increment(setPlayerStrength)();
    }
  };

  const handleStrengthDecrement = () => {
    if (playerStrength > 0) {
      decrement(setPlayerStrength)();
    }
  };

  const handleCharismaIncrement = () => {
    if (skillPoints > 0) {
      increment(setPlayerCharisma)();
    }
  };

  const handleCharismaDecrement = () => {
    if (playerCharisma > 0) {
      decrement(setPlayerCharisma)();
    }
  };

  const handleAgilityIncrement = () => {
    if (skillPoints > 0) {
      increment(setPlayerAgility)();
    }
  };

  const handleAgilityDecrement = () => {
    if (playerAgility > 0) {
      decrement(setPlayerAgility)();
    }
  };

  const chosenChar = (num) => {
    setCurrent(num)

    if(num === 1){
      setPlayerImage('https://cdn.vectorstock.com/i/1000v/90/18/cowboy-cartoon-vector-1329018.jpg')
    } else if(num === 2){
      setPlayerImage('https://media.istockphoto.com/id/96421417/vector/cowboy-about-to-draw-his-guns.jpg?s=612x612&w=0&k=20&c=Gc0FlRdTvmg7G9s7qRfHgRyjBxJKIYUVc0lts0Joftk=')
    }
    else if(num === 3){
      setPlayerImage('https://classroomclipart.com/image/static7/preview2/cartoon-cowboy-standing-with-his-hands-on-his-hips-60317.jpg')
    }
    else if(num === 4){
      setPlayerImage('https://c8.alamy.com/comp/JCDWCY/cartoon-cowboy-leaning-on-a-fence-smoking-a-cigarette-JCDWCY.jpg')
    }
    console.log(playerImage)
  }


  return (
    <div className="">
      {level === 0 && creation && (
        <div className="">
          <h1>Creation</h1>
          <h2>Remaining Skill Points: {skillPoints}</h2>
          <form className="" onSubmit={(e) => e.preventDefault()}>
            <div>
              <label htmlFor="name">Name:</label>
              <input
                type="text"
                placeholder="Name"
                value={playerName}
                onChange={handleNameChange}
              />
            </div>

            <div>
              <label htmlFor="health">Health:</label>
              <button
                type="button"
                onClick={handleHealthDecrement}
                disabled={playerHealth <= 0}
              >
                -
              </button>
              <input type="text" value={playerHealth} readOnly />
              <button
                type="button"
                onClick={handleHealthIncrement}
                disabled={skillPoints <= 0}
              >
                +
              </button>
            </div>

            <div>
              <label htmlFor="strength">Strength:</label>
              <button
                type="button"
                onClick={handleStrengthDecrement}
                disabled={playerStrength <= 0}
              >
                -
              </button>
              <input type="text" value={playerStrength} readOnly />
              <button
                type="button"
                onClick={handleStrengthIncrement}
                disabled={skillPoints <= 0}
              >
                +
              </button>
            </div>

            <div>
              <label htmlFor="charisma">Charisma:</label>
              <button
                type="button"
                onClick={handleCharismaDecrement}
                disabled={playerCharisma <= 0}
              >
                -
              </button>
              <input type="text" value={playerCharisma} readOnly />
              <button
                type="button"
                onClick={handleCharismaIncrement}
                disabled={skillPoints <= 0}
              >
                +
              </button>
            </div>

            <div>
              <label htmlFor="agility">Agility:</label>
              <button
                type="button"
                onClick={handleAgilityDecrement}
                disabled={playerAgility <= 0}
              >
                -
              </button>
              <input type="text" value={playerAgility} readOnly />
              <button
                type="button"
                onClick={handleAgilityIncrement}
                disabled={skillPoints <= 0}
              >
                +
              </button>
            </div>
          </form>
        </div>
      )}

      {level === 1 && (
        <div>
          <h1>Choose Character Image</h1>
          <div>
            <img
              className={
                current === 1 ? 'WWW-char-image-active' : 'WWW-char-image'
              }
              src="https://cdn.vectorstock.com/i/1000v/90/18/cowboy-cartoon-vector-1329018.jpg"
              alt=""
              onClick={() => chosenChar(1)}
            />

            <img
              className={
                current === 2 ? 'WWW-char-image-active' : 'WWW-char-image'
              }
              src="https://media.istockphoto.com/id/96421417/vector/cowboy-about-to-draw-his-guns.jpg?s=612x612&w=0&k=20&c=Gc0FlRdTvmg7G9s7qRfHgRyjBxJKIYUVc0lts0Joftk="
              alt=""
              onClick={() => chosenChar(2)}
            />

            <img
              className={
                current === 3 ? 'WWW-char-image-active' : 'WWW-char-image'
              }
              src="https://classroomclipart.com/image/static7/preview2/cartoon-cowboy-standing-with-his-hands-on-his-hips-60317.jpg"
              alt=""
              onClick={() => chosenChar(3)}
            />

            <img
              className={
                current === 4 ? 'WWW-char-image-active' : 'WWW-char-image'
              }
              src="https://c8.alamy.com/comp/JCDWCY/cartoon-cowboy-leaning-on-a-fence-smoking-a-cigarette-JCDWCY.jpg"
              alt=""
              onClick={() => chosenChar(4)}
            />
          </div>
        </div>
      )}

      {level === 2 && 
        <div>
          <img className='WWW-char-image' src={playerImage}></img>
        <div>
          <h2>Player Name: {playerName}</h2>
          <h2>Player Health: {playerHealth}</h2>
          <h2>Player Strength: {playerStrength}</h2>
          <h2>Player Charisma: {playerCharisma}</h2>
          <h2>Player Agility: {playerAgility}</h2>
        </div>
        </div>
      }
    </div>
  );
}

export default Creation;



