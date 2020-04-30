const ADD_NEW_MESSAGE = 'ADD-NEW-MESSAGE'
const UPDATE_NEW_MESSAGE = 'UPDATE-NEW-MESSAGE';

 const dialogsReducer = (state, action) => {
  switch(action.type){
    case ADD_NEW_MESSAGE:
      let newMessage = {id: state.messages.length+1, text: state.newMessage};
      state.messages.push(newMessage);
      state.newMessage = '';
      return state;
    case UPDATE_NEW_MESSAGE:
      state.newMessage = action.newMessage;
      return state;
    default:
      return state;
  }
 
  
}
export const addMessageAC = () => {
  return {type: ADD_NEW_MESSAGE}
}
export const onMessageChangeAC = (text) => {
  return {type: UPDATE_NEW_MESSAGE, newMessage: text }
}


export default dialogsReducer;