import React from 'react';
import s from './Nav.module.scss'
const Nav = () => {
    return(
    <nav className={s.nav}>
        <a className={s.item} href="">Profile</a>
        <a className={s.item} href="">Messages</a>
        <a className={s.item} href="">News</a>
        <a className={s.item} href="">Music</a>
        <a className={s.item} href="">Settings</a>
    </nav>
    )
 
}
export default Nav;