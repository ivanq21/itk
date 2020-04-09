import React from 'react';
import s from './../Nav.module.scss';
import { NavLink } from 'react-router-dom';
const NavLinks = (props) => {
  return(
    <div >
      <nav >
          {props.navbar.map((l, i) => {
          return <NavLink key={i} exact className={s.item} activeClassName={s.active} to={`${l.link}`}>{l.title}</NavLink>
          })}
      </nav>
    </div>
  )
}
export default NavLinks;