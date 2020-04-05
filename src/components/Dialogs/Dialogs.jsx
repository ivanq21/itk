import React from 'react';
import s from './Dialogs.module.scss';
import Users from './Users/Users';
import Messages from './Messages/Messages';
import { updateFriendMsg, addFriendMsg } from '../../redux/dialogsReducer';

const Dialogs = (props) => {
    console.log(props);
    let msg = React.createRef()
    let sendMsg = () => {
        props.dispatch(addFriendMsg())
    }
    let changeMsg = () => {
        let text = msg.current.value;
        props.dispatch(updateFriendMsg(text))
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