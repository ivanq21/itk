import React from 'react';
import Post from './Post/Post'
import s from './Posts.module.scss'

const Posts = (props) => {
    let newPostEl = React.createRef();
    let onAddPost = () => {
        props.addPost();
    }
    let onChangeText = () => {
        let text = newPostEl.current.value;
        props.updatePostText(text)
    }
    return(
        <div className={s.my_posts}>
            <h2>My posts</h2>
           <div className={s.post_form}>
                <textarea
                  onChange={ onChangeText }
                  ref={newPostEl} 
                  value={props.newPostText}/>
                <button type="submit" onClick={ onAddPost }>Send</button>
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