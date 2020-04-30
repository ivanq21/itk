import React from 'react';
import {addMessageAC, onMessageChangeAC} from '../../../redux/dialogsReducer';
import s from '../Dialogs.module.scss';

const DialogsForm = (props) => {

  let newMsg = React.createRef();
  const addMsg = () => {
    props.dispatch(addMessageAC());
  }
  const onMessageChange = () => {
    let text = newMsg.current.value;
    props.dispatch(onMessageChangeAC(text));
  }
  
  return(
    <div className={s.addMsgForm}>
      <textarea onChange={ onMessageChange } ref={newMsg} value={props.newMessage} />
      <button onClick={ addMsg }>Send Msg</button>
    </div>
  )
}
export default DialogsForm;