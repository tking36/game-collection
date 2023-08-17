import React from 'react';
import NavBar from '../components/NavBar';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';


const Home = () => {
  return (
    <div>
      <NavBar />
      <h1 className='home-title'>King Games</h1>
      <p className='game-list'>Welcome to my game collection. Check out the links below or above to start a game</p>

      <div className='games-container' >

        <Card className='game-container' style={{ width: '18rem' }}>
          <Card.Img variant="top" src="https://i.imgur.com/WoF9iqJ.png" className='game-img' />
          <Card.Body>
            <Card.Title>Tic-Tac-Toe</Card.Title>
            <Card.Text>
              Classic game of Tic-Tac-Toe. 
            </Card.Text>
            <Button href='/ttt' variant="primary">Play</Button>
          </Card.Body>
        </Card>

        <Card className='game-container' style={{ width: '18rem' }}>
          <Card.Img variant="top" src="https://i.imgur.com/5VE1VIN.png" className='game-img' />
          <Card.Body>
            <Card.Title>Mad Libs</Card.Title>
            <Card.Text>
              Create your own story with Mad Libs. 
            </Card.Text>
            <Button href='/ml' variant="primary">Play</Button>
          </Card.Body>
        </Card>

      </div>
    </div>
  );
};

export default Home;
