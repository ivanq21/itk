 
import React from 'react';
import s from './Dialogs.module.scss';
import Users from './Users/Users';
import Messages from './Messages/Messages';
import DialogsForm from './DialogsForm/DialogsForm';
import DialogsFormContainer from './DialogsForm/DialogsFormContainer';

const Dialogs = (props) => {
    return (
        <div className={s.dialogs}>
            <Users users={props.dialogs.users}/>
            <Messages messages = {props.dialogs.messages}/>
            <DialogsFormContainer  dispatch = { props.dispatch } newMessage = {props.dialogs.newMessage} />
        </div>
    )
}

export default Dialogs;