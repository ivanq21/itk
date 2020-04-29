import React from 'react';
import s from './ProfileInfo.module.scss';

const ProfileInfo = () => {
    return(
        <>
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
        </>
    )
    
}

export default ProfileInfo