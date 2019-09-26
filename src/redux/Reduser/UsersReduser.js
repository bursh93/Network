import {
    getFollowAPI,
    getUsersAPI,
    MyFriendsAPI
} from "../../API/ApiUsers";



const FOLLOW = 'FOLLOW';
const UNFOLLOW = 'UNFOLLOW';
const SET_USERS = 'SET_USERS';
const SET_CURRENT_PAGE = 'SET_CURRENT_PAGE';
const SET_TOTAL_USERS_COUNT = 'SET_TOTAL_USERS_COUNT';
const TOGGLE_IS_FETCHING = 'TOGGLE_IS_FETCHING';


let initialState = {
    users: [ ],
    pageSize: 14,
    totalUsersCount: 0,
    currentPage: 34,
    isFetching: true,
    fake:1,

};
const usersReducer = (state = initialState, action) => {
    switch(action.type) {
        case "FAKE": return{...state, fake:state.fake+1};
        case FOLLOW:
            return {
                ...state,
                users: state.users.map( u =>  {
                    if (u.id === action.userId) {
                        return {...u, followed: true}
                    }
                    return u;
                })
            }
        case UNFOLLOW:
            return {
                ...state,
                users: state.users.map( u =>  {
                    if (u.id === action.userId) {
                        return {...u, followed: false}
                    }
                    return u;
                })
            }
        case SET_USERS: {
            return { ...state, users: action.users }
        }
        case SET_CURRENT_PAGE: {
            return { ...state, currentPage: action.currentPage}
        }
        case SET_TOTAL_USERS_COUNT: {
            return { ...state, totalUsersCount: action.count}
        }
        case TOGGLE_IS_FETCHING: {
            return { ...state, isFetching: action.isFetching}
        }

        default:
            return state;
    }
}

export const FollowAC = (userId) => ({type: FOLLOW, userId })
export const UnFollowAC = (userId) => ({type: UNFOLLOW, userId })
export const setCurrentPageAC = (currentPage) => ({type: SET_CURRENT_PAGE, currentPage })
export const setTotalUsersCountAC = (totalUsersCount) => ({type: SET_TOTAL_USERS_COUNT, count: totalUsersCount })
export const toggleIsFetchingAC = (isFetching)=> ({type:TOGGLE_IS_FETCHING, isFetching})


export const getUsersThunkCreator=(currentPage,pageSize, )=> {
    return (dispatch) => {

        toggleIsFetchingAC(true);
        getUsersAPI(currentPage, pageSize,)

            .then(data => {
                dispatch({type: SET_USERS,
                    users : data.items})



               dispatch(setTotalUsersCountAC(data.totalCount));
                dispatch(toggleIsFetchingAC(false));
                dispatch(setCurrentPageAC(currentPage));
            })
    }
};

export const followThunkCreator=(u)=> {
    return (dispatch) => {
        getFollowAPI.FollowPost(u)
            .then(response => {
                if (response.data.resultCode == 0) {
                   dispatch(FollowAC(u.id))
                }
            })
    }
};

export const unfollowThunkCreator=(u)=> {
    return (dispatch) => {
        getFollowAPI.FollowDelete(u)
            .then(response => {
                if (response.data.resultCode == 0) {
                    dispatch(UnFollowAC(u.id))
                }
            })
    }
};


export const MyFriendsAPIThunk=(currentPage)=> {
    return (dispatch) => {
        MyFriendsAPI(currentPage).then(data => {
            dispatch({type: SET_USERS,
                users : data.items})
        })

    }
};



export default usersReducer;
