import React from 'react';
import Posts from './Posts/Posts';
import ProfileInfo from './ProfileInfo/ProfileInfo';

const Profile = (props) => {
    console.log(props);
    return(
    <div className="profile">
        <ProfileInfo />
        <Posts dispatch={props.dispatch} store={props.profile}/>
    </div>
   )
}

export default Profile;