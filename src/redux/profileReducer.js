const ADD_POST = 'ADD-POST';
const UPDATE_NEW_POST_TEXT = 'UPDATE-NEW-POST-TEXT';

let initState = {
  posts:[
    {id: 1, text: 'First Post', likesCount: '221' },
    {id: 2, text: 'Second Post', likesCount: '21' }
  ],
  newPostText: ''
}

 const profileReducer = (state = initState, action) => {
  switch(action.type){
    case ADD_POST:
      let newPost = {id: state.posts.length+1, text: state.newPostText, likesCount: '34'};
      state.posts.push(newPost);
      state.newPostText = '';
      return state;

    case UPDATE_NEW_POST_TEXT:
      state.newPostText = action.newPostText;
      return state;

    default:
      return state;
  } 
}

export const addPostAC = () => {
    return { type: ADD_POST}
}

export const onPostChangeAC = (text) => {
    return { type: UPDATE_NEW_POST_TEXT, newPostText: text }
}
export default profileReducer;