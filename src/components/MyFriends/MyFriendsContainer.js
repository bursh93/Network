import React from "react";
import style from "./MyFriends.module.css";
import {NavLink} from "react-router-dom";
import {followThunkCreator, getUsersThunkCreator, unfollowThunkCreator} from "../../redux/Reduser/UsersReduser";
import {connect} from "react-redux";
import MyFriends from "./MyFriends";


class MyFriendsContainer extends React.Component {

    componentDidMount(currentPage, pageSize) {
        this.props.getUsersThunkCreator(this.props.currentPage, this.props.pageSize);
    }


    render() {
        return <>
            <div className={style.Grid}>
                <div className={style.block1}>

                    <MyFriends {...this.props}/>

                </div>

                <div className={style.block2}>

                    <div className={style.box1}>
                        <div>
                    <NavLink to="/friends=find">поиск друзей</NavLink></div>
                    </div>

                    <div className={style.box2}>
                        второй блок в этом блоке
                    </div>

                </div>


            </div>
        </>
    }
}


let mapStateToProps = (state) => {
    return {
        users: state.UsersPage.users,
        pageSize: state.UsersPage.pageSize,
        totalUsersCount: state.UsersPage.totalUsersCount,
        currentPage: state.UsersPage.currentPage,
        isFetching: state.UsersPage.isFetching,
        followingInProgress: state.UsersPage.followingInProgress,

    }
}


let mapDispatchToProps = (dispatch) => {
    return {
        getUsersThunkCreator: (currentPage, pageSize) => {
            dispatch(getUsersThunkCreator(currentPage, pageSize))
        },
        followThunk: (u) => {
            dispatch(followThunkCreator(u))
        },
        unfollowThunk: (u) => {
            dispatch(unfollowThunkCreator(u))
        },
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(MyFriendsContainer);






