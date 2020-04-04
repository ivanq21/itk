
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
  
  dispatch(action){ // {type: 'ADD-POST', context: 'text'}
    if(action.type === 'ADD-POST'){
      let newPost = {
        id: 10,
        text: this._state.profilePage.newPostText,
        like: 0
      };
    
      this._state.profilePage.posts.push(newPost);
      this._state.profilePage.newPostText = '';
    
      this._callSubcriber(this._state);
    }else if(action.type === 'UPDATE-NEW-POST-TEXT'){
      this._state.profilePage.newPostText = action.newText;
      this._callSubcriber(this._state);
    }
  }


}

export default store;
window.store = store;