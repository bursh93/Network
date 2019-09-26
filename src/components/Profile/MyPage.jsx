import React from "react";
import style from "./profile.module.css";
import Preloader from "../zPlagins/Prelodar/Preloader";
import {NavLink} from "react-router-dom";
import profile from "../../img/profileIMG.jpg";
import styles from "../Users/Users.module.css";
import StatusProfile from "../StatusProfile/StatusProfile";
import InformationProfile from "../InformationProfile/InformationProfile";
import {Field, reduxForm} from "redux-form";
import {maxLengthCreator11, required} from "../../Validation/Validation";
import {Textarea} from "../zPlagins/FormsControl/FormsControle";
import Slider from "../zPlagins/slider";


const MyPosts = (props) => {
    return (
        <div className={style.DivUnderPost}>
            <div className={style.Posts}>
                {props.message}
            </div>

        </div>
    )
}




const maxLength11=maxLengthCreator11(11);

const PostForm=(props)=> {
    return (
        <div>
            <form className={style.FormPost} onSubmit={props.handleSubmit}>
                <div>
                    <Field  placeholder={"что нового?"}   name={"NewsPost"} component={Textarea}
                            validate={[required, maxLength11]}/>
                </div>
                <button> отправить сообщение </button>
            </form>
        </div>
    )
}
const AddPostFormRedux= reduxForm({form: 'AddPost'}) (PostForm)




const MyPage = (props) => {
    if (!props.profile) {
        return <Preloader/>
    }
    let AddPosts = (values) => {
        props.AddPost(values.NewsPost);
    }

    let PostsElement = props.PostMass.map(posts => <MyPosts message={posts.message}/>)
    return (
        <div className={style.profile}>

            {/* Аватарка/изменение к ней/БЛОК1*/}
            <div className={style.GridBlock_1_3_5}>
                <div className={style.Block1}>
                    <div className={style.Prosto}>
                        <div className={style.AvaReleative}>
                            <img src={props.profile.photos.large != null ? props.profile.photos.large : profile}
                                 className={style.ilyaImg}/>
                            <hr/>
                            <NavLink>  <ul className={style.Staticky}> добавить эффекты</ul> </NavLink>
                            <NavLink>  <ul> имзенить аватарку</ul> </NavLink>
                        </div>
                        <button className={style.buttonFotoChange}> change</button>
                        <button className={style.buttonChange2}> ...</button>
                        <p>профиль закрыт настройками приватности</p> <NavLink to="/Users">изменить</NavLink>
                    </div>
                </div>

                {/* ID Пользователя/блок3/*/}
                <div className={style.Block3}>
                    <div className={style.Prosto}>
                        мой номер >>{props.profile.userId}
                    </div>
                </div>

                {/* /APIFriends/блок5*/}
                <div className={style.Block5}>
                    <div className={style.FriendsGrid}>
                        <div className={style.FriendHeadersDiv}>friends</div>
                        <div className={style.FriendHeadersDiv}><NavLink>update</NavLink></div>

                        { props.users.map(u => <div key={u.id}>
                <span>
                    <div className={style.FriendsPage}>
                        <NavLink to={'/MyPage/' + u.id}>
                        <img src={u.photos.small != null ? u.photos.small : profile}
                             className={styles.userPhoto}/>
                      <div>{u.name}</div>
                        </NavLink>
                    </div>
                </span>
                        </div>)}
                    </div>
                    <hr/>
                </div>

            </div>


            <div className={style.Grid_2_4_6}>
                {/*Настройки/статус/информация/блок2*/}
                <div className={style.Block2}>
                    <div className={style.Prosto}>
                        <span className={style.fullName}>  {props.profile.fullName} </span>
                        <div className={style.status}>
                            <StatusProfile className={style.status} status={props.status}   //*<<=====STATUS  */
                                           UpdateUsersStatus={props.UpdateUsersStatus} />
                        </div>
                        <hr/>
                        <div>
                            <InformationProfile/>
                        </div>
                        <hr/>
                        <div className={style.blokFotoVideo}>
                            <div>
                                <span>84</span>
                                <div>friends</div>
                            </div>
                            <div>
                                <span> 54 </span>
                                <div>foto</div>
                            </div>
                            <div>
                                <span> 54 </span>
                                <div>video</div>
                            </div>
                            <div>
                                <span> 54 </span>
                                <div>img</div>
                            </div>
                        </div>
                        <div className={style.FotoSlider}>
                           <Slider images={props.images}/> {/*<==================== /СЛАЙДЕР*/}
                        </div>
                    </div>
                </div>

                {/* /Создаем Пост/блок4*/}

                <div className={style.Block4}>
                    <AddPostFormRedux onSubmit={AddPosts}/>
                </div>

                {/* Стена/Посты/блок6/*/}
                <div className={style.Block6}>
                    <div className={style.wrapperPosts}>
                        <div>  {PostsElement}</div>
                    </div>
                </div>

            </div>


         </div>
    )
};








export default MyPage;







