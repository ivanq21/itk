 
import React from 'react';
import s from './Dialogs.module.scss';
import Users from './Users/Users';
import Messages from './Messages/Messages';
import {addMessageAC, onMessageChangeAC} from '../../redux/dialogsReducer';
const Dialogs = (props) => {
  let newMsg = React.createRef();
  const addMsg = () => {
    props.dispatch(addMessageAC());
  }
  const onMessageChange = () => {
    let text = newMsg.current.value;
    props.dispatch(onMessageChangeAC(text));
  }
    return (
        <div className={s.dialogs}>
            <Users users={props.dialogs.users}/>
            <Messages messages = {props.dialogs.messages}/>
            <div className={s.addMsgForm}>
                <textarea onChange={ onMessageChange } ref={newMsg} value={props.dialogs.newMessage} />
                <button onClick={ addMsg }>Send Msg</button>
            </div>
        </div>
    )
}

export default Dialogs;