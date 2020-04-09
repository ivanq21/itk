import React from 'react';
import Friend from './Friend/Friend'
import s from './Friends.module.scss';

const Friends = (props) => {
  return(
    <div className={s.friends}>
      {props.friends.map((data, key) => <Friend state={data} key={key} />)}
    </div>
  )
}

export default Friends;