import React from 'react';
import s from './Dialogs.module.scss';
import Users from './Users/Users';
import Messages from './Messages/Messages';

const Dialogs = (props) => {
    let msg = React.createRef()
    let sendMsg = () => {
        let msgVal = msg.current.value;
        alert(msgVal);
    }
    return (
        <div className={s.dialogs}>
            <div className={s.users}>
                <Users users={props.state.users}/>
            </div>
            <Messages messages={props.state.messages}/>
            <div className={s.addMsgForm}>
                <textarea ref={msg} name="" id="" cols="30" rows="10"></textarea>
                <button onClick={sendMsg}>Send Msg</button>
            </div>
        </div>
    )
}

export default Dialogs;