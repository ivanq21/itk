let renderDom = () => {
  console.log('state changed');
}
const state ={
  profile: {
    posts:[
      {id: 1, text: 'First Post', likesCount: '221' },
      {id: 2, text: 'Second Post', likesCount: '21' }
    ],
    newPostText: 'ddd'
  },
  dialogs: {
    messages: [
      {id: 1, name: 'How are you'},
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
    ]
  },
  friends: [
    {id: 1, name: 'Ivan'},
    {id: 2, name: 'Petr'},
    {id: 3, name: 'Vasa'},
    {id: 4, name: 'Dajs'},
    {id: 5, name: 'Dan'},
    {id: 6, name: 'Pen'}
  ]
}

window.state=state;

export const addPost = (postMessage) => {
  let newPost = {id: 5, text: state.profile.newPostText, likesCount: '34'}
  state.profile.posts.push(newPost);
  state.profile.newPostText = '';
  renderDom();
}

export const updateNewPostText = (newPostText) => {
  state.profile.newPostText = newPostText;
  renderDom();
}

export const subscribe = (observer) => {
  renderDom = observer;
}

export default state;