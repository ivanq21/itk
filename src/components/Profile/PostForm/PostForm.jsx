import React from 'react';
import s from './PostForm.module.scss';
import {addPostAC, onPostChangeAC} from '../../../redux/profileReducer';


const PostForm = (props) => {
    console.log(props)
    let newPost = React.createRef();
    let addPost = () => {
        props.dispatch(addPostAC());
    }
    let onPostChange = () => {
        let newPostText = newPost.current.value;
        props.dispatch(onPostChangeAC(newPostText));
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