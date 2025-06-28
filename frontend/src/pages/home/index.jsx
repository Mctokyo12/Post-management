import './index.css'
import Navbar from '../../components/Navbar';
// import { useEffect, useState } from 'react';
import Post from '../../components/Post';
import PostForm from '../../components/Form';

const Home = ({user , posts , setpostUpdate}) => {

    return (
        <>
            <Navbar type={'home'} />
            <div className='home_container'>
                <div className='header-container container_color'>
                    <h1>Bonjour Ronel</h1>
                </div>
                <div className='create_post_container container_color'>
                  <PostForm user={user}  setpostUpdate={setpostUpdate}/>
                </div>

                <div className='post_container container_color'>
                  {!posts && <div>pas de posts pour l'instants</div> }
                   {posts && posts.map((post)=>{
                        <Post post={post} user={user}  key={post._id} setpostUpdate={setpostUpdate}/>
                   })}
                </div>
            </div>
        </>
    );
};

export default Home;