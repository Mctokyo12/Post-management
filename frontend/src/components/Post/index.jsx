// import axios from 'axios';
import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { deletePosts, dislikePosts, editPosts, likePosts } from '../../actions/post.action';
import { isEmpty } from '../utils';

const Post = ({post,user}) => {
     
    const [showEdit , setshowEdit] = useState(false);
    const [contentEdit , setcontentEdit]= useState("");
    // const [like , setlike] = useState(false);
    const dispatch =  useDispatch();

    const handleSubmit = async (e)=>{
        e.preventDefault();
        const postData = {
            message: contentEdit,
            id: post._id
        }
        dispatch(editPosts(postData))
        setshowEdit(false)       
    }

    const likePost = ()=>{
        if(!post.likes.includes(user.name)){
            const data = {
                userId: user.name,
                id: post._id
            }
            dispatch(likePosts(data))
        }else{
            const data = {
                userId: user.name,
                id: post._id
            }
            dispatch(dislikePosts(data));
        }    
            

        
        
        
        
    }

    return (
        <div className='post mt-3'>
            <div className='post-header post-flex'>
                <h3>{post.auth}</h3>
                <span>publier le  12 janvier 2025</span>
            </div>
            <div className='post-container'>
                <p className={!showEdit ? " ": "hidden"} >{post.message}</p> 
                <form action="" onSubmit={handleSubmit} className={showEdit? "":"hidden"}>
                    <textarea cols={3} placeholder='Quoi de neuf ' defaultValue={post.message} onChange={(e)=>{setcontentEdit(e.target.value)}}> 
                       
                    </textarea>
                    <button type="submit" className="btn btn-primary">Valide l'edition</button>
                </form>    
            </div>
            <div className='post-action post-flex'>
                <span onClick={likePost}>like {isEmpty(post.likes) ? 0 : post.likes.length}</span>
                {post.auth == user.name && 
                    <div>
                        <span className='btn btn-primary' onClick={()=>{setshowEdit(!showEdit)}}>edit</span>
                        <span className='btn btn-danger' onClick={()=>{dispatch(deletePosts(post._id))}}>delete</span>
                    </div>
                }
            </div>
        </div>
    );
};

export default Post;