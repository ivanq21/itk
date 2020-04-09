import React from 'react';
import s from './Messages.module.scss';
import Dialog from './Message/Dialog'
const Messages = (props) => {
  
  return(
    <div className={s.messages}>
      { props.messages.map((msg)=><Dialog text={msg.text} key={msg.id}/>)}
        
    </div>
  )
}

export default Messages;