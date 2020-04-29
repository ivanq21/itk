import React from 'react';
import s from './PostForm.module.scss';

const PostForm = (props) => {
   console.log(props)
    let newPost = React.createRef();
    let addPost = () => {
        props.addPost();
    }
    let onPostChange = () => {
        let text = newPost.current.value;
        props.updateNewPostText(text);
    }

    return(
        <div>
            <form onSubmit={e => e.preventDefault()} className={s.post_form}>
                <textarea onChange={ onPostChange } ref={newPost} value={props.newPostText} />
                <button onClick={ addPost } type="submit">Send</button>
            </form>
        </div>
    )
    
}

export default PostForm;