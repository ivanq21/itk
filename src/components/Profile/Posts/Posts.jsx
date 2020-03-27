import React from 'react';
import Post from './Post/Post'
import s from './Posts.module.scss'
import PostForm from '../PostForm/PostForm';

const Posts = (props) => {
    return(
        <div className={s.my_posts}>
            <h2>My posts</h2>
           <PostForm />
            <div className={s.posts_list}>
                {props.posts.map((post) => {
                    return <Post title={post.title} like={post.like} key={post.id}/>
                })}
                
            </div>
        </div>
    )
}

export default Posts;