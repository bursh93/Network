import React from "react";
import {connect} from "react-redux";
import {
    addNewsActionCreator,
    getProfileThunkCreator, getUsersStatusThunkCreator, UpdateUsersStatusThunkCreator
} from "../../redux/Reduser/MyPageRedusers";
import MyPage from "./MyPage";

import { withRouter} from "react-router-dom";
import {MyFriendsAPIThunk,} from "../../redux/Reduser/UsersReduser";
import {WitchAuthRedirect} from "../../Hoc/HocRedirect";
import {compose} from "redux";




class MyPageContainer extends React.Component {





    componentDidMount(currentPage) {
        this.props.MyFriendsAPIThunk(currentPage);
        let userId = this.props.match.params.usersParamsID;// ДОСТАЕМ КОНКРЕТНЫЙ ID
        if (!userId) userId = 1300;
        this.props.getUsersStatus(userId);
        this.props.getUsersProfile(userId);
    }




    render() {
        return <>
            <MyPage {...this.props}  UpdateUsersStatus={this.props.UpdateUsersStatus} />
        </>
    }
}




const MapStateToProps = (state) => {
    return {
        PostMass: state.MyPage.PostMass,
        PostValue: state.MyPage.PostValue,
        profile: state.MyPage.profile,
        users: state.UsersPage.users,
        currentPage: state.UsersPage.currentPage,
        isAuth:state.AuthMe.isAuth,
        status:state.MyPage.status,
        images:state.ImagesPage.images,


    }
}
const MapDispatchToProps = (dispatch) => {
    return {

        AddPost: (newMessageBody) => dispatch(addNewsActionCreator(newMessageBody)),

        getUsersProfile:(userId)=>{
            dispatch(getProfileThunkCreator(userId))
        },
        MyFriendsAPIThunk:(currentPage)=>{
            dispatch(MyFriendsAPIThunk(currentPage))
        },
        getUsersStatus:(userId)=>{
            dispatch(getUsersStatusThunkCreator(userId))
        },
        UpdateUsersStatus:(status)=>{
            dispatch(UpdateUsersStatusThunkCreator(status))
        },
    }
}


// let AuthRedirectComponent=WitchAuthRedirect(MyPageContainer);
// let WitchRouteUrlDataContainerComponent = withRouter(AuthRedirectComponent);
// const ProfilePageContainer = connect(MapStateToProps, MapDispatchToProps)(WitchRouteUrlDataContainerComponent);
// export default ProfilePageContainer;


export default compose (
    connect(MapStateToProps, MapDispatchToProps),
    withRouter,
    // WitchAuthRedirect,
     )
(MyPageContainer);

