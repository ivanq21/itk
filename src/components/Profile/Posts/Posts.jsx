import React from 'react';
import Post from './Post/Post'
import s from './Posts.module.scss'
import PostForm from '../PostForm/PostForm';

const Posts = (props) => {
    console.log(props)
    return(
        <div className={s.my_posts}>
            <h2>My posts</h2>
           <PostForm />
            <div className={s.posts_list}>
                <Post posts={props.posts}/>
            </div>
        </div>
    )
}

export default Posts;