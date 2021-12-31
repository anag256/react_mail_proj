import React from 'react';
import logo from './logo.svg';
import { Counter } from './features/counter/Counter';
import {BrowserRouter as Router, Routes,Route} from 'react-router-dom';
import './App.css';
import HomeScreen from './components/HomeScreen';
import SentMails from './components/SentMails';


function App() {
  return (
    <div className="App">
    {/* <HomeScreen/> */}
    <Router>
        <Routes>
   
           <Route path="/" element={<HomeScreen/>}/>
        </Routes>
    </Router> 
    </div>
  );
}

export default App;
