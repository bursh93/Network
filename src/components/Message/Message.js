

import React from "react"
import {Field, reduxForm} from "redux-form";
import style from "./message.module.css";
import {Textarea} from "../zPlagins/FormsControl/FormsControle";
import {maxLengthCreator55, required} from "../../Validation/Validation";








const Message=(props)=> {
    let AddMessage=(values)=> {
        props.sendMessage(values.NewsMessage);
    }
    return (
        <div className={style.GridMessage}>
            <div>
          <AddMessageFormRedux onSubmit={AddMessage}/>
            </div>
            <hr/>
          <div>
            { props.messages.map(m => <div key={m.id}>
                <div>{m.message}</div>
            </div>)}

          </div>
        </div>
    )
}

const maxLength55=maxLengthCreator55(55);

const MessageForm=(props)=> {
    return (
        <div>
            <form className={style.FormMessage} onSubmit={props.handleSubmit}>
                <div>
                    <Field  placeholder={""}   name={"NewsMessage"} component={Textarea}
                            validate={[required, maxLength55]}
                    />
                </div>
                <button> отправить сообщение </button>
            </form>
        </div>
    )
}
const AddMessageFormRedux= reduxForm({form: 'AddMessage'}) (MessageForm)



export default Message;