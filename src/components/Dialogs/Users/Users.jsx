import React from 'react';
import {NavLink} from 'react-router-dom'
import s from './Users.module.scss';

const Users = (props) => {
  return(
    <div className={s.users}>
      {props.users.map(u => {
        return <NavLink to={"/dialogs/"+u.id} className={s.user}>{u.name}</NavLink>
      })}
    </div>
  ) 
}
export default Users;