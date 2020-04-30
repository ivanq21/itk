import React from 'react';
import Post from './Post/Post'
import s from './Posts.module.scss'
import PostFormContainer from './PostForm/PostFormContainer';

const Posts = (props) => {
    return(
        <div className={s.my_posts}>
            <h2>My posts</h2>
           <PostFormContainer newPostText={props.store.newPostText} dispatch={props.dispatch} />
            <div className={s.posts_list}>
                <Post posts={props.store.posts}/>
            </div>
        </div>
    )
}

export default Posts;