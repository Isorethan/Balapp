import React from 'react';
import './App.css';

import {BrowserRouter as Router} from 'react-router-dom';
import MaintRouter from './routes/MainRouter';
import Footer from './components/footer/Footer';
import Header from './components/header/Header';
import {ContextProvider} from './store/Context'

function App() {



  return (
    <ContextProvider >
    <Router>
      <div className="App">
        <Header/>
        <MaintRouter />
        <Footer/>
      </div>
    </Router>
    </ContextProvider>
  );
}

export default App;
