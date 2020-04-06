import React from 'react';
import Posts from './Posts';
import { addPostAction, updatePostTextareaAction } from '../../../redux/profileReducer';

const PostsContainer = (props) => {
    console.log(props);
    let state = props.store.getState()
     let addPost = () => {
        props.store.dispatch(addPostAction())
    }

    let changeText = (text) => {
        props.store.dispatch(updatePostTextareaAction(text))
    }
    return( <Posts 
                posts={state.profilePage.posts} 
                newPostText={state.profilePage.newPostText} 
                addPost={addPost}
                updatePostText ={changeText}/> )
}

export default PostsContainer;