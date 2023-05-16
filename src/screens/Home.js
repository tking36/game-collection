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

      <Card style={{ width: '18rem' }}>
        <Card.Img variant="top" src="https://i.imgur.com/WoF9iqJ.png" />
        <Card.Body>
          <Card.Title>Tic-Tac-Toe</Card.Title>
          <Card.Text>
            Classic game of Tic-Tac-Toe. 
          </Card.Text>
          <Button href='/ttt' variant="primary">Play</Button>
        </Card.Body>
      </Card>
    </div>
  );
};

export default Home;
