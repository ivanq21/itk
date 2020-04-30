import React from 'react';
import './App.css';
import Header from './components/Header/Header';
import Nav from './components/Navbar/Nav';
import Profile from './components/Profile/Profile';
import Dialogs from './components/Dialogs/Dialogs';
import { Route } from 'react-router-dom';

function  App(props) {
  
  return (
    <div className="app-wrapper">
      <Header />
      <div className="container">
        <Nav menu = {props.state.menu} />
        <div className="content">
          <Route path="/profile" render={() => <Profile dispatch={props.dispatch}  profile={ props.state.profilePage } /> }/>
          <Route path="/dialogs" render={() => <Dialogs dispatch={props.dispatch} dialogs={ props.state.dialogsPage } />}/>
        </div>
      </div>
      
    </div>
  );
}

export default App;
