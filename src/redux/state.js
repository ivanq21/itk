
const ADD_POST = 'ADD_POST';
const UPDATE_NEW_POST_TEXT = 'UPDATE_NEW_POST_TEXT'
const ADD_MESSAGE = 'ADD_MESSAGE';
const UPDATE_FRIEND_MESSAGE = 'UPDATE_FRIEND_MESSAGE'

let store = {
  _state: {
    profilePage:{
      newPostText: '',
      posts: [
        {  
          id: 1,
          text: 'First',
          like: '1'
        },
        {   
            id: 2,
            text: 'Second',
            like: '2'
        }
      ]
    },
    dialogsPage: {
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
    },
    siteBar:{
      navbar: [
        {
          link: '/profile',
          title: 'Profile'
        },
        {
          link: '/dialogs',
          title: 'Dialogs'
        },
        {
          link: '/news',
          title: 'News'
        },
        {
          link: '/music',
          title: 'Music'
        },
        {
          link: '/settings',
          title: 'Settings'
        }
      ],
      friends: [
        {
          name: 'Dima',
          age: 22,
          city: 'Moskov'
        },
        {
          name: 'Nik',
          age: 34,
          city: 'SPB'
        },
        {
          name: 'Pol',
          age: 54,
          city: 'Rime'
        }
  
      ]
    }
  },
  _callSubcriber() {
    console.log('state changed')
  },

  getState() {
    return this._state;
  },
  subscribe(observer){
    this._callSubcriber = observer;
  },
  
  dispatch(action){ 
    if(action.type === ADD_POST){
      let newPost = {
        id: 10,
        text: this._state.profilePage.newPostText,
        like: 0
      };
    
      this._state.profilePage.posts.push(newPost);
      this._state.profilePage.newPostText = '';
    
      this._callSubcriber(this._state);

    }else if(action.type === UPDATE_NEW_POST_TEXT){
      this._state.profilePage.newPostText = action.newText;
      this._callSubcriber(this._state);

    }else if(action.type === ADD_MESSAGE){
      let newMsg = {
        id: 10,
        text: this._state.dialogsPage.newMessage
      }
      this._state.dialogsPage.messages.push(newMsg)
      this._state.dialogsPage.newMessage = '';
      this._callSubcriber(this._state);

    }else if(action.type === UPDATE_FRIEND_MESSAGE){
      this._state.dialogsPage.newMessage = action.newMsg
      this._callSubcriber(this._state);
    }
  }
}

export const addPostAction = () => ( {type: ADD_POST} )

export const updatePostTextareaAction = (text) => ({ 
  type: UPDATE_NEW_POST_TEXT, 
  newText: text
})

export const addFriendMessageAction = () => ( {type: ADD_MESSAGE} )

export const updateFriendsMsgAction = (text) => ( {
  type: UPDATE_FRIEND_MESSAGE,
  newMsg: text
})

export default store;
window.store = store;