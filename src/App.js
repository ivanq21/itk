import React from 'react';
import './App.css';
import Header from './components/Header/header';
import Nav from './components/Navbar/Nav';
import Profile from './components/Profile/Profile';
import Dialogs from './components/Dialogs/Dialogs';
import { Route } from 'react-router-dom';
import {addPost, updateNewPostText} from './redux/state';

function  App(props) {
  return (
    <div className="app-wrapper">
      <Header />
      <div className="container">
        <Nav />
        <div className="content">
          <Route path="/profile" render={() => <Profile addPost={addPost} updateNewPostText={updateNewPostText}  profile={ props.state.profile } /> }/>
          <Route path="/dialogs" component={() => <Dialogs dialogs={ props.state.dialogs } />}/>
        </div>
      </div>
      
    </div>
  );
}

export default App;
