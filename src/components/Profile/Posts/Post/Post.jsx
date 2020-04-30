import React from 'react';
import s from './Post.module.scss';

const Post = ({posts}) => {
    return(
        <div>
        {posts.map((prop) => {
            return (
                <div className={s.post}>
                <img width="40" src="https://img.icons8.com/plasticine/2x/user.png" alt=""/>
                <div className="id">{prop.id}. <span>__</span></div>
                    <div className="text"> {prop.text}</div>
                    <span className={s.like}>Like: {prop.likesCount}</span>
            </div>
            )
        })}
       
        </div>
    )
}

export default Post;