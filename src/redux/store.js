import profileReducer from "./profileReducer";
import dialogsReducer from "./dialogsReducer";
import sitebarReducer from "./sitebarReducer";



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
    this._state.profilePage = profileReducer(this._state.profilePage, action);
    this._state.dialogsPage = dialogsReducer(this._state.dialogsPage, action);
    this._state.siteBar = sitebarReducer(this._state.siteBar, action);
    this._callSubcriber(this._state);
  }
}




export default store;
window.store = store;