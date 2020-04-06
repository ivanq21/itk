import React from 'react';
import s from './Dialogs.module.scss';
import Users from './Users/Users';
import Messages from './Messages/Messages';
import { updateFriendMsg, addFriendMsg } from '../../redux/dialogsReducer';

const Dialogs = (props) => {
    console.log(props)
    let msg = React.createRef();
    let state = props.dialogsPage;
    let sendMsg = () => {
        props.addFriendMsg();
    }
    let changeMsg = () => {
        let text = msg.current.value;
        props.updateFriendMsg(text);
    }
   
    return (
        <div className={s.dialogs}>
            <div className={s.users}>
                <Users users={state.users}/>
            </div>
            <Messages messages={state.messages}/>
            <div className={s.addMsgForm}>
                <textarea onChange={changeMsg} ref={msg} value={state.newMessage}></textarea>
                <button onClick={sendMsg}>Send Msg</button>
            </div>
        </div>
    )
}

export default Dialogs;