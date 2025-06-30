import './index.css'
import Navbar from '../../components/Navbar';
// import { useEffect, useState } from 'react';
import Post from '../../components/Post';
import PostForm from '../../components/Form';
import { useSelector } from 'react-redux';
import { isEmpty } from '../../components/utils';

const Home = () => {
    const user = useSelector((state)=>state.userReducer);
    const posts = useSelector ((state)=>state.postReducer);
    isEmpty
    return (
        <>
            <Navbar type={'home'} />
            <div className='home_container'>
                <div className='header-container container_color'>
                    <h1>Bonjour {user.name}</h1>
                </div>
                <div className='create_post_container container_color'>
                  <PostForm user={user} />
                </div>

                <div className='post_container container_color'>
                   {!posts && <div>pas de posts pour l'instants</div> }
                   {!isEmpty(posts) && posts.map((post , index)=>(
                        <Post post={post} user={user}  key={index} />
                   ))}
                </div>
            </div>
        </>
    );
};

export default Home;