import React from 'react';
import s from './Nav.module.scss'
import { NavLink } from 'react-router-dom';
import Friends from './Friends/Friends'

const Nav = (props) => {
    return(
        <div className={s.sitebar}>
            <nav >
                {props.state.navbar.map((l, i) => {
                return <NavLink key={i} exact className={s.item} activeClassName={s.active} to={`${l.link}`}>{l.title}</NavLink>
                })}
            </nav>
            <Friends state={props.state.friends}/>
        </div>
    )
 
}
export default Nav;