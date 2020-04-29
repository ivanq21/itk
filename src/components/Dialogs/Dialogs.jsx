 
import React from 'react';
import s from './Dialogs.module.scss';
import Users from './Users/Users';
import Messages from './Messages/Messages';

const Dialogs = (props) => {
  let newMsg = React.createRef();
  const addMsg = () => {
    let text = newMsg.current.value
    console.log(text);
  }
  
    return (
        <div className={s.dialogs}>
            <Users users={props.dialogs.users}/>
            <Messages messages = {props.dialogs.messages}/>
            <div className={s.addMsgForm}>
                <textarea ref={newMsg}></textarea>
                <button onClick={ addMsg }>Send Msg</button>
            </div>
        </div>
    )
}

export default Dialogs;