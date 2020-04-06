import React from 'react';
import s from './Dialogs.module.scss';
import Users from './Users/Users';
import Messages from './Messages/Messages';
import { updateFriendMsg, addFriendMsg } from '../../redux/dialogsReducer';
import Dialogs from './Dialogs';

const DialogsContainer = (props) => {
    console.log(props)
    let state = props.store.getState().dialogsPage;
    let sendMsg = () => {
        props.store.dispatch(addFriendMsg())
    }
    let changeMsg = (text) => {
        props.store.dispatch(updateFriendMsg(text))
    }
    return <Dialogs addFriendMsg={sendMsg} dialogsPage={state} updateFriendMsg={changeMsg} />
}

export default DialogsContainer;