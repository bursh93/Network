

import React from "react"
import {NavLink} from "react-router-dom";
import users from "../../img/profileIMG.jpg";
import styles from "../Users/Users.module.css";






const MyFriends=(props)=> {

    return <div>

        {   props.users.map(u => <div key={u.id}>
                <span>
                    <div>
                        <NavLink to={'/MyPage/' + u.id}>
                        <img src={u.photos.small != null ? u.photos.small : users}
                             className={styles.userPhoto}/>
                        </NavLink>
                    </div>
                    <div>
                        {u.followed
                            ? <button
                                onClick={() => {
                                    props.unfollowThunk(u);

                                }}>
                                Unfollow</button>
                            : <button
                                onClick={() => {
                                    props.followThunk(u);
                                }}>
                                Follow</button>}

                            </div>
                            </span>
                <span>
                            <span>
                            <div>{u.name}</div>
                            <div>{u.status}</div>
                            </span>
                            </span>
            </div>)
        }
    </div>
}





export default MyFriends;