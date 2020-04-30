import React from 'react';
import s from './PostForm.module.scss';

const PostForm = (props) => {
    
    let newPost = React.createRef();
    let onAddPost = () => {
        props.addPost();
    }
    let onPostChange = () => {
        let newPostText = newPost.current.value;
        props.updateNewPostText(newPostText);
    }

    return(
        <div>
            <form onSubmit={e => e.preventDefault()} className={s.post_form}>
                <textarea onChange={ onPostChange } ref={newPost} value={props.newPostText} />
                <button onClick={ onAddPost } type="submit">Send</button>
            </form>
        </div>
    )
    
}

export default PostForm;