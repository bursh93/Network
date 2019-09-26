import React from 'react';
import Head from "./head";

import {connect} from "react-redux";
import {AuthMeThunkCreator, } from "../../redux/Reduser/AuthMeRedusers";






class HeaderContainer extends React.Component{
    componentDidMount() {
       this.props.AuthMeThunkCreator()
    }
    render() {

        return <>
                <Head {...this.props}/>
            </>
    }
}
let MapStateToProps=(state)=> {
    return {
        login: state.AuthMe.login,
        userId: state.AuthMe.userId,
        email: state.AuthMe.email,
        isAuth:state.AuthMe.isAuth,
    }
}


let MapDispatchToProps=(dispatch)=>{
    return {

        AuthMeThunkCreator: (id,email,login) => {
            dispatch(AuthMeThunkCreator(id,email,login))
        }
    }
}


export default connect  (MapStateToProps, MapDispatchToProps) (HeaderContainer);


