import React from 'react';
import Posts from './Posts/Posts';
import ProfileInfo from './ProfileInfo/ProfileInfo';



const Profile = (props) => {
    return(
    <div className="profile">
        <ProfileInfo />
        <Posts addPost={props.addPost} updateNewPostText={props.updateNewPostText} newPostText={props.profile.newPostText} posts={props.profile.posts}/>
    </div>
   )
}

export default Profile;