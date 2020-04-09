import React from 'react';
import './App.css';
import Header from './components/Header/header';
import NavContainer from './components/Navbar/NavContainer';
import Profile from './components/Profile/Profile';
import News from './components/Profile/News/News'

import {Route} from "react-router-dom";
import DialogsContainer from './components/Dialogs/DialogsContainer';

function App(props) {
  return (
      <div className="app-wrapper">
        <Header />
        <div className="container">
          <NavContainer />
          <div className="content">
            <Route path="/profile" render={() =><Profile  />} />
            <Route path="/dialogs" render={() =><DialogsContainer />} />
            <Route path="/news" component={News} />
          </div>
        </div>
      </div>
  );
}

export default App;
