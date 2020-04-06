import React from 'react';
import PostContainer from './Posts/PostContainer';

const Profile = (props) => {
    console.log(props)
    return(
    <div className="profile">
        <div className="big-img">
        <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcRFh0PSl9KGkWW7_D3JG3hmRX97IPTpnTbirePSR_meUGeFgHPT" alt=""/>
        </div> 
        <div className="right">
            <img src="https://img.icons8.com/plasticine/2x/user.png"  alt=""/>
            <div className="info">
                <div className="name">Ivan K.</div>
                <p>Date of Birth: 26 july</p>
                <p>City: Moskow</p>
            </div>
        </div>
        {/* <Posts dispatch={props.dispatch} posts={props.profilePage.posts} newPostText={props.profilePage.newPostText} /> */}
        <PostContainer store = {props.store} />

    </div>
   )
}

export default Profile;