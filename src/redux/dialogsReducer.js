const ADD_NEW_MESSAGE = 'ADD-NEW-MESSAGE'
const UPDATE_NEW_MESSAGE = 'UPDATE-NEW-MESSAGE';

let initState = {
  messages: [
    {id: 1, text: 'How are you'},
    {id: 2, text: 'What the fuck, man?'},
    {id: 3, text: 'Hay'},
    {id: 4, text: 'Hello'},
    {id: 5, text: 'Yo'},
    {id: 6, text: 'Yolla'},
  ],
  users: [
    {id: 1, name: 'Ivan'},
    {id: 2, name: 'Petr'},
    {id: 3, name: 'Vasa'},
    {id: 4, name: 'Dajs'},
    {id: 5, name: 'Dan'},
    {id: 6, name: 'Pen'}
  ],
  newMessage: 'ddd'

};

 const dialogsReducer = (state = initState, action) => {
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