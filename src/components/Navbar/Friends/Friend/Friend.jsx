import React from 'react';
import s from './Friend.module.scss'
const Friend = (props) => {
  return(
    <div className={s.friend}>
      <div className={s.img}></div>
      <div className={s.text}>
          <div className={s.name}>{props.state.name}</div>
          <div className={s.age}>Age: {props.state.age}</div>
          <div className={s.city}>City: {props.state.city}</div>
      </div>
    </div>
  )
}

export default Friend;