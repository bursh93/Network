import React from 'react';
import {connect} from 'react-redux';
import {
     followThunkCreator, getUsersThunkCreator, unfollowThunkCreator,
} from '../../redux/Reduser/UsersReduser';
import Users from './Users';
import Preloader from "../zPlagins/Prelodar/Preloader";
import {getUserss} from "../../redux/Reduser/UsersSelector";




class UsersContainer extends React.Component {

    componentDidMount() {
        this.props.getUsersThunkCreator(this.props.currentPage, this.props.pageSize);
    }


    onPageChanged = (pageNumber) => {
        this.props.getUsersThunkCreator(pageNumber, this.props.pageSize);
    }

    render() {
        return <>
            {this.props.isFetching ? <Preloader/> :
            <Users  onPageChanged={this.onPageChanged}
                {...this.props}
            /> }
        </>
    }
}

let mapStateToProps = (state) => {
    console.log("State Render")
    return {
        users: getUserss(state),
        pageSize: state.UsersPage.pageSize,
        totalUsersCount: state.UsersPage.totalUsersCount,
        currentPage: state.UsersPage.currentPage,
        isFetching: state.UsersPage.isFetching,
        followingInProgress: state.UsersPage.followingInProgress,

    }
}
let mapDispatchToProps=(dispatch)=> {
    return {
        getUsersThunkCreator:(currentPage, pageSize)=>{
            dispatch(getUsersThunkCreator(currentPage,pageSize))
        },
        followThunk:(u)=>{
            dispatch(followThunkCreator(u))
        },
        unfollowThunk:(u)=>{
            dispatch(unfollowThunkCreator(u))
        },
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(UsersContainer);