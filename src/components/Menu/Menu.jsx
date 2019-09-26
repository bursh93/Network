import React from 'react';
import style from "./menu.module.css";
import {NavLink} from "react-router-dom";


const Menu = () => {
    return (
        <div className={style.menu}>


            <div>
                <NavLink to="/MyPage"> Моя страница</NavLink>
            </div>
            <div>
                <NavLink to="/News"> новости</NavLink>
            </div>
            <div>
                <NavLink to="/Users">   Users</NavLink>
            </div>
            <div>
                <NavLink to="/Myfriends">  Друзья</NavLink>
            </div>
            <div>
                <NavLink to="/Message">  Message</NavLink>
            </div>

        </div>
    )

}

export default Menu;