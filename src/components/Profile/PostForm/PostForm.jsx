import React from 'react';
import s from './PostForm.module.scss';

const PostForm = () => {
    return(
        <div>
            <form action="" className={s.post_form}>
                <textarea name="" id="" cols="20" rows="10"></textarea>
                <button type="submit">Send</button>
            </form>
        </div>
    )
    
}

export default PostForm