import React from 'react';
import './App.css';
import Header from './components/Header/header';
import Nav from './components/Navbar/Nav';
import Profile from './components/Profile/Profile';
import Dialogs from './components/Dialogs/Dialogs';
import News from './components/Profile/News/News'

import {Route} from "react-router-dom";
import DialogsContainer from './components/Dialogs/DialogsContainer';

function App(props) {
  console.log(props)
  return (
      <div className="app-wrapper">
        <Header />
        <div className="container">
          <Nav state={props.state.siteBar}/>
          <div className="content">
            <Route path="/profile" render={() =><Profile store={props.store} />} />
            <Route path="/dialogs" render={() =><DialogsContainer store={props.store} />} />
            <Route path="/news" component={News} />
          </div>
        </div>
      </div>
  );
}

export default App;
