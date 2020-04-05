import React from 'react';
import Posts from './Posts';
import { updatePostTextareaAction, addPostAction } from '../../../redux/profileReducer';

const PostContainer = (props) => {


  let state = props.store;

  let addPost = () => {
      props.store.dispatch(addPostAction())
  }

  let changeText = (text) => {
      props.dispatch(updatePostTextareaAction(text))
  }
  return <Posts posts={state.profilePage.posts} addPost={addPost} updatePostTextarea={changeText} newPostText = {state.profilePage.newPostText} />
}

export default PostContainer;