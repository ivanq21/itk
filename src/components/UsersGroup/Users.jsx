import React from 'react';
import userPhoto from '../../assets/111.jpeg';
import s from './UsersGroup.module.scss';
import { NavLink } from 'react-router-dom';
import {usersAPI} from '../../api/api'
const Users = (props) => {
  let pagesCount = props.totalUsers/props.pageSize;
  let pages = [];
  for(let i=1; i <= Math.ceil(pagesCount); i++){
    pages.push(i);
   
  }
  console.log(props)
  return (
    <div>
      <div className={s.pagination}>
        {pages.map(p => {
         return <span onClick={(e) => {props.onPageChanged(p)}} className={props.currentPage === p ? s.active : ''}>{p}</span>
        })}
      </div>
      {props.users.map(u => <div className={s.users} key={u.id}>
          <div className={s.left}>
            <NavLink to={'/profile/'+u.id}>
            <div className="img"><img src={(u.photos.small != null ? u.photos.small: userPhoto)} alt="" /></div>
            </NavLink>
            
          </div>
          <div className={s.right}>
            <div className={s.name}>{u.name}</div>
            <div className={s.status}>{u.status}</div>
            <div className={s.city}>location.city / u.location.country</div>
          </div>
          {u.followed 
            ? <button disabled={props.followingProgress} className={s.follow} onClick={()=> { props.follow(u.id) }}>UNFOLLOW</button>
            : <button disabled={props.followingProgress} className={s.follow} onClick={()=> { props.unfollow(u.id) }}>FOLLOW</button>
          }
        </div>
      )}
    </div>
  )
}
export default Users;