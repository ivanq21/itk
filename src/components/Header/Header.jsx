import React from 'react';
import s from './Header.module.scss';
import { NavLink } from 'react-router-dom';

const Header = (props) => {
    return (
      <header className={s.header}>
        <img width="80" src="https://upload.wikimedia.org/wikipedia/en/thumb/6/63/IMG_%28business%29.svg/1200px-IMG_%28business%29.svg.png" alt=""/>
        <div className={s.login}>
          {props.isAuth ? props.login : <NavLink to="/login">Login</NavLink>}
          
        </div>
      </header>
    )
}
export default Header