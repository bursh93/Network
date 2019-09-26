import React from "react";
import style from "./Status.module.css";

class StatusProfile extends React.Component {

    state = {
        editMode: false,
        status:this.props.status
    }

    activeEditMode = () => {
        this.setState({
            editMode: true
        })
    }

    DeleteActiveEditMode = () => {
        this.setState({
            editMode: false
        })
        this.props.UpdateUsersStatus(this.state.status);
    }


    componentDidUpdate(prevProps, prevStatus){

        if(prevProps.status !==this.props.status){
            this.setState( {
                status: this.props.status
            })
        }

    }





    onStatusChange=(e)=> {
        this.setState({
            status: e.currentTarget.value
        });
    };





    render() {
        return <>
            {!this.state.editMode &&
            <div onClick={this.activeEditMode}>
                <span className={style.SpanStatus}>{this.props.status || "---"}</span>
            </div>
            }

            {this.state.editMode &&
            <div className={style.InputStatus1}>
                <input
                       onChange={this.onStatusChange}
                       autoFocus={true} onBlur={this.DeleteActiveEditMode}
                       value={this.state.status}
                />
                <div>
                    <button>
                        сохранить
                    </button>
                </div>
            </div>
            }
        </>
    }
}


export default StatusProfile;