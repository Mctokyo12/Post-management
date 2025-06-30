import axios from "axios";

export const GET_POSTS = "GET_POSTS";
export const ADD_POSTS = "ADD_POSTS";
export const EDIT_POSTS = "EDIT_POSTS";
export const DELETE_POSTS = "DELETE_POSTS";
export const LIKE_POSTS = "LIKE_POSTS";
export const DISLIKE_POSTS = "DISLIKE_POSTS";




export const getPosts = ()=>{
    return (dispatch)=>{
        return axios.get("http://localhost:5000/post").then((res)=>{
            dispatch({ type: GET_POSTS , payload: res.data});
        })
    }
}

export const addPosts = (data)=>{
    return (dispatch)=>{
        return axios.post("http://localhost:5000/post" , data).then((res)=>{
            dispatch({ type: ADD_POSTS , payload: data});
        })
    }
}

export const editPosts = (data)=>{
    return (dispatch)=>{
        return axios.put(`http://localhost:5000/post/${data.id}` , data).then((res)=>{
            dispatch({ type: EDIT_POSTS , payload: data});
        })
    }
}

export const deletePosts = (postId)=>{
    return (dispatch)=>{
        return axios.delete(`http://localhost:5000/post/${postId}`).then((res)=>{
            dispatch({ type:DELETE_POSTS , payload: postId});
        })
    }
}

export const likePosts = (data)=>{
    return (dispatch)=>{
        return axios.patch(`http://localhost:5000/post/like/${data.id}`,data).then((res)=>{
            dispatch({type:LIKE_POSTS , payload: data});
        })
    }
}

export const dislikePosts = (data)=>{
    return (dispatch)=>{
        return axios.patch(`http://localhost:5000/post/dislike/${data.id}`,data).then((res)=>{
            dispatch({type:DISLIKE_POSTS , payload: data});
        })
    }
}

