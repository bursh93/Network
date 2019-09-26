import React from 'react';


import  "./Style.css";
import $ from "jquery";
import Registry from "./Registry/Regustry";
import {NavLink} from "react-router-dom";


$(document).ready(function () {

    $('.menu-btn1').on('click', function(e) {
        e.preventDefault();
        $('.menu1').toggleClass('menu_active1');
        $('.content1').toggleClass('content_active1');
    })
    $('.menu-btn').on('click', function() {

        $(this).toggleClass('menu-btn_active');
    });
        $('#google').on('click', function () {
            $('.blockMenu1').toggleClass('blockMenu2')
            $('#google').toggleClass('bkFon')
        })

})




const Head=(props)=> {
    return (
      <div className="Masha">
          <div className="wrapper1">
              <div className="menu1">
                  <div className="menu-btn1">
                      <a href="#" className="menu-btn">
                          <span></span>
                      </a>
                  </div>
                  <nav className="menu-list1">
                      <a href="#">Главная</a>
                      <a href="#">Новости</a>
                      <a href="#">Контакты</a>
                      <a href="#">Портфолио</a>
                  </nav>
              </div>
          </div>
                <div className="Registry">
                    {props.isAuth ?
                         props.login
                         :
                        <Registry/>
                    }
                        <div> </div>
                    {props.isAuth ?
                        props.email
                        :
                        null
                    }

                </div>

                <div id="google"> музыка
                    <li className="blockMenu1">
                        <ul>
                            <li>  <NavLink to="/users">users</NavLink></li>
                            <li>  <NavLink to="/MyPage">MyPage</NavLink></li>
                            <li>  <NavLink to="/Users">Users</NavLink></li>
                        </ul>
                    </li>
                </div>



      </div>
    )

};

export default Head;