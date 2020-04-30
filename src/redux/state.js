import profileReducer from "./profileReducer";
import dialogsReducer from "./dialogsReducer";

let store = {
  _state: {
    profile: {
      posts:[
        {id: 1, text: 'First Post', likesCount: '221' },
        {id: 2, text: 'Second Post', likesCount: '21' }
      ],
      newPostText: ''
    },
    dialogs: {
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
    },
    friends: [
      {id: 1, name: 'Ivan'},
      {id: 2, name: 'Petr'},
      {id: 3, name: 'Vasa'},
      {id: 4, name: 'Dajs'},
      {id: 5, name: 'Dan'},
      {id: 6, name: 'Pen'}
    ]
  },
  _callSubscriber() {
    console.log('state changed');
  },
  getState(){
    return this._state;
  },
  subscribe(observer) {
    this._callSubscriber = observer;
  },
  dispatch(action){
    this._state.profile = profileReducer(this._state.profile, action);
    this._state.dialogs = dialogsReducer(this._state.dialogs, action);
    this._callSubscriber(this._state);
  }
}


window.store=store;

export default store;