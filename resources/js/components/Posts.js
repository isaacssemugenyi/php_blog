import React, { useState, useEffect } from "react";
import Axios from "axios";
import Data from "./Data";
import HomeData from "./HomeData";

const Posts = () => {
    const [ posts, setPosts ] = useState([]);
    const [ loading, isLoading ] = useState(true);

    const fetchPosts = async () => {
        const res = await Axios.get("http://localhost:8000/posts");
        if(res.data.status === 200){
            setPosts(res.data.posts);
            isLoading(false);
        }
    }
    useEffect(()=> {
        fetchPosts();
    }, []);

    const deletePost = async (id) => {
        const res = await Axios.delete(`/addPost/${id}`);
        if(res.data.status === 200){
            fetchPosts();
        }
    }
    return(        
            <div>
                { loading === true ? <h1>Loading....</h1> : null }
                { 
                    window.location.href === window.origin + "/dashboard" ?
                    (<div>
                        {posts.map(posts => (
                            <Data posts = {posts} key={posts.id} deletePost = {deletePost}/>
                        ))}
                    </div>)
                    :
                    <div>
                    {posts.map(posts => (
                            <HomeData posts = {posts} key={posts.id}/>
                        ))}
                    </div>
                }
            </div>
    )
}

export default Posts;