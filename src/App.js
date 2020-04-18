import React from 'react';
import './App.css';
import HeaderContainer from './components/Header/HeaderContainer';
import NavContainer from './components/Navbar/NavContainer';
import ProfileContainer from './components/Profile/ProfileContainer';
import News from './components/Profile/News/News'

import {Route} from "react-router-dom";
import DialogsContainer from './components/Dialogs/DialogsContainer';
import UsersContainer from './components/UsersGroup/UsersContainer';

function App(props) {
  return (
      <div className="app-wrapper">
        <HeaderContainer />
        <div className="container">
          <NavContainer />
          <div className="content">
            <Route path="/profile/:userId?" render={() =><ProfileContainer  />} />
            <Route path="/dialogs" render={() =><DialogsContainer />} />
            <Route path="/users" render={() => <UsersContainer/>} />
            <Route path="/news" component={News} />
          </div>
        </div>
      </div>
  );
}

export default App;
