import * as axios from "axios";





const instance=axios.create({
    withCredentials:true,
    baseURL: `https://social-network.samuraijs.com/api/1.0/`,
    headers: {
        "API-KEY":"87d22663-8ffc-4702-aed0-c82824291ae9"
    }
})
export const getUsersAPI=(currentPage=1, pageSize=10)=> { // СОЗДАЛИ ФУНКЦИЮ КОТОРАЯ ПОЛУЧАЕТ ПАРАМЕТРЫ ГДЕ ЕЕ ВЫЗЫВАЮТ
    return instance.get(`users?page=${currentPage}&count=${pageSize}`).then(response=>{ return response.data}) // И ВОЗВРАЩАЕМ
    // ДАННЫЕ КОТОРЫЕ ЗАПРОСИЛИ ЧЕРЕЗ GET ЗАПРОС CURRENTPAGE  И PAGESIZE  ПОЛУЧИЛИ из state
};
export const MyFriendsAPI=(currentPage=1)=> {
    return instance.get(`users?page=${currentPage}&count=6`).then(response=>{ return response.data})

};
export const ProfileAPI= {
    getProfileUsersAPI(userId){
        return  instance.get(`profile/`+userId )
    },
    getUsersStatus(userId){
        return  instance.get(`profile/status/`+userId )
    },
    UpdateStatus(status){
        return  instance.put(`profile/status/`, {status: status} )
    }
}



export const getFollowAPI= {
    FollowDelete(u)
    {
        return instance.delete(`follow/${u.id}`)
    },
    FollowPost(u)
    {
        return instance.post(`follow/${u.id}`)
    }
}


export const getAuthMeAPI= {
    me()
    {
        return instance.get(`auth/me/`)
    },
    login()
    {
        return instance.post(`auth/login/`)
    },

}
