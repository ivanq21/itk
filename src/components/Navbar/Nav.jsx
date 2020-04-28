import React from 'react';
import s from './Nav.module.scss'
import { NavLink } from 'react-router-dom';
const Nav = () => {
    return(
    <nav className={s.nav}>
        <div className={s.item}><NavLink to="/dialogs" activeClassName={s.active}>Dialogs</NavLink></div>
        <div className={s.item}><NavLink to="/profile" activeClassName={s.active}>Profile</NavLink></div>
        <div className={s.item}><NavLink to="" >News</NavLink></div>
        <div className={s.item}><NavLink to="">Music</NavLink></div>
        <div className={s.item}><NavLink to="">Settings</NavLink></div>
    </nav>
    )
 
}
export default Nav;