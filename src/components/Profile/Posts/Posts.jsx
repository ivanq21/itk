import React from 'react';
import Post from './Post/Post'
import s from './Posts.module.scss'
import PostForm from './PostForm/PostForm';

const Posts = (props) => {
    return(
        <div className={s.my_posts}>
            <h2>My posts</h2>
           <PostForm dispatch={props.dispatch} newPostText={props.newPostText} />
            <div className={s.posts_list}>
                {props.posts.map((post) => {
                    return <Post text={post.text} like={post.like} key={post.id}/>
                })}
                
            </div>
        </div>
    )
}

export default Posts;