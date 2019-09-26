
const SEND_MESSAGE = 'SEND_MESSAGE';
const SET_WEATHER = 'SET_WEATHER';

let initialState = {
    messages: [
    ],
    temp: 0,
    city: 0,

}
const usersReducer = (state = initialState, action) => {
    switch(action.type) {
        case SEND_MESSAGE:
            let body= action.newMessageBody;
            return {
                ...state,
                messages: [...state.messages,{id:6, message:body}]
            }

        case SET_WEATHER: {
            return { ...state, ...action.data }
        }
        default:
            return state;
    }
}
export const sendMessageCreator=(newMessageBody)=>({type:SEND_MESSAGE, newMessageBody})
export const setDataAC=(temp,city)=>({type:SET_WEATHER, data:temp,city })


export default usersReducer;
