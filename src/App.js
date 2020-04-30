import React from 'react';
import './App.css';
import Header from './components/Header/Header';
import Nav from './components/Navbar/Nav';
import Profile from './components/Profile/Profile';
import Dialogs from './components/Dialogs/Dialogs';
import { Route } from 'react-router-dom';

function  App(props) {
  console.log(props);
  return (
    <div className="app-wrapper">
      <Header />
      <div className="container">
        <Nav />
        <div className="content">
          <Route path="/profile" render={() => <Profile dispatch={props.dispatch}  profile={ props.state.profile } /> }/>
          <Route path="/dialogs" render={() => <Dialogs dispatch={props.dispatch} dialogs={ props.state.dialogs } />}/>
        </div>
      </div>
      
    </div>
  );
}

export default App;
