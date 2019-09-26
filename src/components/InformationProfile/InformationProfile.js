import React from "react";
import style from "./infromation.module.css";

class InformationProfile extends React.Component {
    state = {
        editMode: false,
    }

    activeEditMode() {
        this.setState({
            editMode: true
        })
    }

    DeleteActiveEditMode() {
        this.setState({
            editMode: false
        })
    }

    render() {
        return <>
            {!this.state.editMode &&
            <div onClick={this.activeEditMode.bind(this)}>
                <div className={style.InformationText}>
                    показать подробную информацию
                </div>
            </div>
            }

            {this.state.editMode &&
            <div className={style.setting}>
                <span onDoubleClick={this.DeleteActiveEditMode.bind(this)}>

                </span>
                <div>
                    <div className={style.setting2}
                         onClick={this.DeleteActiveEditMode.bind(this)}> скрыть подробную информацию
                    </div>
                    <div className={style.information}>
                        <div>
                            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aliquam assumenda, beatae
                            blanditiis distinctio doloribus explicabo ipsum mollitia odit possimus quibusdam,
                            repellendus sunt tempora, totam! Commodi doloremque earum ratione veniam voluptates!
                        </div>

                    </div>
                </div>
            </div>
            }
        </>
    }
}


export default InformationProfile;