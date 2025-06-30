const initialState = localStorage.getItem('user') ? JSON.parse(localStorage.getItem('user')) : {};

export default function userReducer(state=initialState , action){
    
    return  state;
    
}