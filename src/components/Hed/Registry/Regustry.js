
import React from "react";
import "./Registry.css";
import $ from "jquery";
import {Field, reduxForm} from "redux-form";
import {Input} from "../../zPlagins/FormsControl/FormsControle";
import {required} from "../../../Validation/Validation";


$(document).ready(function () {

    $('#window').on('click', function() {

        $('#modalForm').css({'display':'block'});
        $('#filter').css({'display':'block'});

    })
    $('#filter').dblclick( function() {

        $('#modalForm').css({'display':'none'});


    })

});

const Registry=()=> {

            const onSubmit=(formData)=>{
        console.log(formData)
    }


            return (<div>
                <button id="window">Регистрация</button>
                <div id="filter">
                <div id="modalForm">
                        <LoginReduxForm onSubmit={onSubmit} />
                </div>
                </div>
            </div>)

};
const LoginForm=(props)=> {
    return (
    <form  onSubmit={props.handleSubmit}>
        <h1 title="Форма регистрации на сайте">Регистрация</h1>
        <div className="group">
            <label htmlFor="">Имя пользователя:</label>
            <Field  placeholder={"логин"}   name={"login"} component={Input}
                    validate={[required]}
            />
        </div>
        <div className="group">
            <label htmlFor="">Пароль:</label>
            <Field   placeholder={"пароль"}  name={"password"}   component={Input} type="password"
                     validate={[required]}
            />
        </div>
        <div> <Field type="checkbox"  component={'input'} name={"RememberMe"} /> запомнить!  </div>
        <div className="group">
            <center>
                <button>Регистрация</button>
            </center>
        </div>
    </form>
    )
}


const LoginReduxForm= reduxForm({form: 'login'}) (LoginForm)




export default Registry