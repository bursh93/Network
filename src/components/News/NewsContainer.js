import React from "react";
import {connect} from "react-redux";
import News from "./News";









class NewsContainer extends React.Component {






    render() {
        console.log(this.props);
        return <>
            <News
                {...this.props}
            />
        </>
    }
}
let mapStateToProps = (state) => {
    return {

    }
}
let mapDispatchToProps = (dispatch) => {
    return {

    }
}

export default connect(mapStateToProps, mapDispatchToProps)(NewsContainer);












