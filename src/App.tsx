import React from 'react';
import './App.css';
import { BrowserRouter as Router } from 'react-router-dom';
import Routes from './Routes';
import Header from './components/header/Header';

const App: React.FC = () => {
  return (
    <Router>
      <Header />
      <Routes />
    </Router>
  );
}

export default App;
