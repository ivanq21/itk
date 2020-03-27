import React from 'react';
import s from './Dialogs.module.scss';
import Users from './Users/Users';
import Messages from './Messages/Messages';

const Dialogs = (props) => {
    const users = [
        {
            id: 1,
            name: 'Вася'
        },
        {
            id: 2,
            name: 'Коля'
        },
        {
            id: 3,
            name: 'Витя'
        }
        
    ];

    const messages = [
        {
            id: 1,
            text: 'Салют'
        },
        {
            id: 2,
            text: 'Как дела?'
        },
        {
            id: 3,
            text: 'че кого?'
        }
        
    ]

    return (
        <div className={s.dialogs}>
            <div className={s.users}>
                <Users users={users}/>
            </div>
            <Messages messages={messages}/>
        </div>
    )
}

export default Dialogs;