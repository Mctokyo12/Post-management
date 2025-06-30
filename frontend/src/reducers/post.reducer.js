const initialState = {};
import {ADD_POSTS, DELETE_POSTS, DISLIKE_POSTS, EDIT_POSTS, GET_POSTS, LIKE_POSTS} from '../actions/post.action.js';

export default function postReducer(state=initialState , action){
    switch(action.type){
        case GET_POSTS:
            return action.payload;
        case ADD_POSTS:
            return [action.payload , ...state];
        case EDIT_POSTS:
            return state.map((post)=>{
                if(post._id === action.payload.id){
                    return {
                        ...post,
                        message: action.payload.message,
                    };
                }else return post;
            })
        case DELETE_POSTS:
            return state.filter((post)=>post._id != action.payload)
        case LIKE_POSTS:
            return state.map((post)=>{
                if(post._id === action.payload.id){
                    return {
                        ...post,
                        likes: [...post.likes , action.payload.userId]
                    }
                }else{
                    return post
                }
            })
        case DISLIKE_POSTS:
            return state.map((post)=>{
                if(post._id === action.payload.id){
                    return {
                        ...post,
                        likes: post.likes.filter((id)=>id != action.payload.userId)
                    }
                }else{
                    return post
                }
            })
        default:
            return state;
    }
    
}