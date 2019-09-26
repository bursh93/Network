import React from "react";
import Message from "./Message";
import {connect} from "react-redux";
import {sendMessageCreator} from "../../redux/Reduser/MessageReduser";


class ContainerMessage extends React.Component {


    render() {
        return <>
            <Message sendMessage={this.props.sendMessage} messages={this.props.messages} />
            </>

    }
}

let mapStateToProps = (state) => {
    return {
        messages: state.MessagePage.messages,


    }
}


let mapDispatchToProps = (dispatch) => {
    return {

        sendMessage: (newMessageBody) => {
            dispatch(sendMessageCreator(newMessageBody))
        },

    }
}





export default connect (mapStateToProps, mapDispatchToProps)(ContainerMessage);