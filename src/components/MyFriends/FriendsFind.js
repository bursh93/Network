import React from "react";
import ilya from "../../img/ilya.jpg"
import style from "./FriendsFind.module.css";



class FriendsFind extends React.Component {


    render() {

        return <div className={style.Grid}>


            <div><img src={ilya} alt=""/></div>
            <div><img src={ilya} alt=""/></div>
            <div><img src={ilya} alt=""/></div>
            <div><img src={ilya} alt=""/></div>
            <div><img src={ilya} alt=""/></div>
            <div><img src={ilya} alt=""/></div>
            <div><img src={ilya} alt=""/></div>
            <div><img src={ilya} alt=""/></div>
            <div><img src={ilya} alt=""/></div>


        </div>



    }
}

export default FriendsFind;