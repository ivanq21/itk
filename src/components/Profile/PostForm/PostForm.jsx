import React from 'react';
import s from './PostForm.module.scss';

const PostForm = (props) => {
  
    let newPostEl = React.createRef();
    let addPost = () => {
        // props.addPost();
        props.dispatch({type: 'ADD-POST'})
    }

    let changeText = () => {
        debugger;
        let text = newPostEl.current.value;
        // props.updateNewPostText(text);
        props.dispatch({type: 'UPDATE-NEW-POST-TEXT', newTexts: text})
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