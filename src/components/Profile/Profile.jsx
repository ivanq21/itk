import React from 'react';
import Posts from './Posts/Posts';
import ProfileInfo from './ProfileInfo/ProfileInfo';

const Profile = (props) => {
    return(
    <div className="profile">
        <ProfileInfo />
        <Posts dispatch={props.dispatch}  newPostText={props.profile.newPostText} posts={props.profile.posts}/>
    </div>
   )
}

export default Profile;