import React from 'react';
import PostContainer from './Posts/PostContainer';
import ProfileInfo from './ProfileInfo';

const Profile = (props) => {
    return(
    <div>
        <ProfileInfo profile={props.profile} />
        <PostContainer  />

    </div>
   )
}

export default Profile;