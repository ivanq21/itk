import React from 'react';
import Post from './Post/Post'
import s from './Posts.module.scss'
import PostForm from '../PostForm/PostForm';

const Posts = (props) => {
    return(
        <div className={s.my_posts}>
            <h2>My posts</h2>
           <PostForm newPostText={props.newPostText} dispatch={props.dispatch} />
            <div className={s.posts_list}>
                <Post posts={props.posts}/>
            </div>
        </div>
    )
}

export default Posts;