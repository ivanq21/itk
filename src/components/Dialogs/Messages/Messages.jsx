import React from 'react';
import { render } from '@testing-library/react';
import s from './Messages.module.scss';
import Dialog from './Message/Dialog'
const Messages = (props) => {
  console.log(props);
  return(
    <div className={s.messages}>
      { props.messages.map((msg)=>{
        return <Dialog text={msg.text} key={msg.id}/>
      })
    }
        
    </div>
  )
}

export default Messages;