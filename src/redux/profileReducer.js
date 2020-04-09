const ADD_POST = 'ADD_POST';
const UPDATE_NEW_POST_TEXT = 'UPDATE_NEW_POST_TEXT';

let initialState = {
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
}


const profileReducer = (state = initialState, action) => {
  switch(action.type){
    case ADD_POST: 
      return {
        ...state,
        newPostText: '',
        posts: [...state.posts, {id: 10, text: state.newPostText, like: 0}]
      }

    case UPDATE_NEW_POST_TEXT: 
      return {
        ...state,
        newPostText: action.newText
      }

    default: 
      return state;
  }

}
export const addPostAction = () => ( {type: ADD_POST} )

export const updatePostTextareaAction = (text) => ({ 
  type: UPDATE_NEW_POST_TEXT, 
  newText: text
})

export default profileReducer;