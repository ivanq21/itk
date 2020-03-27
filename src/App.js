import React from 'react';
import './App.css';
import Header from './components/Header/header';
import Nav from './components/Navbar/Nav';
import Profile from './components/Profile/Profile';
import Dialogs from './components/Dialogs/Dialogs';
import News from './components/Profile/News/News'

import {
  BrowserRouter ,
  Route
} from "react-router-dom";

function App() {
  return (
      <div className="app-wrapper">
        <Header />
        <div className="container">
          <Nav />
          <div className="content">
            <Route path="/profile" component={Profile} />
            <Route path="/dialogs" component={Dialogs} />
            <Route path="/news" component={News} />
          </div>
        </div>
      </div>
  );
}

export default App;
