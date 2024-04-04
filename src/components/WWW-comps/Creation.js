import React from 'react';

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
}) => {
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

  return (
    <div className=''>
        <div className=''>
            <h1>Creation</h1>
            <form className='' onSubmit={(e) => e.preventDefault()}>
                <input type='text' placeholder='Name' value={playerName} onChange={handleNameChange} />
                <div>
                  <button type="button" onClick={handleHealthDecrement} disabled={playerHealth <= 0}>-</button>
                  <input type='text' value={playerHealth} readOnly />
                  <button type="button" onClick={handleHealthIncrement} disabled={skillPoints <= 0}>+</button>
                </div>
                <div>
                  <button type="button" onClick={handleStrengthDecrement} disabled={playerStrength <= 0}>-</button>
                  <input type='text' value={playerStrength} readOnly />
                  <button type="button" onClick={handleStrengthIncrement} disabled={skillPoints <= 0}>+</button>
                </div>
                <div>
                  <button type="button" onClick={handleCharismaDecrement} disabled={playerCharisma <= 0}>-</button>
                  <input type='text' value={playerCharisma} readOnly />
                  <button type="button" onClick={handleCharismaIncrement} disabled={skillPoints <= 0}>+</button>
                </div>
                <div>
                  <button type="button" onClick={handleAgilityDecrement} disabled={playerAgility <= 0}>-</button>
                  <input type='text' value={playerAgility} readOnly />
                  <button type="button" onClick={handleAgilityIncrement} disabled={skillPoints <= 0}>+</button>
                </div>
            </form>
        </div>
    </div>
  )
}

export default Creation;
