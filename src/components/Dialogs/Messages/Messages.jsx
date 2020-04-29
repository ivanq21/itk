 
import React from 'react';
import s from './Messages.module.scss';
const Messages = (props) => {
  return(
    <div className={s.messages}>
      {props.messages.map(m => {
        return <div className={s.message}>
                <div className={s.img}>{m.id}</div>
                <div className="text">{m.text}</div>
              </div>
      })}
       
    </div>
  )
}
export default Messages;