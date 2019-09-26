import { ProfileAPI} from "../../API/ApiUsers";



const ADD_POST = "ADD-NEWS";
const USERS_PAGE = "USERS_PAGE";
const SET_USERS_STATUS = "SET_USERS_STATUS";

let initialState = {
    profile: null,
    PostMass: [ {id:1, message: 'привет это мой новый пост'}],
    status: '',

};

const MyPageReduser = (state = initialState, action) => {
    switch (action.type) {
        case ADD_POST: {
            let newPosts=
                 action.newPostBody;
            return {
                ...state,
                PostMass: [...state.PostMass,{ message:newPosts}]
            }
        }



        case USERS_PAGE: {
            return {...state, profile: action.profile}  }
        case SET_USERS_STATUS: {
            return {...state, status: action.status}   }


        default:
            return state;
    }
}
export const addNewsActionCreator = (newPostBody) => ({type: ADD_POST,newPostBody});


export const setUsersProfileAC = (profile) => ({type: USERS_PAGE, profile});

export const setUsersStatus = (status) => ({type: SET_USERS_STATUS, status});


export const getProfileThunkCreator = (userId) => {
    return (dispatch) => {
        ProfileAPI.getProfileUsersAPI(userId).then(response => {
            dispatch(setUsersProfileAC(response.data));
        })

    }
};


export const getUsersStatusThunkCreator = (userId) => (dispatch) => {
    ProfileAPI.getUsersStatus(userId).then(response => {
            dispatch(setUsersStatus(response.data));
        })
}



export const UpdateUsersStatusThunkCreator = (status) => (dispatch) => {
    ProfileAPI.UpdateStatus(status)
            .then(response => {
            if (response.data.resultCode == 0) {
            dispatch(setUsersStatus(status));
        }
    })
}

export default MyPageReduser;