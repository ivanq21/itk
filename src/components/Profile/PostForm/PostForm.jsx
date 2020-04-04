import React from 'react';
import s from './PostForm.module.scss';
import { addPostAction, updatePostTextareaAction } from '../../../redux/state';

const PostForm = (props) => {
  
    let newPostEl = React.createRef();
    let addPost = () => {
        props.dispatch(addPostAction())
    }

    let changeText = () => {
        let text = newPostEl.current.value;
        props.dispatch(updatePostTextareaAction(text))
    }
    return(
        <div>
            <div className={s.post_form}>
                <textarea
                  onChange={ changeText }
                  ref={newPostEl} 
                  value={props.newPostText}/>
                <button type="submit" onClick={ addPost }>Send</button>
            </div>
        </div>
    )
    
}

export default PostForm