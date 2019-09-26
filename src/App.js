import React from 'react';
import {BrowserRouter, Route} from "react-router-dom";
import "./App.css";
import Menu from "./components/Menu/Menu";
import ProfilePageContainer from "./components/Profile/ProfilePageContainer";
import UsersContainer from "./components/Users/UsersContainer";
import HeaderContainer from "./components/Hed/headContainer";
import Registry from "./components/Hed/Registry/Regustry";
import MyFriends from "./components/MyFriends/MyFriendsContainer";
import FriendsFind from "./components/MyFriends/FriendsFind";
import ContainerMessage from "./components/Message/ContainerMessage";
import NewsContainer from "./components/News/NewsContainer";


const App = () => {
    return (
        <BrowserRouter>
                    <div className="allPosition">
                    <div className="head"><HeaderContainer/></div>
                     <div className="Wrapper">
                    <div className="menu">  <Menu/> </div>
                    <div className="GridRoute">
                    <div>
                            <Route path='/MyPage/:usersParamsID?' render={()=><ProfilePageContainer/>} />
                    </div>
                    <div className="news">
                        <Route path='/News' render={()=><NewsContainer/>} />
                    </div>
                        <div className="Users">
                            <Route path='/Users' render={()=><UsersContainer/>} />
                        </div>
                        <div >
                            <Route path='/login' render={()=><Registry/>} />
                        </div>
                        <div>
                            <Route path='/Message' render={()=><ContainerMessage/>} />
                        </div>
                        <div>
                            <Route path='/Myfriends' render={()=><MyFriends/>} />
                        </div>
                        <div>
                            <Route path='/friends=find' render={()=><FriendsFind/>} />
                        </div>
                    </div>
                </div>
                    </div>
        </BrowserRouter>
    )
};

export default App;
