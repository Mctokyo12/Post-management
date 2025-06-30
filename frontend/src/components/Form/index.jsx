import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { addPosts, getPosts } from '../../actions/post.action';


const PostForm = ({user}) => {
    const [content , setcontent] = useState("");
    const dispatch = useDispatch();
    const handleSubmit = async (e)=>{
        e.preventDefault();
        const postData = {
            message: content,
            auth: user.name
        }
        await dispatch(addPosts(postData))
        dispatch(getPosts())
        e.target.reset();
        
    }
    

    return (
        <form  action="" onSubmit={handleSubmit} className=''>
            <textarea className="" cols={3} placeholder='Quoi de neuf' onChange={(e)=>{setcontent(e.target.value)}}></textarea>
            <button type="submit" className="btn btn-primary">Submit</button>
        </form>
    );
};

export default PostForm;