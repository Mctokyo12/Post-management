import axios from 'axios';
import React, { useState } from 'react';


const PostForm = ({user,setpostUpdate}) => {
    const [content , setcontent] = useState("");
    const handleSubmit = async ()=>{
        try {
            const {data} = await axios.post(`http://localhost:5000/post` , 
                {
                    message: content,
                    auth: user.auth
                },
                {
                    headers:{
                        Authorization: `Bearer ${user.token}`,
                    }
                }
           )
           console.log(data);
           setpostUpdate(true);
           
        } catch (error) {
            console.log(error);
            
        }
    }


    return (
        <form action="" onSubmit={handleSubmit} className=''>
            <textarea class="" cols={3} placeholder='Quoi de neuf' onChange={(e)=>{setcontent(e.target.value)}}></textarea>
            <button type="submit" class="btn btn-primary">Submit</button>
        </form>
    );
};

export default PostForm;