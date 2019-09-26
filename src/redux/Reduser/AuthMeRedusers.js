import {getAuthMeAPI, } from "../../API/ApiUsers";



const SET_USERS_DATA="SET_USERS_DATA";
const SET_LOGIN="SET_LOGIN";

let initialState = {
    userId: null,
    email: null,
    login: null,
    isAuth: false,
};



const AuthReduser = (state = initialState, action) => {
    switch(action.type) {
        case SET_USERS_DATA:
            return {
                ...state,
                ...action.data,
                isAuth: true
            }
        case SET_LOGIN:
            return {
                ...state,
                ...action.data,
                isRememberMe: true
            }





        default:
            return state;
    }
}

export const setUserDataAC =(userId,email, login)=>({type:SET_USERS_DATA, data:{userId, email, login}});





export const AuthMeThunkCreator=()=> {
    return (dispatch) => {

        getAuthMeAPI.me()
            .then(response=>{
                if(response.data.resultCode===0) {
                    let  {id, email, login}= response.data.data;
                    dispatch(setUserDataAC (id,email,login));
                }
            })


    }
};






export default AuthReduser;
