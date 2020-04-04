import React from 'react';
import './App.css';
import Header from './components/Header/header';
import Nav from './components/Navbar/Nav';
import Profile from './components/Profile/Profile';
import Dialogs from './components/Dialogs/Dialogs';
import News from './components/Profile/News/News'

import {Route} from "react-router-dom";

function App(props) {
  return (
      <div className="app-wrapper">
        <Header />
        <div className="container">
          <Nav state={props.state.siteBar}/>
          <div className="content">
            <Route path="/profile" render={() =><Profile profilePage={props.state.profilePage} dispatch={props.dispatch}/>} />
            <Route path="/dialogs" render={() =><Dialogs state={props.state.dialogsPage} dispatch={props.dispatch}/>} />
            <Route path="/news" component={News} />
          </div>
        </div>
      </div>
  );
}

export default App;
