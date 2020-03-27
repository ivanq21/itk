import React from 'react';
import {NavLink} from 'react-router-dom'
import s from './Users.module.scss';

const Users = (props) => {
  return(
      props.users.map((user) => {
        return <NavLink to={"/dialogs/"+user.id} className={s.user} key={user.id}>{user.name}</NavLink>
      })
  ) 
}
export default Users;