import Home from './screens/Home'
import './App.css';
import {BrowserRouter as Router, Route, Routes} from 'react-router-dom';
import TTT from './components/TTT';
import MadLib from './components/MadLib';
import Wordle from './components/Wordle';
import WWW from './components/WWW';

function App() {
  return (
    <Router>
      <Routes>
        <Route path='/' element={<Home/>}></Route>
        <Route path='/ttt' element={<TTT/>}></Route>
        <Route path='/ml' element={<MadLib/>}></Route>
        <Route path='/wordle' element={<Wordle/>}></Route>
        <Route path='www' element={<WWW/>}></Route>
      </Routes>
    </Router>
  );
}

export default App;
