import React from 'react';
import Preloader from '../Common/Preloader/Preloader';

const ProfileInfo = (props) => {
    if(!props.profile){
        return <Preloader />
    }
    return(
    <div className="profile">
        <div className="big-img">
        <img src={props.profile.photos.large} alt=""/>
        </div> 
        <div className="right">
        <img src={props.profile.photos.large} alt=""/>
            <div className="info">
                <div className="name">{props.profile.fullName}</div>
                <div>Статуc: {props.profile.lookingForAJob ? 'Ищу работу' : 'Работаю'}  </div>
                <p>Date of Birth: 26 july</p>
                <p>City: Moskow</p>
            </div>
        </div>
    </div>
   )
}

export default ProfileInfo;