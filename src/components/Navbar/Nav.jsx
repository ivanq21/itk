import React from 'react';
import s from './Nav.module.scss'
import Friends from './Friends/Friends'
import NavLinks from './NavLinks/NavLinks';

const Nav = (props) => {
    console.log(props);
    return(
        <div className={s.sitebar}>
            <NavLinks navbar={props.siteBar.navbar} />
            {/* <Friends and build websitesnds friends={props.siteBar.friends} /> */}
        </div>
    )
 
}
export default Nav;