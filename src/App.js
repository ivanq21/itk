import React from 'react';
import './App.css';
import Header from './components/Header/header';
import Nav from './components/Navbar/Nav';
import Profile from './components/Profile/Profile';

function App() {
  return (
    <div className="app-wrapper">
      <Header />
      <div className="container">
        <Nav />
        <div className="content">
          <Profile />
        </div>
      </div>
      
    </div>
  );
}

export default App;
