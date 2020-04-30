import React from 'react';
import {addPostAC, onPostChangeAC} from '../../../../redux/profileReducer';
import PostForm from './PostForm';


const PostFormContainer = (props) => {

    let addPost = () => {
        props.dispatch(addPostAC());
    }
    let onPostChange = (newPostText) => {
        props.dispatch(onPostChangeAC(newPostText));
    }

    return(
        <PostForm newPostText={props.newPostText} addPost = {addPost} updateNewPostText = { onPostChange} />
    )
    
}

export default PostFormContainer;