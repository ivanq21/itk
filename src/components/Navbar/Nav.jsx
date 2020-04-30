import React from 'react';
import s from './Nav.module.scss'
import { NavLink } from 'react-router-dom';
const Nav = (props) => {
    console.log(props);
    return(
    <nav className={s.nav}>
        { props.menu.map((m) => {
            return  <div className={s.item}><NavLink to={m.path} activeClassName={s.active}>{m.icon} {m.title}</NavLink></div>
        })
        }
       
    </nav>
    )
 
}
export default Nav;