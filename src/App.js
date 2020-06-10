import React from 'react';
import './App.css';

import {BrowserRouter as Router} from 'react-router-dom';
import MaintRouter from './routes/MainRouter';
import Footer from './components/footer/Footer';
import Header from './components/header/Header';

function App() {
  return (
    <Router>
      <div className="App">
        <Header/>
        <MaintRouter />
        <Footer/>
      </div>
    </Router>

  );
}

export default App;
