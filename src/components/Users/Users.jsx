import React from 'react';
import styles from "./Users.module.css";
import users from "../../img/profileIMG.jpg"
import {NavLink} from "react-router-dom";



let Users = (props) => {
    let pagesCount = Math.ceil(props.totalUsersCount / props.pageSize);
    let pages = [];
    for (let i = 1; i <= pagesCount; i++) {
        pages.push(i);
    }



    return <div>
        <div  >
            {pages.map(p => {
                return <span className={`${styles.page} ${props.currentPage === p && styles.selectedPage}`}
                             onClick={(e) => {
                                 props.onPageChanged(p);
                             }}>{p}</span>
            })}

            <div className={styles.box1} href="#">test</div>
        </div>
        {
            props.users.map(u => <div key={u.id}>
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

                            export default Users;