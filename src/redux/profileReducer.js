const ADD_POST = 'ADD_POST';
const UPDATE_NEW_POST_TEXT = 'UPDATE_NEW_POST_TEXT';
const SET_USER_PROFILE = 'SET_USER_PROFILE';

let initialState = {
  newPostText: '',
  profile: null,
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
    case SET_USER_PROFILE:
      return{
        ...state,
        profile: action.profile
      }  

    default: 
      return state;
  }

}
export const addPostAction = () => ( {type: ADD_POST} )

export const setUserProfile = (profile) => ({type:SET_USER_PROFILE, profile })

export const updatePostTextareaAction = (text) => ({ 
  type: UPDATE_NEW_POST_TEXT, 
  newText: text
})


export default profileReducer;