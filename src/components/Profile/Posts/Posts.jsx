import React from 'react';
import Post from './Post/Post'
import s from './Posts.module.scss'
// import PostForm from './PostForm/PostForm';
import { addPostAction, updatePostTextareaAction } from '../../../redux/profileReducer';

const Posts = (props) => {
    let newPostEl = React.createRef();
    let addPost = () => {
        // props.dispatch(addPostAction)
        props.dispatch(addPostAction())
    }

    let changeText = () => {
        let text = newPostEl.current.value;
        props.dispatch(updatePostTextareaAction(text))
    }
    return(
        <div className={s.my_posts}>
            <h2>My posts</h2>
           <div className={s.post_form}>
                <textarea
                  onChange={ changeText }
                  ref={newPostEl} 
                  value={props.newPostText}/>
                <button type="submit" onClick={ addPost }>Send</button>
            </div>
            <div className={s.posts_list}>
                {props.posts.map((post) => {
                    return <Post text={post.text} like={post.like} key={post.id}/>
                })}
                
            </div>
        </div>
    )
}

export default Posts;