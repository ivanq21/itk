const ADD_FRIEND_MESSAGE = 'ADD_FRIEND_MESSAGE';
const UPDATE_FRIEND_MESSAGE = 'UPDATE_FRIEND_MESSAGE'

let initialState = {
  newMessage: '',
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
  switch (action.type) {
    case ADD_FRIEND_MESSAGE:
      return {
        ...state,
        newMessage: '',
        messages: [...state.messages, { id: new Date().now, text: state.newMessage }]
      }

    case UPDATE_FRIEND_MESSAGE:
      return {
        ...state,
        newMessage: action.text
      }

    default:
      return state;
  }

}

export const addFriendMsg = () => ({ type: ADD_FRIEND_MESSAGE })

export const updateFriendMsg = (text) => ({
  type: UPDATE_FRIEND_MESSAGE,
  text: text
})


export default dialogsReducer;