import React from 'react';
import s from './Post.module.scss';

const Post = ({text, like}) => {
    return(
        <div>
            <div className={s.post}>
                <img width="40" src="https://img.icons8.com/plasticine/2x/user.png" alt=""/>
                <div className="text">{text}</div>
                <span className={s.like}>Like: {like}</span>
            </div>
        </div>
    )
}

export default Post;