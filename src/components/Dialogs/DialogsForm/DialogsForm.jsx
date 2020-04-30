import React from 'react';
import {addMessageAC, onMessageChangeAC} from '../../../redux/dialogsReducer';
import s from '../Dialogs.module.scss';

const DialogsForm = (props) => {
console.log(props);
  let newMsg = React.createRef();
  const addMsg = () => {
    props.addMsg();
  }
  const onMessageChange = () => {
    let text = newMsg.current.value;
    props.messageChange(text);
  }
  
  return(
    <div className={s.addMsgForm}>
      <textarea onChange={ onMessageChange } ref={newMsg} value={props.newMessage} />
      <button onClick={ addMsg }>Send Msg</button>
    </div>
  )
}
export default DialogsForm;