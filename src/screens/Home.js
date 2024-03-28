import React from 'react';
import NavBar from '../components/NavBar';
import Card from 'react-bootstrap/Card';


const Home = () => {
  return (
    <div className='games-home'>
      <NavBar />
      <h1 className='home-title'>King Games</h1>
      <p className='game-list'>Welcome to my game collection. Check out the links below or above to start a game</p>

      <div className='games-container' >

        <Card className='game-container' style={{ width: '18rem' }}>
          <Card.Img variant="top" src="https://i.imgur.com/WoF9iqJ.png" className='game-img' />
          <Card.Body>
            <Card.Title>Tic-Tac-Toe</Card.Title>
            <Card.Text>
              Classic game of Tic-Tac-Toe. Beat the computer!
            </Card.Text>
            <a href='/ttt' className='button-78' variant="primary">Play</a>
          </Card.Body>
        </Card>

        <Card className='game-container' style={{ width: '18rem' }}>
          <Card.Img variant="top" src="https://i.imgur.com/DYWAqrD.png" className='game-img' />
          <Card.Body>
            <Card.Title>Mad Libs</Card.Title>
            <Card.Text>
              Create your own story with Mad Libs. 
            </Card.Text>
            <a href='/ml' className='button-78' variant="primary">Play</a>
          </Card.Body>
        </Card>

        <Card className='game-container' style={{ width: '18rem' }}>
          <Card.Img variant="top" src="https://i.imgur.com/TMPfLlj.png" className='game-img' />
          <Card.Body>
            <Card.Title>Wordle</Card.Title>
            <Card.Text>
              Guess the word! You have 6 tries to guess the word.
            </Card.Text>
            <a href='/wordle' className='button-78' variant="primary">Play</a>
          </Card.Body>
        </Card>

        <Card className='game-container' style={{ width: '18rem' }}>
          <Card.Img variant="top" src="https://c8.alamy.com/comp/JCDWCY/cartoon-cowboy-leaning-on-a-fence-smoking-a-cigarette-JCDWCY.jpg" className='game-img' />
          <Card.Body>
            <Card.Title>Wild Wild West</Card.Title>
            <Card.Text>
              Survive the Wild Wild West!
            </Card.Text>
            <a href='/WWW' className='button-78' variant="primary">Play</a>
          </Card.Body>
        </Card>

      </div>
    </div>
  );
};

export default Home;
