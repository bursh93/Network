import {applyMiddleware, combineReducers, createStore} from "redux";
import MyPageReduser from "../Reduser/MyPageRedusers";
import UsersReduser  from "../Reduser/UsersReduser";
import AuthMeRedusers from "../Reduser/AuthMeRedusers";
import thunkMiddleware from "redux-thunk"
import { reducer as formReducer } from 'redux-form'
import MessageReduser from "../Reduser/MessageReduser";
import ImagesReduser from "../Reduser/ImagesReduser";

let reducers= combineReducers({
    MyPage:MyPageReduser,
    UsersPage:UsersReduser,
    AuthMe:AuthMeRedusers,
    MessagePage:MessageReduser,
    ImagesPage:ImagesReduser,
    form: formReducer,
});
let store =createStore(reducers,applyMiddleware(thunkMiddleware));
window.store=store;




export default store;