import Home from './screens/Home'
import './App.css';
import {BrowserRouter as Router, Route, Routes} from 'react-router-dom';
import TTT from './components/TTT';
import MadLib from './components/MadLib';

function App() {
  return (
    <Router>
      <Routes>
        <Route path='/' element={<Home/>}></Route>
        <Route path='/ttt' element={<TTT/>}></Route>
        <Route path='/ml' element={<MadLib/>}></Route>
      </Routes>
    </Router>
  );
}

export default App;
