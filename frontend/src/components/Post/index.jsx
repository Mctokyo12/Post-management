import axios from 'axios';
import React, { useState } from 'react';

const Post = ({post,user,setpostUpdate }) => {

    const [showEdit , setshowEdit] = useState(false);
    const [contentEdit , setcontentEdit]= useState("");
    const [like , setlike] = useState(false);

    const handleSubmit = async ()=>{
        try {
            const {data}  = await axios.put(
                `http://localhost:5000/post/${post._id}`,
                {
                    message: contentEdit
                },
                {
                    headers:{
                        Authorization: `Bearer ${user.token}`
                    }
                }   
            )
            setpostUpdate(true);
            console.log(data);
        } catch (error) {
            console.log(error)
        }
    }

    const deletePost = async()=>{
        try {
            const {data} = axios.delete(
                `http://localhost:5000/post/${user._id}`,
                {
                    headers:{
                        Authorization: `Bearer ${user.token}`
                    }
                }
            )
            console.log(data);
            setpostUpdate(true);
            
        } catch (error) {
            console.log(error)
        }
    }

    const likePost = ()=>{

        if(!like){
            const {data} = axios.patch(
                `http://localhost:5000/post/like/${post._id}`,
                {
                    userId: user.name
                },
                {
                    headers:{
                        Authorization: `Bearer ${user.token}`
                    }
                }
            )


            console.log(data);
            setpostUpdate(true);
            setlike(true);

        }else{
            const {data} = axios.patch(
                `http://localhost:5000/post/dislike/${post._id}`,
                {
                    userId: user.name
                },
                {
                    headers:{
                        Authorization: `Bearer ${user.token}`
                    }
                }
            )

            console.log(data);
            setpostUpdate(true);
            setlike(false);
        }
    }

    return (
        <div className='post'>
            <div className='post-header post-flex'>
                <h3>{post.auth}</h3>
                <span>publier le  12 janvier 2025</span>
            </div>
            <div className='post-container'>
                <p className={!showEdit ? " ": "hidden"} >{post.message}</p> 
                <form action="" onSubmit={handleSubmit} className={showEdit? "":"hidden"}>
                    <textarea cols={3} placeholder='Quoi de neuf ' onChange={(e)=>{setcontentEdit(e.target.value)}}></textarea>
                    <button type="submit" className="btn btn-primary">Valide l'edition</button>
                </form>    
            </div>
            <div className='post-action post-flex'>
                <span onClick={likePost}>like {post.likes.length}</span>
                {post.auth == user.name && 
                    <div>
                        <span className='btn btn-primary' onClick={()=>{setshowEdit(true)}}>edit</span>
                        <span className='btn btn-danger' onClick={deletePost}>delete</span>
                    </div>
                }
            </div>
        </div>
    );
};

export default Post;