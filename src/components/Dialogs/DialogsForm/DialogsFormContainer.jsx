import React from 'react';
import {addMessageAC, onMessageChangeAC} from '../../../redux/dialogsReducer';
import DialogsForm from '../DialogsForm/DialogsForm'
import { connect } from 'react-redux';


let mapStateToProps = (state) => {
  console.log(state);
  return{
    newMessage: state.dialogsPage.newMessage
  }
}
let mapDispatchToProps = (dispatch) => {
  return{
    addMsg: () => {
      dispatch(addMessageAC());
    },
    messageChange: (text) => {
      dispatch(onMessageChangeAC(text));
    }
  }
}

const DialogsFormContainer = connect(mapStateToProps,mapDispatchToProps)(DialogsForm);

export default DialogsFormContainer;