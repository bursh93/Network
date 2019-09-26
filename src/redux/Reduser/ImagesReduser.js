
const SEND_IMG = 'SEND_IMG';

let initialState = {

    images: [
        'http://topcitaty.ru/wp-content/uploads/2019/01/%D0%B3%D0%BE%D1%80%D1%8B-770x450.jpg ',
        ' https://bit.ua/wp-content/uploads/2017/12/5a2586ab3339b038248b45ab-1136-852.png',
        ' https://bit.ua/wp-content/uploads/2017/12/5a25a5b93339b009018b4642-960-720.png',
        ' https://o-planete.ru/wp-content/uploads/2013/10/%D0%B3%D0%BE%D1%80%D1%8B-.jpg',
    ],
    images2: [
        'https://images.aif.ru/011/938/71c8b30142a321f2696bbf49a635d1c2.jpg ',
        ' https://upload.wikimedia.org/wikipedia/commons/5/5f/Evening_sea.jpg',
        'https://kubnews.ru/upload/iblock/41c/41cae4802174d20d5a9190803a061d65.jpg',
        ' https://интересное.ru.com/wp-content/uploads/2016/12/Interesnye-fakty-o-CHernom-more-8.jpg',
    ]

}


const ImagesReduser = (state = initialState, action) => {
    switch(action.type) {
        case SEND_IMG:
            let body= action.newMessageBody;
            return {
                ...state,
                images: [...state.images,{id:6, img:body}]
            }

        default:
            return state;
    }
}



export const ImagesCreator=(images)=>({type:SEND_IMG, images})


export default ImagesReduser;
