const ADD_FRIEND_MESSAGE = 'ADD_FRIEND_MESSAGE';
const UPDATE_FRIEND_MESSAGE = 'UPDATE_FRIEND_MESSAGE'

let initialState = {
  newMessage: 'Новое сообщение',
  users: [
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
  ],
  messages: [
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
}

const dialogsReducer = (state = initialState, action) => {

  switch (action.type){
    case ADD_FRIEND_MESSAGE: 
      let msg = { id: 11, text: state.newMessage }
      state.messages.push(msg);
      state.newMessage = '';
      
      return state;

    case UPDATE_FRIEND_MESSAGE:
      state.newMessage = action.text;
      return state;

    default: 
      return state;
  }

}

export const addFriendMsg = () => ({type:ADD_FRIEND_MESSAGE})

export const updateFriendMsg = (text) => ({
  type: UPDATE_FRIEND_MESSAGE,
  text: text
})


export default dialogsReducer;