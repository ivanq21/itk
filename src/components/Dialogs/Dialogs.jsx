import React from 'react';
import s from './Dialogs.module.scss';
import Users from './Users/Users';
import Messages from './Messages/Messages';
import { addFriendMessageAction, updateFriendsMsgAction } from '../../redux/state';

const Dialogs = (props) => {
    console.log(props);
    let msg = React.createRef()
    let sendMsg = () => {
        let msgVal = msg.current.value;
        props.dispatch(addFriendMessageAction(msgVal));
    }
    let changeMsg = () => {
        let newMsg = msg.current.value;
        props.dispatch(updateFriendsMsgAction(newMsg))
    }
    return (
        <div className={s.dialogs}>
            <div className={s.users}>
                <Users users={props.state.users}/>
            </div>
            <Messages messages={props.state.messages}/>
            <div className={s.addMsgForm}>
                <textarea onChange={changeMsg} ref={msg} value={props.state.newMessage}></textarea>
                <button onClick={sendMsg}>Send Msg</button>
            </div>
        </div>
    )
}

export default Dialogs;